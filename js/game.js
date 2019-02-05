/////////////////////////////////////////////VARIABLES Y OBJETOS

var ctx;
var clicks = 0;

const WIDTH = 400;
const HEIGH = 400;

var target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

////////////////////////////////////////////FUNCIONES


function traerDatos(){

const xhttp= new XMLHttpRequest();

xhttp.open('GET','catalogo.json',true);

xhttp.send();

xhttp.onreadystatechange=function(){

	if(this.readyState==4 && this.status== 200){

		let datos=JSON.parse(this.responseText);

		let res=document.querySelector('#res');
		res.innerHTML='';

		for(let item of datos){

		res.innerHTML += `  
		<tr>
		
		<td>${item.name}</td>
		
		<td>${item.age}</td>
		<td>${item.hair_color}</td>

		<tr>`
		}
	}

}

}


function selecciona(e){


clicks++;
var distance = getDistance(e, target);
var distanceHint = getDistanceHint(distance);

var distancia = document.getElementById("distancia");

distancia.innerHTML = `<h1>${distanceHint}</h1>`;
  
 if (distance < 20 ) {
    
  pintapunto();

  alert(`Encontrastes al Hobbit en ${clicks} clicks!`);
    
  distancia.innerHTML=`<h1>Refresca página para volver a jugar<h1>`;
    
    //location.reload();
    }
}



function pintapunto(){

  var a=target.x;
  var b=target.y;

  var pointSize=15;

  ctx.fillStyle = "black"; 

  ctx.beginPath();
  ctx.arc(a, b, pointSize, 0, Math.PI * 2, true);
  ctx.fill();

}

/////////////////////////////////MAIN


document.querySelector('#boton').addEventListener('click',traerDatos);

canvas = document.getElementById("miCanvas");
	if(canvas && canvas.getContext){
		ctx = canvas.getContext("2d");
		if(ctx){

			var imagen=new Image();
			imagen.onload=function(){

				ctx.drawImage(imagen,0,0);
			}
			
			imagen.src = "img/treasuremap.png";

			canvas.addEventListener("click", selecciona, false);
			
			
		} else {
			alert("Error al crear tu contexto");	
		}
	}


