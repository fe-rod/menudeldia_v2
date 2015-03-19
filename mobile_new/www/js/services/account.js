angular.module('todayMenu')

    .factory('Account', function(Helpers, appConfig) {

        var service = {
            saveComment: saveComment,
            saveSuggestion: saveSuggestion
        }

        function saveComment(comment, identif){
            return Helpers.postData(appConfig.apiUrl + 'appcomment', {message: comment, uuid: identif});
        }

        function saveSuggestion(suggestion, identif){
            return Helpers.postData(appConfig.apiUrl + 'suggestions', {message: suggestion, uuid: identif});
        }

        return service;
    });
