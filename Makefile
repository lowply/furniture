default: build

install:
	bundle install

build:
	sass -t compressed static/assets/main.sass > static/assets/main.css
