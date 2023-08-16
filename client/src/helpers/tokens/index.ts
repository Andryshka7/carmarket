import Cookies from 'js-cookie'

const getAccessToken = (): string | null => Cookies.get('accessToken') || null
const getRefreshToken = (): string | null => Cookies.get('refreshToken') || null

export { getAccessToken, getRefreshToken }
