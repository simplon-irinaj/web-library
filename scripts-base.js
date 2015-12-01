//raccourci pour document.getElementById()
// var maDiv = byId('photobox');

function byId( elementId ){
  if( typeof elementId != 'string' ){
    console.log('Erreur : elementId doit être une chaîne de caractère');
    return null;
  }
  return document.getElementById( elementId );
}

/* raccourci pour document.getElementsByClassName(...)
  le 2nd paramètre est facultatif :
  - si il est fourni on renvoie l'item à la position demandé
  - sinon on renvoie le tableau complet */
function byClass(className, atIndex){
  var elements = document.getElementsByClassName(className);
  var tElements = Array.prototype.slice.call(elements);
  return (atIndex!== null) ? tElements[atIndex] : tElements; //si atIndex est défini, différent de null donc quelque chose (opérateur ternaire)
}

function byTag(){

}

function addClass(){

}

function removeClass(){

}
