// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBxL264yOIwTBbYnY9GXCg6jH5s9GUeEAA",
    authDomain: "mega-links-app.firebaseapp.com",
    databaseURL: "https://mega-links-app.firebaseio.com",
    projectId: "mega-links-app",
    storageBucket: "mega-links-app.appspot.com",
    messagingSenderId: "688801781759",
    appId: "1:688801781759:web:4724c896b2d6f2efa439ca",
    measurementId: "G-3WC015HFMH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



var sinopse = "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.";
var dataContent =
    "<div class='card'>" +
    "<div class='poster'><img class='fade-in' src='https://image.tmdb.org/t/p/w342/89QTZmn34iwXYeCpVxhC9UrT8sX.jpg' alt='Os Vingadores'></div>" +
    "<div class='details'>" +
    "<h6>Os Vingadores<br><span>Ano: 2018</span></h6>" +
    "<div class='description'><small><b>Sinopse</b></small>" +
    "<ul class='list-unstyled scroll'>" +
    "<li>" + sinopse + "</li>" +
    "</ul>" +
    "<form method='post' target='_blank' action=''>" +
    "<button class='btn btn-sm btn-block btn-outline-success'>Torrent</button>" +
    "</form>" +
    "</div>" +
    "</div>" +
    "</div>";

$("#content_local").html($("#content_local").html() + dataContent);


// Barra de pesquisa
$(document).ready(function () {
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $('div[class="card"]').filter(function () {
            $(this).toggle($(this).find('h6, span, small').text().toLowerCase().indexOf(value) > -1);
        });
    });
});

$(function () {
    $('.btn-fab').on('click', '.btn', function () {
		$('#modal_poster').modal({
			show: true,
			backdrop: 'static',
			keyboard: false
		});
    });
});
