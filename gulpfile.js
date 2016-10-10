var gulp = require('gulp'),
    babel = require('gulp-babel'),
    through = require('through2'),
    sp = require('gulp-spsync-creds'),
    cache = require('gulp-cached');

var SRC_FILES = "src/**/*.tsx";
var DIST_FILES = "dist/**/*.*";
var CACHING = 'transpile';

var pubSettings = require('./config.json');

gulp.task("default", ["transpile"], () => {
});

gulp.task("upload", () => {
    return gulp.src(DIST_FILES)
               .pipe(sp.sync(pubSettings));
});

gulp.task("transpile", () => {
    return gulp.src(SRC_FILES)
               .pipe(cache(CACHING))
               .pipe(babel({
                   plugins: ['transform-react-jsx'],
                   presets: ['es2015']
                }))
                .pipe(through.obj(function(file, enc, done) {
                    // Remove all the content before the externalTemplate function
                    var fileContent = file.contents.toString();
                    var replaced = fileContent.substring(fileContent.indexOf('var externalTemplate'), fileContent.length);
                    file.contents = new Buffer(replaced);
                    done(null, file);
                }))
                .pipe(gulp.dest("dist"));
});

gulp.task('watch', () => {
    // Pre-fill cache - cache is required to only transpile the changed file
    gulp.src(SRC_FILES).pipe(cache(CACHING));
    // Watch files to be transpiled
    gulp.watch(SRC_FILES, ['transpile']);
    // Watch changed files to upload
    gulp.watch(DIST_FILES, (event) => {
        // Only upload the changed file
        gulp.src(event.path, { base: 'dist' })
            .pipe(sp.sync(pubSettings));
    });
});