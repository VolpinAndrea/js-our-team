/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (BOOTSTRAP!)
*/

/*MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.*/
let membri = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    },
]

/*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto */
for(const membro of membri){
    stampaMembro(membro);
}

/*MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/
let containerMileston2 = document.getElementById("mileston2");
for(const membro of membri){
    stampaSuHTML(membro);
}



//------------------FUNZIONI---------------------
function stampaMembro(persona){
    console.log(
        `
------------------------------
    Nome: ${persona.nome}
    Ruolo: ${persona.ruolo}
    Stringa foto: ${persona.foto} cm
------------------------------

        `
    )
}

function stampaSuHTML(persona){
    containerMileston2.innerHTML += ' <div>';
    containerMileston2.innerHTML += ' <img src="img/'+persona.foto+'">';
    containerMileston2.innerHTML += ' <p>'+persona.nome+'</p>';
    containerMileston2.innerHTML += ' <p>'+persona.ruolo+'</p>';
    containerMileston2.innerHTML += '</div>';

}