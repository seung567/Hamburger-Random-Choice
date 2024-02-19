/**
 * 
 */
import { lotteArry, macArry, kfcArry, kingArry, totalArry, kalArry } from "./hamburger.js";

$(function() {



	$('.logo').click(function() { window.location.href = '../index.html'; })
	$('.menubar span').click(randomsite);
	$('.topMainSearch button').click(selbtn);
	$('.customer div').click(customerConnect);

	$(document).on('click', '.order', function() {

		var brandName = $(this).closest("tr").next().children().eq(0).text();

		if (brandName == "브랜드 : 롯데리아") {
			var winObj = window.open("", '검색', "width=1500px, height=1000px");
			winObj.location.href = 'https://www.lotteeatz.com/brand/ria';
		}else if(brandName == "브랜드 : 맥도날드"){
			var winObj = window.open("", '검색', "width=1500px, height=1000px");
			winObj.location.href = 'https://www.mcdonalds.co.kr/kor/store/main.do';
		}else if(brandName == "브랜드 : 버거킹"){
			var winObj = window.open("", '검색', "width=1500px, height=1000px");
			winObj.location.href = 'https://www.burgerking.co.kr/#/store';
		}
	});

	function selbtn() {

		var sel = $('.selectMain option').index($('.selectMain option:selected'));

		switch (sel) {
			case 0: newHamburger(lotteArry); break;
			case 1: newHamburger(macArry); break;
			case 2: newHamburger(kingArry); break;
			case 3: lowKalHam(); break;
			case 4: hotHam(totalArry); break;
			case 5: totalHam(); break;

		}
	}

	function newHamburger(hamList) {

		var list = [];

		for (var i in hamList) {
			if (hamList[i].newHamburger == "신제품") {
				list.push(hamList[i]);
			}
		}

		if ($('.themeList table') != null) $('.themeList table').remove();

		for (var i in list) {
			themeConn(list[i]);
		}

	}

	function lowKalHam() {

		var list = kalArry;

		if ($('.themeList table') != null) $('.themeList table').remove();

		for (var i in list) {
			themeConn(list[i]);
		}
	}

	function totalHam() {

		var list = totalArry;

		if ($('.themeList table') != null) $('.themeList table').remove();

		for (var i in list) {
			themeConn(list[i]);
		}
	}

	function hotHam(hamList) {

		var list = [];

		for (var i in hamList) {
			if (hamList[i].spicy == "매운맛") {
				list.push(hamList[i]);
			}
		}

		if ($('.themeList table') != null) $('.themeList table').remove();

		for (var i in list) {
			themeConn(list[i]);
		}

	}


	function themeConn(hamlist) {

		var divObj = $('.themeList');
		var tableObj = $("<table></table>");
		var trObj1 = $("<tr></tr>");
		var trObj2 = $("<tr></tr>");

		var imgTdObj = $("<td rowspan='2' class='hamImg'></td>");

		divObj.append(tableObj);
		tableObj.append(trObj1);
		trObj1.append(imgTdObj);

		if (hamlist.brand == '롯데리아') {
			imgTdObj.append("<img width=208px height=176px src='../img/lotte/" + hamlist.img + "' />");
		} else if (hamlist.brand == '맥도날드') {
			imgTdObj.append("<img width=208px height=176px src='../img/mac/" + hamlist.img + "' />");
		} else if (hamlist.brand == '버거킹') {
			imgTdObj.append("<img width=208px height=176px src='../img/king/" + hamlist.img + "' />");
		}

		trObj1.append("<td colspan='3'>" + hamlist.name + "</td>");
		trObj1.append("<td rowspan='2' class='order'>주문하기</td>");

		tableObj.append(trObj2);
		trObj2.append("<td>브랜드 : " + hamlist.brand + "</td>");
		trObj2.append("<td>가격 : " + hamlist.price + "</td>");
		trObj2.append("<td>칼로리 " + hamlist.kal + "kacl</td>");
	}

	function shopmap() {
		var winObj = window.open("", '검색', "width=1500px, height=1000px");
		winObj.location.href = '../html/kakaomap.html';
	}

	function randomsite() {
		
		var navText = $(this).text().trim();

		if(navText=="랜덤선택"){
			window.location.href = '../html/randomSite.html';
		}else if(navText=="테마별햄버거"){
			window.location.href = '../html/themeHam.html';
		}else if(navText=="매장검색"){
			shopmap();
		}else if(navText=="햄벅순위"){
			var winObj = window.open("", '랭킹', "width=800, height=1000px");
			winObj.location.href = '../html/rank.html';
		}
	}

	function customerConnect() {
		
		var navText = $(this).text().trim();

		if(navText=="로그인"){
			var winObj = window.open("../html/login.html", '로그인', 'width=375, height=240, status=no,toolbar=no,scrollbars=no');
			// winObj.location.href = './html/login.html';

		}
	}
});