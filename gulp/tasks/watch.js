import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('watch', ['serve'], () => {
    gulp.watch('./src/assets/sass/**/*.scss', ['styles'])
    gulp.watch('./src/assets/favicon/**', ['favicon'])
    gulp.watch('./src/assets/fonts/**', ['fonts'])
    gulp.watch('./src/assets/images/**', ['images'])
    gulp.watch('./src/assets/js/**', ['scripts'])
    gulp.watch(['./src/views/**/*.html', '!./src/views/partials/**'], ['html'])
    gulp.watch('./public/*.html', browserSync.reload)
})
