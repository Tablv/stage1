/*
* @Author: Administrator
* @Date:   2019-01-15 10:19:22
* @Last Modified by:   Administrator
* @Last Modified time: 2019-01-15 11:31:55
*/
$(function(){
		$('.input').attr('innerText','1') ;
		console.log($('.input').attr('innerText'));
		console.log($('table td')[0]);

		//18个按钮   
		//7个功能按钮
		//11个数字按钮
		//input功能 点击按钮后，内容显示到input内，AC DEL = 不显示
		var str = '';
		$('table td').click(function(){
			console.log($('.input'));
			console.log($('.input').index());
			console.log($(this).index());
			if($(this).attr('name')=='clear'){
				//0=AC 清空input功能
				str = '';
				$('.input').attr('innerText',str);
			}else if($(this).attr('name')=='delete'){
				//3=DEL 删除功能
				var temp ='';
				for(var i =0 ;i<str.length-1;i++){
					temp += str[i];
				}
				str = temp;
				$('.input').attr('innerText',str);
			}else{
				str += $(this).attr('innerText');
			}
			
			$('.input').attr('innerText',str);
		});





});