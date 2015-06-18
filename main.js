require.config({
	baseUrl:'libs',	
	paths:{
		"appURL":"../app"
	}
});
require(['appURL/init'], function(init){
	console.log('main.js')
	var i = new init();
	i.render();
});