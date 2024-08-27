#!/usr/bin/env node

import { Command } from "commander";
import genDiff from "../fileParser.js";

const program = new Command();

program
  .description("Compares two configuration files and shows a difference.")
  .version("1.0.0", "-V, --version", "output the version number")
  .option("-f, --format [type]", 'output format', "stylish")
  .arguments("<filepath1> <filepath2>")
  .action((filepath1, filepath2) => {
    try {
      const result = genDiff(filepath1, filepath2);
      console.log(result);
    } catch (error) {
      console.error("Error reading or parsing files:", error.message);
    }
  });

program.parse(process.argv);

if (!process.argv.slice(2).length || program.help) {
  program.outputHelp();
}
