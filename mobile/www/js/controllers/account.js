angular.module('todayMenu')
    .controller('AccountCtrl', function($scope, $ionicModal, $rootScope, Account) {
        $rootScope.hideTabs = false;
        $rootScope.hideFilter = true;
        $ionicModal.fromTemplateUrl('templates/account/comments.html', function($ionicModal) {
            $scope.commentsModal = $ionicModal;
            $scope.comments = {value: ''};
        }, {
            // Use our scope for the scope of the modal to keep it simple
            scope: $scope,
            // The animation we want to use for the modal entrance
            animation: 'slide-in-up'
        });

        $ionicModal.fromTemplateUrl('templates/account/suggest.html', function($ionicModal) {
            $scope.suggestModal = $ionicModal;
            $scope.suggestions = {value: ''};
        }, {
            // Use our scope for the scope of the modal to keep it simple
            scope: $scope,
            // The animation we want to use for the modal entrance
            animation: 'slide-in-up'
        });

        $scope.sendComments = function(){
            $scope.commentsModal.hide();

            Account.saveComment($scope.comments.value).then(
                function(data){
                    $scope.comments.value = '';
//                    $cordovaToast.showLongBottom('Gracias por enviarnos tus comentarios').then(function(success) {
//                        // success
//                    }, function (error) {
//                        // error
//                    });
                },
                function(){
                    alert('Error');
                }
            );
        }

        $scope.sendSuggestions = function(){
            $scope.suggestModal.hide();

            Account.saveSuggestion($scope.suggestions.value).then(
                function(data){
                    $scope.suggestions.value = '';
//                    $cordovaToast.showLongBottom('Gracias por enviarnos tus comentarios').then(function(success) {
//                        // success
//                    }, function (error) {
//                        // error
//                    });
                },
                function(){
                    alert('Error');
                }
            );
        }

    });
