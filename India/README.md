# Letra

> El granjero Mariano, tiene una cabra que está todo el tiempo entrando en su granero y comiendo las frutas que tiene apiladas en la cocina.
>
> La cantidad de frutas es infinita... tiene dos pilas de frutas, una de naranjas y otra de bananas.
>
> La cabra no puede comer infinito, tiene una capacidad limitada.
>
> Cada vez que come una naranja, completa su capacidad según las proteínas de la naranja, cada vez que come una banana lo mismo, completa su capacidad según las proteínas de la banana.
>
> La cabra aprendió un truco, cuando toma agua, baja el nivel de su capacidad a la mitad. Esto quiere decir que viene comiendo naranjas y bananas, si las naranjas la llenan con 3 proteínas y las bananas la llenan en 4 proteínas, si comió 3 naranjas y 3 bananas, tendrá un nivel de llenado de 21. Si toma agua en ese momento, baja ese nivel a la mitad (redondeando para abajo) o sea a 10 y puede seguir comiendo.
>
> La cabra solo puede tomar 1 vez agua. La cabra quiere comer lo máximo posible sin pasarse de su capacidad.
>
> Determinar cuál es el máximo nivel de llenado que puede tener la cabra.
>
> Ejemplo:
>
> Capacidad: 8 proteínas
> Naranjas incrementan: 5 proteínas
> Bananas incrementan: 6 proteínas
>
> Resultado: 8 (come naranja, toma agua, come banana)
>
> Resolver para:
>
> Capacidad: 25185 proteínas
> Naranjas incrementan: 109 proteínas
> Bananas incrementan: 17188 proteínas

# Método

```js
const log = console.log,
capacity = 25185,
orange = 109,
banana = 17188;

let full = 0,
drinked = false,
tops = [];

const eat = () => {
  let proteins = canEat(); // returns either a banana, orange, or false
  if (proteins) { // if goat can eat something
    full += proteins;
    log('ate', proteins === 109 ? 'an orange' : 'a banana');
    eat(); // recursion nigga
  } else { // else can't eat anymore
    if (!drinked) {
      drink();
      eat();
    } else {
      // register & reset
      if (tops.indexOf(full) === -1) tops.push(full);
    }
  }
}

const canEat = () => {
  let space = capacity - full;
  if (space >= banana) { // comete la banana si podé'
    return banana;
  } else if (space >= orange) { // same for orange
    return orange;
  }
  return false; // culo lleno
}

const drink = () => {
  let at = full;
  if (tops.indexOf(at) === -1) tops.push(at);
  full = Math.floor(full/2); // reduce capacity to half
  drinked = true;
  log('Drinked to', full, 'when at', at);
}

eat();
log('total: ', tops.sort((a,b) => a<b)[0]);
```

# Solución

> 25145
