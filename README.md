# `lab-note-analysis`
This project analyzes word frequency and similarity in given context. UI has two input parameters: "Note entry" is context for analysis; "Search" is input for word. The result is returned with red color highlighted in result grid as first row. Old result row will be pushed down.

![plot](./doc/ui.png)

## Architecture
Aurelia framework is used as SPA. aurelia-store is used as State management. 
Source code consists three main folders: components, services, and shared. components folder has UI components, services contains business logic services, and shared contains types,actions, and store.
shared\store\store.ts contains configuration for state and local storage.
![plot](./doc/localstorage.png)  

test\unit\services contains test cases. Services test cases are only covered due to time limit. 

## Future work
More test cases should be written on UI part. UI should be changed based on UX design. As Levenstein distance 1 is required, similarity analysis can be optimized to O(n) by comparing with single loop firstWord[i] === secondWord[i] and adding some conditions for deletion or insertion. 
## Run dev app
Run  `npm i`

Run `npm start`, then open `http://localhost:8080`

You can change the standard webpack configurations from CLI easily with something like this: `npm start -- --open --port 8888`. However, it is better to change the respective npm scripts or `webpack.config.js` with these options, as per your need.

To enable Webpack Bundle Analyzer, do `npm run analyze` (production build).

To enable hot module reload, do `npm start -- --hmr`.

To change dev server port, do `npm start -- --port 8888`.

To change dev server host, do `npm start -- --host 127.0.0.1`

**PS:** You could mix all the flags as well, `npm start -- --host 127.0.0.1 --port 7070 --open --hmr`

For long time aurelia-cli user, you can still use `au run` with those arguments like `au run --env prod --open --hmr`. But `au run` now simply executes `npm start` command.

## Build for production

Run `npm run build`, or the old way `au build --env prod`.

## Unit tests

Run `au test` (or `au jest`).

To run in watch mode, `au test --watch` or `au jest --watch`.
