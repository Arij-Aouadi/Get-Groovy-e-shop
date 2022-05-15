var buttonsAjouter=document.getElementsByClassName('btn')
var somme=0;
var count=0;
var quantities=[0,0,0,0,0,0]

for ( var i=0;i<buttonsAjouter.length;i++) {

	var buttoni=buttonsAjouter[i]
	buttoni.addEventListener("click",e=>{
	var button=e.target
	var level = button.parentElement.parentElement;
	var y=level.getElementsByClassName("shop-title")[0].id;////// the id of every album is his index in quantity list 
	quantities[y-1]=quantities[y-1]+1;
	count++;
	
	var titre=level.getElementsByClassName("shop-title")[0].innerText;
	var prixalbums=level.getElementsByClassName("shop-prix");
	var prix=prixalbums[0].innerText;
	var imageAlbum=level.getElementsByClassName("shop-image")[0].src;
	
	somme=somme+parseInt(prixalbums[0].innerText.replaceAll(".",""));
	albumQuan=quantities[y-1];
	
	if (quantities[y-1]==1) {
	
		var tab = document.getElementById("mytab");
		var row =tab.insertRow(1);
		var cellImage=row.insertCell(0);
		var cellTitre=row.insertCell(1);
		var cellPrix=row.insertCell(2);
		var cellQuantite=row.insertCell(3);
	
	
		cellImage.innerHTML=`<img src="${imageAlbum}" width="90" >`
		cellTitre.innerHTML=`<span class="albumInCart"> ${titre} </span>`;
		cellPrix.innerHTML=prix;
		cellQuantite.innerHTML=`<span class="albumQuantity"> 1 </span> `
		 }
	
	else {
		var albumNames=document.getElementsByClassName("albumInCart");
		var cartQuantities=document.getElementsByClassName("albumQuantity");
		for (var j=0;j<cartQuantities.length;j++) {
		if (albumNames[j].innerText==titre) {
		cartQuantities[j].innerText=albumQuan;}
		
		                                          }
		}
	
		var totalS=document.getElementById("total-price");
		totalS.innerHTML=""+somme+"dt";
	
	
	                                                          }) }

function removeAll(n){
	var tab=document.getElementById("mytab");
	var totalS=document.getElementById("total-price");
	var k=1;
	while (k<=count && tab.rows.length>2) {
		k++;
		tab.deleteRow(1);
		totalS.innerText="0 dt."
		quantities=[0,0,0,0,0,0];
		somme=0;
	
}

}

var buttonAnnuler=document.getElementById("remove");
buttonAnnuler.addEventListener("click",e=>{removeAll(count);});

var buttonAcheter=document.getElementById("buy");
buttonAcheter.addEventListener("click",e=>{
	alert("Commande confirmée !" );
	removeAll(count);
	quantities=[0,0,0,0,0,0];
	somme=0;})