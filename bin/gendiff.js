#!/usr/bin/env node

import { Command } from "commander";


const program = new Command();

program
  .name("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .version("1.0.0")
  .arguments("<filepath1> <filepath2>")
  .option("-f, --format [type]", "output format", "stylish")
  .action((filepath1, filepath2) => {
    console.log(`Comparing ${filepath1} and ${filepath2} with format ${program.format}`);
  });
  program.parse(process.argv);
  if (!process.argv.slice(2).length || program.help) {
    program.outputHelp();
  }
