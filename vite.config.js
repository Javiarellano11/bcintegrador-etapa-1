import { resolve } from 'path' /* node */

export default {
    // config options
    css: {
        devSourcemap: true // configuramos para ver la linea donde esta escrita la regla css
    },
    build: {
        rollupOptiones: {
            input: resolve(__dirname, 'index.html')
        }
    }
}