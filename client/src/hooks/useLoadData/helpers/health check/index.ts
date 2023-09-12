import { healthCheckQuery } from 'api/health'

const healthCheck = async () => {
    try {
        await healthCheckQuery()
        return true
    } catch (e) {
        return false
    }
}

export default healthCheck
