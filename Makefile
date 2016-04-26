default: build

install:
	npm install

destroy:
	rm -rf node_modules
	
clean:
	rm -rf static/assets/*

build: clean
	NODE_ENV=production ./node_modules/.bin/webpack -p

dev: clean
	./node_modules/.bin/webpack

watch:
	./node_modules/.bin/webpack -w src/main.jsx
