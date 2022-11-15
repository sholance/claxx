import { Web3Storage } from 'web3.storage'

export async function validateToken(token) {
    console.log('validating token', token)
    const web3storage = new Web3Storage({ token })

    try {
        for await (const _ of web3storage.list({ maxResults: 1 })) {
            // any non-error response means the token is legit
            break
        }
        return true
    } catch (e) {
        // only return false for auth-related errors
        if (e.message.includes('401') || e.message.includes('403')) {
            console.log('invalid token', e.message)
            return false
        }
        // propagate non-auth errors
        throw e
    }
}