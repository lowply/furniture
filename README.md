[![Build Status](https://travis-ci.org/lowply/furniture.svg?branch=travis)](https://travis-ci.org/lowply/furniture)

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

### Installation/Development

```
$ cd /path/to/hugo/themes/
$ git clone https://github.com/lowply/furniture.git
$ cd furniture
$ make install
$ make build
```

Read Makefile for tasks.

### Dependencies

JavaScript:

- [Node](https://nodejs.org/) + [npm](https://www.npmjs.com/) + [webpack](https://webpack.github.io/)

Frontend:

- [jQuery](https://jquery.com/)
- [Bootstrap](http://getbootstrap.com/)
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
- [highlight.js](https://highlightjs.org/)

### Node

Versions as of Jan 2017:

```
$ node -v
v6.9.1

$ npm -v
3.10.8
```

### Author

Sho Mizutani

