let bienvenida = parseInt(prompt("Bienvenido a la rotiseria Tuki\nQue estas buscando?\n1. Empanadas \n2. Hamburguesa\n3. Salir"))
while(bienvenida!=3){

    if(bienvenida==1){
        let empanadas = parseInt(prompt("1. Humita\n2. Jamon y Queso\n3. Carne"))
        switch(empanadas){
            case 1:
                alert("Humita = $800")
            break;
            case 2: 
            alert("Jamon y queso = $800")
            break;
            case 3:
                alert("Carne = $1000")
            break;
            default:
                alert("Opcion incorrecta. Vuelva prontos")
                break;
            }
        }else{
            let burger = parseInt(prompt("1. Simple\n2. Especial\n3. Completa"))
            switch(burger){
                case 1:
                    alert("Simple = $400")
                    break;
                    case 2: 
                    alert("Especial = $600")
                    break;
                    case 3:
                        alert("Completa = $800")
                        break;
                        default:
                            alert("Opcion incorrecta. Vuelva prontos")
                            break;
                        }
                    }
}