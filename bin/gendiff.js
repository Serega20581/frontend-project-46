#!/usr/bin/env node

import { Command } from 'commander';
import { readFileSync } from 'fs';
import path from 'path';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format (default: "stylish")')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    try {
      const absolutePath1 = path.resolve(filepath1);
      const absolutePath2 = path.resolve(filepath2);

      const fileContent1 = readFileSync(absolutePath1, 'utf8');
      const fileContent2 = readFileSync(absolutePath2, 'utf8');

      const data1 = JSON.parse(fileContent1);
      const data2 = JSON.parse(fileContent2);

      console.log('File 1 data:', JSON.stringify(data1, null, 2));
      console.log('File 2 data:', JSON.stringify(data2, null, 2));
      console.log(`Comparing files with format ${program.opts().format}`);
    } catch (error) {
      console.error('Error reading or parsing files:', error.message);
    }
  });

program.parse(process.argv);

if (!process.argv.slice(2).length || program.help) {
  program.outputHelp();
}