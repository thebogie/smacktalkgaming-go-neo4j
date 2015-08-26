//set this from the golang variables
URLplayerslistautocomplete = typeof(URLplayerslistautocomplete) == 'undefined' ? 0 : URLplayerslistautocomplete;
URLgameslistautocomplete = typeof(URLgameslistautocomplete) == 'undefined' ? 0 : URLgameslistautocomplete;

URLeventstatus = typeof(URLeventstatus) == 'undefined' ? 0 : URLeventstatus;


URLplayerstatus = typeof(URLplayerstatus) == 'undefined' ? 0 : URLplayerstatus;
URLplayeroverallstats = typeof(URLplayeroverallstats) == 'undefined' ? 0 : URLplayeroverallstats;


//
//var ;
//var ;

app.factory('myHttpFactory', ['$http' ,'$filter',function($http, $filter) {
   return {
    	getPlayersAutoComplete: function(item) {
       //since $http.get returns a promise,
       //and promise.then() also returns a promise
       //that resolves to whatever value is returned in it's 
       //callback argument, we can return that.

       		return $http.get(URLplayerslistautocomplete.replace("<nil>", item)).then(function(result) {
		
           return result.data;
       	});
     } , 
	 	getGamesAutoComplete: function(item) {
       return $http.get(URLgameslistautocomplete.replace("<nil>", item)).then(function(gameresult) {
           return gameresult.data;
       });
     } ,
	  	getEvent: function(item) {
			return $http.get(URLeventstatus.replace("<nil>", item)).then(function(result) {
				return result.data;
			});
     } ,
	   	updatePlayer: function(updateplayercargo) {
			console.log("updateplayercargo:" + (updateplayercargo));

			return $http({method: 'POST', 
					url: '/players/update',  
					data:$filter('json')(updateplayercargo) 
					}).then(function(data, status, headers, config) {
					 return data;
			}); 
	 },
	   	getPlayer: function(item) {
			//alert(item);
			return $http.get(URLplayerstatus.replace("<nil>", item)).then(function(result) {
				return result.data;
			});
	 },
	   	getPlayerOverallStats: function(item) {
			//alert(item);
			return $http.get(URLplayeroverallstats.replace("<nil>", item)).then(function(result) {
				return result.data;
			});
	 },
		
		httpcommitEvent: function(eventcargo) {
				
			return $http({method: 'POST', 
					url: '/events/commit',  
					data:$filter('json')(eventcargo) 
					}).then(function(data, status, headers, config) {
					 return data;
			});
	   },
	   	httpTimeZoneOffset: function(mapstring) {
			//alert(item);
			return $http.get(mapstring).then(function(result) {
				console.log("fromfactoryresult:", result.data);
				return parseInt(result.data.dstOffset + result.data.rawOffset) / 60;
			});
	   }
	}
}]);