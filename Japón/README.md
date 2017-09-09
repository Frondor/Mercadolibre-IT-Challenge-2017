https://docs.google.com/document/d/1gwemViK5GO4-GPx1GT7uRvwSZT5BzqmJ_oKsvjlrogs

# Letra

> Un grupo de científicos japoneses detectó una señal pirata de televisión en la red de satélites de Japón.
>
> Al parecer una cadena de televisión (no oficial) de China, que quería saltar el firewall del gobierno chino, estaba inyectando esta señal para poder comunicarse con sus aliados en la querida Ilha Formosa, «Isla Hermosa» (más conocida hoy como Taiwan).
>
> Luego de la advertencia por parte del gobierno japonés, muy apenados los chinos no oficialistas revelaron la verdadera importancia de la señal.
>
> La misma lleva codificado el nombre del futuro emperador Chino, el cual tomaría poder de China Continental + Taiwan dando lugar a la nueva super potencia militar, cultural y económica del mundo.
>
> Los japoneses, haciéndose los buenos, decidieron que la cadena de televisión siga utilizando sus satélites de forma pirata, pero la realidad es que lo hicieron para tener tiempo y poder descifrar el nombre del futuro emperador, para poder digamos... deshacerse de él y no perder futuro control en la región.
>
> El fragmento que se repite y se repite por la red de satélites fue descargado y está en el archivo adjunto.
>
> Encontrar el nombre del futuro emperador chino.
>
> Podes encontrar el adjunto en [level3](https://github.com/Frondor/Mercadolibre-IT-challenge-2017/blob/master/Japón/level3.txt)

# Método

Lo que tuvo de complicado éste desafío, lo tuvo de divertido!

Teniendo en cuenta el uso de la esteganografía en otros ejercicios, lo primero que hice fue abrir el archivo con notepad, descubriendo al final del mismo una URL al siguiente [documento](https://docs.google.com/document/d/1gwemViK5GO4-GPx1GT7uRvwSZT5BzqmJ_oKsvjlrogs).

Al pegar el texto en https://translate.google.com, e intentar descifrar qué quiso traducir el servicio de google, me di cuenta que eran las [directrices para codificar cada frame de la señal de video](https://github.com/Frondor/Mercadolibre-IT-challenge-2017/blob/master/Japón/doc-español.md). Luego escribí el [script](https://github.com/Frondor/Mercadolibre-IT-challenge-2017/blob/master/Japón/index.js), generé las imágenes, y listo.

# Solución

![](http://i.imgur.com/cCaBvJY.gif)

