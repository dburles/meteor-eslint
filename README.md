# Meteor Eslint

The pluggable linting utility for JavaScript and JSX. This package source was adapted from the core Meteor jshint package.

## Installation

```sh
$ meteor add dburles:eslint
```

## Usage

1. Configure your project to use eslint. See the code style [section on eslint in the Meteor guide](http://guide.meteor.com/code-style.html#eslint).
2. Add an `.eslintrc` file to your project root.

## Example .eslintrc

```json
{
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  }
}
```

[Example project](https://github.com/dburles/meteor-lint-config-example)

### License

MIT
