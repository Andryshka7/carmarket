import Cookies from 'js-cookie'

const getAccessToken = () : string | null => {
    const tokens = Cookies.get('tokens')
    return tokens ? JSON.parse(tokens).accessToken : null
}

export default getAccessToken
