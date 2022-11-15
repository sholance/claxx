import { Web3Storage } from 'web3.storage'

export async function validateToken(token) {
    console.log('validating token', token)
    const web3storage = new Web3Storage({ token })

    try {
        for await (const _ of web3storage.list({ maxResults: 1 })) {
            break
        }
        return true
    } catch (e) {
        if (e.message.includes('401') || e.message.includes('403')) {
            console.log('invalid token', e.message)
            return false
        }
        throw e
    }
}