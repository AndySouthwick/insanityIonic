angular.module('app.services', ['ngResource'])

.factory('videoData', function ($http, $log, $resource){
        return {
            getVideos: function(callback){
                return $http({method: 'GET', url: "js/insanity.json"})
                .success(function(data, status, headers, config){
                    callback(data);
                })
                .error(function(data, status, headers, config){
                    $log.warn(data, status, headers(), config)
                }); 
            },

            getVideo: function(callback){
                return $resource('workout/:videoId.json', {},{
                    query:{
                        method: 'GET',
                        params: {videoId: 'videos'},
                        isArray: true
                    }
                })
            }
            
  
        }
        
})

.service('BlankService', [function(){

}]);