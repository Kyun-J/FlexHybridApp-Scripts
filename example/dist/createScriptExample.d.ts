declare const flexScript: import("../../dist/index.js").$Flex & {
    interface1: (data1: import("../../dist/index.js").FlexType) => string;
} & {
    web: {
        interface2: () => number;
    };
};
declare type FlexScriptType2 = typeof flexScript;
export declare type FlexScriptType = FlexScriptType2;
export {};
