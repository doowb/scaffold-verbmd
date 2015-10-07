'use strict';

var writeFile = require('write');
var Metadata = require('metadata');
var metadata = new Metadata();
metadata.set('name', 'scaffold-verbmd');
metadata.set('description', 'Scaffold to add a .verb.md to your project.');
metadata.set('repository', 'https://github.com/doowb/scaffold-verbmd');
metadata.set('homepage', 'https://github.com/doowb');
metadata.set('authors', [{author: 'Brian Woodward', homepage: 'https://github.com/doowb', email: 'brian.woodward@gmail.com'}]);
metadata.addTarget('verbmd', {src: '.verb.md', dest: './'});

writeFile('manifest.json', JSON.stringify(metadata, null, 2));
