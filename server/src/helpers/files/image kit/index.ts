import { publicKey, privateKey, urlEndpoint } from 'config'
import ImageKit from 'imagekit'

const imageKit = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint
})

export default imageKit
