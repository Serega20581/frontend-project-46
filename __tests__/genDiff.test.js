import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from "../fileParser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('genDiff with flat JSON files', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expectedOutput = readFile('expected_output.txt').trim();

  const result = genDiff(filepath1, filepath2).trim();
  console.log('Expected Output:\n', expectedOutput);
  console.log('Received Output:\n', result);

  expect(result).toEqual(expectedOutput);
});
