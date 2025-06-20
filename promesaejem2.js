const ObtenerUsuario = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarios ={
                1: {nombre:"Ana", edad:39},
                2: {nombre:"Camilo", edad:21},
                3: {nombre:"David", edad:40},
            };
            const usuario = usuarios[id];

            if (usuario) {
                resolve(usuario)
            } else
                reject("Usuario no encontrado");
        }, 1000);
    })
};


ObtenerUsuario(2)
    .then(usuario => {
        console.log("Uusario encontrado:", usuario)
    }).catch(error => {
        console.error(error);
    });