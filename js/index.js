function pedido(){
    let bienvenida = alert ('Bienvenido a Caelum Catering')
    let nombre = prompt ("Ingrese su Nombre")
    while (nombre =="") {
        nombre = prompt("Por favor, no olvide ingresar su nombre")
        }
    let apellido = prompt ("Ingrese su Apellido")
    while (apellido =="") {
        apellido = prompt ("Por favor, no olvide ingresar su apellido")
    }
    let usuario = (nombre + " " + apellido)
    alert("Bienvenido" + " " + usuario )
    
    let ptortas = 1500
    let pshots = 400
    let palfajores = 500
    let ptartitas = 600

    productos()
    
    function productos(){
        let producto = prompt ( usuario + " " + "¿Que desea pedir? Tortas, Tartitas, Alfajores o Shots")
            while (producto !==" ") {
                switch (producto) {
                            case 'tortas':
                                tortas()
                                otroPedido()
                                break;
                                case 'Tortas':
                                    tortas()
                                    otroPedido()
                                    break;
                                    case 'TORTAS':
                                        tortas()
                                        otroPedido()
                                        break;
    
                                        case 'shots':
                                            shots()
                                            otroPedido()
                                            break;
                                            case 'Shots':
                                                shots()
                                                otroPedido()
                                                break;
                                                case 'SHOTS':
                                                    shots()
                                                    otroPedido()
                                                    break;
                                                    
                                                    case 'alfajores':
                                                        alfajores()
                                                        otroPedido()
                                                        break;
                                                        case 'Alfajores':
                                                            alfajores()
                                                            otroPedido()
                                                            break;
                                                            case 'ALFAJORES':
                                                                alfajores()
                                                                otroPedido()
                                                                break;
    
                                                                case 'tartitas':
                                                                    tartitas()
                                                                    otroPedido()
                                                                    break;
                                                                    case 'Tartitas':
                                                                        tartitas()
                                                                        otroPedido()
                                                                        break;
                                                                        case 'TARTITAS':
                                                                            tartitas()
                                                                            otroPedido()
                                                                            break;
                            default:
                                alert ('No eligio producto')
                                productos()
                            }
                        }   
    }
    
    function tortas(){
        let tortas1 = prompt (usuario + ' ' + '¿Cuantas desea pedir?')
        if (tortas1 > "0") {
                r1 = tortas1 * ptortas
            }else {
                r1 = 0 
            }        
        alert ('El costo de su pedido es: ' + '\n Cantitad: '+ tortas1 + ' \n Precio Unitario: '+ ptortas + ' \n Precio Total: '+  r1)
        
    }

    function shots(){
        let shots1 = prompt (usuario + ' ' + '¿Cuantas desea pedir?')
        if (shots1 > "0") {
            r2 = shots1 * pshots
        }else {
            r2 = 0 
        }  
        alert ('el costo de su pedido es: ' + '\n Cantitad: '+ shots1 + ' \n Precio Unitario: '+ pshots +' \n Precio Total: '+  r2)
        
    }

    function alfajores(){
        let alfajores1 = prompt (usuario + ' ' + '¿Cuantas desea pedir?')
        if (alfajores1 > "0") {
            r3 = alfajores1 * palfajores
        }else {
            r3 = 0 
        }  
        alert ('el costo de su pedido es: ' + '\n Cantitad: '+ alfajores1 + ' \n Precio Unitario: '+ palfajores +' \n Precio Total: '+  r3)
    }

    function tartitas(){
        let tartitas1 = prompt (usuario + ' ' + '¿Cuantas desea pedir?')
        if (tartitas1 > "0") {
            r4 = tartitas1 * ptartitas
        }else {
            r4 = 0 
        }  
        alert ('el costo de su pedido es: ' + '\n Cantitad: '+ tartitas1 + ' \n Precio Unitario: '+ ptartitas +' \n Precio Total: '+  r4)
    }

    function otroPedido(){
        let otropedido1 = prompt ( usuario +' ' + '¿Desea pedir otra cosa? "Si" para seguir, "No" para ver nuevamente el total')
        while (otropedido1 !==" ") {
            switch (otropedido1) {
                        case 'si':
                        productos()
                        break;
                            case 'Si':
                            productos()
                            break;
                                case 'SI':
                                productos()
                                break;
                                    case 'no':
                                      salir()  
                                    break;
                                        case 'NO':
                                            salir()  
                                        break;
                                            case 'No':
                                                salir()   
                                            break;
                        default:
                        alert ('No eligió producto')
                        otroPedido()
            }
        }
    }

    function salir(){
        alert ('El programador no tiene el conociemiento ni tiene las herramientas de trabajo para poder juntar los resultados de todos los pedidos.\nPor ende, decidió que no quería molestar al tutor en esta primera entrega. \nSepa disculpar las molestias ocacionadas')
        }
}