var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// 静态服务器
gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "./www"
        }
    });

    gulp.watch("./www/*.html").on('change', reload);

});
