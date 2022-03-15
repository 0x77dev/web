all: deps build dev

deps:
	git submodule init
	git submodule update

build:
	hugo

dev:
	hugo server
