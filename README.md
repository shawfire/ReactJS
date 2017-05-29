# ReactJS

# Create New GitHub repository
```
Create a new repository on [github](https://github.com/shawfire/ReactJS)
cd ~/projects
mkdir ReactJS
cd ~/projects/ReactJS
echo "# ReactJS" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/shawfire/ReactJS.git
git push -u origin master
```

## Initial commit
```
git status
git add -A
git status
git commit -m 'Initial commit'
git status
git push -u origin master
```

## Create branch
[Create a new branch with git and manage branches](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)
```
git checkout -b react
git branch
git status
git add -A
git commit -m 'Pure React.'
git status
git push -u origin react
```

## Undo last commit
[How to undo last commit(s) in Git?](https://stackoverflow.com/questions/927358/how-to-undo-last-commits-in-git)
```
Accidentally added node_modules directory.
Added a .gitignore file,
Undid the last commit with git reset HEAD~
then recommited my changes

git add -A
git commit -m 'Babel static transpiling with babel-cli'
git status
git reset HEAD~
git status
git add -A
git status
git commit -m 'Babel static transpiling with babel-cli'
git status
git push -u origin react
```

# Setting up Chrome tools for React
```
  Chrome preferences extensions
    react-detector
      Check - Allow access to file URLs
    React Developer Tools
      Check - Allow access to file URLs
    Postman
  FireFox
    React-detector and Developer Tools available as add ons
  Visit sits that use ReactJS
    hellosign.com
    notice the react icon in on in the right corner (due to the react-detector)
    Open developer tools (Mac Cmd-Opt-j, Win Ctrl+Shift+j or F12)
    Choose the React tab
    Can see Props and State of components below components selector
```

# Intro to JSX and Babel
## Pure React
    https://cdnjs.com/
      react
    sudo npm install -g httpster
    cd ~/projects/ReactJS
    httpster -d ./Essentials -p 3000
    localhost:3000
    httpster -d ./Essentials -p 3000

## Refactoring elements using JSX
    cd ~/projects/ReactJS
    httpster -d ./Essentials -p 3000

## Babel inline transpiling
    babeljs.io
    https://cdnjs.com/
      babel
        select babel-core 5.8.38
      cd cd ~/projects/ReactJS
      httpster -d ./Essentials -p 3000

## Babel static transpiling with babel-cli
      npm init
      generates a package.json file
      npm install --save-dev babel-cli
      sudo npm i -g babel-cli
      npm i --save-dev babel-preset-latest babel-preset-react babel-preset-stage-0
      babel ./src/index.js --out-file ./dist/bundle.js
      npm start

## Building with webpack
  npm i webpack webpack-dev-server babel-loader --save-dev
  sudo npm i -g webpack webpack-dev-server
  ./node_modules/.bin/webpack
  Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
   - configuration.output.path: The provided value "dist/assets" is not an absolute path!

  Tried troubleshooting this above error and finally started over with yarn and everything worked...
  https://www.npmjs.com/package/webpack
  https://stackoverflow.com/questions/42060243/invalid-configuration-object-webpack-has-been-initialised-using-a-configuration
  https://docs.npmjs.com/getting-started/uninstalling-global-packages
  sudo npm install webpack@latest -g
  https://www.npmjs.com/package/npm-check-updates
  npm install -g npm-check-updates
  ncu
  https://webpack.js.org/guides/installation/
  https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783
  https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/
  yarn add --dev webpack webpack-dev-server@2


# React with yarn and webpack
  [Setup a React Environment Using webpack and Babel](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)
  brew update
  brew install yarn
  brew update yarn
  yarn init
  yarn add webpack webpack-dev-server path
  touch webpack.config.js
  yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev
  yarn add html-webpack-plugin
  yarn start
# Use react and react-dom packages
  yarn add react react-dom
# Introduce an App component
../components/App.js
[Webpack doco](https://webpack.github.io/)
[Webpack getting started](https://webpack.js.org/guides/get-started/)
[Webpack and Typescript](https://webpack.js.org/guides/webpack-and-typescript/)
[React Test Utilities](https://facebook.github.io/react/docs/test-utils.html)
