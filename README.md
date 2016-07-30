# Furniture - A hugo theme for fixture.jp

This theme is made for [fixture.jp](http://fixture.jp/).

### Theme config

```toml
# theme.toml
name = "Furniture"
license = "MIT"
licenselink = "https://github.com/lowply/furniture/blob/master/LICENSE"
description = "Furniture - A hugo theme for fixture.jp"
homepage = "https://github.com/lowply/furniture/"
tags = ["blog"]
min_version = 0.15

[author]
  name = "lowply"
  homepage = "https://github.com/lowply"
```

See [theme.toml](https://github.com/lowply/furniture/blob/master/theme.toml) for the latest config.

### Installation

```
$ cd /path/to/hugo/themes/
$ git clone https://github.com/lowply/furniture.git
$ cd furniture
$ make install
$ make build
```

And start hugo dev server. Read Makefile for more tasks.

### Dependencies

JavaScript:

- [Node](https://nodejs.org/) + [npm](https://www.npmjs.com/) + [webpack](https://webpack.github.io/)

Frontend:

- [jQuery](https://jquery.com/)
- [Bootstrap](http://getbootstrap.com/)
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
- [highlight.js](https://highlightjs.org/)

### Node

Versions as of Jul 2016:

```
$ n --version
2.1.3

$ n latest

$ node -v
v6.3.1

$ npm -v
3.10.3
```

### Bootstrap

Furniture uses [Bootstrap](http://getbootstrap.com/) and has responsive layout.

### Fonts

For OS X environment, "Helvetica Neue Light" and "HiraKakuInterface-W2" is the primary font. For Windows environment, Meiryo is the primary font.
Uses ["Open Sans" by Google](https://www.google.com/fonts/specimen/Open+Sans) webfont for the title logo.

### Author

Sho Mizutani

