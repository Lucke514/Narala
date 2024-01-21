// Importaciones de gulp y plugins
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Función para compilar SASS
gulp.task('sass', () => {
    return gulp.src('./src/public/scss/**/*.scss')
        .pipe(plumber(
            function (err) {
                console.log(err);
                this.emit('end');
            }
        ))
        .pipe(sass())
        .pipe(gulp.dest('./build/public/css'));
});

// Funcion pra compilar JS
gulp.task('js', () => {
    return gulp.src('./src/public/js/**/*.js')
        .pipe(plumber())
        .pipe(gulp.dest('./build/public/js'));
});

// Funcion para copiar imagenes
gulp.task('img', () => {
    return gulp.src('./src/public/img/**/*')
        .pipe(plumber())
        .pipe(gulp.dest('./build/public/img'));
});

// Funcion para copiar EJS 
gulp.task('ejs', () => {
    return gulp.src('./src/views/**/*.ejs')
        .pipe(plumber())
        .pipe(gulp.dest('./build/views'));
});

// Funcion watch para ejecutar tareas automaticamente
gulp.task('watch', () => {
    gulp.watch('./src/public/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/public/js/**/*.js', gulp.series('js'));
    gulp.watch('./src/views/**/*.ejs', gulp.series('ejs'));
    gulp.watch('./src/public/img/**/*', gulp.series('img'));
});

// Funcion por defecto
gulp.task('default', gulp.series('sass', 'js', 'ejs', 'img' ,'watch'));
