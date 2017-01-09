angular.module('app.services', ['ngResource'])

.factory('videoData', function ($http, $log){
        return {
            getVideo: function(callback){
                return $http({method: 'GET', url: "js/insanity.json"})
                .success(function(data, status, headers, config){
                    callback(data);
                })
                .error(function(data, status, headers, config){
                    $log.warn(data, status, headers(), config)
                }) 
            }
  
        }
        
})

.service('BlankService', [function(){

}]);