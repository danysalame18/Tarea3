/*1. Rehacer piedra Papel o tijera con una funcion y que de la opcion de volver 
        a jugar (Con un ciclo)
        LISTO*/
       function ppt(player1, player2){
            if(player1 == "piedra" && player2 == "papel"){
                console.log("Gano Jugador 2")
            }
            else if(player1 == "piedra" && player2 == "tijera"){
                console.log("Gano Jugador 1")
            }
            else if(player1 == "papel" && player2 == "tijera"){
                console.log("Gano Jugador 2")
            }
            else if(player1 == "papel" && player2 == "piedra"){
                console.log("Gano Jugador 2")
            }

            else if(player1 == "tijera" && player2 == "papel"){
                console.log("Gano Jugador 1")
            }
            else if(player1 == "tijera" && player2 == "piedra"){
                console.log("Gano Jugador 2")
            }
            else if(player2 == player1){
                console.log("Empate")
            }
            else{
                console.log("algo esta mal")
            }
    }
    ppt("piedra" , "tijera")

    //1 piedra 2 papel 3 tijera 
    //LISTO
    function ppt2(player1, player2){
             if(player1 == 1 && player2 == 2){
                console.log("Gano Jugador 2")
        }
        else if(player1 == 1 && player2 == 3){
            console.log("Gano Jugaor 1")
        }
        else if(player1 == 2 && player2 == 3){
            console.log("Gano Jugador 2")
        }
        else if(player1 == 2 && player2 == 1){
            console.log("Gano Jugador 1")
        }
        else if(player1 == 3 && player2 == 1){
            console.log("Gano Jugador 2")
        }
        else if(player1 == 3 && player2 == 2){
            console.log("Gano Jugador 1")
        }
        else if(player1 == player2){
            console.log("empate")
        }
        else{
            console.log("Algo esta mal")
        }
    }
    ppt2 (1 , 2)

    //2. Crear una calculadora con funciones (Suma, Rest, multiplicacion y division)
    //LISTO
    / suma(suma1 , suma2){
        console.log(suma1 + suma2)
    }
    suma (5 , 6)

    function resta(resta1 , resta2){
        console.log(resta1 - resta2)
    }
    resta (28 , 15)

    function multiplicacion(multi1 , multi2){
        console.log(multi1 * multi2)
    }
    multiplicacion (3 , 6)

    function division (divi1 , divi2){
        console.log(divi1 / divi2)
    }
    division (18 , 3)

    //4. Usa la funcion Math.random en piedra papel o tijera
    //LISTO
      var compu;
    function aleatorio(min, max){
        var numero = Math.floor(Math.random() * 2);
        return numero;
    }
            compu = aleatorio (0,2)
           // console.log(compu)
    function player(playerx){
            if(playerx == 0 && compu == 1){
                console.log("Perdiste, la maquina escogio Papel")
        }
        else if(playerx == 0 && compu == 2){
            console.log("Ganaste, la maquina escogio Tijera")
        }
        else if(playerx == 1 && compu == 0){
            console.log("Ganaste, la maquina escogio Piedra")
        }
        else if(playerx == 1 && compu == 2){
            console.log("Perdiste, la maquina escogio Tijera")
        }
        else if(playerx == 2 && compu == 0){
            console.log("Perdiste, la maquina escogio Piedra")
        }
        else if(playerx == 2 && compu == 1){
            console.log("Ganaste, la maquina escogio Papel")
        }
        else if(playerx == compu){
            console.log("Empate")
        }
        else{
            console.log("Algo esta mal")
        }
    } 
    player (1)


    //Ejercicio 4 con promt
    //LISTO
    var compu;
    function aleatorio(min, max){
        var numero = Math.floor(Math.random() * 2);
        return numero;
    }
            compu = aleatorio (0,2)
           // console.log(compu)
        var playerx = prompt("Escoge 0 para Piedra, 1 para Papel y 2 para Tijera");
                if(playerx == 0 && compu == 1){
                    console.log("Perdiste, la maquina escogio Papel")
            }
            else if(playerx == 0 && compu == 2){
                console.log("Ganaste, la maquina escogio Tijera")
            }
            else if(playerx == 1 && compu == 0){
                console.log("Ganaste, la maquina escogio Piedra")
            }
            else if(playerx == 1 && compu == 2){
                console.log("Perdiste, la maquina escogio Tijera")
            }
            else if(playerx == 2 && compu == 0){
                console.log("Perdiste, la maquina escogio Piedra")
            }
            else if(playerx == 2 && compu == 1){
                console.log("Ganaste, la maquina escogio Papel")
            }
            else if(playerx == compu){
                console.log("Empate")
            }
            else{
                console.log("Algo esta mal")
            }
            