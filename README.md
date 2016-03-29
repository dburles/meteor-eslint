# Meteor Eslint

The pluggable linting utility for JavaScript and JSX. This package source was adapted from the core Meteor jshint package.

## Installation

```sh
$ meteor add dburles:eslint
```

## Usage

Add an `.eslintrc` file to your project root. Here's a slightly modifed version of the Meteor configuration https://gist.github.com/dburles/a2f7ea77189b268b660d

### Default `.eslintrc`

The following is what gets overwritten by the `.eslintrc`:

```json
{
  "env": {
    "meteor": true,
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  }
}
```

### License

MIT
