yaml = require('js-yaml');
fs = require('fs');

// Get document, or throw exception on error
try {
	var stylelintYamlConfig = fs.readFileSync('.stylelintrc', 'utf8');
	var stylelintConfigObject = yaml.safeLoad(stylelintYamlConfig);

	// make a module of it
	var stylelintConfigModule = 'module.exports = ' + JSON.stringify(stylelintConfigObject, null, 4);

	fs.writeFileSync('config.js', stylelintConfigModule, {'encoding': 'utf-8'})
} catch (e) {
	console.log(e);
}