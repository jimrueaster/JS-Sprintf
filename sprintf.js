/*
**	JS - sprintf()
**	param: arg0, arg1, arg2, ...
**	description: Sprintf JS version
					arg0 is the whole string; arg1, arg2, ..., argn are the short string
**	E.g.: var str = "%s really wants to help %s.";
					var newString = sprintf(str, "Tommy", "Sally");
					console.log(newString);
**	author: Jimru Easter(295140325@qq.com)
** 	time: 2017-4-5 22:31:29
*/
function sprintf(){
	var originString = arguments[0];
	
	for(var i=1; i<= arguments.length; i++){
		originString = originString.replace(/%s/, arguments[i]);
	}
	return originString;
}