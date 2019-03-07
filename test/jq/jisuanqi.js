/*
* @Author: Administrator
* @Date:   2019-01-15 10:19:22
* @Last Modified by:   Administrator
* @Last Modified time: 2019-01-15 19:02:22
*/
$(function(){

		//18个按钮   
		//1个功能按钮
		//17个数字按钮
		//功能 点击按钮后，内容显示到input内，AC DEL = 不显示
		var str = $('.input').text();
		var str2 = "";  //下一次的输入内容
		var result = 0;
		var ble = '';
		$('table td').click(function(){
			if($(this).text()=="AC"){
				str = '';
				$('.input').text(str);
				$('.output').text(str);
				str = '';
				str2 ='';  //下一次的输入内容
				result = 0;
				ble = '';
			}else if($(this).text()=="DEL"){
				var temp ='';
				if(str2.length>0){
					for(var i =0 ;i<str.length-1;i++){
						temp += str[i];
					}
					str = temp;
					temp = "";
					$('.input').text(str);
					for(var i =0 ;i<str2.length-1;i++){
						temp += str2[i];
					}
					str2 = temp;
					}
			}else if($(this).text()=="+" || $(this).text()=="-" || $(this).text()=="*" || $(this).text()=="/"){
				if(ble == "="){
					str = result;
					str += $(this).text();
					$('.input').text(str);
					str2 = '';
				}else{
					str += $(this).text();
					$('.input').text(str);
					str2 = '';
				}	
			}else if($(this).text()=="="){
				ble = '=';
				str += $(this).text();
				$('.input').text(str);
				if(str.indexOf("+") != -1){
					result = Number(str.split("+")[0]) + Number(str2);
					$('.output').text(result);
				}else if(str.indexOf("-") != -1){
					result = Number(str.split("-")[0]) - Number(str2);
					$('.output').text(result);
				}else if(str.indexOf("*") != -1){
					result = Number(str.split("*")[0]) * Number(str2);
					$('.output').text(result);
				}else if(str.indexOf("/") != -1){
					result = Number(str.split("/")[0]) / Number(str2);
					$('.output').text(result);
				}
			}else{
				str += $(this).text();
				$('.input').text(str);
				str2 += $(this).text();
			}
		});





});