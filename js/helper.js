

// Generamos un numero aleatorio
var getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}


// Obtenemos la distancia entre dos puntos, con el teorema de Pitágoras
var getDistance = (e, target) => {
  var diffX = e.offsetX - target.x;
  var diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// Devolvemos un string dependiendo de las distancias
var getDistanceHint = distance => {
  if (distance < 30) {
    return "1 - Muy cerca!";
  } else if (distance < 40) {
    return "2 - Realmente cerca";
  } else if (distance < 60) {
    return "3 - Cerca";
  } else if (distance < 100) {
    return "4 - Te acercas";
  } else if (distance < 180) {
    return "5 - Lejos";
  } else if (distance < 360) {
    return "6 - Realmente lejos";
  } else {
    return "7 - Estás muy lejos";
  }
}
