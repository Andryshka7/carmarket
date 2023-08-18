import Cookies from 'js-cookie'

const getAccessToken = () => Cookies.get('accessToken') || null

export { getAccessToken }
