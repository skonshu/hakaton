window.addEventListener('load', () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register('./sw.js').then(registration => {
            console.log('SW registr success!', registration)
        }).catch(err => {
            console.log("SW registr fail!", err)
        })
    }
})
