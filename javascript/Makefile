# git submodule update --init
# [sudo] npm install -g uglifyjs

UGLIFY = uglifyjs
UGLIFY_FLAGS = --no-mangle

all: clean thoth.jquery.min.js

thoth.jquery.min.js: thoth.jquery.js
	cat ppx/ppx.js ppx/ppx.jquery.js $< | $(UGLIFY) $(UGLIFY_FLAGS) > $@

clean:
	rm thoth.jquery.min.js

.PHONY: clean
