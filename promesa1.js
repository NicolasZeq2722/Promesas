const Tarea = () => {
    return new Promise((resolve,reject) => {
        const tiempo = Math.floor( Math.random() * 4000)
            setTimeout(() => {
                if (tiempo <= 2000) 
                    resolve("Tarea completada")
                    reject("Error")
            },tiempo);
            console.log(tiempo)
    })
}
    
Tarea().then((resolve, reject) => {
    console.log(resolve)
}).catch((reject) => {
    console.log("Error:",reject);
})






