import { FlexType } from '../../dist/index';
declare const webToNative: import("../../dist/index").$Flex & {
    interface1: (data1: FlexType) => string;
};
declare const nativeToWeb: {
    interface2: () => number;
};
declare type windowFlexType = typeof webToNative;
declare type flexWebType = typeof nativeToWeb;
export default interface customFlexType extends windowFlexType {
    web: flexWebType;
}
export {};
