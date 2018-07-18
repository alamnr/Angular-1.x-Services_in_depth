(function () {

    var app = angular.module('ContactApp');

    app.service('AppDataServiceSvc', function (AppNameSvc) {

        this.name = AppNameSvc;
        this.author = 'Koushik';
        this.company = 'Java Brains';
        this.buildDate = new Date().toDateString();

    });


})();