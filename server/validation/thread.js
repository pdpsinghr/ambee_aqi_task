const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function ValidThreadInputs(data) {
    let errors = {};
    data.pname = !isEmpty(data.pname) ? data.pname : '';
    data.pvalue = !isEmpty(data.pvalue) ? data.pvalue : '';
    data.cname = !isEmpty(data.cname) ? data.cname : '';
    data.cemailid = !isEmpty(data.cemailid) ? data.cemailid : '';

    if(Validator.isEmpty(data.pname)) {
        errors.pname = 'pollutant name is required';
    }

    if(Validator.isEmpty(data.pvalue)) {
        errors.pvalue = 'pollutant value is required';
    }

    if(Validator.isEmpty(data.cname)) {
        errors.cname = 'customer name is required';
    }

    if(Validator.isEmpty(data.cemailid)) {
        errors.cemailid = 'customer email  is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}