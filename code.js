let voiture = {
    // Propriétés de la voiture
    couleur: "jaune",
    forme: "arrondie",
    taille: "petite",
  
    // Méthode pour démarrer la voiture
   // demarrer : function () {
    //  console.log("Vvvrrrrruummmmm!!!!");
  //  },
  
    // Méthode pour avancer
    //avancer: function () {
    //  console.log("La voiture avance.");
    //},
  
    // Méthode pour reculer
  //  reculer: function () {
    //  console.log("La voiture recule.");
    //},
};
  
  //voiture.taille = "petite";

  //voiture.nombreRoue = 2;
  
  //console.log(voiture);


  //voiture(c, f, t) fonction constructeur d'objet voiture
  function Voiture(c, f, t) {
    // Propriété de chaque modèle d'objet voiture à construire
    this.couleur = c;
    this.forme = f;
    this.taille = t;

    // Méthode de chaque modèle d'objet voiture à construire
    this.demarrer = function(){
        console.log("Vvvrrrrruummmmm!!!!");
    },
    
    this.avancer = function(){
        console.log("La voiture avance");
    },
    
    this.reculer = function(){
        console.log("La voiture recule");
    }


  };

  let voiture1 = new Voiture("rouge", "carré", "grande");
  console.log(voiture1.couleur);
  
  let voiture2 = new Voiture("jaune", "rectangle", "petite");

  let voiture3 = new Voiture("bleu", "rond", "moyenne");

  let voiture4 = new Voiture("noir", "carré", "grande");

  let voiture5 = new Voiture("marron", "carré", "grande");


  function utilisateur(n, p, d, v, a) {

    this.nom = n;
    this.prenom = p;
    this.dateDeNaissance = d;
    this.villeDeResidence = v;
    this.age = a;

    this.courrir = function(){
        console.log("vitesse de la lumière !!");
    },

    this.marcher = function(){
        console.log("je marchee !!");
    },

    this.sauter = function(){
        console.log("saute comme un kangourou !!");
    },

    this.lire = function(){
        console.log("lire c'est bien !!");
    },

    this.ecrire = function(){
        console.log("j'ecrie une histoire !!");
    },

    this.reciter = function(){
        console.log("lalalalala !!");
    }

  };
  let utilisateur1 = new utilisateur("django","said","03/06/2001","tsoudzou","24");
  console.log(utilisateur1.prenom);
  utilisateur1.sauter();