const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        user: 'Administrador',
        message: 'Bienvenido a esta mierda de server'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    client.on('enviarMensaje', (message, callback) => {
        console.log(message);

        client.broadcast.emit('enviarMensaje', message)
            // if (message.user) {
            //     callback({
            //         resp: 'Todo salio bien!!'
            //     })
            // } else {
            //     callback({
            //         resp: 'Todo salio como las weas'
            //     })
            // }
    })
})