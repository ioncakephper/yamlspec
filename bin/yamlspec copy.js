#!/usr/bin/env node

const program = require('commander')
const fileEasy = require('file-easy')
const hbsr = require('hbsr')
const yamljs = require('yamljs')
const fs = require('fs');
const path = require('path');


hbsr.options.template_path = path.join(__dirname, 'templates');

let version = require('../package.json').version;
let name = path.basename(__filename, path.extname(__filename));

program
    .name(name)
    .version(version)
    .description('YAML to Jasmine specification generator.')
    .usage(`[options] sourceFilename`)

program
    .option('-s, --suffix <suffix>', 'suffix text to go after test basename', 'Spec')
    .option('-p, --path <outpath>', 'root path for generated specification files', './spec')

program.parse();

let sourceFile = program.args[0];

if (sourceFile && sourceFile.length) {
    sourceFile = fileEasy.setDefaultExtension(sourceFile, '.yml');
    if (fs.existsSync(sourceFile)) {
        let source = yamljs.load(sourceFile);

        source.items.forEach((item) => {
            item.describe.what = item.describe.what.replace(/\'/gi, '\\\'');
            item.describe.what = item.describe.what.replace(/\"/gi, '\\\"');
            item.describe.items.forEach((item) => {
                item.it = item.it.replace(/\'/gi, '\\\'');
                item.it = item.it.replace(/\"/gi, '\\\"');
            })
        })

        let data = { items: source.items, package: source.package };
        let output = hbsr.render_template('specfile', data);

        let filePath = program.opts()['path'];
        let ext = path.extname(sourceFile);

        let outFilename = path.join(filePath, path.basename(sourceFile, ext) + program.opts()['suffix']);
        outFilename = fileEasy.setDefaultExtension(outFilename, '.js')
        fileEasy.saveDocument(outFilename, output);
    }
}
