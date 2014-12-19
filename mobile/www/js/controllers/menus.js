angular.module('todayMenu')

    .controller('MenusCtrl', function($scope, $rootScope, $stateParams, Menus, $ionicPopover, $timeout) {
        $scope.menus = Menus.all();
        $scope.menu = Menus.get($stateParams.menuId);
        $rootScope.hideTabs = false;
        $rootScope.hideFilter = false;

        $scope.favorite = function(menu){
            menu.favorite = !menu.favorite;
        };

        $ionicPopover.fromTemplateUrl('templates/menus/filterPopover.html', function(popover) {
            $rootScope.popover = popover;
        });

        $scope.loadMore = function() {

            $timeout(function(){
                $scope.menus.push(
                    {id:'10', name:'Zapallitos rellenos de carne', price:'160', description: 'Pata de pollo con pure de papa y calabaza', likes:'5', comments:'2', store: { id: 1, icon: 'placeholder' , name:'Toca y pica', phone: '12345', distance: 0.3}}
                );
                $scope.menus.push(
                    {id:'11', name:'Tortilla de papas con tomate y orégano', price:'160', description: 'Pata de pollo con pure de papa y calabaza', likes:'5', comments:'2', store: { id: 1, icon: 'placeholder' , name:'Toca y pica', phone: '12345', distance: 0.3}}
                );
                $scope.menus.push(
                    {id:'12', name:'Tallarines con pollo y salsa de soja', price:'160', description: 'Pata de pollo con pure de papa y calabaza', likes:'5', comments:'2', store: { id: 1, icon: 'placeholder' , name:'Toca y pica', phone: '12345', distance: 0.3}}
                );
                $scope.$broadcast('scroll.infiniteScrollComplete')
            }, 3000);
//            $http.get('/more-items').success(function(items) {
//                useItems(items);
//
//            });
        };

    })
    .controller('MenuDetailCtrl', function($scope, $rootScope, $stateParams, Menus) {
        $scope.menu = Menus.get($stateParams.menuId);
        $rootScope.hideTabs = true;
        $rootScope.hideFilter = true;
    });


