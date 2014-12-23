angular.module('todayMenu')

    .controller('StoresCtrl', function($scope,$rootScope, Stores) {
        const pageSize = 10;
        var pageCounter = 0;

        $rootScope.hideTabs = false;
        $rootScope.hideFilter = true;


        Stores.all(pageCounter,pageSize).then(function(data){
            $scope.stores = processData(data);
            $scope.moreDataCanBeLoaded = (data.length == pageSize);
        });



        function processData(data) {
            /*transformations*/
            var temp = data;
            temp = _.map(temp, function (obj) {
                obj = _.extend(obj, {
                    tagsString: _.reduce(obj.tags,function(mem,item){
                        if(mem == "") { return item.name; }
                        return mem + ", " + item.name;
                    },"")
                });
                return obj;
            });
            return temp;
        }



        $scope.loadMore = function() {
            pageCounter = pageCounter + 1;
            Menus.all(pageCounter,10).then(
                function(data){
                    $scope.moreDataCanBeLoaded = (data.length == pageSize);
                    if(data.length){
                        $scope.stores.push(data);
                        $scope.$broadcast('scroll.infiniteScrollComplete')
                    }
                }
            );
        };


        var options = {
            frequency : 1000,
            timeout : 30000,
            enableHighAccuracy: true
        };

//        $cordovaGeolocation
//            .getCurrentPosition(options)
//            .then(function (position) {
//                var lat  = position.coords.latitude
//                var long = position.coords.longitude
//
//                var myPos = new google.maps.LatLng(lat, long);
//
//                _.map($scope.stores, function(store){
//                    var myLatlng = new google.maps.LatLng(store.location.lat,store.location.long);
//                    var distance = google.maps.geometry.spherical.computeDistanceBetween(myLatlng, myPos);
//                    store.distanceTo = Math.ceil(distance);
//                });
//            }, function(err) {
//            });
    })

    .controller('StoreDetailCtrl', function($scope, $rootScope, $stateParams, Stores,data) {
        $rootScope.hideTabs = true;
        $rootScope.hideFilter = true;
        debugger;


        $scope.store = data;
        $scope.distanceAvailable = $stateParams.distance != 0;
        $scope.distanceTo = Math.ceil($stateParams.distance);
    });
