angular.module('todayMenu')

    .controller('MenusCtrl', function($scope, $rootScope, $stateParams, Menus, $ionicPopover, $timeout) {
        const pageSize = 10;
        var pageCounter = 0;

        $rootScope.hideTabs = false;
        $rootScope.hideFilter = false;

        Menus.all(pageCounter,pageSize).then(function(data){
            $scope.menus = data;
            $scope.moreDataCanBeLoaded = (data.length == pageSize);
        });

        $scope.favorite = function(menu){
            menu.favorite = !menu.favorite;
        };

        $ionicPopover.fromTemplateUrl('templates/menus/filterPopover.html', function(popover) {
            $rootScope.popover = popover;
        });

        $scope.loadMore = function() {

            pageCounter = pageCounter + 1;
            Menus.all(pageCounter,10).then(
                function(data){
                    $scope.moreDataCanBeLoaded = (data.length == pageSize);
                    if(data.length){
                        $scope.menus.push(data);
                        $scope.$broadcast('scroll.infiniteScrollComplete')
                    }
                }
            );
        };
    })
    .controller('MenuDetailCtrl', function($scope, $rootScope, $stateParams, Menus, data) {
        $scope.menu = data;
        $rootScope.hideTabs = true;
        $rootScope.hideFilter = true;
    });


