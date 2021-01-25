# open-browser-once-plugin

[![Build status](https://img.shields.io/travis/余聪/open-browser-once-plugin/master.svg?style=flat-square)](https://travis-ci.org/余聪/open-browser-once-plugin)
[![Test coverage](https://img.shields.io/codecov/c/github/余聪/open-browser-once-plugin.svg?style=flat-square)](https://codecov.io/github/余聪/open-browser-once-plugin?branch=master)
[![NPM version](https://img.shields.io/npm/v/open-browser-once-plugin.svg?style=flat-square)](https://www.npmjs.com/package/open-browser-once-plugin)
[![NPM Downloads](https://img.shields.io/npm/dm/open-browser-once-plugin.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/open-browser-once-plugin)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

> Webpack Plugin for open browser once rather than many times

## Why not [open-browser-plugin](https://github.com/huruji/open-browser-plugin)

[open-browser-plugin](https://github.com/huruji/open-browser-plugin) would open multiple same tabs after webpack run many times. But open-browser-once-plugin open it once.

## Installation

```bash
npm install open-browser-once-plugin
# or use yarn
yarn add open-browser-once-plugin
```

## Usage

```javascript
import { OpenBrowserOncePlugin } from 'open-browser-once-plugin'

module.exports = {
  // ...
  plguins: [new OpenBrowserOncePlugin('http://localhost:8080/app')]
}
```

## Contributing

- Fork it!
- Create your new branch:  
  `git checkout -b feature-new` or `git checkout -b fix-which-bug`
- Start your magic work now
- Make sure npm test passes
- Commit your changes:  
  `git commit -am 'feat: some description (close #123)'` or `git commit -am 'fix: some description (fix #123)'`
- Push to the branch: `git push`
- Submit a pull request :)

## Authors

This library is written and maintained by 余聪, <a href="mailto:yucong@fenbi.com">yucong@fenbi.com</a>.

## License

MIT - [余聪](https://github.com/余聪) 🐟
