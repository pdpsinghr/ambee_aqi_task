let chai = require('chai');
let expect = chai.expect;
let fs = require('fs');
let path = require('path');

let messageService = require('../aqiCalculation/simplifyData//messages');
let constants = require('../aqiCalculation/simplifyData/datantchangable');

let generalMessages = JSON.parse(fs.readFileSync(path.join(__dirname,'../aqiCalculation/range/aqi-message.json'), 'utf8'));

describe('result - Get Category on AQI', () => {
  it('should get category is Good with index is 43', () => {
    let result = messageService.getGeneralMessage(43, generalMessages);
    expect(result.category).to.equal(constants.AQI_CATEGORY.GOOD);
  });

  it('should get category is Moderate with index is 76', () => {
    let result = messageService.getGeneralMessage(76, generalMessages);
    expect(result.category).to.equal(constants.AQI_CATEGORY.MODERATE);
  });

  it('should get category is Unhealthy for Sensitive Groups with index is 142', () => {
    let result = messageService.getGeneralMessage(142, generalMessages);
    expect(result.category).to.equal(constants.AQI_CATEGORY.UNHEALTHY_FOR_SENSITIVE_GROUPS);
  });

  it('should get category is Very Unhealthy with index is 172', () => {
    let result = messageService.getGeneralMessage(172, generalMessages);
    expect(result.category).to.equal(constants.AQI_CATEGORY.UNHEALTHY);
  });

  it('should get category is Hazardous with index is 403', () => {
    let result = messageService.getGeneralMessage(403, generalMessages);
    expect(result.category).to.equal(constants.AQI_CATEGORY.HAZARDOUS);
  });
});