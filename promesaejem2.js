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


ObtenerUsuario(6)
    .then(usuario => {
        console.log("Usario encontrado:", usuario)
    }).catch(error => {
        console.error(error);
    });