# yamlspec

Generates `JavaScript` package specification files from a `.yml` specification file, giving both developers and QA team a quick and productive tool for writing specifications.  

## Installation

Install `yamlspec` globally so you can invoke it as command-line program:

```bash
npm i -g yamlspec
```

Check `yamlspec` runs at command-prompt:

```bash
yamlspec -V
v1.0.5
```

## YML-format specifications

To expedite specification formulation process, `yamlspec` introduces its alternative to traditional `.js` code. Those familiar with `Jasmine` and its related specification frameworks based on `.js` will recognize the `describe` and `it` entries.

The example below contains specifications for `<packageName>` package, which is invoked with a `require` statement. The package is placed in a constant whose name is also `<packageName>`.

The specification contains two `describe` sections, aka "test sets", inside the `items` key. Each section contains its own test cases as `it` entries. The test cases fall under a test set's `items`.

```yaml
package:
    - require: <packageName>
    - const: <packageName>
items:
    - describe:
        what: <packageName>
        items:
            - it: should have method a
    - describe:
        what: method a
        items:
            - it: should return a string
            - it: should return an empty string when input parameter is empty
            - it: should return en empty string when input parameter is not specified
            - it: should return an empty string when input parameter has only delimiters 
```

## JavaScript Code

```js
const yamlspec = require('yamlspec')

let sourceFilename = '/path/to/specsInYamlFormat.yml';

let source = yamlspec.loadFile(sourceFilename)
yamlspec.renderFile('/path/to/spec/folder/specfilename.js', source);
```

## CLI

```bash
yamlspec [options] sourceFilename
```
```bash
yamlspec -h
Usage: yamlspec [options] sourceFilename

YAML to Jasmine specification generator.

Options:
  -V, --version                      output the version number
  -o, --output <outfilename>         name of extended specification filename
  -s, --suffix <suffix>              suffix text to go after test basename (default: "Spec")
  -p, --path <outpath>               root path for generated specification files (default: "./spec")
  -t, --templatepath <templatepath>  path to templates (default: ".\\bin\\templates")
  -h, --help                         display help for command
```


## Examples

1. Create your working folder with `mkdir myfolder`, `cd myfolder`, and create `mypackage.yml` as follows:

```yaml
package:
    request: fs
    const: fs

items:
    - describe:
        what: Simple test suite
        items:
            - it: First test description
            - it: Second test description
            - it: Third test description
```

2. Run `yamlspec`

```bash
yamlspec mypackage
```

`yamlspec` generates the `./spec/mypackageSpec.js`

```js
const fs = require('fs');

describe('Simple test suite', () => {

    // First test description
    it('First test description', () => {
        //
        // @todo First test description
        //
        expect(0).toEqual(1)
    })

    // Second test description
    it('First test description', () => {
        //
        // @todo Second test description
        //
        expect(0).toEqual(1)
    })

    // Third test description
    it('Third test description', () => {
        //
        // @todo Third test description
        //
        expect(0).toEqual(1)
    })
})
```

3. Invoke `Jasmine`, confirming your specifications are available. All will fail.

```bash
jasmine
```

## API
### Functions

<dl>
<dt><a href="#loadFile">loadFile(sourceFilename, [options])</a> ⇒ <code>Object</code></dt>
<dd><p>Load source file with YAML specification.</p>
</dd>
<dt><a href="#render">render(source, [options])</a> ⇒ <code>string</code></dt>
<dd><p>Render extended specification content.</p>
</dd>
<dt><a href="#renderFile">renderFile(outputFilename, source, [options])</a></dt>
<dd><p>Render file with exptended specification content.</p>
</dd>
</dl>

<a name="loadFile"></a>

### loadFile(sourceFilename, [options]) ⇒ <code>Object</code>
Load source file with YAML specification.

**Kind**: global function  
**Returns**: <code>Object</code> - Specification object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| sourceFilename | <code>string</code> |  | Source filename in .yaml format |
| [options] | <code>Object</code> | <code>{}</code> | File loading options. |

<a name="render"></a>

### render(source, [options]) ⇒ <code>string</code>
Render extended specification content.

**Kind**: global function  
**Returns**: <code>string</code> - Expanded resulting specification content.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| source | <code>Object</code> |  | Specification object. |
| [options] | <code>Object</code> | <code>{}</code> | Rendering options. |

<a name="renderFile"></a>

### renderFile(outputFilename, source, [options])
Render file with exptended specification content.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| outputFilename | <code>string</code> |  | Path-like string of output filename. |
| source | <code>Object</code> |  | Specification object. |
| [options] | <code>Object</code> | <code>{}</code> | Rendering options. |

