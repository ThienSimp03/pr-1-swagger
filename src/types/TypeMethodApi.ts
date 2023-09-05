type ColorMethod = Record<string, string>

export const ColorMethodTheme: ColorMethod = {
    GET: 'info.main',
    POST: 'success.main',
    PUT: 'warning.main',
    DELETE: 'error.main'
}

export const ColorMethodApi: ColorMethod = {
    GET: '#61AFFE',
    POST: '#49CC90',
    PUT: '#FCA130',
    DELETE: '#F93E3E'
}
