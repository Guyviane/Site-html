function visiteur(){
  alert('Bienvenue');
}


var p_footer = document.getElementById('p_footer');
p_footer.addEventListener('dblclick', visiteur);

document.getElementById("titre_header").addEventListener("mouseover",ChangerTitre);


function ChangerTitre(){
   var txt = (document.getElementById("titre_header")).innerHTML;
   if(txt=="mes dev! Web en SNIR"){
       (document.getElementById("titre_header")).innerHTML="Par Guyviane";
       setTimeout(ChangerTitre,1000);
   }
   else{
       (document.getElementById("titre_header")).innerHTML="mes dev! Web en SNIR";
   }
}
