from microbit import *

# Coordenadas iniciales
x = 2
y = 2

# Función que actualiza el gráfico de temperatura y las coordenadas
def actualizar_grafico():
    global x, y

    # Mostrar temperatura como barra
    led.plot_bar_graph(input.temperature(), 50)
    
    # Gráfico temporal en la consola
    serial.write_value("Temperatura", input.temperature())
    
    # LED parpadea
    led.plot(x, y)
    basic.pause(50)
    led.unplot(x, y)

    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)

    if accX <= -150 and x > 0:
        x -= 1
    if accX > 150 and x < 4:
        x += 1
    if accY <= -150 and y > 0:
        y -= 1
    if accY > 150 and y < 4:
        y += 1
        
# Función forever
def on_forever():
   pass
   actualizar_grafico()
basic.forever(on_forever)
