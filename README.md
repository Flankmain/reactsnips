# ReactSnips


## **What is this project?**

I built this simple code snippet forum with a server and front-end for a university web development course.

## This project, as it stands, doesn't take into account the following:
* ease of deployment
* ease of use
* express or react conventions

## A non-exhaustive list of easy future source code improvements:
* many functions in the back-end could be extracted to reduce code repetetiveness.
* using props to make a more sensible general-use form component
* build a database abstraction layer to make code less verbose
* improved mongoose schemas, possibly even gaining performance

#
## **Technology rundown**
## constraints
### The following things had to be used because of the assignment:
* `Node.js`
* `React`
* Any pre-existing database technology. (I chose `Mongoose`)

## choices
I chose technologies based mainly on what was taught on the course.

`Express`.js and `Mongoose`, for instance, were chosen because the course largely teaches those things already and I had a bunch of useful source code from previous weekly exercises.

`React` was chosen because I decided that using vanilla `JavaScript` and `pug` would lead to very ugly and verbose code. Additionally, I already had experience from the university's `React` code camp.

Any non-mandatory packages that I actually understand decently well have descriptions in the dependencies section.

#
## **Dependencies**

### Front-end npm packages

Mandatory or practically mandatory:
* `react`
* `react-dom`
* `react-router-dom`

I chose these:
* `@mui/material` offers some quick and easy css-like styling for the app bar I chose to use.
* `react-syntax-highlighter` is very easy to use and is made for use with React.

#

### Back-end npm packages

* `express`
* `mongoose`
* `cookie-parser`
* `morgan`
#

### Test dependencies
* **No tests exist yet except for example tests.**

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

5. **If this doesn't work cd to client and server and run** ```npm i``` **separately.**

## List of included custom npm scripts

In the root directory the following custom commands are available:

``` bash
npm run test <name> #run a test in the test directory
npm run client      #run the front-end server
npm run server      #run the back-end  server
npm run dev         #run client and server concurrently
```
