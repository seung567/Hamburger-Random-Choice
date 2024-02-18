import { lotteArry, macArry, kfcArry, kingArry, totalArry, kalArry, rankArry } from "./hamburger.js";

$(function () {

	var opnerVal = window.opener.document.getElementById("searchInput");
	console.log(opnerVal.value);

	if (opnerVal.value == "칼로리") {
		listAction(opnerVal.value, kalArry);
	} else if (opnerVal.value == "매운햄버거") {
		listAction(opnerVal.value, totalArry);
	}




	$(document).on('click', '.order', function () {

		var brandName = $(this).closest("tr").next().children().eq(0).text();

		console.log(brandName);

		if (brandName == "브랜드롯데리아") {
			var winObj = window.open("", '검색', "width=1500px, height=1000px");
			winObj.location.href = 'https://www.lotteeatz.com/brand/ria';
		} else if (brandName == "브랜드맥도날드") {
			var winObj = window.open("", '검색', "width=1500px, height=1000px");
			winObj.location.href = 'https://www.mcdonalds.co.kr/kor/store/main.do';
		} else if (brandName == "브랜드버거킹") {
			var winObj = window.open("", '검색', "width=1500px, height=1000px");
			winObj.location.href = 'https://www.burgerking.co.kr/#/store';
		}
	});

	function listAction(text, list) {
		if (text == "칼로리") {
			$('.title').text("칼로리가 낮은 햄버거");
			for (var i in list) {
				rankList(list[i]);
			}
		} else if (text == "매운햄버거"){
			$('.title').text("핫! 매운 햄버거");
			for (var i in list) {
				if(list[i].spicy == "매운맛"){
					rankList(list[i]);
				}				
			}
		}
	}

	function rankList(hamlist) {

		var divObj = $('.content');
		var tableObj = $("<table></table>");
		var trObj1 = $("<tr></tr>");
		var trObj2 = $("<tr></tr>");

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