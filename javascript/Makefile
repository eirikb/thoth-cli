# git submodule update --init
# [sudo] npm install -g uglifyjs

UGLIFY = uglifyjs
UGLIFY_FLAGS = --no-mangle

all: thoth.jquery.min.js

thoth.jquery.min.js: thoth.jquery.js
	cat ppx/ppx.js ppx/ppx.jquery.js thoth.jquery.js | $(UGLIFY) $(UGLIFY_FLAGS) $< > $@

clean:
	# Might add some stuff here


.PHONY: clean
