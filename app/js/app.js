var app = angular.module('helloTitle', []);
app.controller('helloCtrl', function ($scope) {
    $scope.nom = "World";
});


var app = angular.module("StyleFilms", []);
app.controller("styleFilms", function ($scope) {
    $scope.movies = [
        {
            id: 1,
            title: "Avatar",
            releaseYear: "2010",
            img: "img/avatar.jpg",
            directors: "James Cameron",
            actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez",
            synopsis: "Sur la lointaine planète de Pandora, Jake Sully, un héros malgré lui, " + "se lance dans une quête de rédemption, de découverte, d'amour inattendu, dont l'issue sera un " + "combat héroïque pour sauver toute une civilisation.",
            rate: "3"
    },
        {
            id: 2,
            title: "Seigneur des Anneaux : La Communauté de l'Anneau",
            releaseYear: "2003",
            img: "img/seigneurdesanneaux1.jpg",
            directors: "Peter Jackson",
            actors: "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker, Viggo Mortensen",
            synopsis: "Frodon le Hobbit hérite de l'Anneau Unique, un instrument de pouvoir absoluqui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu. Commence alors un vaste périple visant à la destruction de l'objet.",
            rate: "5"
    }
  ]
});