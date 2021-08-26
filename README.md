Formidable Helpers
---------------

Helper functions for Formidable.

![Status](https://github.com/formidablejs/helpers/actions/workflows/test.yml/badge.svg)
![Statements](https://img.shields.io/badge/statements-98.45%25-brightgreen.svg)
![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg)
![Lines](https://img.shields.io/badge/lines-98.29%25-brightgreen.svg)
## Install

This package is automatically installed with the Formidable Framework.

```
npm i @formidablejs/helpers
```

## Introduction

Formidable includes a variety of "helper" functions. Many of these functions are used by the framework itself; however, you are free to use them in your own applications if you find them convenient.

## Available Methods

### `asObject`

The `asObject` method, converts a custom object into a JavaScript object:

```js
const object = asObject(customObject)
```

### `config`

The `config` method gets the value of a configuration variable. The configuration values are accessed using "dot" syntax, which includes the name of the file and the option you wish to access. A default value may be specified and is returned if the configuration option does not exist:

```js
const appName = config('app.name')

const appName = config('app.name', 'Something else')
```

### `dotNotation`

The `dotNotation` method turns an object into a single level value that uses "dot" notation to indicate depth:

```js
const object = {
    app: {
        locale: 'en'
    }
}

const appName = dotNotation(object, 'app.locale')
```

### `env`

The `env` method retrieves the value of an environment variable or returns a default value:

```js
const appName = env('APP_URL')

const appName = env('APP_URL', 'http://localhost:3000')
```

### `isArray`

The `isArray` helper checks if the given variable is a valid `Array`:

```py
if isArray([])
    # do something

```

### `isBoolean`

The `isBoolean` helper checks if the given variable is a valid `Boolean`:

```py
if isBoolean(variable)
    # do something

```

### `isClass`

The `isClass` helper checks if the given variable is a valid `Class`:

```py
if isClass(variable)
    # do something

```

### `isFunction`

The `isFunction` helper checks if the given variable is a valid `Function`:

```py
if isFunction(variable)
    # do something

```

### `isNumber`

The `isNumber` helper checks if the given variable is a valid `Number`:

```py
if isNumber(variable)
    # do something

```

### `isObject`

The `isObject` helper checks if the given variable is a valid `Object`:

```py
if isObject(variable)
    # do something

```

### `isString`

The `isString` helper checks if the given variable is a valid `String`:

```py
if isString(variable)
    # do something

```

### `slug`

The `slug` helper converts the given string into a slug:

```py
slug('Hello world', '-') # hello-world
```

### `toBoolean`

The `toBoolean` helper converts the given variable into a `Boolean` value:

```py
toBoolean('true') # true

toBoolean(true)   # true

toBoolean(1)      # true
```

### `wildcard`

The `wildcard` helper checks if the given variable matches a wildcard:

```py
wildcard('/user/*/edit', '/user/1/edit') # true

wildcard('/tasks/*', 'tasks/learn-imba') # true
```

### `without`

The `without` helper removes specified data from the given `object`:

```py
without({
    name: 'Donald'
    city: 'East Rand'
}, ['city'])

# { name: 'Donald' }
```

> This is a wip

Security
--------

If you discover any security related issues, please email donaldpakkies@gmail.com instead of using the issue tracker.

License
-------

The MIT License (MIT). Please see [License File](LICENSE) for more information.