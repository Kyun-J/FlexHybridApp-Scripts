import './script.min.js'

export function setFlexInfo(info) {
  if (!window || !window.$flex.isScript)
    throw Error('$flex is not in Script mode.')
  if (typeof info === 'object') {
    if (typeof info.version === 'string')
      window.$flex.version = info.version
    if (typeof info.isMobile === 'boolean')
      window.$flex.isMobile = info.isMobile
    if (typeof info.isAndroid === 'boolean')
      window.$flex.isAndroid = info.isAndroid
    if (typeof info.isiOS === 'boolean') window.$flex.isiOS = info.isiOS
    if (typeof info.device === 'object') window.$flex.device = info.device
  }
  return window.$flex
}

export function setFlexNativeInterface(webToNevice) {
  if (!window || !window.$flex.isScript)
    throw Error('$flex is not in Script mode.')
  if (typeof webToNevice === 'object') {
    Object.keys(webToNevice).forEach((key) => {
      if (
        key === 'version' ||
        key === 'isMobile' ||
        key === 'isAndroid' ||
        key === 'isiOS' ||
        key === 'isScript' ||
        key === 'device' ||
        key === 'addEventListener' ||
        key === 'web'
      ) {
        delete webToNevice[key]
      }
    })
    Object.assign(window.$flex, webToNevice)
  }
  return window.$flex
}

export function setFlexWebInterface(nativeToWeb) {
  if (!window || !window.$flex.isScript)
    throw Error('$flex is not in Script mode.')
  if (typeof nativeToWeb === 'object') {
    Object.assign(window.$flex.web, nativeToWeb)
  }
  return window.$flex.web
}

export function setFlexScript(info, webToNevice, nativeToWeb) {
  if (!window || !window.$flex.isScript)
    throw Error('$flex is not in Script mode.')
  setFlexInfo(info)
  setFlexNativeInterface(webToNevice)
  setFlexWebInterface(nativeToWeb)
  return window.$flex
}

export const $flex = window.$flex

export default $flex
