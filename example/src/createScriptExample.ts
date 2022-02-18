import {
    setFlexNativeInterface,
    setFlexWebInterface,
    setFlexInfo,
    setFlexScript,
} from '../../dist/index.js'

setFlexInfo({
    version: '0.0.1',
    isMobile: true,
})

const webToNative = setFlexNativeInterface({
    interface1: (data1) => {
        return `${data1}, interface1`
    },
})

const nativeToWeb = setFlexWebInterface({
    interface2: () => {
        return 2
    },
})

const flexScript = setFlexScript(
    {
        version: '0.0.1',
        isMobile: true,
    },
    {
        interface1: (data1) => {
            return `${data1}, interface1`
        },
    },
    {
        interface2: () => {
            return 2
        },
    }
)

declare type FlexScriptType1 = typeof webToNative & typeof nativeToWeb

declare type FlexScriptType2 = typeof flexScript

export type FlexScriptType = FlexScriptType2
