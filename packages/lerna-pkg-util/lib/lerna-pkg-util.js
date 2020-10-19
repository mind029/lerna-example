'use strict';

const dayjs = require('dayjs')

module.exports = lernaPkgUtil;

function lernaPkgUtil() {
    console.log('lernaPkgUtil')
    // TODO

    const formatDate = dayjs().format('YYYY-MM-DD')
    
    return formatDate
}