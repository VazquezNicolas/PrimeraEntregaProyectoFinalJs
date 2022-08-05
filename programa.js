let i = 1, j = 1, l = 0; // condiciones del while
let totalP = 0, totalM=0, total=0; //Precio total
let contP1 =0, contP2 = 0, contP3 = 0, contP4 = 0, contP5 = 0; //Contadores de las cantidades de los pasapañuelos comprados
let contM1 =0, contM2 = 0, contM3 = 0, contM4 = 0, contM5 = 0; //Contadores de las cantidades de los mates comprados
let final = 0; //Confirmar compra
let conti=1, contp = 1, contm=1;
let comp;

const suma = (a , b) => {return a+b}
 
const pp = [
    {nombre: "Pasapañuelos Manada",precio: 500},
    {nombre: "Pasapañuelos Spiderman",precio: 600},
    {nombre: "Pasapañuelos Batman",precio: 700},
    {nombre: "Pasapañuelos Scorpion",precio: 800},
    {nombre: "Pasapañuelos Baloo",precio: 1000},
]

const mates = [
    {nombre: "Mate Manada",precio: 1500},
    {nombre: "Mate Spiderman",precio: 1600},
    {ombre: "Mate Batman",precio: 1700},
    {nombre: "Mate Scorpion",precio: 1800},
    {nombre: "Mate Baloo",precio: 2000},
]

const carrito = [
    {nombre: "Pasapañuelos Manada",precio: 500, cantidad:0},
    {nombre: 'Pasapañuelos Spiderman',precio: 600,cantidad:0},
    {nombre: 'Pasapañuelos Batman',precio: 700,cantidad:0},
    {nombre: 'Pasapañuelos Scorpion',precio: 800,cantidad:0},
    {nombre: 'Pasapañuelos Baloo',precio: 1000,cantidad:0},
    {nombre: 'Mate Manada',precio: 1500,cantidad:0},
    {nombre: 'Mate Spiderman',precio: 1600,cantidad:0},
    {nombre: 'Mate Batman',precio: 1700,cantidad:0},
    {nombre: 'Mate Scorpion',precio: 1800,cantidad:0},
    {nombre: 'Mate Baloo',precio: 2000,cantidad:0},
    {nombre: 'SALIR'}
];

while( i != 0)
{  
    alert ("Ingrese un número para ver los productos")
    let producto = prompt("Productos:\n[1] Pasapañuelos\n[2] Mates3D\n");
   
    if (producto == 1)
    {
        if (contp != 0)
        {
            console.log("Cantidad de productos: "+pp.length);
            for(const pasap of pp)
            {
                console.log(conti+" Producto: "+pasap.nombre+ " Precio: "+pasap.precio);
                conti++;
                contp = 0;
            }
            console.log("\n");
        }
        j=1;

        while (j != 0)
        {
            let pasaP = prompt("Escriba el nombre del producto que decea comprar, o escriba SALIR para dejar de comprar")
            conti=1;
            
            console.log(pasaP);

            let encontrado = carrito.find((pp)=>pp.nombre==pasaP);

            console.log(encontrado);

           switch (encontrado.nombre)
            {
                case "Pasapañuelos Manada": totalP = suma (totalP , carrito[0].precio); alert ("Total a pagar: $"+totalP); carrito[0].cantidad++; break;
                case "Pasapañuelos Spiderman": totalP = suma (totalP ,carrito[1].precio); alert ("Total a pagar: $"+totalP); carrito[1].cantidad++; break;
                case "Pasapañuelos Batman": totalP = suma (totalP , carrito[2].precio); alert ("Total a pagar: $"+totalP);  carrito[2].cantidad++; break;
                case "Pasapañuelos Scorpion": totalP = suma (totalP , carrito[3].precio); alert ("Total a pagar: $"+totalP);  carrito[3].cantidad++; break;
                case "Pasapañuelos Baloo": totalP = suma (totalP , carrito[4].precio); alert ("Total a pagar: $"+totalP);  carrito[4].cantidad; break;
                case "SALIR": j = 0; alert ("Total a pagar: $"+totalP); break;
                default: alert("No Ingresó ni un 1 ni un 2"); break;
            }
        }

    }

    else if (producto == 2)
    {
            if (contm != 0)
            {
                console.log("Cantidad de productos: "+mates.length);
                for(const mate of mates)
                {
                    console.log(conti+" Producto: "+mate.nombre+ " Precio: "+mate.precio);
                    conti++;
                    contm = 0;
                 }
                 console.log("\n");
        }

        j=1;

        while (j != 0)
        {
            let mate2 = prompt("Escriba el nombre del producto que decea comprar, o escriba SALIR dejar de comprar")
            conti=1;
            
            console.log(mate2);

            let encontradom = carrito.find((matess)=>matess.nombre==mate2);

            console.log(encontradom);

           switch (encontradom.nombre)
            {
                case "Mate Manada": totalP = suma (totalP , carrito[5].precio); alert ("Total a pagar: $"+totalP); carrito[5].cantidad++; break;
                case "Mate Spiderman": totalP = suma (totalP ,carrito[6].precio); alert ("Total a pagar: $"+totalP); carrito[6].cantidad++; break;
                case "Mate Batman": totalP = suma (totalP , carrito[7].precio); alert ("Total a pagar: $"+totalP);  carrito[7].cantidad++; break;
                case "Mate Scorpion": totalP = suma (totalP , carrito[8].precio); alert ("Total a pagar: $"+totalP);  carrito[8].cantidad++; break;
                case "Mate Baloo": totalP = suma (totalP , carrito[9].precio); alert ("Total a pagar: $"+totalP);  carrito[9].cantidad; break;
                case "SALIR": j = 0; alert ("Total a pagar: $"+totalP); break;
                default: alert("No Ingresó ni un 1 ni un 2"); break;
            }
        }
    }

    else 
    {
        alert("Ingresó mal el número para ver los productos");  
    }

    i = prompt ("¿Desea comprar otro producto?\n[0] NO\n[1] SI")
}

total = totalM + totalP;

if (totalM > 0)
{
    alert("Mates comprados:\nMates de Manada = "+carrito[5].cantidad+"\nMate Spiderman = "+carrito[6].cantidad+"\nMate Batman = "+carrito[7].cantidad+"\nMate Scorpion = "+carrito[8].cantidad+"\nMate Baloo = "+carrito[9].cantidad);
}
if (totalP > 0)
{
    alert("Pasapañuelos comprados:\nPasapañuelos de Manada = "+carrito[0].cantidad+"\nPasapañuelos Spiderman = "+carrito[1].cantidad+"\nPasapañuelos Batman = "+carrito[2].cantidad+"\nPasapañuelos Scorpion = "+carrito[3].cantidad+"\nPasapañuelos Baloo = "+carrito[4].cantidad);
}

alert("Total a pagar por pasapañuelos = $" +totalP+"\nTotal a pagar por mates = $"+totalM+ "\nTotal a pagar = $" +total);

l = prompt ("¿Desea Realizar la Compra?\n[1] Si\n[2]No")
if (l == 1)
{
alert ("¡Gracias por su compra!");
}
else if (l == 2)
{
    alert ("Su compra fue Cancelada\n¡Vuelva Pronto!");
}