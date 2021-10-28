module.exports = function(number, callback){
	var c = 0; if(number == 0){ callback(); }
	return function(){ c++; if(c == number){ callback.apply(this, arguments); } }
}