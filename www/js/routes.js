angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html',
    controller: 'dashboardCtrl'
  })

  .state('profile', {
    url: '/Profile',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('workouts', {
    url: '/workouts',
    templateUrl: 'templates/workouts.html',
    controller: 'workoutsCtrl'

  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('fitTest', {
    url: '/fitTest',
    templateUrl: 'templates/fitTest.html',
    controller: 'fitTestCtrl'
  })

  .state('workout', {
    url: '/workout',
    templateUrl: 'templates/workout.html',
     controller: 'workoutCtrl',  
  })


$urlRouterProvider.otherwise('/dashboard')

  

});