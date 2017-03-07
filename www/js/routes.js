angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('login', {
    url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
  })




  .state('menu', {
    url: '/side-menu21',
    cache:false,
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })  

  .state('menu.home', {
    url: '/home',
    cache:false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

    .state('menu.mybookings', {
    url: '/mybookings',
    cache:false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/mybookings.html',
        controller: 'mybookingsCtrl'
      }
    }
  })
   .state('menu.settings', {
    url: '/settings',
    cache:false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.homecleaner_location', {
    url: '/homecleaner_location',
    views: {
      'side-menu21': {
        templateUrl: 'templates/homecleaner_location.html',
        controller: 'homecleaner_locationCtrl'
      }
    }
  })

  .state('menu.homecleaner_aboutplace', {
    url: '/homecleaner_aboutplace',
    views: {
      'side-menu21': {
        templateUrl: 'templates/homecleaner_aboutplace.html',
        controller: 'homecleaner_aboutplaceCtrl'
      }
    }
  })

  .state('menu.homecleaner_datetime', {
    url: '/homecleaner_datetime',
    views: {
      'side-menu21': {
        templateUrl: 'templates/homecleaner_datetime.html',
        controller: 'homecleaner_datetimeCtrl'
      }
    }
  })


  .state('menu.homecleaner_howoften', {
    url: '/homecleaner_howoften',
    views: {
      'side-menu21': {
        templateUrl: 'templates/homecleaner_howoften.html',
        controller: 'homecleaner_howoftenCtrl'
      }
    }
  })

  .state('menu.homecleaner_extras', {
    url: '/homecleaner_extras',
    views: {
      'side-menu21': {
        templateUrl: 'templates/homecleaner_extras.html',
        controller: 'homecleaner_extrasCtrl'
      }
    }
  })

  .state('menu.address', {
    url: '/_address',
    views: {
      'side-menu21': {
        templateUrl: 'templates/address.html',
        controller: 'addressCtrl'
      }
    }
  })
    
  .state('menu.cardinfo', {
    url: '/cardinfo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cardinfo.html',
        controller: 'cardinfoCtrl'
      }
    }
  })

  .state('success', {
    url: '/success',
        templateUrl: 'templates/success.html',
        controller: 'successCtrl'
  })


  .state('menu.painter_location', {
    url: '/painter_location',
    views: {
      'side-menu21': {
        templateUrl: 'templates/painter_location.html'
      }
    }
  })

  .state('menu.painter_aboutjob', {
    url: '/painter_aboutjob',
    views: {
      'side-menu21': {
        templateUrl: 'templates/painter_aboutjob.html'
      }
    }
  })

    .state('menu.painter_aboutjob_2', {
    url: '/painter_aboutjob_2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/painter_aboutjob_2.html'
      }
    }
  })

    .state('menu.datetime', {
    url: '/datetime',
    views: {
      'side-menu21': {
        templateUrl: 'templates/datetime.html'
      }
    }
  })

    .state('menu.sub_handyman', {
    url: '/sub_handyman',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sub_handyman.html'
      }
    }
  })
    .state('menu.sub_plumber', {
    url: '/sub_plumber',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sub_plumber.html'
      }
    }
  })

    .state('menu.plumber_location', {
    url: '/plumber_location',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plumber_location.html'
      }
    }
  })
    .state('menu.plumber_aboutjob', {
    url: '/plumber_aboutjob',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plumber_aboutjob.html',
        controller: 'plumber_aboutjobCtrl'
      }
    }
  })   
    .state('menu.plumber_aboutjob2', {
    url: '/plumber_aboutjob2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plumber_aboutjob2.html',
        controller: 'plumber_aboutjob2Ctrl'
      }
    }
  })    

    .state('menu.sub_electrician', {
    url: '/sub_electrician',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sub_electrician.html'
      }
    }
  })    


$urlRouterProvider.otherwise('/side-menu21/home')

  

});