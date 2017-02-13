import * as gulp from 'gulp';
import transpile from './transpile';
import processMarkup from './process-markup';
import processCSS from './process-css';
import {build} from 'aurelia-cli';
import * as inject from 'gulp-inject';
import * as project from '../aurelia.json';

export default gulp.series(
  readProjectConfiguration,
  gulp.parallel(
    transpile,
    processMarkup,
    processCSS
  ),
  writeBundles,
  injectAppBundle
);

function readProjectConfiguration() {
  return build.src(project);
}

function writeBundles() {
  return build.dest();
}

function injectAppBundle() {
  let appPath: string = '/'+project.build.bundles[0].name;
  var injectScripts = gulp.src(['./'+project.platform.output+appPath], { read: false });
  var injectOptions = { 
    starttag: '<!-- inject:app.js -->', 
    addRootSlash: false, 
    ignorePath: '/.tmp/'
  };
  return gulp.src('./src/index.html')
    .pipe(inject(injectScripts, injectOptions))
    .pipe(gulp.dest('./.tmp'));
}

