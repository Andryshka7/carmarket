import Cookies from 'js-cookie'

const getRefreshToken = (): string | null => {
    const tokens = Cookies.get('tokens')
    return tokens ? JSON.parse(tokens).refreshToken : null
}

export default getRefreshToken
