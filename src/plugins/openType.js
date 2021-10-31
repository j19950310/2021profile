import Opentype from 'opentype.js'
const FONT_PATH = 'font/NotoSansTC-Bold.otf'

export default async function initOpentype () {
    return await new Promise((resolve, reject) => {
        Opentype.load(FONT_PATH, (err, font) => {
            if (err) {
                errHandler(err)
            } else {
                resolve(font)
            }
        })
    })
}

function errHandler (e) {
    console.log('Error: ' + e)
}
