#!/usr/bin/env node

require("dotenv").config();
const fs = require("fs");

const myArgs = process.argv.slice(2);

let rootDirectory = myArgs[0] ?? ".";

// create folder if not exist
if (rootDirectory.length > 0) {
  if (!fs.existsSync(rootDirectory)) {
    fs.mkdirSync(rootDirectory);
  }
}

// create robots.txt file
var stream = fs.createWriteStream(`${rootDirectory}/robots.txt`);

stream.once("open", function (fd) {
  let robots_content = process.env.ENV_ROBOTS_CONTENT ?? process.env.env_robots_content;

  if (robots_content) {
    console.log("🧼 You havs set `env_robots_content` variable.");
    // if env_content is not empty, use the content to generate robots.txt file
    stream.write(robots_content);
  } else {
    console.log("🤖 no `env_robots_content` variable was found!");
    // no evn varibles, or by default it will generate disallow robots.txt file
    // eg.: dont set env for templink
    // set env for live site.
    stream.write("User-agent: *\n");
    stream.write("Disallow: /\n");

    console.log("🤖 using default `disallow: /` robots content");
  }
  stream.end();

  console.log("🤖 robots.txt file was generated!");
});
