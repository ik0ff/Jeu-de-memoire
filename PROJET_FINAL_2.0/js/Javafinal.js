const divResultat= document.querySelector("#resultat");

//Notre objet et la fonction associé
const Etudiant={
    etudiant:function(Etudiant1){
        return this.prenom+" "+this.nom+" "+this.numEtudiant+" et "+ this.prenom2+" "+this.nom2+" "+this.numEtudiant2;
        } 
}
const  Etudiant1={
     prenom: 'Aaron',
    nom:'Tshibangu',
    numEtudiant:'2684620',
    prenom2: 'Krystopher',
     nom2:'Gendron-Tierney',
     numEtudiant2:'2633729'} 
document.getElementById("foter").innerHTML = Etudiant.etudiant.call(Etudiant1);


alert ("clicker sur 'ok' si vous voulez nous donner 100% ");
  
 
let tabJeu= [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

//let tabResultat= [
  //  [2,4,8,8],
   // [3,1,7,2],
   // [7,5,6,4],
   // [6,5,3,1],
//];
let tabResultat= genereTAbleauAleatoire();

// les coorodoné de l'ancien click dans ce tableau
let oldSelection= [];
// il s'incremente à chaque click
let nbAffiche=0;
let ready= true;

function afficherTableau(){
    let txt="";

    for(let i=0; i<tabJeu.length; i++){
        txt+= "<div>"
        for(let j=0; j<tabJeu.length; j++){ 
            if(tabJeu[i][j]===0){
                txt+="<img src='./css/endos.jpg'  Onclick='verif(\""+i+"-"+j+"\")' >";

            }
          else{
            txt+="<img src='"+getImage(tabJeu[i][j])+"'>";
          }
        }
        txt+= "</div>"
    }
   
    divResultat.innerHTML=txt;
}
//fonction (#2) qui nous permet de retrouvé l'image associé au case entré de facon aléatoire dans notre tableau .
 function getImage(valeur){
    
let imgTxt="./img/niveau 1/"
    switch(valeur){
        case 1: imgTxt+="marina_Bay_sand.jpg";
        break;
        case 2: imgTxt+="Arc_de_Triomphe.jpg";
        break;
        case 3: imgTxt+="burj_al_arab.jpg";
        break;
        case 4: imgTxt+="collisée.jpg";
        break;
        case 5: imgTxt+="parlement_Ottawa.jpg";
        break;
        case 6: imgTxt+="pyramyds_egypt.jpg";
        break;
        case 7: imgTxt+="statue_liberty.jpg";
        break;
        case 8: imgTxt+="tokyo.jpg";
        break;
        
        default: console.log("erreur");
    }
    return imgTxt;
 }

 function verif(bouton){
     if(ready===true){
        nbAffiche++;
        let ligne= bouton.substr(0,1);
        let colonne= bouton.substr(2,1);
        tabJeu[ligne][colonne]= tabResultat[ligne][colonne];
        afficherTableau();
    
    if (nbAffiche>1){
        ready=false;
        setTimeout(()=>{
 //veriff
        
 if(tabJeu[ligne][colonne] !== tabJeu[oldSelection[0]][oldSelection[1]]) {
    
    tabJeu[ligne][colonne]=0;
    tabJeu[oldSelection[0]][oldSelection[1]]=0;
}
// il est rendu à 0 à chaque check
nbAffiche=0;
afficherTableau();

// il vient la verification parcequ'il enregistre le click precedant
oldSelection=[ligne,colonne];
   ready= true;
        },1000)
       
    }
    else{
        oldSelection=[ligne,colonne];
    }

     }


 }

function genereTAbleauAleatoire(){
    var tab=[];

    var nbImagePosition=[0,0,0,0,0,0,0,0];

    for(var i= 0; i<4; i++){
        var ligne= [];
        for(var j= 0; j<4; j++){
            var fin= false;
        while(!fin){
            var randomImage= Math.floor(Math.random()*8);
            if(nbImagePosition[randomImage]<2){
                ligne.push(randomImage+1);
                nbImagePosition[randomImage]++;
                fin=true;
            }
        }

           
            
        }

        tab.push(ligne);
    }
    return tab;
}
afficherTableau();