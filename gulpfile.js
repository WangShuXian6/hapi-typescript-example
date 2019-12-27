"use strict";

const gulp = require("gulp");
const rimraf = require("gulp-rimraf");
const tslint = require("gulp-tslint");
const mocha = require("gulp-mocha");
const shell = require("gulp-shell");
const env = require("gulp-env");
const { watch } = require("gulp");

/**
 * Remove build directory.
 */
gulp.task("clean", function() {
  return gulp.src(outDir, { read: false }).pipe(rimraf());
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task("tslint", () => {
  return gulp
    .src("src/**/*.ts")
    .pipe(
      tslint({
        formatter: "prose"
      })
    )
    .pipe(tslint.report());
});

/**
 * Compile TypeScript.
 */

function compileTS(args, cb) {
  return exec(tscCmd + args, (err, stdout, stderr) => {
    console.log(stdout);

    if (stderr) {
      console.log(stderr);
    }
    cb(err);
  });
}

gulp.task("compile", shell.task(["npm run tsc"]));

/**
 * Watch for changes in TypeScript
 */
gulp.task("watch", shell.task(["npm run tsc-watch"]));
/**
 * Copy config files
 */
gulp.task("configs", cb => {
  return gulp
    .src("src/configurations/*.json")
    .pipe(gulp.dest("./build/src/configurations"));
});

/**
 * Copy vue.js files
 */
gulp.task("vue", cb => {
  return gulp.src("src/pages/**/*").pipe(gulp.dest("./build/src/pages"));
});

/**
 * Copy vue.js files
 */
gulp.task("watch-vue", cb => {
  watch(["src/pages/**/*"], () => {
    return gulp.src("src/pages/**/*").pipe(gulp.dest("./build/src/pages"));
  });
});

/**
 * Build the project.
 */
// gulp.task('build', ['tslint', 'compile', 'configs'], () => {
//   console.log('Building the project ...');
// });

gulp.task(
  "build",
  gulp.series("tslint", "compile", "configs", "vue", () => {
    console.log("Building the project ...");
    return new Promise(function(resolve, reject) {
      console.log("1");
      resolve();
    });
  })
);

gulp.task(
  "test",
  gulp.series("build", cb => {
    const envs = env.set({
      NODE_ENV: "test"
    });

    gulp
      .src(["build/test/**/*.js"])
      .pipe(envs)
      .pipe(mocha({ exit: true }))
      .once("error", error => {
        console.log(error);
        process.exit(1);
      });
  })
);

/**
 * Copy  files
 */
gulp.task("pages-to-root", cb => {
  return gulp.src("src/pages/**/*").pipe(gulp.dest("./pages"));
});

/**
 * Copy  files
 */
gulp.task("pages-to-build", cb => {
  return gulp.src("./.nuxt/**/*").pipe(gulp.dest("./build/src/.nuxt"));
});

gulp.task(
  "default",
  gulp.series("build", function() {
    // Do something after a, b, and c are finished.
  })
);
