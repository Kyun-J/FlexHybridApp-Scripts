import { flexScriptNative, flexScriptWeb, flexScriptInfo, } from '../../dist/index.js';
flexScriptInfo({
    version: '0.0.1',
    isMobile: true,
});
const webToNative = flexScriptNative({
    interface1: (data1) => {
        return `${data1}, interface1`;
    },
});
const nativeToWeb = flexScriptWeb({
    interface2: () => {
        return 2;
    },
});