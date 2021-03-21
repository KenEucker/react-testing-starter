# react-testing-starter

A starter repository for a React application with accompanying frontend tests, written entirely in typescript.

## Getting Started
This project has a series of scripts that are defined in the package.json file. Their use is outlined below:

* wipe - This script will delete the compiled assets that are created during the webpack build process.
* clean - This script will run prettier on all of the source code files to adhere to best practices.
* build - This script will run the webpack build for development and testing purposes.
* package - This script will run the webpack build for production deployment.
* test - This script will run jest using the test files found in /src/\_\_tests\_\_
* fix - This script will run jest and include the -u flag to fix the simple errors discovered in tests.
* start - This script will run the build process and then start the webpack dev server.
* postinstall - This script will run after `npm install` and will run the `test` script.

## Deep Dive
Below is a breakdown of the files found within the root of the project. These files set up Webpack, Babel, and Jest for React application development using Typescript both in the app code as well as the testing code. All of the plugins, compilerOptions, and packages included in this project are to meet the requirements of React + Jest with Typescript; with nothing more added. The Webpack Dev server is configured to listen on port 8080 and to hot-reload with any changes to the source files.
### .gitignore
Nothing special to note here except for the fact that static/index.html is ignored.

### .prettierignore
Note: prettier should not run on the node_modules folder or any other compiled assets.

### .prettierrc
This prettier configuration will adhere to modern Typescript practices.

### babel.config.json
This small babel config is used in order to run typescript files using jest

### jest.config.ts
The jest configuration enables the transforming of Typescript in the test files.

### jest.setup.ts
In the jest setup file, the mocked server using `msw` is configured. This is where you would add any setup or teardown functionality that happens for all of your tests.

### tsconfig.json
This document has each compilerOption documented inline. Here is the result of those options, explained:

The output will be in the `dist/` folder and include a bundle with sourceMaps targeting ES2019 features. React component code will be allowed in script files (.tsx and .jsx).

### webpack.build.ts
Includes inline sourcemaps for sass and css assets.

### webpack.common.ts
This file, in addition to setting up webpack configurations, creates the `static/index.html` file if it does not already exist. This file is gitignored to allow for development testing within this file. It is expected, with this project setup, that the index file contains only what it needs to in order to have the React app mounted.
