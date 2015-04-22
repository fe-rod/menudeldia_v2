(function () {
    'use strict';

    angular
        .module('menudeldia')
        .controller('companyCtrl', company);

    company.$inject = ['$scope', '$rootScope', '$state', '$stateParams', '$timeout', 'FileUploader', 'companyService', 'configService', 'authService'];

    function company($scope, $rootScope, $state, $stateParams, $timeout, FileUploader, companyService, configService, authService) {

        //function definition
        $scope.loadTags = loadTags;
        $scope.nextStep = nextStep;
        $scope.saveCompany = saveCompany;

        //initialize controller
        activate();

        //functions

        function activate(){
            $scope.existingCompany = false;
            $scope.loadingSave = false;
            $scope.loadingNextStep = false;
            $scope.showNextStep = false;

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
                $scope.existingCompany = true;
            }
        }

        function loadTags(){
            configService.getTags().then(function(result)
            {
                $scope.tags = result;
            });
        }

        function registerUser(){
            authService.register($scope.user);
        }

        function uploadImage(){
            //$scope.uploader.queue[0].upload(); //Manage errors
        }

        function saveCompany(){
            $scope.loadingSave = true;
            debugger;
            uploadImage();

            //registerUser();

            //set new tags
            $scope.company.tags = _.pluck(_.filter($scope.tags, function(i){ return i.selected }), 'id');

            $scope.company.emailUserName = $scope.user.userName;
            $scope.company.password = $scope.user.password;


          companyService.registerCompany($scope.company).then(function(result){
                var id = result.restaurantId;


          });
        }

        function nextStep(){
            $scope.loadingNextStep = true;
            $state.go('stores',{id:'70AA8EB9-7833-407E-912E-AC34B0D6BA8F'});
            $scope.loadingNextStep = false;
        }

        function newCompany(){
            $scope.company = {
                name: '',
                description: '',
                url: '',
                email: '',
                phone: '',
                tags: [],
                image:'',
                emailUserName:'',
                password:''
            };

            $scope.user = {
                userName: '',
                password: ''
            }
        }

        function loadCompany(id){
            $scope.company = companyService.getCompany(id);
            //if company not found show error (404)
                //404
            //else
             //merge company tags
            _.map($scope.tags, function(item){
                item.selected = _.indexOf($scope.company.tags, item.id) !== -1;
                return item;
            });
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

//        $scope.$watch('company', function() {
//            $scope.showNextStep = ($scope.company.name != "")
//                && ($scope.company.description != "")
//                && ($scope.company.url != "")
//                && ($scope.company.email != "")
//                && ($scope.company.phone != "");
//                //&& (!$scope.existingCompany
//                //    && $scope.user.userName != "" //if first time also check for user and password
//                //    && $scope.user.password != "");
//
//        },
//        true);
    }
})();

