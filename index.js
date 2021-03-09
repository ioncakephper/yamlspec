const fileEasy = require('file-easy')
const fs = require('fs')
const hbsr = require('hbsr')
const util = require('util')
const yamljs = require('yamljs')

module.exports = {
    /**
     * Load source file with YAML specification.
     * 
     * @param {string} sourceFilename 
     * @param {Object} [options={}] 
     * @returns {Object} Specification object.
     */
    loadFile: function(sourceFilename, options = {}) {
        options = {...{sourceFilenameExtension: '.yml'}, ...options};

        if (util.isString(sourceFilename) && sourceFilename.trim().length) {
            sourceFilename = fileEasy.setDefaultExtension(sourceFilename, options.sourceFilenameExtension)
            if (fs.existsSync(sourceFilename)) {               
                let source = yamljs.load(sourceFilename);

                source.items.forEach((item) => {
                    item.describe.what = item.describe.what.replace(/\'/gi, '\\\'');
                    item.describe.what = item.describe.what.replace(/\"/gi, '\\\"');
                    item.describe.items.forEach((item) => {
                        item.it = item.it.replace(/\'/gi, '\\\'');
                        item.it = item.it.replace(/\"/gi, '\\\"');
                    })
                })

                return source;
            }
            return {};
        }
    },

    /**
     * Render extended specification content.
     * 
     * @param {Object} source Specification object.
     * @param {Object} [options={}] Rendering options. 
     * @returns {string} Expanded resulting specification content.
     */
    render: function(source, options = {}) {
        options = {...{renderTemplate: 'specfile', template_path: './templates'}, ...options}
        let data = { items: source.items, package: source.package };

        hbsr.options.template_path = options.template_path;
        return hbsr.render_template(options.renderTemplate, data)
    },

    /**
     * Render file with exptended specification content.
     * 
     * @param {string} outputFilename Path-like string of output filename.
     * @param {Object} source Specification object. 
     * @param {Object} [options={}] Rendering options. 
     */
    renderFile: function(outputFilename, source = {}, options = {}) {
        source = {...{items: []}, ...source};

        outputFilename = fileEasy.setDefaultExtension(outputFilename, '.js')
        let content = this.render(source, options);
        fileEasy.saveDocument(outputFilename, content);
    }
}