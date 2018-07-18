(function (){
    var app = angular.module('ContactApp');
    app.service('ContactDataSVC',function($http){
        var self = this;

        self.getContacts = function(){
          return  $http.get('http://localhost:3000/contacts/')
            .then(function(response){
                return response.data;
            })
            .catch(err=>{console.log(err)});        }

       
    });
})()