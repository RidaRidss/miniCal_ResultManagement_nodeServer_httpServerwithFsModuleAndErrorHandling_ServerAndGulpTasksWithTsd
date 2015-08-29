/**
 * Created by Rida on 8/29/2015.
 */
var gulp=require('gulp');var tsd = require('gulp-tsd');gulp.task('tsd', function () {return gulp.src('tsd_to_write_gulp/task/task_file.d.ts').pipe(tsd()).pipe(gulp.dest('tsd_to_write_gulp/'));});
