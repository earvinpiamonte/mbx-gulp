## mbx-gulp

Custom Ionic v1 dot files and gulpfile for improved workflow.

## Features

- Copies files (HTML, CSS, JS, SQL) from the source directory to `platforms/`
- Minifies custom CSS
- Prettier config
- Debugger config
- VS Code settings and extensions

## VS Code extension pack
- [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)
- [CSS Navigation](https://marketplace.visualstudio.com/items?itemName=pucelle.vscode-css-navigation)
- [Cordova Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.cordova-tools)
- [Microsoft Edge Tools for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools)

## Prerequisite

> NOTE: No need to do step 2 if using [mbx-cli](https://www.npmjs.com/package/mbx-cli) (recommended in starting a new workspace) or have the Gulp CLI previously installed.

1. [Node.js](https://nodejs.org/en/download/).
1. Install Gulp CLI globally
    ```sh
    npm i -g gulp-cli
    ```

## Add to an existing workspace project

> NOTE: Stop any currently running processes such as `gulp watch` before running any `npx mbx-cli` commands.

```sh
cd clonedProject/app/
```

or

```sh
cd APP_WORKSPACE_2022-01/app/
```

```sh
npx mbx-cli install
```

Visit [earv.in/mbxc](https://www.earv.in/mbxc) for the full documentaion of `mbx-cli`.

## Available commands/ tasks

- Minify custom CSS; copy the watched files to the designated folder on `platforms/`:
    ```sh
    gulp
    ```

- Watch for file changes, then automatically apply the updates to the designated folder on `platforms/`:
    ```sh
    gulp watch
    ```

## Recomended workflow

1. Open up a terminal and `cd` to the app project
1. Run `gulp watch`
1. Code...
1. Run the project on IDE

## Watched files

- `db/*`
- `merges/android/css/**/*`
- `merges/android/css/custom.css`
- `merges/android/html/**/*`
- `merges/android/images/svg.html`
- `merges/android/index.html` or `www/index.html`
- `www/app/**/*`
- `www/res/**/*`

## Maintainer

Designed and developed by [Noel Earvin Piamonte](https://earv.in/)
