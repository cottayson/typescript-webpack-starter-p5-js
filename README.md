# Setting up Typescript project with Webpack

To develop use:
```text
npm start
```

For production build use:
```text
npm run build
```

# Vue.js memory game example
https://codepen.io/roykn/pen/oJoqGy?editors=0010

# source map issue
* https://stackoverflow.com/questions/48858876/cannot-find-type-definition-file-for-source-map

* Cannot find module 'source-map' or its corresponding type declarations.
  Solution:
  `npm install source-map@latest --save`

## How to filter messages in Chrome Dev-Tools
* add to filter `-some text` to exclude word
  Example: `-[WDS]`
  filter out this messages: "[WDS] some text"

* more info: 
  https://developers.google.com/web/tools/chrome-devtools/console/reference

## If ❤️ is ??
* Reopen index.ts with UTF-8 encoding:
  * *Ctrl + Shift + P*
  * Enter in text field `Change File Encoding`
  * Choose `Reopen with encoding`
  * And select UTF-8
