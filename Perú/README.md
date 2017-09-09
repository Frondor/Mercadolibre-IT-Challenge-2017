# Letra

> El mundo en el que vivimos esta gobernado por numeros, algunos muy interesantes:
>
> Los números irracionales como PI o E no pueden representarse como una fracción de enteros
> Otros visualmente agradables como los Capicúas, con la peculiar característica de que pueden ser leídos de izquierda a derecha o viceversa.
> Y los muy famosos numeros primos, a quienes algunos los consideran la base de las matemáticas otros un Santo Grial.
> Desde hace dos mil años los matemáticos se han interesado por los numeros primos, tras su naturaleza infinita y misteriosa se esconde la interrogante ¿Existirá un patron que ayude a predecir la aparicion y distribucion de números primos en su camino al infinito?
>
> En este infinito universo de números busquemos uno interesante
>
> ¿Cual es el séptimo número conformado por 7 decimales consecutivos de PI que formen un número primo y capicúa a la vez?
> Curiosidad: Contando el sexto y séptimo número que cumplen las condiciones anteriores y los capicúas intermedios entre ambos números, contamos 7 tambien.
>
> Ejemplo:
>
> Si buscamos el segundo número de 5 dígitos consecutivos conformados por decimales de PI que conformen un número primo y un capicúa a la vez, este sería: 73637
>
> 3.14592653589793238 46264 338327950...2279 38183 0119491298....96091 73637 17872
>
> 46264 (Capicúa)
> 38183 (Primer Primo y Capicúa)
> 73637 (Segundo Primo y Capicúa)
>
> ¿Donde lo encontramos?
>
> Posición [1 - 5]:        14159   Ni capicúa, ni primo
> Posición [2 - 6]:        41592   Ni capicúa, ni primo
> Posición [3 - 7]:        15926   Ni capicúa, ni primo
> Posición [4 - 8]:        59265   Ni capicúa, ni primo
> Posición [5 - 9]:        92653   Ni capicúa, ni primo
>     ...
> Posición [19 - 23]:      46264 Es capicúa pero no primo
>     ...
> Posición [488 - 492]:    #1:   38183   Capicúa y primo
>     ...
> Posición [641 - 645]:    #2:   73637   Capicúa y primo

# Método

Como generar números tan precisos programáticamente es bastante complejo, lo generé desde un servicio de internet y almacené la string en [pi.txt](pi.txt).

Luego simplemente escribí la [script](index.js).

# Solución

> 1489841
