# semver
Semantic Versioning

___

[![Version](https://markdown-badge-crafter.netlify.app/.netlify/functions/app/?type=version&user=SayanShankhari&acc=TheScienceUniverse&repo=sem_ver&branch=master)](https://github.com/TheScienceUniverse/sem_ver)
[![Node.js CI](https://github.com/TheScienceUniverse/sem_ver/actions/workflows/node.js.yml/badge.svg)](https://github.com/TheScienceUniverse/sem_ver/actions/workflows/node.js.yml)
[![GitHub Issues](https://img.shields.io/github/issues/TheScienceUniverse/sem_ver.svg?style=flat-square&label=Issues&color=d77982)](https://github.com/TheScienceUniverse/sem_ver/issues)
[![Discord](https://img.shields.io/discord/869557815780470834?color=738adb&label=Discord&logo=discord&logoColor=white&style=flat-square)](https://discord.gg/DEYW7vZkm7)


## Overview

- semver is a minimal badge generator that is written and run in server side NodeJS.

## Usage


### Package manager

Using npm:

```bash
$ npm install @sayan_shankhari/sem_ver
```

Using bower:

```bash
$ bower install @sayan_shankhari/sem_ver
```

Using yarn:

```bash
$ yarn add @sayan_shankhari/sem_ver
```

Using pnpm:

```bash
$ pnpm add @sayan_shankhari/sem_ver
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import semver from "@sayan_shankhari/sem_ver/";
```

If you use `require` for importing, **only default export is available**:

```js
const semver = require ("@sayan_shankhari/sem_ver/");
```

## Example

```js
const semver = require ("@sayan_shankhari/sem_ver");


let req_obj = semver .create_new_request (
	task = "generate"
	/*, username = "YOUR_GITHUB_USERNAME"*/
	, account = "TheScienceUniverse"
	, repository = "sem_ver"
	, branch = "master"
);

console .log (req_obj);

async function test (req_obj) {
	let version = await semver .gen_sem_ver (req_obj);
	console .log ("Version:", version);
}

test (req_obj);
```

> **Note**: `async/await` is part of ECMAScript 2017 and is not supported in Internet
> Explorer and older browsers, so use with caution.


## Showcase

```bash
$ npm test
```

![Image](./public/demo.png "Test demo")
___

## History

- Hi, this is the inititiator of this repo. After searching in npm registri could not find dynamic version badge for markdown, so creating this, feel free to test, use and contribute.

- Please try this tool on systems (computer, mobile, embded systems having nodejs running).
 

## [🤝 Contributing](./CONTRIBUTING.md)

## [📜 Code of Conduct](./CODE_OF_CONDUCT.md)

## [🔒 Security](./SECURITY.md)

## 💝 Support

If you like this DSA Project and would like to support & appreciate it via donation then I'll gladly accept it. 

[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/sayan_shankhari)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/sayan.shankhari)

[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)]()
[![Paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/paypalme/the01guy)
[![BHIM UPI](https://img.shields.io/badge/bhim-e9661c?style=for-the-badge&logo=bhim&logoColor=e9661c&color=27803b)]()
[![Google Pay](https://img.shields.io/badge/Google%20Pay-%233780F1.svg?style=for-the-badge&logo=Google-Pay&logoColor=white)]()
[![Razor Pay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)]()
[![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)]()
