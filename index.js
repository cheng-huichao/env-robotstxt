#!/usr/bin/env node

require('dotenv').config()
const fs = require("fs");

var stream = fs.createWriteStream("robots.txt");


stream.once("open", function (fd) {

    let robots_content = process.env.ENV_CONTENT ?? process.env.env_content;

    if(robots_content){
        console.log('🧼 You havs set `env_content` variable.');
        // if env_content is not empty, use the content to generate robots.txt file
        stream.write(robots_content);
    }
    else{
        console.log('🤖 no `env_content` variable was found!');
        // no evn varibles, or by default it will generate disallow robots.txt file
        // eg.: dont set env for templink
        // set env for live site.
        stream.write("User-agent: *\n");
        stream.write("Disallow: /\n");

        console.log('🤖 using default `disallow: /` robots content');
    }
    stream.end();
    
    console.log('🤖 robots.txt file was generated!');
});