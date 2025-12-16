import _ from 'lodash';
import os from 'os';
import parse from './parsers/index.js';

const generateDiffLine = (key, value, type) => `${type} ${key}: ${value}`;

const genDiff = (filepath1, filepath2) => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);

  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const diff = sortedKeys.map((key) => {
    if (!Object.prototype.hasOwnProperty.call(data2, key)) {
      return generateDiffLine(key, data1[key], '-');
    }
    if (!Object.prototype.hasOwnProperty.call(data1, key)) {
      return generateDiffLine(key, data2[key], '+');
    }
    if (data1[key] !== data2[key]) {
      return [
        generateDiffLine(key, data1[key], '-'),
        generateDiffLine(key, data2[key], '+'),
      ].join(os.EOL);
    }
    return   `${key}: ${data1[key]}`;
  }).filter(Boolean).join(os.EOL);

  return ` {${os.EOL}${diff}${os.EOL}}`;
};

export default genDiff;