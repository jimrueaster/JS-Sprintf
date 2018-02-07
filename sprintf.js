/*
**	JS - sprintf()
**	@param originString
**	@param args
**	@returns string
**	description: Sprintf JS version
					arg0 is the whole string; arg1, arg2, ..., argn are the short string
**	E.g.: var str = "%s really wants to help %s.";
					var newString = sprintf(str, "Tommy", "Sally");
					console.log(newString);
**	author: Jimru Easter(295140325@qq.com)
** 	time: 2017-4-5 22:31:29
*/
let sprintf = (originString, ...args) => {

	for(let i=0; i < args.length; i++){
		originString = originString.replace(/%s/, args[i]);
	}
	return originString;
};
