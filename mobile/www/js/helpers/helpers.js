angular.module('todayMenu')

    .factory('Helpers', function($q, $http) {

        var service = {
            postData: postData,
            getData: getData
        }

        function getData(url, params){
            var deferred = $q.defer();

            //call webapi service
            $http.get(url)
                .success(function (data, status, headers, config) { deferred.resolve(data); })
                .error(function (data, status, headers, config) { deferred.reject(status); });

            return deferred.promise;
        }

        function postData(url, data){
            var deferred = $q.defer();
            $http.post(url, data)
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deferred.reject({ data: data, status: status });
                });

            return deferred.promise;
        }

        return service;
    });
