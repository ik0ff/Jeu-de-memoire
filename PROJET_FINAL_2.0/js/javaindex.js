const  Etudiant1={
    prenom: 'Aaron',
   nom:'Tshibangu',
   numEtudiant:'2684620',
   prenom2: 'Krystopher',
    nom2:'Gendron-Tierney',
    numEtudiant2:'2633729'} 

document.getElementById("foter").innerHTML = Etudiant.etudiant.call(Etudiant1);


const Etudiant={
    etudiant:function(Etudiant1){
        return this.prenom+" "+this.nom+" "+this.numEtudiant+" et "+ this.prenom2+" "+this.nom2+" "+this.numEtudiant2;
      } 
    }


    alert('holla')
