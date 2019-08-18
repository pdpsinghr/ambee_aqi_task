let fs = require('fs');
let path = require('path');

let instance = null;
let targetBreakpointIndex = undefined;
let breakpoints = undefined;
let generalMessages = undefined;
let specificMessages = undefined;


let pollutantBreakpointFinder = require('./simplifyData/breakPointfind');
let messageService = require('./simplifyData/messages');
let calculator = require('./simplifyData/calculation');
let constants = require('./simplifyData/datantchangable');

class AQICalculator {
  constructor() {
    breakpoints = JSON.parse(fs.readFileSync(path.join(__dirname, 'range/aqi-breakpoint.json'), 'utf8'));
    generalMessages = JSON.parse(fs.readFileSync(path.join(__dirname, 'range/aqi-message.json'), 'utf8'));
    specificMessages = JSON.parse(fs.readFileSync(path.join(__dirname, 'range/aqi-specific-messages.json'), 'utf8'));
  }

  getAQIResult(pollutantCode, concentration) {
    return new Promise((resolve, reject) => {
      pollutantBreakpointFinder.getConcentrationRangeWithAvgConcentration(pollutantCode, concentration, breakpoints).then((breakpointIndex) => {
        // console.log('here come', breakpointIndex)
        targetBreakpointIndex = breakpointIndex;
        let aqi = calculator.calculateAQI(concentration, targetBreakpointIndex);
        return aqi;
      }, (err) => {
        reject(err);
      }).then((aqi) => {
        let generalMessage = messageService.getGeneralMessage(aqi, generalMessages);
        let specificMessage = messageService.getSpecificMessage(pollutantCode, aqi, specificMessages);

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
  PollutantType: constants.POLLUTANT_TYPE
};