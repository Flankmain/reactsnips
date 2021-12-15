# ReactSnips


## **What is this project?**

I built this simple code snippet forum with a server and front-end for a university web development course.

## This project may lack in some of the following aspects:
* ease of deployment
* ease of use
* conventions of `Express` and `React`.

## A non-exhaustive list of easy future source code improvements:
* A lot of code in the back-end could be extracted into functions to reduce code repetetiveness.
* using props to make a more sensible general-use form component
* build a database abstraction layer to make code less verbose
* improved mongoose schemas and queries, possibly even gaining performance

#
## **Technology rundown**
## constraints
### The following things had to be used because of the assignment:
* `Node.js`
* `React`
* Any pre-existing database technology. (I chose `MongoDB` with `Mongoose`)

## choices
I chose technologies based mainly on what was taught on the course.

`Express` and `Mongoose` were chosen because the course largely teaches those things already and I had a bunch of useful source code from previous weekly exercises.

`React` was chosen because I decided that using vanilla `JavaScript` and `pug` would lead to very ugly and verbose code. Additionally, I already had experience from the university's `React` code camp.

Any packages that I understand decently well have descriptions in the dependencies section.

#
## **Dependencies**

### Front-end npm packages

Mandatory or practically mandatory:
* `react`
* `react-dom`
* `react-router-dom`

I chose these:
* `@mui/material`
    * offers some quick and easy `css`-like styling for the app bar I chose to use.
    * Could easily be removed in favor of some easy custom `css`.
* `react-syntax-highlighter`
    * Is made for use with `React`.
    * Very easy to use
    * Support for multiple languages allows for better extensibility.
    

#

### Back-end npm packages

* `express`
* `mongoose`
* `cookie-parser`
* `morgan`
#

### Test dependencies
* **No tests exist yet except for example tests from the course's materials.**

#
## **Installation instructions**

This guide relies on you having git and npm installed. 

1. **Git clone**
```bash
git clone <url>  
```

2.  **cd to the root directory of the project** (containing folders client and server)
```bash
cd ./<directory name>
```

3. **Download dependencies**
```Bash
npm i
```
4. Run the project
```Bash
npm run dev
```

5. **If this doesn't work cd to client and server and run** ```npm i``` **in both folders.**

## List of included custom npm scripts

In the root directory the following custom commands are available:

``` bash
npm run test <name> #run a test in the test directory
npm run client      #run the front-end server
npm run server      #run the back-end  server
npm run dev         #run client and server concurrently
```
