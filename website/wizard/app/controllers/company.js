(function () {
    'use strict';

    angular
        .module('menudeldia')
        .controller('companyCtrl', company);

    company.$inject = ['$scope', '$rootScope', '$state', '$stateParams', '$timeout', 'FileUploader', 'companyService'];

    function company($scope, $rootScope, $state, $stateParams, $timeout, FileUploader, companyService) {

        //function definition
        $scope.loadTags = loadTags;
        $scope.nextStep = nextStep;
        $scope.saveCompany = saveCompany;

        //initialize controller
        activate();

        //functions

        function activate(){
            $scope.loadingSave = false;
            $scope.loadingNextStep = false;

            initImageUpload();
            loadTags();
            //if first time
            if($stateParams.cId == undefined){
                newCompany();
                //disable other views and save button
                $rootScope.enabledStores = false;
                $rootScope.enabledMenu= false;
            }
            else{
                //loadCompany by user id or similar
                loadCompany($stateParams.cId);
                $rootScope.enabledStores = true;
                $rootScope.enabledMenu= true;
            }
        }

        function loadTags(){
            $scope.tags = [
                {id: "1", name: "Minutas"},
                {id: "2", name: "Milanesas"},
                {id: "3", name: "Wraps"},
                {id: "4", name: "Chivitos"},
                {id: "5", name: "Ensaladas"},
                {id: "6", name: "Tartas"},
                {id: "7", name: "Postres"},
                {id: "8", name: "Vegetariana"},
                {id: "9", name: "Pizza"},
                {id: "10", name: "Hamburguesas"},
                {id: "11", name: "Sushi"},
                {id: "12", name: "Helados"},
                {id: "13", name: "Thai"},
                {id: "14", name: "Comida china"},
            ];
        }

        function saveCompany(){
            $scope.loadingSave = true;

            //upload image
            //$scope.uploader.queue[0].upload(); //Manage errors

            //save user

            //save company
//            companyService.save($scope.company).then(function(){
//                $timeout(function(){
//                    $scope.loadingSave = false;
//                }, 3000);
//            });
        }

        function nextStep(){
            $scope.loadingNextStep = true;
            $timeout(function(){
                $scope.loadingNextStep = false;
                $state.go('stores');
            }, 3000)
        }

        function newCompany(){
            $scope.company = {
                name: '',
                description: '',
                url: '',
                email: '',
                phone: '',
                tags: [],
                userName: '',
                password: '',
                image:''
            };
        }

        function loadCompany(id){
            $scope.company = companyService.getCompanyById(id);

            //if company not found show error (404)
        }

        function initImageUpload(){
            //Image upload
            $scope.uploader = new FileUploader();

            $scope.uploader.filters.push({
                name: 'imageFilter',
                fn: function(item /*{File|FileLikeObject}*/, options) {
                    var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                    return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                }
            });
        }
    }
})();

