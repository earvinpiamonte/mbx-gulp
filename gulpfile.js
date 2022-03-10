const { src, dest, series, parallel, watch } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('delete');

const reverseDirectorySegments = __dirname.split('\\').reverse();
const [currentDirectory] = reverseDirectorySegments;

const mpc = 'mpc';
const sim = 'sim';
const indexOnAndroid = currentDirectory == mpc || currentDirectory == sim;
const watchOptions = { ignoreInitial: false };

const paths = {
  index: [
    indexOnAndroid ? 'merges/android/index.html' : 'www/index.html',
    'platforms/android/assets/www/',
  ],
  html: ['merges/android/html/**/*', 'platforms/android/assets/www/html/'],
  css: ['merges/android/css/**/*', 'platforms/android/assets/www/css/'],
  customCss: ['merges/android/css/custom.css', 'merges/android/css/'],
  js: ['www/app/**/*', 'platforms/android/assets/www/app/'],
  svg: [
    'merges/android/images/svg.html',
    'platforms/android/assets/www/images/',
  ],
  locale: ['www/res/**/*', 'platforms/android/assets/www/res/'],
  migration: ['db/*', 'platforms/android/assets/db/migration/'],
};

const { index, html, css, customCss, js, svg, locale, migration } = paths;

const [indexSrc, indexOutput] = index;
const [htmlSrc, htmlOutput] = html;
const [cssSrc, cssOutput] = css;
const [customCssSrc, customCssOutput] = customCss;
const [jsSrc, jsOutput] = js;
const [svgSrc, svgOutput] = svg;
const [localeSrc, localeOutput] = locale;
const [migrationSrc, migrationOutput] = migration;

function copyIndexFile() {
  return src(indexSrc).pipe(dest(indexOutput));
}

function copyHtmlFiles() {
  return src(htmlSrc).pipe(dest(htmlOutput));
}

function copyCssFiles() {
  return src(cssSrc).pipe(dest(cssOutput));
}

function copyJsFiles() {
  return src(jsSrc).pipe(dest(jsOutput));
}

function copySvgFile() {
  return src(svgSrc).pipe(dest(svgOutput));
}

function copyLocaleFiles() {
  return src(localeSrc).pipe(dest(localeOutput));
}

function copyMigrationFiles() {
  return src(migrationSrc).pipe(dest(migrationOutput));
}

function cleanHtmlFiles(cb) {
  del([htmlOutput], cb);
}

function cleanCssFiles(cb) {
  del([cssOutput], cb);
}

function cleanJsFiles(cb) {
  del([jsOutput], cb);
}

function cleanMigrationFiles(cb) {
  del([migrationOutput], cb);
}

function cleanAll(cb) {
  del(
    [
      `${indexOutput}index.html`,
      htmlOutput,
      cssOutput,
      jsOutput,
      svgOutput,
      localeOutput,
      migrationOutput,
    ],
    cb
  );
}

function minifyCustomCss() {
  return src(customCssSrc, { allowEmpty: true })
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest(customCssOutput));
}

function watchFiles() {
  watch(indexSrc, watchOptions, copyIndexFile);
  watch(htmlSrc, watchOptions, series(cleanHtmlFiles, copyHtmlFiles));
  watch(cssSrc, watchOptions, series(cleanCssFiles, copyCssFiles));
  watch(customCssSrc, watchOptions, minifyCustomCss);
  watch(jsSrc, watchOptions, series(cleanJsFiles, copyJsFiles));
  watch(svgSrc, watchOptions, copySvgFile);
  watch(localeSrc, watchOptions, copyLocaleFiles);
  watch(
    migrationSrc,
    watchOptions,
    series(cleanMigrationFiles, copyMigrationFiles)
  );
}

exports.watch = watchFiles;

exports.default = series(
  cleanAll,
  parallel(
    copyIndexFile,
    copyHtmlFiles,
    series(minifyCustomCss, copyCssFiles),
    copyJsFiles,
    copySvgFile,
    copyLocaleFiles,
    copyMigrationFiles
  )
);
