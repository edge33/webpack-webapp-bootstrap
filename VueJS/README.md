# webpack-webapp-bootstrap

Quickly bootsprap your webpack powered webapps using this sample config.

it comes with a basic configuration composed of:

- Webpack
- Eslint
- Typescript
- Sass Loader
- ES Loader

it comes with the following npm scripts:

- type-check
- build
- lint
- dev

type-check provides validation for Typescript files

build runs the webpack build process and creates production build in _dist/_ folder

lint runs eslint on the ts files

dev runs webpack serve in order to start development

To run the app, install dependencies:

`$ npm install`

then run 

`$ npm run dev`

browse to http://localhost:8000 and start building.