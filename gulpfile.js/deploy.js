'use strict';

const gulp = require('gulp');
const util = require('gulp-util');
const ftp = require('vinyl-ftp');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const conn = ftp.create({
  host: args.host,
  user: args.user,
  password: args.password,
  log: util.log,
});
const remotepath = 'site/wwwroot';

gulp.task('cleanremote', () => {
  return conn.rmdir(remotepath, ()=>{
    console.log('Deleted files on ftp');
  });
});

gulp.task('deploy', ['cleanremote'], () => {
    const globs = ['./dist/**/*.*'];
    return gulp.src(globs, {buffer: false})
    .pipe(conn.newer(remotepath))
    .pipe(conn.dest(remotepath));
});
