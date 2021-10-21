# FlexHybridApp-Scripts

This library is available for [Android](https://github.com/Kyun-J/FlexHybridApp-Android), [iOS](https://github.com/Kyun-J/FlexHybridApp-iOS), **This library cannot be used alone.**

\$flex object is basically created in native(AOS, iOS) and inserted into webview.  
If you call \$flex on the webpage before it is inserted, you will get an error.

**This library prevents errors by creating \$flex objects in advance,  
It exists to make it easy to add items to declare.**

# How to use

## cdn

Preload the \$flex object into the window.

```html
<script
    type="application/javascript"
    src="https://cdn.jsdelivr.net/npm/flex-hybrid-app-scripts@0.0.2/dist/script.min.js"
></script>
```

## npm

You can import a \$flex object using require or import.  
By making a dummy of the things to be declared in the \$flex object in the native environment, it can be accessed usefully during development.  
However, this does not apply to the actual \$flex object. Declare the actual \$flex object using [Android](https://github.com/Kyun-J/FlexHybridApp-Android), [iOS](https://github.com/Kyun-J/FlexHybridApp-iOS) do it.

```
npm i flex-hybrid-app-scripts
```

## Example of using Typescript

```ts
// $flex dummy setup
import $flex, {
    flexScriptNative,
    flexScriptWeb,
    flexScriptInfo,
    FlexType,
} from 'flex-hybrid-app-scripts'

// Apply dummy settings of $flex object
flexScriptInfo({
    version: '0.0.2',
    isMobile: true,
})

// Set dummy function for web to native interface
const webToNative = flexScriptNative({
    interface1: (data1: FlexType) => {
        return `${data1}, interface1`
    },
})

// Set dummy function for native to web interface
const nativeToWeb = flexScriptWeb({
    interface2: () => {
        return 2
    },
})

type windowFlexType = typeof webToNative
type flexWebType = typeof nativeToWeb

// $flex dummy type export
export default interface customFlexType extends windowFlexType {
    web: flexWebType
}
```

```ts
// set global tyle
import customFlexType from '../src/scriptExample'

declare global {
    interface Window {
        $flex: customFlexType
    }
}
```

```ts
// use in develop
window.$flex.interface1('hello')
```
