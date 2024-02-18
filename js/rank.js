import { rankArry } from "./hamburger.js";

$(function() {



	for(var i in rankArry){
		rankList(i,rankArry[i]);
	}

    $(document).on('click', '.order', function() {

		var brandName = $(this).closest("tr").next().children().eq(0).text();

		if (brandName == "브랜드롯데리아") {
			var winObj = window.open("", '검색', "width=1500px, height=1000px");
			winObj.location.href = 'https://www.lotteeatz.com/brand/ria';
		}else if(brandName == "브랜드맥도날드"){
			var winObj = window.open("", '검색', "width=1500px, height=1000px");
			winObj.location.href = 'https://www.mcdonalds.co.kr/kor/store/main.do';
		}else if(brandName == "브랜드버거킹"){
			var winObj = window.open("", '검색', "width=1500px, height=1000px");
			winObj.location.href = 'https://www.burgerking.co.kr/#/store';
		}
	});

	function rankList(rank , hamlist) {
		
		var divObj = $('.content');
		var tableObj = $("<table></table>");
		var trObj1 = $("<tr></tr>");
		var trObj2 = $("<tr></tr>");

		trObj1.append("<td rowspan='2'>"+(parseInt(rank)+1)+"</td>")

		var imgTdObj = $("<td rowspan='2' class='hamImg'></td>");

		divObj.append(tableObj);
		tableObj.append(trObj1);
		trObj1.append(imgTdObj);

		if (hamlist.brand == '롯데리아') {
			imgTdObj.append("<img width=116px height=106px src='../img/lotte/" + hamlist.img + "' />");
		} else if (hamlist.brand == '맥도날드') {
			imgTdObj.append("<img width=116px height=106px src='../img/mac/" + hamlist.img + "' />");
		} else if (hamlist.brand == '버거킹') {
			imgTdObj.append("<img width=116px height=106px src='../img/king/" + hamlist.img + "' />");
		}

		trObj1.append("<td colspan='3'>" + hamlist.name + "</td>");
		trObj1.append("<td rowspan='2' class='order'>주문하기</td>");

		tableObj.append(trObj2);
		trObj2.append("<td>브랜드<br/>" + hamlist.brand + "</td>");
		trObj2.append("<td>가격<br/>" + hamlist.price + "</td>");
		trObj2.append("<td>칼로리<br/>" + hamlist.kal + "kacl</td>");
	}
});