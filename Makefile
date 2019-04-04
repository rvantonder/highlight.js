all:
	node tools/build.js :common && npm run test-browser
