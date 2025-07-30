import { initConsoleBeautifier } from "./src";

(async () => {
  await initConsoleBeautifier();

  console.log("Hello from beautifier!");
  console.warn("This is a warning!");
  console.error("Something went wrong!");
  console.info("All systems go!");
})();