import * as Localization from "expo-localization"
import i18n from "i18n-js"

const en = require("./en")
const fi = require("./fi")

i18n.fallbacks = true
i18n.translations = { en, fi }

i18n.locale = Localization.locale || "en"
