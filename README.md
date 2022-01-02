# @jdthornton/screenwidth

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/screenwidth.svg)](https://www.npmjs.com/package/@jdthornton/screenwidth)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/screenwidth.svg)](https://www.npmjs.com/package/@jdthornton/screenwidth)

React screen width context and hooks.

## Install

```
$ npm install @jdthornton/screenwidth
```

## Usage

```js
import ScreenWidthProvider, { withIsMobile } from "@jdthornton/screenwidth";

const HelloWorld = withIsMobile(({
  isMobile
}) => (
  <div>
    Hello {isMobile ? "Mobile" : "Desktop"} World!
  </div>
), 1024)

function App(){
  return(
    <ScreenWidthProvider>
      <HelloWorld />
    </ScreenWidthProvider>
  )
}
```
