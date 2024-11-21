function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.remove('active');
        section.computedStyleMap.opacity = 0;
    });

    

    
    const activeSection = document.getElementById(sectionId);
    setTimeout(() => {
        activeSection.classList.add('active');
    }, 100);

    if (sections === profil) {
        afficherProfil();
    }
    
}




let estInscrit = false;

function afficherProfil() {
    let estInscrit = false;
    const sectionProfil = document.getElementById('profil');
    const profilNonInscrit = document.getElementById('profil-non-inscrit');
    const ProfilInscrit = document.getElementById('profil-inscrit');

    if (estInscrit) {
        profilNonInscrit.style.display = 'none';
        profilInscritInscrit.style.display = 'block';

    }else {
        profilNonInscrit.style.display = 'block';
        profilInscritInscrit.style.display = 'none';

        alert("Vous n'êtes pas encore inscrit, veuillez vous inscrire");
    }
}

document.getElementById('inscription').addEventListener('click', function(){
    showSection('inscription');
})



//modal

const modal = document.getElementById("modal");
const envoyerBtn = document.getElementById("envoyer");
const closeModal = document.querySelector(".close");
const confirmerBtn = document.getElementById("confirmer");

//pour ouvrir la fennetre modale

envoyerBtn.addEventListener("click", function(){
    modal.style.display = "flex";
});

//pour fermer le modal
closeModal.addEventListener("click", function(){
    modal.style.display = "none";
});

//fermer la modal si on clique a l'exterieur de celle ci
window.addEventListener("click", function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
});


//validation du mot de passe lors de la confirmation
confirmerBtn.addEventListener("click", function(){
    const motDePasse = document.getElementById("mot-de-passe").value;

    if(motDePasse === "") {
        alert("Veuillez saisir un mot de passe");
    }else{
        alert("confirmée !");
        modal.style.display = "none";
    }
})


envoyerBtn.addEventListener("click", function(){
    const complet = document.getElementById("complete").value;
    if(complet === ""){
        
        alert("veuillez completer tous les champs");
        modal.style.display = "none";
    }
})
