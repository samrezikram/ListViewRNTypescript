import { I18n as I18nJs, Scope, TranslateOptions } from "i18n-js";
import * as RNLocalize from 'react-native-localize';
import { singleton } from "reactject";
import locales from "./locales";

@singleton()
class I18n {
  private readonly i18nJs;
  private _languageCode: string = 'en';

  constructor() {
    this.i18nJs = new I18nJs(locales);

    this.i18nJs.enableFallback = true;
    this.i18nJs.locale = this._languageCode;
  }

  public t(scope: Scope, options?: TranslateOptions) {
    return this.i18nJs.t(scope, options);
  }
}

export default I18n;