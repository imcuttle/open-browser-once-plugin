/**
 * Webpack Plugin for open browser once rather than many times
 * @author 余聪
 */

import { format } from 'url'
import * as openBrowser from 'react-dev-utils/openBrowser'

class OpenBrowserOncePlugin {
  private _isOpened = false
  public get isOpened() {
    return this._isOpened
  }
  constructor(public openUrl: Parameters<typeof format>[0]) {
    if (!openUrl) {
      throw new TypeError(`"openUrl" is required`)
    }
  }

  get name() {
    return this.constructor.name
  }

  apply(compiler) {
    const openHandler = () => {
      if (!this.isOpened) {
        openBrowser(this.openUrl)
      }
      this._isOpened = true
    }

    if (compiler.hooks) {
      compiler.hooks.afterEmit.tap(this.name, openHandler)
    } else {
      compiler.plugin('after-emit', (c, cb) => {
        openHandler()
        return cb()
      })
    }
  }
}

export { OpenBrowserOncePlugin }
