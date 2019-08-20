let datantchangable = require('./datantchangable');

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
        reject(datantchangable.MESSAGES.INVALID_MESSAGES.INVALID_POLLUTANT_CODE);
      } else {
        targetBreakpoint.concentrations.forEach((breakpointConcentration) => {
          if (concentration >= breakpointConcentration.min && concentration <= breakpointConcentration.max)
            resolve(breakpointConcentration);
        });
        reject(datantchangable.MESSAGES.INVALID_MESSAGES.INVALID_CONCENTRATION_RANGE);
      }
    });
  }
}