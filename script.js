var name = "Aidan Loughney";
var i=0;

function typeName() {
  if(i<name.length){
  var nameHeader = document.getElementById("nametag");
  nameHeader.innerHTML = nameHeader.innerHTML + name.charAt(i);
  i++;
  setTimeout(typeName, 100);
}

}

window.onload = typeName;