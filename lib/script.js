;(function () {
    'use strict'
    if (!window || typeof window.$flex === 'object') return
    Object.defineProperty(window, '__flexScript', {
        value: {
            web: {},
            listeners: [],
        },
        enumerable: false,
    })
    Object.defineProperty(window, '$flex', {
        value: {},
        writable: true,
        enumerable: true,
    })
    Object.defineProperties(window.$flex, {
        version: { value: 1, writable: true, enumerable: true },
        isMobile: {
            value: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            ),
            writable: true,
            enumerable: true,
        },
        isAndroid: {
            value: /Android/i.test(navigator.userAgent),
            writable: true,
            enumerable: true,
        },
        isiOS: {
            value: /iPhone|iPad|iPod/i.test(navigator.userAgent),
            writable: true,
            enumerable: true,
        },
        isScript: { value: true, writable: false, enumerable: false },
        device: { value: {}, writable: true, enumerable: true },
        addEventListener: {
            value: function (event, callback) {
                window.__flexScript.listeners.push({ e: event, c: callback })
            },
            writable: false,
            enumerable: true,
        },
        web: { value: {}, writable: false, enumerable: true },
    })
    window.__flexScript.web = new Proxy(window.$flex.web, {})
})()
