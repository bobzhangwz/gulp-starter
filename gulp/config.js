var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  compass:{
    src: src +  "/sass/**/*.{sass,scss}",
    dest: dest + '/tmp',
    settings: {
      // config_file: './config.rb',
      sass: src + '/sass',
      image: src + '/images',
      css:  dest
    }
  },
  images: {
    src: [src + "/images/*", "!" + src + "/images/icons"],
    dest: dest + "/images"
  },
  markup: {
    src: src + "/htdocs/**",
    dest: dest
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/javascript/app.coffee',
      dest: dest,
      outputName: 'app.js',
      // Additional file extentions to make optional
      extensions: ['.coffee', '.js']
      // list of modules to make require-able externally
      // require: ['jquery']
    }
    ]
  },
  production: {
    cssSrc: dest + '/**/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
