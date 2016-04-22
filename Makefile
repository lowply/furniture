default: build

install:
	npm install

destroy:
	rm -rf node_modules
	
clean:
	rm -rf static/assets/*

build:
	./node_modules/.bin/webpack -p

build-dev:
	rm -rf static/assets/*
	./node_modules/.bin/webpack

watch:
	./node_modules/.bin/webpack --watch
