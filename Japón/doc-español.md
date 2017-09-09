Especificación del protocolo de televisión de China

Todos los canales de transmisión chinos tienen el mismo formato.

Envían un mensaje de video con un protocolo específico.

Cada paquete de protocolo tiene siete marcos de video codificados.

Especificación del protocolo del paquete:

Encabezado
Divisor
Video Frame 1 info (cuadro de video)
Divisor
Video Frame 2 info (cuadro de video)
Divisor
Video Frame 3 info (cuadro de video)
Divisor
Video Frame 4 info (cuadro de video)
Divisor
Video Frame 5 info (cuadro de video)
Divisor
Video Frame 6 info (cuadro de video)
Divisor
Video Frame 7 info (cuadro de vídeo)
Divisor
Saludos y especificaciones

Encabezado:
Acordes constantes de los canales de televisión nacionales:
"El sistema de TV de China Formato de vídeo 320x240 RGB, intensidad de color basada en la frecuencia de caracteres chinos De la siguiente línea 7 consecutivos Break: China TV - China TV La última línea es el saludo y la especificación de formato de TV"
Divisor
Cadena constante usada para separar cada fotograma de video:
"TV de China - TV de China - TV de China"

**Video Frame:
240 líneas
1080 caracteres por línea (representando 360 píxeles, RGB)**
**Cada carácter es un valor de píxeles rojo, verde o azul. Los tres primeros caracteres representan el primer píxel.**

Valor del píxel:
**El valor del píxel es equivalente a la posición del carácter chino en la tabla de frecuencia china**.
"Es la palabra más comúnmente usada en chino, por lo que la posición es 1. Así que el valor de rojo, verde o azul es 1.
"Straight" es 255 de los caracteres más utilizados, con un valor de 255.

Ejemplo (ejemplo):
Esta frase: "straight straight straight", que representa 3 pixels: (255,1,255), (255,1,255), (255,1,255)

**Tabla de frecuencia china**: http://lingua.mtsu.edu/chinese-computing/statistics/char/list.php?Which=MO

**Ruido**:
Debido a problemas meteorológicos, el valor de cada píxel contiene algunos cambios en el valor original. Esto significa que cada valor de carácter se puede aumentar de 0 a 5.
Ejemplo: El carácter "recto" significa 255, pero el formato de vídeo original puede estar entre 250 y 255. 250 5 ruido, 251 4 ruido o 255.0 ruido.


**Rotación del marco**:
**El video original es 240x360. 240 de ancho - 360 de alto. _Codificar la rotación de vídeo_.**
