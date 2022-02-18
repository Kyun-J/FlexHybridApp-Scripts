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
    | { [key: string]: FlexType }
    | undefined
    | null
    | Error
    | void

export function setFlexInfo(info: FlexInfo): $Flex

export function setFlexNativeInterface<F extends FlexInterfaces>(
    webToNevice: F
): $Flex & F

export function setFlexWebInterface<F extends FlexInterfaces>(
    nativeToWeb: F
): $Flex & { web: F }

export function setFlexScript<
    F extends FlexInterfaces,
    E extends FlexInterfaces
>(info: FlexInfo, webToNevice: F, nativeToWeb: E): $Flex & F & { web: E }

export const $flex: $Flex

export default $flex
