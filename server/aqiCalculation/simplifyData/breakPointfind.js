let targetConcentrationRange;
let constants = require('./datantchangable');

module.exports = {
  getConcentrationRangeWithAvgConcentration(pollutantCode, concentration, breakpoints) {
    return new Promise((resolve, reject) => {
      let targetBreakpoint;
      breakpoints.forEach((breakpoint) => {
        if (breakpoint.code === pollutantCode) {
          targetBreakpoint = breakpoint;
        }
      });
      if (targetBreakpoint === undefined) {
        reject(constants.MESSAGES.INVALID_MESSAGES.INVALID_POLLUTANT_CODE);
      } else {
        targetBreakpoint.concentrations.forEach((breakpointConcentration) => {
          if (concentration >= breakpointConcentration.min && concentration <= breakpointConcentration.max)
            resolve(breakpointConcentration);
        });
        reject(constants.MESSAGES.INVALID_MESSAGES.INVALID_CONCENTRATION_RANGE);
      }
    });
  }
}