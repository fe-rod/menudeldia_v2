angular.module('todayMenu')

    .factory('Account', function(Helpers, appConfig) {

        var service = {
            saveComment: saveComment,
            saveSuggestion: saveSuggestion
        }

        function saveComment(comment){
            return Helpers.postData(appConfig.apiUrl + '', {comment: comment});
        }

        function saveSuggestion(suggestion){
            return Helpers.postData(appConfig.apiUrl + '', {suggestion: suggestion});
        }

        return service;
    });
