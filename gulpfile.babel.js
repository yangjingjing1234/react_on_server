
import gulp from "gulp";
import browsersync from "browser-sync";
import webpack from "webpack-stream";
import babel from "gulp-babel";
import es2015 from "babel-preset-es2015";
import react from "babel-preset-react";
import runSequence from "run-sequence";
import wp from "webpack";
import clean from "gulp-clean";

let server = browsersync.create();
gulp.task("clean",()=>{
	return gulp.src(["./public/build/*","./public/dist/*"])
		.pipe(clean());
});
gulp.task("watch",()=>{
  gulp.watch("./public/javascripts/*.jsx",["react","webpack",server.reload]);
  gulp.watch("./*.html",[server.reload]);
})
gulp.task("react",()=>{
  return gulp.src("./public/javascripts/*.jsx")
    .pipe(babel({
      presets:[react,es2015]
    }))
    .pipe(gulp.dest("./public/build/js"));
})
gulp.task("webpack",()=>{
  return gulp.src("./public/build/js/*.js")
		.pipe(webpack({
			entry:{
				lib:["react","react-dom"],
        // home:"./public/build/js/home.js",
				index:"./public/build/js/index.js",
			},
			output:{
        filename:"[name].js",
      },
      stats: {
          // Nice colored output
          colors: true
      },
			plugins:[
				new wp.DefinePlugin({"process.env.NODE_ENV":'"production"'}),
				new wp.optimize.CommonsChunkPlugin("lib.js")
			]
		}))
		.pipe(gulp.dest("./public/dist/js"))
})
gulp.task("devserver",()=>{
  return server.init({
    server:{
      baseDir:"./"
    }
  })
})
gulp.task("build",["clean"],()=>{
  runSequence("react","webpack");
	//runSequence("react");
})
gulp.task("default",["clean"],()=>{
  runSequence("react","watch","webpack","devserver")
})
