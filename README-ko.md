# FlexHybridApp-Scripts

**이 라이브러리는 필수가 아닙니다.**  
이 라이브러리는 [Android](https://github.com/Kyun-J/FlexHybridApp-Android), [iOS](https://github.com/Kyun-J/FlexHybridApp-iOS)를 보조하는 라이브러리며,  
**이 라이브러리를 단독으로 사용할 수 없습니다.**

\$flex객체는, 기본적으로 native(AOS, iOS)에서 생성되어 webview에 삽입됩니다.  
삽입되기 전에 webpage에서 \$flex를 호출하면, 오류가 발생하게 됩니다.

**이 라이브러리는 미리 \$flex객체를 생성하여 오류를 막고, Typescript 개발 시 \$flex객체에  
선언할 항목을 쉽게 추가하기 위해 존재합니다.**

# 사용법

## cdn

\$flex 객체를 미리 window에 로드합니다.

```html
<script
    type="application/javascript"
    src="https://cdn.jsdelivr.net/npm/flex-hybrid-app-scripts@0.0.3-fix/dist/script.min.js"
></script>
```

## npm

require 혹은 impoert를 사용하여 \$flex 객체를 가져올 수 있으며,  
native환경에서 \$flex객체에 선언될 사항의 dummy를 제작하여 개발 시 유용하게 접근 할 수 있습니다.  
단, 실제 \$flex객체에 적용되는 것은 아닙니다. [Android](https://github.com/Kyun-J/FlexHybridApp-Android), [iOS](https://github.com/Kyun-J/FlexHybridApp-iOS 를 활용하여 실제 \$flex 객체를 선언하십시오.

```
npm i flex-hybrid-app-scripts
```

## Typescript 사용 예시

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
