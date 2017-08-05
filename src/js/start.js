requirejs.config({
    baseUrl: './dist/js',
    paths: {
        jquery: '../vendor/jquery/dist/jquery',
        handlebars: '../vendor/handlebars/handlebars.amd',
        googlemaps: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB-1_YK7fC5rpgognh3QbKomIYJC8uk6TA',
        axios: '../vendor/axios/dist/axios.js',
    }
});

requirejs(['./app'], function (app) {
    var app = new app.App();
    app.start();
});