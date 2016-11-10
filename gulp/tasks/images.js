import gulp from 'gulp'
import nunjucksRender from 'gulp-nunjucks-render'
import browserSync from 'browser-sync'

gulp.task('images', () => {
    return gulp.src(['./src/assets/content/images/**'])
        .pipe(nunjucksRender({ path: ['./src/assets/content/images'] }))
        .pipe(gulp.dest('./public/content/images'))
        .pipe(browserSync.reload({ stream: true }))
})
