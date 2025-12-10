//  Coordenadas iniciales
let x = 2
let y = 2
//  Función que actualiza el gráfico de temperatura y las coordenadas
function actualizar_grafico() {
    
    //  Mostrar temperatura como barra
    led.plotBarGraph(input.temperature(), 50)
    //  Gráfico temporal en la consola
    serial.writeValue("Temperatura", input.temperature())
    //  LED parpadea
    led.plot(x, y)
    basic.pause(50)
    led.unplot(x, y)
    let accX = input.acceleration(Dimension.X)
    let accY = input.acceleration(Dimension.Y)
    if (accX <= -150 && x > 0) {
        x -= 1
    }
    
    if (accX > 150 && x < 4) {
        x += 1
    }
    
    if (accY <= -150 && y > 0) {
        y -= 1
    }
    
    if (accY > 150 && y < 4) {
        y += 1
    }
    
}

//  Función forever
basic.forever(function on_forever() {
    
    actualizar_grafico()
})
