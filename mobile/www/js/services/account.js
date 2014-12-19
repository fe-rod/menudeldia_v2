angular.module('todayMenu')

    .factory('Account', function(Helpers) {

        var service = {
            saveComment: saveComment,
            saveSuggestion: saveSuggestion
        }

        function saveComment(comment){
            return Helpers.postData('', {comment: comment});
        }

        function saveSuggestion(suggestion){
            return Helpers.postData('', {suggestion: suggestion});
        }

        return service;
    });
