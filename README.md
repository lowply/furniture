# Furniture - A hugo theme for fixture.jp

This theme made for [fixture.jp](http://fixture.jp/).

### Theme config

```toml
# theme.toml
name = "Furniture"
license = "MIT"
licenselink = "https://github.com/lowply/furniture/blob/master/LICENSE.md"
description = "Furniture - A hugo theme for fixture.jp"
homepage = "https://github.com/lowply/furniture/"
tags = ["blog"]
min_version = 1.0

[author]
  name = "lowply"
  homepage = "https://github.com/lowply"
```

See [theme.toml](https://github.com/lowply/furniture/blob/master/theme.toml) for the latest config.

### Dependencies

JavaScript:

- [nodebrew](https://github.com/hokaccha/nodebrew) + [node](https://nodejs.org/) + [npm](https://www.npmjs.com/) (no [bower](http://bower.io/))
- [gulp](http://gulpjs.com/) + [browserify](http://browserify.org/)

Ruby:

- [rbenv](https://github.com/sstephenson/rbenv) + [Ruby](https://www.ruby-lang.org/) + [gem](https://rubygems.org/) 
- [sass](http://sass-lang.com/) + [compass](http://compass-style.org/)

Frontend:

- [jquery](https://jquery.com/)
- [bootstrap](http://getbootstrap.com/)
- [font-awesome](http://fortawesome.github.io/Font-Awesome/)
- [highlight.js](https://highlightjs.org/)

### Node

Versions as of Aug 2015:

```
# nodebrew ls
v0.12.7

current: v0.12.7

# node -v
v0.12.7
```

### npm

To install all dependencies, run `npm install` in the theme directory.

### Ruby

Versions as of Aug 2015:

```
# rbenv versions
* 2.2.2 (set by /root/.rbenv/version)

# ruby -v
ruby 2.2.2p95 (2015-04-13 revision 50295) [x86_64-linux]
```

### gem

To install all dependencies, run `bundle install` in the theme directory.

### Gulp

To build JavaScript/CSS files, run `gulp` in the theme directory. This gulpfile does:

- Bundle required libraries into one file (js/bundle.js) and uglify
- Compile SASS to CSS (css/main.css) and minify
- Copy font files from node_modules to static/assets/fonts
- Copy highlight.js CSS files to static/assets/sass with extension .scss so that they can be loaded by @import

### Watch

For development purpose, `gulp sass:watch` and `gulp js:watch` is available.

### Bootstrap

Furniture uses [Bootstrap](http://getbootstrap.com/) and has responsive layout.

### Fonts

For OS X environment, "Helvetica Neue Light" and "HiraKakuInterface-W2" is the primary font. For Windows environment, Meiryo is the primary font.
Uses ["Open Sans" by Google](https://www.google.com/fonts/specimen/Open+Sans) webfont for the title logo.

### Author

Sho Mizutani

