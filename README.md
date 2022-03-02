## mbx-gulp

## Features

- Copies files (HTML, CSS, JS, SQL) from the source directory to `platforms/`
- Minifies custom CSS
- Prettier config
- ESLint config
- VS Code settings

## Prerequisite

1. [Node.js](https://nodejs.org/en/download/).

## Setup to project

```sh
cd APP_WORKSPACE_2022-01/app/
```

```sh
npx mbx-cli build -u
```

Visit [npmjs.com/package/mbx-cli](https://www.npmjs.com/package/mbx-cli) for full documentaion of `mbx-cli`.

## Available commands/ tasks

1. Minify custom CSS; copy the watched files to the designated folder on `platforms/`:
    ```sh
    gulp
    ```

2. Watch for file changes, then automatically apply the updates to the designated folder on `platforms/`:
    ```sh
    gulp watch
    ```

## Recomended workflow

1. Open up a terminal and `cd` to the app project.
1. Run `gulp watch`.
1. Code...
1. Run the project Activity on Eclipse.

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

Noel Earvin Piamonte
