var gulp = require("gulp");
var runSeq = require("run-sequence");
var plugins = require("gulp-load-plugins")({ lazy: false });
var del = require("del");

var WEB_ROOT = "./wwwroot";
var APP_STYLES = ["./style/**/*.scss", "./app/**/*.scss"];
var INDEX_PAGE = "./app/index.html";
var HTML_PAGES = ["app/**/*.html", "!app/index.html"];
var FONTS = ["./fonts/*.ttf", "./fonts/*.otf"];
var SYSTEMJS_CONFIG = "./systemjs.config.js";

var TYPESCRIPT_FILES = "./app/**/*.ts";
var TYPINIGS_FILES = "./typings/browser/ambient/**/*.d.ts"; //Jasmine + es6-shim

var FILES_TO_COMPILE = [TYPINIGS_FILES, TYPESCRIPT_FILES];
var FILES_TO_LINT = [TYPESCRIPT_FILES];

var TSLINT_REPORTER = plugins.tslint.report("msbuild", {
    emitError: true,
    summarizeFailureOutput: true,
    reportLimit: 50
});

/**************************************************
 *
 *      FILE PATHS
 *
 **************************************************/
var libPaths = {
    npm: "./node_modules",
    libTarget: "./wwwroot/libs/"
};

var libsToMove = [
    libPaths.npm + "/systemjs/**",
    libPaths.npm + "/rxjs/**",
    libPaths.npm + "/es6-shim/**",
    libPaths.npm + "/zone.js/**",
    libPaths.npm + "/reflect-metadata/**",
    libPaths.npm + "/@angular/**"
];

/********************************************************
 *
 *       BUILD TASKS
 *
 ********************************************************/
gulp.task("build", function () {
    runSeq(
        "before-build",
        "compile-typescript",
        "after-build");
});

gulp.task("compile-typescript", function () {
    return compileTypescript(FILES_TO_COMPILE);
});

function compileTypescript(files){
    const tsProject = plugins.typescript.createProject("tsconfig.json");

    return gulp.src(files, { base: "." })
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.typescript(tsProject))
        .pipe(plugins.sourcemaps.write(".", { sourceRoot: "../" }))
        .pipe(gulp.dest(WEB_ROOT));
}

gulp.task("before-build", [
    "clean-webroot",
    "tslint"
], function () { });

gulp.task("after-build", [
    "compile-scss",
    "moveLibsToWebRoot",
    "moveMainPageToWebRoot",
    "moveHtmlToWebRoot",
    "moveFontsToWebRoot",
    "moveSystemJsConfigToWebRoot"
], function () { });

gulp.task("compile-scss", function () {
    return compileScss(APP_STYLES, "app");
});

/******************************************************
 *
 *      WATCH TASKS
 *
 ******************************************************/
gulp.task("watch-scss", function () { gulp.watch([APP_STYLES], ["compile-scss"]); });
gulp.task("watch-html", function () { gulp.watch(HTML_PAGES, ["moveHtmlToWebRoot"]); });

gulp.task("watch-all", ["watch-scss", "watch-html"], function () {
    gulp.watch(TYPESCRIPT_FILES, function (file) {
        console.log(`Recompiling ${file.path}`);
        compileTypescript([TYPINIGS_FILES, file.path]);
    });
});

/******************************************************
 *
 *      MOVE FILES
 *
 ******************************************************/
gulp.task("moveLibsToWebRoot", function () {
    gulp.src(libsToMove)
        .pipe(gulp.dest(function (f) {
            var relativePath = f.base.replace(f.cwd, "");
            relativePath = relativePath.replace("node_modules\\", "");
            return `${WEB_ROOT}/libs/${relativePath}`;
        }));
});

gulp.task("moveSystemJsConfigToWebRoot", function () {
    return gulp.src(SYSTEMJS_CONFIG)
        .pipe(gulp.dest(`${WEB_ROOT}/config`));
});

gulp.task("moveMainPageToWebRoot", function () {
    return gulp.src(INDEX_PAGE)
        .pipe(gulp.dest(WEB_ROOT));
});

gulp.task("moveHtmlToWebRoot", function () {
    return gulp.src(HTML_PAGES, { base: "./" })
        .pipe(gulp.dest(WEB_ROOT));
});

gulp.task("moveFontsToWebRoot", function () {
    return gulp.src(FONTS, { base: "./" })
        .pipe(gulp.dest(WEB_ROOT));
});

gulp.task("clean-webroot", function () { return del([`${WEB_ROOT}/**`, `!${WEB_ROOT}`]); });

gulp.task("tslint", function () {
    return gulp.src(FILES_TO_LINT)
        .pipe(plugins.tslint())
        .pipe(TSLINT_REPORTER);
});

function compileScss(glob, groupingName) {
    return gulp.src(glob)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass(sassOptions))
        .on("error", swallowError)
        .pipe(plugins.sourcemaps.write("./"))
        .pipe(gulp.dest(`${WEB_ROOT}/styles/@${groupingName}`));
}
var sassOptions = {
    includePaths: [__dirname, "node_modules"]
};

/********************************************************
 *
 *      CLEAN TASKS
 *
 ********************************************************/
gulp.task("clean-webroot", function () { return del([`${WEB_ROOT}/**`, `!${WEB_ROOT}`]); });



function swallowError(error) {
    console.log(error.toString());
    this.emit("end");
}