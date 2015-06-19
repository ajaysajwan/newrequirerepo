require.config({
	baseUrl:'libs',	
	paths:{
		"appURL":"../app",
		"jquery":"jquery-1.11.3.min",
		//"underscore": "underscore-1.8.3"
		//"underscore": "underscore-1.5.2"
		"underscore": "underscore-0.1.0"
	},
	shim:{
		"underscore": {
			exports:"_"
		}
	}
});
require(['appURL/init'], function(appinit){
	var i = new appinit();
	i.initialize();
});