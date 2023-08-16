algoritmo

Entrada:
- una cantidad a pagar
- divisas disponibles (dinero)

Variables:
- porPagar (inicialmente es igual al valor a pagar)
- totalDisponible (igual a la suma de todas nuestras divisas)
- billetera (una tabla, donde guardaremos el valor de cada divisa y la cantidad que disponemos de cada divisa )
- resultado (otra tabla con la misma estructura que billetera, pero guarda las divisas que vamos a entregar )
- control (esta variable nos ayuda a identificar si no es posible pagar con la cantidad exacta)

Algoritmo:
1. inicio
2. iterar por todas nuestras divisas y contarlas para sumarlas al totalDisponible
3. verificar que el totalDisponible es mayor o igual a la cantidad a pagar antes de continuar.
4. verificar que la cantidad a pagar no sea 0, es decir que tengamos que pagar algo.
5. inicializar la tabla "resultado"
6. Si la variable "porPagar" es igual a cero saltar a paso 7, si no, ir a 6.1
    6.1 dentro del ciclo establecemos la variable control a 0
    6.2 en cada iteracion del ciclo actual buscar la divisa con el valor mas alto de la billetera que sea menor o igual a la cantidad a pagar y moverlo de la billetera a la tabla "resultado"
    6.3 en caso de que el paso 6.2 sea existoso restarle a la variable "porPagar" el valor de la divisa que fue entregada.
    6.4 en caso de que el paso 6.2 no encuentre una divisa aumentar en 1 la variable control
    6.5 ir a paso 6.
7. entregar las divisas que se encuentran en "resultado".
8. fin.