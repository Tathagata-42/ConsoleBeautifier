import chalk from "chalk";
import Table from "cli-table3";
import inquirer from "inquirer";
import { getTime } from "./utils";

export type Theme = "minimal" | "emoji" | "table";

let currentTheme: Theme = "minimal"; // default theme

const emojiMap: Record<string, string> = {
  LOG: "✨",
  INFO: "ℹ️",
  WARN: "⚠️",
  ERROR: "❌",
};

export async function initConsoleBeautifier() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "theme",
      message: "Choose your console theme:",
      choices: ["minimal", "emoji", "table"],
      default: "minimal",
    },
  ]);

  setConsoleTheme(answer.theme as Theme);
  console.log(chalk.green(`Console Beautifier initialized with "${answer.theme}" theme.`));
}

export function setConsoleTheme(theme: Theme) {
  currentTheme = theme;
}

export function getAvailableThemes(): Theme[] {
  return ["minimal", "emoji", "table"];
}

function formatMessage(type: string, color: any, args: any[]): string {
  switch (currentTheme) {
    case "emoji":
      return emojiFormatter(type, color, args);
    case "table":
      return tableFormatter(type, color, args);
    default:
      return minimalFormatter(type, color, args);
  }
}

function minimalFormatter(type: string, color: any, args: any[]): string {
  const time = chalk.dim(getTime());
  return `${chalk.gray(`[${time}]`)} ${color(type)} ${args.map(formatArg).join(" ")}`;
}

function emojiFormatter(type: string, color: any, args: any[]): string {
  const time = chalk.dim(getTime());
  const emoji = emojiMap[type] || "";
  return `${chalk.gray(`[${time}]`)} ${color(`${emoji} ${type}`)} ${args.map(formatArg).join(" ")}`;
}

function tableFormatter(type: string, color: any, args: any[]): string {
  const time = chalk.dim(getTime());
  const emoji = emojiMap[type] || "";
  const table = new Table({
    head: [chalk.bold("Time"), chalk.bold("Type"), chalk.bold("Message")],
    colWidths: [12, 10, 60],
    wordWrap: true,
  });
  table.push([time, color(`${emoji} ${type}`), args.map(formatArg).join(" ")]);
  return table.toString();
}

export function patchConsole() {
  const originalLog = console.log;
  const originalError = console.error;
  const originalWarn = console.warn;
  const originalInfo = console.info;

  console.log = (...args: any[]) => {
    originalLog(formatMessage("LOG", chalk.green.bold, args));
  };

  console.error = (...args: any[]) => {
    originalError(formatMessage("ERROR", chalk.red.bold, args));
  };

  console.warn = (...args: any[]) => {
    originalWarn(formatMessage("WARN", chalk.yellow.bold, args));
  };

  console.info = (...args: any[]) => {
    originalInfo(formatMessage("INFO", chalk.blue.bold, args));
  };
}

function formatArg(arg: any): string {
  if (typeof arg === "object") {
    try {
      return chalk.white(JSON.stringify(arg, null, 2));
    } catch {
      return chalk.white(String(arg));
    }
  }
  return chalk.white(String(arg));
}