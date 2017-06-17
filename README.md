Install React in an existent project
=====================================
 
After reading react documentation about how to use react in an existent project, I realised that it does not give you all the information you need to start it. It gives some links of other documentations which if you stop to read all of them, you will take a long time to be able to start developing your react files.
 
This repo gives you the minimum structure to create files in `jsx` and see them working in your project.
 
Minimum requirements
---------------------
 
1.  [Node and NPM](https://nodejs.org/en/download/).
2.  [GulpJS](http://gulpjs.com/) - After installing `npm` you only need to open your terminal and run:
    ```sh
    npm install -g gulp-cli
    ```
 
How to start
-------------
 
Before adding any file to the project, you need to install the dependencies::
```sh
npm install
```
 
After installing the dependencies and creating your files, you just have to run `gulp`. More informations about gulp below.
 
Gulpfile.js
------------
 
There are only three things in gulpfile that you might want to change:
 
1.  **var jsxPath** - Folder where you jsx files will be located.
2.  **var jsDest** - Destination of your jsx files after compiled.
3.  **var vendorPath** - Path where your react and react-dom will be located.
 
 
Gulp Tasks
-----------
 
1.  **develop** - Task will watch jsx files and compile them
2.  **deploy** - Task will send react and react dom files to `vendorPath` and minify compiled jsx files
3.  **default** - Task will first ``deploy`` and then ``develop``
 
 
Attention
----------
 
This project does not concat react to the jsx files nor uses `webpack`. After deploying your files, just include the scripts of react, react-dom and your js compiled files in your page to start using them.
 
Example
--------
 
The structure of this project is:
 
```
project
├── .gitignore
├── gulpfile.js
├── package.json
└── README.md
```
 
I will not change the `jsxPath` `jsDest` and `vendorPath` for this example. First thing, I need to create the jsx file I want to use
 
```
project
├── jsx
│   └── app.jsx
├── .gitignore
├── gulpfile.js
├── package.json
└── README.md
```
 
My `app.jsx` will be like this:
 
```jsx
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```
 
Now I will create a `index.html` file in my project
 
```
project
├── jsx
│   └── app.jsx
├── .gitignore
├── gulpfile.js
├── index.html
├── package.json
└── README.md
```
 
My `index.html` will be like this:
 
```html
<!DOCTYPE html>
<html>
    <head>
        <title>My react test</title>
        <script type="text/javascript" src="dist/vendor/react.min.js"></script>
        <script type="text/javascript" src="dist/vendor/react-dom.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/javascript" src="dist/app.js"></script>
    </body>
</html>
```
 
Now, I will open my terminal and run my `gulp`
 
```sh
gulp
```
 
Gulp will add `react.min.js` and `react-dom.min.js` to the `vendorPath` folder and create a `app.js` file out of my `app.jsx` file, and it will keep watching the project for more changes (if you want to stop watching, just press Ctrl + C)
 
 
Now you are ready to use react in your projects. If you want to minify your files, just run `gulp deploy`