# webpack-icon-system-starter
Ready-made starting point for creating multiple svg sprite sets and using as an npm package
[Demo result](https://github.com/tarah-s/webpack-icon-system-starter)


### Requirement
1. Install [Node.js & NPM](https://nodejs.org/en/download/)

### Installation 
Clone and install project dependencies
```
git clone https://github.com/tarah-s/webpack-icon-system-starter
npm install
```

### Serving files locally from http://0.0.0.0:4000/
```
npm serve
```

### Build for production
creates a dist folder for distribution so you can release your custom icons package
```
npm build
```

### Use as a symlink package
Run `npm link` to symlink the project folder. For more Info, visit [npm-link](https://docs.npmjs.com/cli/link)
Run `npm run start`

### Resources
* [webpack] (https://webpack.js.org/)
* [clean-webpack-plugin] (https://github.com/johnagan/clean-webpack-plugin)
* [svg-sprite-loader] (https://github.com/kisenka/svg-sprite-loader)