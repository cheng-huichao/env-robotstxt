

### To separate the robots.txt content by different branch sites, eg. staging branch for temp link, main branch for live site, as they are the same content they will affect SEO, so this plugin will separate robots contents.

### `env-robotstxt` plugin for static websites (html, etc.), that running in serverless hosting like `vercel`, `netlify`, `cloudflare pages` etc. 

Install it by using following commands: 

`npm install env-robotstxt` or `yarn add env-robotstxt`

after install `env-robotstxt`, edit your `package.json` file to add the `robot` command in scripts object:
```json
"scripts": {
    "robot": "npx env-robotstxt"
  },
```
then set up the env variable `ENV_CONTENT` and use following build command:

```
npm run robot
```

 
  - set env variable `ENV_CONTENT` as robots.txt content
  - if no env variable use the following as content:
  ```
User-agent: *
Disallow: /
  ```
 
use case: 
- dont set any env variable for temp link
- set env varible `ENV_CONTENT` for live site