(function () {

    var app = angular.module('ContactApp');

    app.controller('ContactCtrl', function (ContactDataSVC) {

        var self = this;

        self.editMode = false;
        self.addMode = false;

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
            if(self.addMode){
                ContactDataSVC.createUser(userData)
                .then(function(){
                    self.successMsg = 'Data successfully saved';
                })
                .catch(err=>{
                    self.errMsg = 'There was an error, pls try again.';
                });
                self.addMode = false;

            }
            else{
                ContactDataSVC.updateUser(userData)
                .then(function(){
                    self.successMsg = 'Data successfully updated';
                })
                .catch(err=>{
                    self.errMsg = 'There was an error, pls try again.';
                });
            }
           
        }

        this.addContact = function(){
            self.addMode = true;
            this.selectedContact = {
                id:new Date().toTimeString()
            };
            this.editMode = true;
        }

    } );

})();