import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parse = (filepath) => {
  const absolutePath = path.resolve(filepath);
  const content = fs.readFileSync(absolutePath, 'utf8');
  const ext = path.extname(filepath).toLowerCase();

  if (ext === '.json') {
    return JSON.parse(content);
  }

  if (ext === '.yml' || ext === '.yaml') {
    return yaml.load(content);
  }

  throw new Error(`Unsupported file extension: ${ext}`);
};

export default parse;
