export interface $Flex {
    version: string
    isMobile: boolean
    isAndroid: boolean
    isiOS: boolean
    isScript: boolean
    device: { [key: string]: any }
    addEventListener(event: string, callback: Function): void
    web: FlexInterfaces
}

export interface FlexInfo {
    version?: string
    isMobile?: boolean
    isAndroid?: boolean
    isiOS?: boolean
    device?: object
}

export type FlexFunc = (...args: FlexType[]) => FlexType

export type FlexInterfaces = { [key: string]: FlexFunc }

export type FlexType =
    | number
    | boolean
    | string
    | Array<FlexType>
    | FlexInterfaces
    | undefined
    | null
    | Error

export function flexScriptInfo(info: FlexInfo): $Flex

export function flexScriptNative<F extends FlexInterfaces>(
    webToNevice: F
): $Flex & F

export function flexScriptWeb<F extends FlexInterfaces>(nativeToWeb: F): F
