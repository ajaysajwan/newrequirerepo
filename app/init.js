define(['./arithematic', 'jquery'],function(arithematic,$){
	var init = function(){
		var _a = null;
		
		this.hello = function(){
			console.log("APPLICATION Init Called");
			_a = new arithematic();
			render();
		}
		
		var render = function(){
			_a.init();
			console.log(_a.add(10,20));
			$('#add').on('click', function(){
				console.log('Add Button is Clicked');
				var a = Number($('#num1').val());
				var b = parseInt($('#num2').val());
				var result = _a.add(a,b);
				$('#answer').val(result);
				$('#answer2').text(result);
				console.log('Add Result ', result);
			});
		}
		
		this.addPublic = function(){
			console.log(_a.add(30,20));
		}
	}
	return init;
});