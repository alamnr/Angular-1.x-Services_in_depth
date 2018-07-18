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
        
        self.updateUser = function(userData){
          return $http.put('http://localhost:3000/contacts/'+userData.id,userData)
           .then(response=>{
               console.log(response);
           }) ;
        }

        self.createUser = function(userData){
            return $http.post('http://localhost:3000/contacts/',userData)
             .then(response=>{
                 console.log(response);
             }) ;
          }

       
    });
})()