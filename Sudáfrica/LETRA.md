Encontrar la palabra de 8 caracteres que solo contenga las siguientes letras:

acdegilmnoprstuw

de forma que la función challenge_hash(string) devuelva el resultado 24785204182557 utilizando el siguiente código:

def challenge_hash(s):
    h = 7
    letters = "acdegilmnoprstuw"

    for i in range(0, len(s)):
        h = (h * 37 + letters.index(s[i]))

    return h

Por ejemplo, si intentaramos encontrar una palabra de 9 caracteres donde la función devuelva 934632622822695, la misma sería mercadoli.
