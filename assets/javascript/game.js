// You have a database of challenges 
// - content : string
// - explanation (feedback) : string
// - number of points : number
// - difficulty : 
// - number of co2 associated
// - accepted challenge : bolean 

var defi1 ={
	content : "Ne prends que deux feuilles de papier pour t'essuyer les mains",
	explanation : "Le papier reste le premier consommable utilisé au bureau avec 80 kg de papier consommé par personne et par an! Mieux encore, essuies toi les mains sur les chemises de tes collègues, ca cree du lien",
	points : 10,
	difficulty : "easy",
	CO2 : 0.1,
	accepted : false,
};
var defi2 ={
	content : "Avant de te lancer dans une recherche Google, reflechis bien à la formulation pour éviter les recherches répétées. Il faut surfer leger!",
	explanation : "Chaque année dans le monde on fait 1 204 milliards (je ne sais pas comment on prononce un tel chiffre) de recherches internet, soit 12,6 millions de CO2 émis soit 65,6 millions de km parcourus en voiture. Réfléchir en amont aux termes voulues c'est diminuer le potentiel nombre de recherches et donc de CO2 émi. Il faut surfer leger!",
	points : 10,
	difficulty : "easy",
	CO2 : 1.001,
	accepted : false,
};
var defi3 ={
	content : "Si tu fais pipi, appuies sur le petit bouton de la chasse d'eau, pas la gros!",
	explanation : "Le petit bouton, si tu regardes bien, fait environ la moitié de la taille du gros. Si si, on te jure. Et bah ca marche pareil pour l'eau : on passe de 15 à 6 litres d'eau soit 3,2g de CO2 en moins. Petite commission = petit bouton. ",
	points : 10,
	difficulty : "easy",
	CO2 : 3.2,
	accepted : false,
};
var defi4 ={
	content : "vérifie que tous les robinets de l'endroit ou tu te trouves sont bien fermés",
	explanation : "Un robinet qui fuit gache jusqu'à 120 litres d'eau par jour. C'est ce qu'un chameau (celui a deux bosses, parce que CHA-MEAU) avale en 2 minutes envirion et lui permet de tenir 15 jours sans boire. Bref, tu viens d'eviter la mort d'un chameau. ",
	points : 30,
	difficulty : "middle",
	CO2 : 3.2,
	accepted : false,
};
var defi5 ={
	content : "Un mail écolo c'est un nombre de destinataires limité, un court temps de lecture et le moins de pièces jointes possibles!",
	explanation : "Un mail avec piece jointe c'est presque 10 fois plus de CO2 émis qu'un mail simple. Enfin, l'envoi d'un mail à un destinataire revient à rejeter 4g de CO2 dans l'air. Alors au lieu d'envoyer un mail à ton collegue de l'autre côté de l'open space, passe faire un petit coucou :)",
	points : 30,
	difficulty : "middle",
	CO2 : 5,
	accepted : false,
};
var defi6 ={
	content : "Éteins ton ordinateur de bureau ce soir au lieu de le mettre en veille",
	explanation : "Savais tu que les phases d'inactivité des ordinateurs peut representer 2/3 de leur consommation totale en électricité? En éteignant ton ordinateur, tu peux baisser tes emissions de CO2 d'environ 15 kg sur un an, soir environ 0,5% des emissions moyennes annuelles dʼun Français",
	points : 30,
	difficulty : "middle",
	CO2 : 41.09,
	accepted : false,
};
var defi7 ={
	content : "Instaure un covoiturage pour aller au travail!",
	explanation : "Pour faire simple, plus on est de fous, moins on pollue! Ainsi, deux personnes dans une voiture, c'est 155 grammes de CO2 par personnes au lieu de 310!",
	points : 50,
	difficulty : "hard",
	CO2 : 155,
	accepted : false,
};
var defi8 ={
	content : "Explique à deux collègues comment mettre en place la mise en veille automatique",
	explanation : "« Dans la forêt amazonienne en feu, les animaux s'enfuient pour échapper au désastre. Un colibri fait des allers et retours entre les flammes et la rivière. Un jaguar qui fuyait le feu le croise et voyant l'oiseau qui jette l'eau de son bec vers les flammes lui demande ce qu'il fait. Et le colibri de répondre : juste mon boulot ! » En gros, une somme de micro actions mises ensemble peut créer une réelle avancée! Le site du mouvement colibri : www.colibris-lemouvement.org",
	points : 50,
	difficulty : "hard",
	CO2 : 73.8,
	accepted : false,
};
var defi9 ={
	content : "Si tu viens en voiture, évite de mettre la climatisation, ouvre les fenêtres.",
	explanation : "Quand elle fonctionne, la climatisation augmente notablement la consommation de carburant d'un véhicule. À titre d'exemple, à 25°C par temps clair, pour un réglage de la climatisation à 20°C, en ville, c'est en moyenne 20 % de carburant consommés en plus. Du coup au delà d'éviter des emissions du CO2, c'est du carburant qui est économisé. Allez, on ouvre les fenêtres, on sourit et on attend les moucherons. ",
	points : 50,
	difficulty : "hard",
	CO2 : 234,
	accepted : false,
};
var defi10 ={
	content : "Nettoie ta boite mail et désabonne toi de tous les newsletter ou spam don’t tu n'as pas besoin!",
	explanation : "1 mail simple represente represente 4 grammes de CO2 emis et un mail avec piece jointe 35 grammes. Se desabonner des newsletter inutile (sauf Goodi) permet d'economiser a long terme une somme consequente de CO2 alors que ça ne prend que 5 minutes. Il est grand temps de se désabonner de toutes ces newsletter que tu n'ouvres jamais! Cleanfox pourra t'aider dans cette mission.",
	points : 50,
	difficulty : "hard",
	CO2 : 400,
	accepted : false,
};
var defi11 ={
	content : "Réduis au maximum la durée de tes conversations téléphoniques!",
	explanation : "1 minute de conversation c'est 57 grammes de CO2! Du coup pour parler des dernières conquêtes de Christine de la compta, donnez vous rendez vous!",
	points : 30,
	difficulty : "middle",
	CO2 : 285,
	accepted : false,
};
var defi12 ={
	content : "A midi, volaille ou porc sont mieux que boeuf!",
	explanation : "En France près d'un tiers des émissions de gaz à effet de serre est lié à l'alimentation! A consommation égale, la volaille, le porc et les proteine végétales c'est 1,7 fois moins de C02 émis sur une année que le boeuf. Meuh.",
	points : 100,
	difficulty : "expert",
	CO2 : 11500,
	accepted : false,
};
var defi13 ={
	content : "Installe un anti-spams directement sur ton ordinateur.",
	explanation : "1 spam représente 3g de CO2 par unité. On estime que les SPAM représentent jusqu'à 90% du trafic moyen des emails en France, soit environ 12,6 milliards de SPAMs par jour en France. Installer un anti spam c'est réduire participer à réduire les émissions de CO2 de 3780 tonnes soit 32869565,22km de voiture (plus de 5600 fois Paris/New York). Si c'est comme ça, je pars à New York",
	points : 100,
	difficulty : "expert",
	CO2 : 1944,
	accepted : false,
};
var defi14 ={
	content : "Quand tu réponds à un message groupé, sélectionne les destinataires que tu veux voir recevoir le message.",
	explanation : "Un email représente 4g de CO2 émis et 1,4 milliards d'emails (hors SPAM) sont envoyés chaque jour en France, soit 5600 tonnes de CO2 émis. C'est comme ci tu allais tous les jours au bureau en voiture pendant 11200 ans. Il est grand temps de prendre sa retraite",
	points : 10,
	difficulty : "easy",
	CO2 : 0.012,
	accepted : false,
};
var defi15 ={
	content : "Demain, viens au travail en transport en commun",
	explanation : "Savais tu qu'un bus emmet 80 grammes de CO2 par km par personne, soit 3,8 fois moins qu'une personne seule dans une voiture. Et on ne te parle même pas du tram : 15,5 fois moins! Certes ça sent la transpiration, mais c'est bon la bonne cause!",
	points : 50,
	difficulty : "hard",
	CO2 : 6720,
	accepted : false,
};


var challenges = [defi1, defi2, defi3, defi4, defi5, defi6, defi7, defi8, defi9, defi10, defi11, defi12, defi13, defi14, defi15];

var myPoints = 0;
var myCO2 = 0;

$(".randomButton").on("click",function() {


var randomChallenge = challenges[Math.floor(Math.random()*challenges.length)];
console.log(randomChallenge);

$(".randomButton").html("Changer de Challenge >>")

$(".challenge").html(randomChallenge.content);
	
$(".feedback").html(randomChallenge.explanation);

$(".cpoints").html("Points :");
$(".challengePoints").html(randomChallenge.points);

$(".cCO2").html("CO2 :");
$(".ChallengeCO2").html(randomChallenge.CO2);

$(".clevel").html("Level :");
$(".ChallengeLevel").html(randomChallenge.difficulty);


$(".doButton").on("click", function(){
	myPoints = myPoints + randomChallenge.points;
	$(".myPoints").html(myPoints);
	myCO2 = myCO2 + randomChallenge.CO2;
	$(".myCO2").html(myCO2);

})

});