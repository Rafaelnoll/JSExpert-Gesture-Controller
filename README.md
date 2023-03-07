# JSExpert Gesture Controller

This project was done during the seventh Javascript Expert Week of @ErickWendel, and in it we can control the site with just hand movements using a web cam.

## Preview
<img width=100% src="./assets/demo-template-lg.gif">

## Pre-reqs
- This project was created using Node.js v19.6

## Running
- Execute `npm ci` in the folder that contains the file `package.json` to restore the packages
- Execute `npm start` and in the sequence go to the browser on  [http://localhost:3000](http://localhost:3000) for visualize the page above

### FAQ
- browser-sync is throwing errors on Windows and never boots:
  - Solution: Swap browser-sync for http-server.
    1. Install the **http-server** with `npm i -D http-server`
    2. In package.json delete the entire `browser-sync` command and replace it with `npx http-server .`
    3. Now the project will be running on :8080 so go to the browser and try to access http://localhost:8080/
  The only thing is that the project will not restart when you change some code, you will need to press F5 on the page every time you change something
- Webgl browser error is not supported on this device
    - Type chrome://gpu/ in Chrome to check if webgl is enabled.
    - Possible solutions:
      1. Option 1: Enable hardware acceleration when available
       -  Chrome => Settings > System > Use hardware acceleration when available
       -  Firefox => Browser options > Performance > Use hardware acceleration when available
      2. Option 2: Update video card driver
      - See details at [webgl-is-not-supported-on-chrome-firefox](https://www.thewindowsclub.com/webgl-is-not-supported-on-chrome-firefox)
      3. Option 3: Switch from WebGL to CPU (slower) or Web Assembly
        - https://blog.tensorflow.org/2020/03/introducing-webassembly-backend-for-tensorflow-js.html
  
### Credits to Layout
- Interface based in the project[Streaming Service](https://codepen.io/Gunnarhawk/pen/vYJEwoM) of [gunnarhawk](https://github.com/Gunnarhawk)

## Live Demo
- To test the final project [click here](https://rafaelnoll.github.io/JSExpert-Gesture-Controller/)