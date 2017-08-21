default: build

install:
	bundle install

watch:
	sass -w --sourcemap=auto static/assets/main.sass:static/assets/main.css

build:
	sass -t compressed --sourcemap=auto static/assets/main.sass > static/assets/main.css
