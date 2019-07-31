# react-state

> React Global Context State

[![NPM](https://img.shields.io/npm/v/react-state.svg)](https://www.npmjs.com/package/react-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-state
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'react-state'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [meftunca](https://github.com/meftunca)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
