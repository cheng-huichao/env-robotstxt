

## Feature

 - Set `env variable` to generate `robots.txt` file
 - Generate  `Disallow: /` by default (without env variable)
 - Allow generate in to different folder
 - Easy to config robots.txt if you use `git` (different branch different robots content)
 - For all static website projects, like html, vue, react, angular, php, etc.

## Install
```
 npm install env-robotstxt 
 # or 
 yarn add env-robotstxt
```

## Config 

Add the `robot` (or your preferred command) command in scripts object:

```json
"scripts": {
    "robot": "npx env-robotstxt"   // default
  },
```

```json
"scripts": {
    "robot": "npx env-robotstxt dist"   // generate into `dist` folder
  },
```

then set up the env variable `ENV_ROBOTS_CONTENT`:
```javascript
ENV_ROBOTS_CONTENT="User-agent: *\nDisallow: \nSitemap: https://domain.name/sitemap.xml"
```

## Run

```
npm run robot
or 
yarn robot
```
