(function () {

    var app = angular.module('ContactApp');

    app.controller('ContactCtrl', function (ContactDataSVC) {

        var self = this;
         ContactDataSVC.getContacts()
        .then(data=>{
            self.contacts = data;
        })
        .catch(err=>{console.log(err)});

        

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
            //console.log('You Clicked');
        };

    } );

})();