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
            self.successMsg = undefined;
            self.errMsg = undefined;
            //console.log('You Clicked');
        };

        this.toggleEditMode = function(){
            this.editMode = !this.editMode;

            self.successMsg = undefined;
            self.errMsg = undefined;
        }

        this.saveUser = function(){
            this.toggleEditMode();
            var userData = this.selectedContact;
            ContactDataSVC.saveUser(userData)
            .then(function(){
                self.successMsg = 'Data successfully updated';
            })
            .catch(err=>{
                self.errMsg = 'Failed to update';
            });
        }

    } );

})();