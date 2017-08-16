default: build

install:
	bundle install

watch:
	sass -w static/assets/main.sass:static/assets/main.css

build:
	sass -t compressed static/assets/main.sass > static/assets/main.css
