# yamlspec

## Installation

Install `yamlspec` globally so you can invoke it as command-line program:

```bash
npm i -g yamlspec
```

## YML-format specifications

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

let output = yamlspec.renderFile(outputFilename, source)
```

## CLI

```bash
yamlspec [options] sourceFilename
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

