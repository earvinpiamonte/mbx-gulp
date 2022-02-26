## mbx-gulp

## Features

- Copies files (HTML, CSS, JS, SQL) from the source directory to `platforms/`
- Minifies CSS

## Prerequisite

Install the gulp command line utility globally.

```
npm install --global gulp-cli
```

## Setup and installation

There are two ways to setup this project on an existing app project.

1. Setup with via npx (recommended)
1. Setup with git and npm

### 1. Setup via npx

```
npx mbx-cli build -u
```

Visit [https://github.com/earvinpiamonte/mbx-cli](https://github.com/earvinpiamonte/mbx-cli) for full documentaion of `mbx-cli`.

### 2. Setup with git and npm

Clone this project via git and install the dependencies via npm.

```
cd APP_WORKSPACE_2022-01/app/
```

```
git init && git remote add origin https://github.com/earvinpiamonte/mbx-gulp.git && git pull origin main && rm -rf .git
```

```
npm i
```

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
