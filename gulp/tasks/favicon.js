import gulp from 'gulp'
import nunjucksRender from 'gulp-nunjucks-render'
import browserSync from 'browser-sync'

gulp.task('favicon', () => {
    return gulp.src(['./src/assets/content/favicon/**'])
        .pipe(nunjucksRender({ path: ['./src/assets/content/favicon'] }))
		.pipe(gulp.dest('./public/content/favicon'))
        .pipe(browserSync.reload({ stream: true }))
})
