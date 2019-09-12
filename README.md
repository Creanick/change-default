# Change Default

## Description

Convert exports.default to module.exports for all .js files in specified directories

You can specify directory by --dir option

> **Note**: it will not change if more exports are occurred

## Installation

```js
    npm install -g change-default
```

Github Repository
[Source Code](https://github.com/Creanick/change-default)

## Usage

```
$: change-default --dir=build
```

--dir is optional

default dir is current directory

## Examples

> Before

```javascript
function add(x, y) {
  return x + y;
}
exports.default = add;
```

> After

```javascript
function add(x, y) {
  return x + y;
}
module.exports = add;
```

> Will not work when:

```javascript
function add(x, y) {
  return x + y;
}
exports.owner = "Manick";
exports.default = add;
```

if there is more exports it will not change anything

## License

The MIT License (MIT) - 2019
