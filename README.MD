# Console Beautifier ✨  

[![NPM Version](https://img.shields.io/npm/v/console-beautifier.svg)](https://www.npmjs.com/package/console-beautifier)
[![Downloads](https://img.shields.io/npm/dm/console-beautifier.svg)](https://www.npmjs.com/package/console-beautifier)
[![License](https://img.shields.io/npm/l/console-beautifier.svg)](https://github.com/your-username/console-beautifier/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/your-username/console-beautifier.svg?style=social)](https://github.com/your-username/console-beautifier)

Transform your boring `console.log` into colorful, stylish, and fun logs with emojis and tables.  
Perfect for **Node.js, React, and TypeScript** projects!

---

## 🌟 Features
- 🎨 **Themes:** Choose between **Minimal**, **Emoji**, and **Table** formats.
- ✨ **Beautiful Colors & Emojis:** Instantly understand log levels.
- 📊 **Tabular Logs:** Display logs in a clean table layout using `cli-table3`.
- 🔄 **Dynamic Theme Switching:** Change themes at runtime with one line of code.
- ⚡ **Zero Effort Integration:** Works with default `console.log`, `console.warn`, etc.
- 💻 **Works Everywhere:** Node.js, React, SPFx, or any JavaScript/TypeScript project.

---

## 📦 Installation
```bash
npm install consoleasthetic


Quick Start - Add this to your index.ts or main file


import { initConsoleBeautifier } from "console-beautifier";

(async () => {
  await initConsoleBeautifier();  // Interactive theme selection
  console.log("Hello, beautified logs!");
  console.warn("This is a warning!");
  console.error({ error: "Something failed!" });
})();

When you run the program , you will see

? Choose your console theme: (Use arrow keys)
❯ minimal
  emoji
  table

Minimal
[12:10:22] LOG   Hello, beautified logs!
[12:10:22] WARN  This is a warning!

Emoji
[12:10:22] ✨ LOG    Hello, beautified logs!
[12:10:22] ⚠️ WARN   This is a warning!

Table
┌────────────┬─────────┬────────────────────────────┐
│ Time       │ Type    │ Message                    │
├────────────┼─────────┼────────────────────────────┤
│ 12:10:22   │ ✨ LOG  │ Hello, beautified logs!     │
└────────────┴─────────┴────────────────────────────┘

Change theme at runtime
import { setConsoleTheme } from "console-beautifier";

setConsoleTheme("emoji");  // Switch to emoji theme
console.log("Now using emojis!");

setConsoleTheme("table");  // Switch to table theme
console.log("Now logs are tabular!");

List all availale themes

import { getAvailableThemes } from "console-beautifier";
console.log(getAvailableThemes()); // [ 'minimal', 'emoji', 'table' ]

🙌 Credits
	•	Built using TypeScript and Chalk.
	•	Table-based output powered by cli-table3.
	•	Inspired by developers who want clean and fun logs.
    ---


