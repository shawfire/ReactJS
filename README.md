# ReactJS

# Create New GitHub repository
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

# Setting up Chrome tools for React
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
# Intro to JSX and Babel
## Pure React 6m 19s
    https://cdnjs.com/
      react
    sudo npm install -g httpster
    cd /Users/shawfire/Downloads/lynda/ReactJS/Ex_Files_React_EssT/Ch02/02_01/start
    httpster -d ./dist1 -p 3000
    localhost:3000
    httpster -d ./dist2 -p 3000
## Refactoring elements using JSX
    /Users/shawfire/Downloads/lynda/ReactJS/Ex_Files_React_EssT/Ch02/02_02/start
    httpster -d ./dist1 -p 3000
## Babel inline transpiling
    babeljs.io
    https://cdnjs.com/
      babel
        select babel-core 5.8.38
      cd /Users/shawfire/Downloads/lynda/ReactJS/Ex_Files_React_EssT/Ch02/02_03/start
      httpster -d ./dist1 -p 3000
## Babel static transpiling with babel-cli
      npm init
