'use strict';

const dayjs = require('dayjs');

module.exports = lernaPkgUtil;

function lernaPkgUtil() {
    console.log('1lernaPkgUtil211');
    // TODO

    const formatDate = dayjs().format('YYYY-MM-DD');

    console.log('formatDate', formatDate);

    return formatDate;
}