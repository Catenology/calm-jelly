'use strict';

const gulp = require('gulp');
const util = require('gulp-util');
const ftp = require('vinyl-ftp');
const minimist = require('minimist');

const deployargs = minimist(process.argv.slice(2));
const conn = ftp.create({
  host: deployargs.host,
  user: deployargs.user,
  password: deployargs.password,
  log: util.log,
});

gulp.task('deploy', ['cleanremote'], () => {
    const globs = ['./dist/**/*.*'];
    const remotepath = '/site/wwwroot/';
    return gulp.src(globs, {buffer: false})
    .pipe(conn.newer(remotepath))
    .pipe(conn.dest(remotepath));
});
