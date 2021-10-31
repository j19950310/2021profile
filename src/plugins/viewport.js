import { debounce } from 'lodash-es'
import { detect } from 'detect-browser'

export default class Viewport {
    constructor () {
        Object.assign(this, {
            width: 0,
            height: 0,
            _isMobile: false,
            _isTablet: false,
            _isDesktop: false,
        })

        this.refresh = debounce(this.update, 200)
        this.update()
        window.addEventListener('resize', this.refresh)
    }

    destroy () {
        window.removeEventListener('resize', this.refresh)
    }

    update () {
        console.count()
        const { name, os } = detect()
        this.isDesktop = window.matchMedia(mediaQuery.desktop).matches
        this.isTablet = window.matchMedia(mediaQuery.tablet).matches
        this.isMobile = window.matchMedia(mediaQuery.mobile).matches
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.isPc = os
        this.isIE = name
        console.log(this.isDesktop)
    }

    set isDesktop (val) {
        this._isDesktop = val
    }

    get isDesktop () {
        if (this._isDesktop === undefined) this.update()
        return this._isDesktop
    }

    set isTablet (val) {
        this._isTablet = val
    }

    get isTablet () {
        if (this._isTablet === undefined) this.update()
        return this._isTablet
    }

    set isMobile (val) {
        this._isMobile = val
    }

    get isMobile () {
        if (this._isMobile === undefined) this.update()
        return this._isMobile
    }

    set isPc (os) {
        this._os = os
    }

    get isPc () {
        if (this._os === undefined) this.update()
        return this._os !== 'iOS' && this._os !== 'Android OS'
    }

    set isIE (value) {
        this._name = value
    }

    get isIE () {
        if (this._name === undefined) this.update()
        return this._name === 'ie'
    }
}
