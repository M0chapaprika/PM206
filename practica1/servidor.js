        console.log("Hola Mundo JS desde el Servidor")

        /* Operaciones */
        let edad1 = 11
        const edad2 = 42

        console.log("Edad Promedio")
        console.log(edad1 + edad2 / 2)

        /* Medir tiempo de un proceso */        
        console.time('miproceso')

        let limite = 10000000000
        for(let i = 0; i < limite; i++) {
            console.log(i)
            console.log((i * 100) / limite)
            console.clear()
    }

        console.timeEnd('miproceso')

        /* Objetos tipo tabla */
        let usuarios= [
            {nombre: "ian", edad: 21},
            {nombre: "david", edad: 20}
        ]
        console.table(usuarios)
