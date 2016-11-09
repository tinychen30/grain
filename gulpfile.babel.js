import del from 'del'
import gulp from 'gulp'
import sass from 'gulp-sass'
import plumber from 'gulp-plumber'
import autoprefixer from 'gulp-autoprefixer'
import babel from 'gulp-babel'
import nunjucksRender from 'gulp-nunjucks-render'
import browserSync from 'browser-sync'

const dirs = {
  input: './src/',
  output: './dist/',
  css: {
    main: './src/assets/sass/style.scss',
    src: './src/assets/sass/**/*.scss',
    dist: './dist/content/css'
  },
  js: {
    src: './src/assets/js/**/*.js',
    dist: './dist/content/js'
  },
  html: {
    src: ['./src/views/**/*.html', '!./src/views/master/**', '!./src/views/content/**'],
    dist: './dist'
  }
}

gulp.task('styles', () => {
  return gulp.src(dirs.css.main)
            .pipe(plumber())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(plumber.stop())
            .pipe(gulp.dest(dirs.css.dist))
            .pipe(browserSync.reload({ stream: true }))
})

gulp.task('scripts', () => {
  return gulp.src(dirs.js.src)
            .pipe(babel({
              presets: ['es2015']
            }))
            .pipe(gulp.dest(dirs.js.dist))
            .pipe(browserSync.reload({ stream: true }))
})

gulp.task('html', () => {
  return gulp.src(dirs.html.src)
						.pipe(nunjucksRender({ path: ['./src/views'] }))
						.pipe(gulp.dest('./public'))
            .pipe(browserSync.reload({ stream: true }))
})

gulp.task('clean', () => {
  del.sync([dirs.output])
})

gulp.task('serve', ['styles', 'scripts', 'html'], () => {
  browserSync.init({
    server: {
      baseDir: dirs.output
    }
  })
})

gulp.task('watch', ['serve'], () => {
  gulp.watch(dirs.css.src, ['styles'])
  gulp.watch(dirs.js.src, ['scripts'])
  gulp.watch(dirs.html.src, ['html'])
  gulp.watch(`${dirs.output}*.html'`, browserSync.reload)
})

gulp.task('default', ['watch'])
