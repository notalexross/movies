export function formatDate(dateString) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const timestamp = Date.parse(dateString)
  const date = new Date(timestamp)
  const day = date.getDate().toString().padStart(2, '0')
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}

export function formatDateGB(dateString) {
  const timestamp = Date.parse(dateString)
  const date = new Date(timestamp)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export function formatYear(dateString) {
  const timestamp = Date.parse(dateString)
  const date = new Date(timestamp)
  const year = date.getFullYear()

  return year
}

export function formatTime(lengthMinutes) {
  const days = Math.floor(lengthMinutes / (24 * 60))
  const hours = Math.floor(Math.max(lengthMinutes - days * 24 * 60) / 60, 0)
  const minutes = Math.round(Math.max(lengthMinutes - hours * 60 - days * 24 * 60, 0))

  let formatted = ''
  if (days) formatted += `${days}d `
  if (hours) formatted += `${hours}h `
  formatted += `${minutes}m`

  return formatted
}

export function formatCurrency(value, currency = 'USD', decimalPlaces = 0) {
  const currencies = {
    USD: '$',
    EUR: '€',
    CRC: '₡',
    GBP: '£',
    ILS: '₪',
    INR: '₹',
    JPY: '¥',
    KRW: '₩',
    NGN: '₦',
    PHP: '₱',
    PLN: 'zł',
    PYG: '₲',
    THB: '฿',
    UAH: '₴',
    VND: '₫'
  }

  const currencySymbol = currencies[currency] || '$'
  const formatted = Number(Number(value).toFixed(decimalPlaces)).toLocaleString()

  return Number(value) > 0 ? currencySymbol + formatted : undefined
}

export function numToPercentage(num, max = 10, decimalPlaces = 0) {
  return `${((Number(num) / Number(max)) * 100).toFixed(decimalPlaces)}%`
}

export function CountryCodeToName(code) {
  const codes = {
    ab: 'Abkhazian',
    aa: 'Afar',
    af: 'Afrikaans',
    ak: 'Akan',
    sq: 'Albanian',
    am: 'Amharic',
    ar: 'Arabic',
    an: 'Aragonese',
    hy: 'Armenian',
    as: 'Assamese',
    av: 'Avaric',
    ae: 'Avestan',
    ay: 'Aymara',
    az: 'Azerbaijani',
    bm: 'Bambara',
    ba: 'Bashkir',
    eu: 'Basque',
    be: 'Belarusian',
    bn: 'Bengali',
    bh: 'Bihari',
    bi: 'Bislama',
    bs: 'Bosnian',
    br: 'Breton',
    bg: 'Bulgarian',
    my: 'Burmese',
    ca: 'Catalan',
    ch: 'Chamorro',
    ce: 'Chechen',
    ny: 'Chichewa, Chewa, Nyanja',
    zh: 'Chinese',
    'zh-Hans': 'Chinese (Simplified)',
    'zh-Hant': 'Chinese (Traditional)',
    cv: 'Chuvash',
    kw: 'Cornish',
    co: 'Corsican',
    cr: 'Cree',
    hr: 'Croatian',
    cs: 'Czech',
    da: 'Danish',
    dv: 'Divehi',
    nl: 'Dutch',
    dz: 'Dzongkha',
    en: 'English',
    eo: 'Esperanto',
    et: 'Estonian',
    ee: 'Ewe',
    fo: 'Faroese',
    fj: 'Fijian',
    fi: 'Finnish',
    fr: 'French',
    ff: 'Fula',
    gl: 'Galician',
    gd: 'Scottish',
    gv: 'Manx',
    ka: 'Georgian',
    de: 'German',
    el: 'Greek',
    kl: 'Kalaallisut',
    gn: 'Guarani',
    gu: 'Gujarati',
    ht: 'Haitian Creole',
    ha: 'Hausa',
    he: 'Hebrew',
    hz: 'Herero',
    hi: 'Hindi',
    ho: 'Hiri Motu',
    hu: 'Hungarian',
    is: 'Icelandic',
    io: 'Ido',
    ig: 'Igbo',
    id: 'Indonesian',
    in: 'Indonesian',
    ia: 'Interlingua',
    ie: 'Interlingue',
    iu: 'Inuktitut',
    ik: 'Inupiak',
    ga: 'Irish',
    it: 'Italian',
    ja: 'Japanese',
    jv: 'Javanese',
    kn: 'Kannada',
    kr: 'Kanuri',
    ks: 'Kashmiri',
    kk: 'Kazakh',
    km: 'Khmer',
    ki: 'Kikuyu',
    rw: 'Kinyarwanda',
    rn: 'Kirundi',
    ky: 'Kyrgyz',
    kv: 'Komi',
    kg: 'Kongo',
    ko: 'Korean',
    ku: 'Kurdish',
    kj: 'Kwanyama',
    lo: 'Lao',
    la: 'Latin',
    lv: 'Latvian',
    li: 'Limburgish',
    ln: 'Lingala',
    lt: 'Lithuanian',
    lu: 'Luga-Katanga',
    lg: 'Luganda',
    lb: 'Luxembourgish',
    mk: 'Macedonian',
    mg: 'Malagasy',
    ms: 'Malay',
    ml: 'Malayalam',
    mt: 'Maltese',
    mi: 'Maori',
    mr: 'Marathi',
    mh: 'Marshallese',
    mo: 'Moldavian',
    mn: 'Mongolian',
    na: 'Nauru',
    nv: 'Navajo',
    ng: 'Ndonga',
    nd: 'Northern Ndebele',
    ne: 'Nepali',
    no: 'Norwegian',
    nb: 'Norwegian bokmål',
    nn: 'Norwegian nynorsk',
    ii: 'Sichuan Yi',
    oc: 'Occitan',
    oj: 'Ojibwe',
    cu: 'Old Church Slavonic',
    or: 'Oriya',
    om: 'Oromo',
    os: 'Ossetian',
    pi: 'Pāli',
    ps: 'Pashto, Pushto',
    fa: 'Persian',
    pl: 'Polish',
    pt: 'Portuguese',
    pa: 'Punjabi',
    qu: 'Quechua',
    rm: 'Romansh',
    ro: 'Romanian',
    ru: 'Russian',
    se: 'Sami',
    sm: 'Samoan',
    sg: 'Sango',
    sa: 'Sanskrit',
    sr: 'Serbian',
    sh: 'Serbo-Croatian',
    st: 'Sesotho',
    tn: 'Setswana',
    sn: 'Shona',
    sd: 'Sindhi',
    si: 'Sinhalese',
    ss: 'Swati',
    sk: 'Slovak',
    sl: 'Slovenian',
    so: 'Somali',
    nr: 'Southern Ndebele',
    es: 'Spanish',
    su: 'Sundanese',
    sw: 'Swahili',
    sv: 'Swedish',
    tl: 'Tagalog',
    ty: 'Tahitian',
    tg: 'Tajik',
    ta: 'Tamil',
    tt: 'Tatar',
    te: 'Telugu',
    th: 'Thai',
    bo: 'Tibetan',
    ti: 'Tigrinya',
    to: 'Tonga',
    ts: 'Tsonga',
    tr: 'Turkish',
    tk: 'Turkmen',
    tw: 'Twi',
    ug: 'Uyghur',
    uk: 'Ukrainian',
    ur: 'Urdu',
    uz: 'Uzbek',
    ve: 'Venda',
    vi: 'Vietnamese',
    vo: 'Volapük',
    wa: 'Wallon',
    cy: 'Welsh',
    wo: 'Wolof',
    fy: 'Western Frisian',
    xh: 'Xhosa',
    yi: 'Yiddish',
    ji: 'Yiddish',
    yo: 'Yoruba',
    za: 'Zhuang',
    zu: 'Zulu'
  }

  return codes[code.toLowerCase()]
}
