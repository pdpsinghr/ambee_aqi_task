let constants = require('./datantchangable');
let truncator = require('./simplifyData');

module.exports = {
  calculateAQI(concentration, breakpoint) {
    let cHigh = breakpoint.max;
    let cLow = breakpoint.min;
    let iHigh = breakpoint.index.max;
    let iLow = breakpoint.index.min;
    // console.log('all data', cHigh, cLow, iHigh, iLow)
    let result = (iHigh - iLow) / (cHigh - cLow) * (concentration - cLow) + iLow;
    // console.log('result', result)
    return Math.round(result);
  }
}