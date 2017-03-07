


var application = angular.module('app.controllers', [])
  
application.controller('indexCtrl',
function ($scope, $stateParams,$state) {
    if(window.localStorage.getItem("user_email"))
     $state.go("login");
    else
    $state.go("menu.home");


})
  
application.controller('menuCtrl',
function ($scope, $stateParams,$state) {
$scope.logout=function(){
    
    window.localStorage.clear();
    $state.go("login");
    
    
    
    
    }



})
  
application.controller('homeCtrl',
function ($scope, $stateParams) {


})

application.controller('loginCtrl',
function ($scope, $stateParams,$state,$ionicModal,$ionicLoading,$http,$ionicPopup) {


$scope.login= function()
{
    $ionicLoading.show();
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;
 $http.get("http://192.168.10.5/api/login.php?login_email="+email+"&login_password="+password)
  .then(function(response) {
	console.log(response.data);

     if(response.data=="loggedin"){
         $ionicLoading.hide();
        window.localStorage.setItem("user_email",email);
     	$state.go("menu.home");}
     else{
              $ionicLoading.hide();

     $ionicPopup.alert({
     title: 'Error',
     template: 'Invalid Emaild Id/Password'
   });
     
     }
  });    
    
    
}
$ionicModal.fromTemplateUrl('templates/forgotpassword.html', {
    scope: $scope
	  }).then(function(modal) {
	    $scope.modal = modal;
	  });


})

application.controller('signupCtrl',
function ($scope, $stateParams,$state,$ionicPopup,$http,$ionicLoading) {
    $scope.formData={email:"",password:""};
    $scope.signup=function(){
        //$ionicLoading.show();
   
        alert($scope.formData.email);

         var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
    $http.post("http://192.168.10.5/api/signup.php",data,config).then(function(response){
        
    
     $ionicPopup.alert({
     title: 'Account Creation',
     template: 'Account Created'
   });
     
    $ionicLoading.hide();
    $state.go("login");
    
    
    });
    
    
    }
    
    

}) 
   

application.controller('logoutCtrl',
                      
function($scope,$stateParams,$state){
  
  

})


application.controller('homecleaner_locationCtrl',
function ($scope, $stateParams) {


})

application.controller('homecleaner_aboutplaceCtrl',
function ($scope, $stateParams) {


})

application.controller('homecleaner_datetimeCtrl',
function ($scope, $stateParams) {

})

application.controller('homecleaner_contactCtrl',
function ($scope, $stateParams) {

})

application.controller('homecleaner_howoftenCtrl',
function ($scope, $stateParams) {

	$scope.choice='A';

})
application.controller('homecleaner_extrasCtrl',
function ($scope, $stateParams) {

})

application.controller('addressCtrl',
function ($scope, $stateParams) {

})

application.controller('cardinfoCtrl',
function ($scope, $stateParams) {

}) 

application.controller('successCtrl',
function ($scope, $stateParams) {

})

application.controller('mybookingsCtrl',
function ($scope, $stateParams) {

}) 
application.controller('settingsCtrl',
function ($scope, $stateParams) {

}) 
application.controller('plumber_locationCtrl',
function ($scope, $stateParams) {

}) 
application.controller('plumber_aboutjobCtrl',
function ($scope, $stateParams) {

}) 
application.controller('plumber_aboutjob2Ctrl',
function ($scope, $stateParams) {

}) 