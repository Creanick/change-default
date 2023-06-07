# Change Default

## Description

Convert exports.default to module.exports for all .js files in specified directories recursively

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

## Contributing
Contributions to Change Default are more than welcome! If you encounter any bugs, issues, or have suggestions for improvements, please [create an issue](https://github.com/manickjamadar/change-default/issues) or submit a pull request.

## License
Change Default is open-source and released under the [MIT License](https://chat.openai.com/LICENSE). Feel free to use, modify, and distribute this project as per the terms of the license.

## Contact
If you have any questions or inquiries about Change Default, please feel free to contact me at [contact@manickjamadar.com](mailto:contact@manickjamadar.com). I'm always excited to discuss potential collaborations or new opportunities.

Thank you for considering Change Default as a remarkable solution. We look forward to the opportunity of working together and revolutionizing the way people connect and communicate.
