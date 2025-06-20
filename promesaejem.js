const Sencilla = () => {
    return new Promise((resolve,reject) => {
        const Aceite = Math.floor( Math.random() * 10)
            setTimeout(() => {
                if (Aceite > 1)
                    resolve("Se puede fritar el huevo")
                    reject("Comprar aceite")
            }, Aceite);
            console.log(Aceite)
    })
} 

Sencilla().then((resolve,reject) => {
    console.log(resolve)
}).catch((reject) => {
    console.log(reject);
})