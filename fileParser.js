import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';

const parseFile = (filepath) => {
  const absolutePath = path.resolve(filepath);
  const fileContent = readFileSync(absolutePath, 'utf8');
  return JSON.parse(fileContent);
};

const generateDiffLine = (key, value, type) => `${type} ${key}: ${value}`;

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

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
      ].join('\n');
    }
    return   `${key}: ${data1[key]}`;
  }).filter(Boolean).join('\n');

  return `{\n${diff}\n}`;
};

export default genDiff;