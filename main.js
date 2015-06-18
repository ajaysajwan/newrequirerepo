require.config({
	baseUrl:'libs',	
	paths:{
		"appURL":"../app",
		"jquery":"jquery-1.11.3.min"
	}
});
require(['appURL/init'], function(init){
	console.log('main.js')
	var i = new init();
	i.hello();
});