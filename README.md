## mbx-gulp

## Features

- Copies files (HTML, CSS, JS, SQL) from the source directory to `platforms/`
- Minifies custom CSS

## Prerequisite

1. [Node.js](https://nodejs.org/en/download/).

## Setup to project

```
cd APP_WORKSPACE_2022-01/app/
```

```
npx mbx-cli build -u
```

Visit [https://github.com/earvinpiamonte/mbx-cli](https://github.com/earvinpiamonte/mbx-cli) for full documentaion of `mbx-cli`.

## Available commands/ tasks

1. `gulp` - Default task that minifies custom CSS; copies the watched files to the designated folder on `platforms/`.
1. `gulp watch` - Watches for file changes, then automatically applies the updates to the designated folder on `platforms/`.

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
