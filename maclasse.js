// class. Crée la classe Documents gràce au mot-clé class
class Document {

    // Définissons le constructeur de la classe gràce au mot-clé constructor
    constructor(titre, nombrePage, auteur){
        this.titre = titre;
        this.nombrePage = nombrePage;
        this.auteur = auteur;
    }

    // Méthode description de la classe Document
    description(){
        console.log("Le titre du document est ", this.titre);
        console.log("L'auteur est ", this.auteur);
        console.log("Le document contient ", this.nombrePage, " pages");
    }
}

// crée plusieurs documents similaires à partir du modèle de Document
let documentHtml = new Document("Introduction au HTML", 35, "Nourdine Combo");
let documentCss = new Document("Apprendre le CSS", 15, "Ali Fahar");
let documentJavascript = new Document("Introduction au JavaScript", 55, "Nissay Abdou");
let documentMysql = new Document("Apprendre Mysql, 35 ","Fatima Ali");


documentHtml.description();
documentCss.description();
documentJavascript.description();
documentMysql.description();