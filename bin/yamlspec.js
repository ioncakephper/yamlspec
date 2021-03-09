#!/usr/bin/env node

const program = require('commander')
const path = require('path');
const yamlspec = require('../index');

let version = require('../package.json').version;
let name = path.basename(__filename, path.extname(__filename));

program
    .name(name)
    .version(version)
    .description('YAML to Jasmine specification generator.')
    .usage(`[options] sourceFilename`)

program
    .option('-o, --output <outfilename>', 'name of extended specification filename')
    .option('-s, --suffix <suffix>', 'suffix text to go after test basename', 'Spec')
    .option('-p, --path <outpath>', 'root path for generated specification files', './spec')
    .option('-t, --templatepath <templatepath>', 'path to templates', path.join(__dirname, 'templates'))

program.parse();

let sourceFile = program.args[0];
let source = yamlspec.loadFile(sourceFile);

let filePath = program.opts()['path'];
let ext = path.extname(sourceFile);

let outFilename = (program.opts()['output'])
                    ? program.opts()['output']
                    : path.join(filePath, path.basename(sourceFile, ext) + program.opts()['suffix']);
                    
yamlspec.renderFile(outFilename, source, {template_path: program.opts()['templatepath']});

