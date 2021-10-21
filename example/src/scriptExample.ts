import $flex, {
    flexScriptNative,
    flexScriptWeb,
    flexScriptInfo,
    FlexType,
} from '../../dist/index'

console.log($flex.isScript)

flexScriptInfo({
    version: '0.0.1',
    isMobile: true,
})

const webToNative = flexScriptNative({
    interface1: (data1: FlexType) => {
        return `${data1}, interface1`
    },
})

const nativeToWeb = flexScriptWeb({
    interface2: () => {
        return 2
    },
})

type windowFlexType = typeof webToNative
type flexWebType = typeof nativeToWeb

export default interface customFlexType extends windowFlexType {
    web: flexWebType
}
