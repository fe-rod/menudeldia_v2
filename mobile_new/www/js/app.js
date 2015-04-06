// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('todayMenu', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
//    if (window.cordova && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

      .state('tab.menus', {
          url: '/menus',
          views: {
              'tab-menus': {
                  templateUrl: 'templates/menus/tab-menus.html',
                  controller: 'MenusCtrl'
              }
          }
      })
      .state('tab.menu-detail', {
          url: '/menu/:menuId',
          views: {
              'tab-menus': {
                  templateUrl: 'templates/menus/menuDetail.html',
                  controller: 'MenuDetailCtrl'
              }
          },
          resolve: {
              data: function (Menus,$stateParams, $ionicLoading) {
                  $ionicLoading.show({delay: 500});
                  return Menus.get($stateParams.menuId).then(function(data){
                      $ionicLoading.hide();
                      return data;
                  });
              }
          }
      })
      .state('tab.stores', {
          url: '/stores',
          views: {
              'tab-stores': {
                  templateUrl: 'templates/stores/tab-stores.html',
                  controller: 'StoresCtrl'
              }
          }
      })
      .state('tab.restaurants', {
          url: '/stores/restaurants',
          views: {
              'tab-stores': {
                  templateUrl: 'templates/restaurants/tab-restaurants.html',
                  controller: 'RestaurantsCtrl'
              }
          }
      })
      .state('tab.store-detail', {
          url: '/store/:storeId/:distance',
          views: {
              'tab-stores': {
                  templateUrl: 'templates/stores/store-detail.html',
                  controller: 'StoreDetailCtrl'
              }
          },
          resolve: {
              data: function (Stores,$stateParams, $ionicLoading) {
                  $ionicLoading.show({delay: 500});
                  return Stores.getById($stateParams.storeId).then(function(data){
                      $ionicLoading.hide();
                      return data;
                  }); }
          }
      })
      .state('tab.restaurant-detail', {
          url: '/stores/restaurant/:restaurantId',
          views: {
              'tab-stores': {
                  templateUrl: 'templates/restaurants/restaurant-detail.html',
                  controller: 'StoreDetailCtrl'
              }
          },
          resolve: {
              data: function (Stores,$stateParams, $ionicLoading) {
                  $ionicLoading.show({delay: 500});
                  return Stores.getRestaurantById($stateParams.restaurantId).then(function(data){
                      $ionicLoading.hide();
                      return data;
                  }); }
          }
      })

      .state('tab.menuMap', {
          url: '/menuMap/:latitude/:longitude',
          views: {
              'tab-menus': {
                  templateUrl: 'templates/map/map.html',
                  controller: 'MapCtrl'
              }
          }
      })
      .state('tab.storeMap', {
          url: '/storeMap/:latitude/:longitude',
          views: {
              'tab-stores': {
                  templateUrl: 'templates/map/map.html',
                  controller: 'MapCtrl'
              }
          }
      })
      .state('tab.restaurantMap', {
          url: '/restaurantMap/:latitude/:longitude',
          views: {
              'tab-stores': {
                  templateUrl: 'templates/map/map.html',
                  controller: 'MapCtrl'
              }
          }
      })
      .state('tab.account', {
          url: '/account',
          views: {
              'tab-account': {
                  templateUrl: 'templates/account/tab-account.html',
                  controller: 'AccountCtrl'
              }
          }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/menus');

  $ionicConfigProvider.platform.ios.backButton.text('Volver');

})
.constant('appConfig',
    {
        ver: '1.0.0',
        //apiUrl: "http://localhost:42479/api/"
        apiUrl: "http://mddservice.azurewebsites.net/api/"
    }
);
