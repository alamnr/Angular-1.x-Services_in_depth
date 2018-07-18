(function () {

    var app = angular.module('ContactApp');

    app.controller('ContactCtrl', function (ContactDataSVC) {

        var self = this;

        self.editMode = false;

         ContactDataSVC.getContacts()
        .then(data=>{
            self.contacts = data;
        })
        .catch(err=>{console.log(err)});

        

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
            //console.log('You Clicked');
        };

        this.toggleEditMode = function(){
            this.editMode = !this.editMode;
        }

        this.saveUser = function(){
            this.toggleEditMode();
            var userData = this.selectedContact;
            ContactDataSVC.saveUser(userData);
        }

    } );

})();