## mbx-gulp

## Features

- Copies files (HTML, CSS, JS, SQL) from the source directory to `platforms/`
- Minifies custom CSS

## Prerequisite

Install the gulp command line utility globally.

```
npm install --global gulp-cli
```

## Setup

```
cd APP_WORKSPACE_2022-01/app/
```

```
npx mbx-cli build -u
```

Visit [https://github.com/earvinpiamonte/mbx-cli](https://github.com/earvinpiamonte/mbx-cli) for full documentaion of `mbx-cli`.

## Available commands/ tasks

1. `gulp` - Default task that minifies styles; copies the watched files to the designated folder on `platforms/`.
1. `gulp watch` - Watches for file changes, then automatically applies the updates to the designated folder on `platforms/`.

## Recomended workflow

1. Open up a terminal and `cd` to the app project.
1. Run `gulp watch`.
1. Code...
1. Run the project Activity on Eclipse.

## Watched files

- `merges/android/index.html` or `www/index.html`
- `merges/android/html/**/*`
- `merges/android/css/**/*`
- `merges/android/css/custom.css`
- `www/app/**/*`
- `merges/android/images/svg.html`
- `www/res/**/*`
- `db/*`

## Maintainer

Noel Earvin Piamonte
