# Personal website

> Link: https://kenclaron.github.io/

> Stack: `React`, `Recoil`, `TypeScript`, `Node.js`, `gh-pages`, `i18next`.

## Features

- Language auto-detecting for users by `i18next`;
- Project list of author from GitHub API;
- Semantic webpage development for accessibility and screen-readers;
- New Material Design 3 UI/UX reference;
- Skeletons-components when device not loaded page yet;
- Compressing of build version of project;
- Generating OpenGraph images of repositories from GitHub.

## Usage

### **Using via npm**

- Install `Node.js`: <https://nodejs.org/en/download/>;
- Clone this repository: `git clone https://github.com/kenclaron/kenclaron.github.io.git`;
- Go to folder of repository: `cd ./kenclaron.github.io`;
- Install needed libraries: `npm install`
- Type: `npm start` (launching in dev-mode in browser, by default: `http://localhost:3000`)
- Type: `npm build` (build project for production)
  - Results save in folder `./build`

```text
  git clone https://github.com/kenclaron/kenclaron.github.io.git
  cd ./kenclaron.github.io
  npm install
  npm start
  npm build
```

### **Open Webpage**

- Open: <https://kenclaron.github.io/>

## Project folder

```text
kenclaron.github.io
├── build              - Builded project
│
├── public             - static files of website
│   ├── css            - static .css-files
│   ├── js             - static .js-files
│   └── manifest       - static files for manifest information
│
└── src                - Source fiels
    ├── __test__       - Jest-tests
    ├── @types         - declaring of types
    ├── api            - .ts-files with requests to API
    ├── components     - .tsx-files with components
    ├── content        - static content-information for generating components
    ├── i18n           - i18n-content
    └── utils          - utilities
        ├── containers - atoms and selectors of variables by recoil
        ├── hooks      - custom React-hooks
        └── types      - custom types
```

## Preview

[<img src="https://i.imgur.com/bTK0Sa5.png" width="48%"/>](https://i.imgur.com/bTK0Sa5.png)
[<img src="https://i.imgur.com/GFAIjav.png" width="48%"/>](https://i.imgur.com/GFAIjav.png)
[<img src="https://i.imgur.com/ON3e55K.png" width="48%"/>](https://i.imgur.com/ON3e55K.png)
[<img src="https://i.imgur.com/isM6fGV.png" width="48%"/>](https://i.imgur.com/isM6fGV.png)
