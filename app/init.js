define(['./arithematic', 'jquery', 'underscore'],function(arithematic, $, _){
	return function(){
		var _a = null;
		var numberArray = [123,321,45235,765,234,32,234, 98789, 765, 7567];
		this.initialize = function(){
			console.log("APPLICATION Init Called");
			_a = new arithematic();
			render();
			/*console.log('Number Array is : ', numberArray);
			console.log('Max number in Array : ', _.max(numberArray));
			//console.log('First number in Array ', _.first([2131,3,23,32,21,342,12321]));
			console.log('First number in Array : ', _.first(numberArray));*/
			console.log('underscore : ', _);
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
	/*var init = function(){
		var _a = null;
		
		this.initialize = function(){
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
	return init;*/
});