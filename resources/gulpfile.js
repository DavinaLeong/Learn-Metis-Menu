const PATHS = {
    nodeModules: "./node_modules/",
    vendor: "./vendor/"
};

const GULP = require("gulp"),
    DEBUG = require("gulp-debug"),
    DEL = require("del");

GULP.task("default", ["vendor"]);

GULP.task("vendor", ["clear-vendor", "copy-vendor"]);

GULP.task("copy-vendor", () => {
    //bootstrap
    GULP.src(PATHS.nodeModules + "bootstrap/dist/**/bootstrap.*")
        .pipe(DEBUG({ title: "copied bootstrap" }))
        .pipe(GULP.dest(PATHS.vendor + "bootstrap"));

    //jquery
    GULP.src(PATHS.nodeModules + "jquery/dist/**/*.js")
        .pipe(DEBUG({ title: "copied jquery" }))
        .pipe(GULP.dest(PATHS.vendor + "jquery"));

    //popper.js
    GULP.src(PATHS.nodeModules + "popper.js/dist/umd/**/*.js")
        .pipe(DEBUG({ title: "copied popperjs" }))
        .pipe(GULP.dest(PATHS.vendor + "popperjs"));
});

GULP.task("clear-vendor", () => {
    DEL.sync([
        PATHS.vendor + "bootstrap/*",
        PATHS.vendor + "jquery/*",
        PATHS.vendor + "popperjs/*",
        "!" + PATHS.vendor
    ]);
});