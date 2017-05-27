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
