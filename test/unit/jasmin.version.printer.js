// Just print jasmine version to use right docs.
// originaly got form here: http://stackoverflow.com/a/24919927/1105860
if (jasmine.version) { //the case for version 2.0.0
	console.log('jasmine-version:' + jasmine.version);
} else { //the case for version 1.3
	console.log('jasmine-version:' + jasmine.getEnv().versionString());
}
