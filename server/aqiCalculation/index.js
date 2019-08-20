let fs = require('fs');
let path = require('path');
let targetBreakpointIndex = undefined;
let breakpoints = undefined;
let generalMessages = undefined;
let specificMessages = undefined;
let breakPointfind = require('./simplifyData/breakPointfind');
let messages = require('./simplifyData/messages');
let calculation = require('./simplifyData/calculation');
let datantchangable = require('./simplifyData/datantchangable');

class AQICalculator {
  constructor() {
    breakpoints = JSON.parse(fs.readFileSync(path.join(__dirname, 'range/aqi-breakpoint.json'), 'utf8'));
    generalMessages = JSON.parse(fs.readFileSync(path.join(__dirname, 'range/aqi-message.json'), 'utf8'));
    specificMessages = JSON.parse(fs.readFileSync(path.join(__dirname, 'range/aqi-specific-messages.json'), 'utf8'));
  }

  getAQIResult(pollutantCode, concentration) {
    return new Promise((resolve, reject) => {
      breakPointfind.getConcentrationRangeWithAvgConcentration(pollutantCode, concentration, breakpoints).then((breakpointIndex) => {
        // console.log('here come', breakpointIndex)
        targetBreakpointIndex = breakpointIndex;
        let aqi = calculation.calculateAQI(concentration, targetBreakpointIndex);
        return aqi;
      }, (err) => {
        reject(err);
      }).then((aqi) => {
        let generalMessage = messages.getGeneralMessage(aqi, generalMessages);
        let specificMessage = messages.getSpecificMessage(pollutantCode, aqi, specificMessages);

        let result = {
          pollutant: pollutantCode,
          concentration: concentration,
          aqi: aqi,
          category: generalMessage.category,
          generalMessage: generalMessage.message,
          healthEffectsStatements: specificMessage.healthEffectsStatements,
          guidanceStatement: specificMessage.guidanceStatement
        }
        resolve(result);
      });
    });
  }
}

const AQICalculatorInstance = new AQICalculator();

module.exports = {
  AQICalculator: AQICalculatorInstance,
  PollutantType: datantchangable.POLLUTANT_TYPE
};