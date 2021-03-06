##
This demo is to apply clean architecture principles to the frontend using spa framework aurelia and aurelia store.

The project is divided into five folders. Components are UI views. It depends on folder core's sandbox/facade classes' property and calls action to reflect api/store changes.  The core folder depends on infrastructure effect classes where every effect calls api and updates store. Store state changes are published to core's sandbox classes' property. 
##
The following is graphical depiction:
![Alt text](docs/img/data-flow.png)

##
graph TD<br />
    A[components: Entry] -->|request add entry| B(core: Entry-Manager 'Sandbox')<br />
    B --> |add entry|C[infrastructure:EntryEffect]<br />
    C --> |endpoint call|D[infrastructure:API]<br />
    D --> |update|E[shared:Store]<br />
    E --> |updated state|B<br />
    B --> |update UI|A
# `lab-note-analysis`
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
