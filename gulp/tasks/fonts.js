import gulp from 'gulp'
import nunjucksRender from 'gulp-nunjucks-render'
import browserSync from 'browser-sync'

gulp.task('fonts', () => {
    return gulp.src(['./src/assets/content/fonts/**'])
        .pipe(nunjucksRender({ path: ['./src/assets/content/fonts'] }))
        .pipe(gulp.dest('./public/content/fonts'))
        .pipe(browserSync.reload({ stream: true }))
})
