/**
 * 
 */
import { lotteArry, macArry, kfcArry, kingArry, totalArry } from "./hamburger.js";

$(function() {

	var hamburgerList;

	$('#logo').click(homepage);
	$('.cardStart').click(randomCard);
	$('#menubar span').click(randomsite);

	$(document).on('click', '.flip', function() {
		
		if ($(".hambugerInfo").val() == null) {
			
			$(this).find('.card').css("transform", "rotateY(180deg)");

			var selectCard = $(this).find('.back');
			var sumMainObj = $('#subMain');

			for (var i in hamburgerList) {

				if (selectCard.text() == hamburgerList[i].name) {

					clear();

					sumMainObj.append("<div id='randomHambuger'>선택된 햄버거 !!</div>");
					$('#randomHambuger').after("<div class='randomHamImg'></div>");

					if (hamburgerList[i].brand == "롯데리아") {
						$('.randomHamImg').append("<img width=500px height=375px src='../img/lotte/" + hamburgerList[i].img + "' />");
					} else if (hamburgerList[i].brand == "맥도날드") {
						$('.randomHamImg').append("<img width=500px height=375px src='../img/mac/" + hamburgerList[i].img + "' />");
					} else if (hamburgerList[i].brand == "버거킹") {
						$('.randomHamImg').append("<img width=500px height=375px src='../img/king/" + hamburgerList[i].img + "' />");
					}

					sumMainObj.append("<div class='hambugerInfo'></div>");
					$('.hambugerInfo').append("<ul></ul>");
					$('.hambugerInfo ul').append("<li>이름 : " + hamburgerList[i].name + "</li>");
					$('.hambugerInfo ul').append("<li>가격 : " + hamburgerList[i].price + "</li>");
					$('.hambugerInfo ul').append("<li>칼로리 : " + hamburgerList[i].kal + "</li>");
					$('.hambugerInfo ul').append("<li>브랜드 : " + hamburgerList[i].brand + "</li>");

				} // end-if
			}
		}else{
			alert("다시 뽑을려면 뽑기 버튼을 다시 눌러주세요!")
		}


	});

	function homepage() {
		window.location.href = '../index.html';
	}

	function randomCard() {

		clear();

		if ($('tr').length > 0) {
			var list = $(document).find('tr');
			for (var i = 0; i < list.length; i++) {
				list.remove();
			}
		}

		var btnText = $(this).text().trim();

		hamburgerList = hamlist(btnText);

		var tableObj = document.getElementById('mainContent');

		if (btnText == "전체 랜덤뽑기") {
			setNode(tableObj, 3, 4, hamburgerList);
		} else {
			setNode(tableObj, 2, 4, hamburgerList);
		}

	}

	function hamlist(selBrand) {

		var totalList;

		if (selBrand == "전체 랜덤뽑기") {
			totalList = totalArry;
			
		} else if (selBrand == "롯데리아 랜덤뽑기") {
			totalList = lotteArry;
			
		} else if (selBrand == "맥도날드 랜덤뽑기") {
			totalList = macArry;
			
		} else if (selBrand == "KFC 랜덤뽑기") {
			alert("KFC 자료 준비중");
			totalList = kfcArry;
			
		} else if (selBrand == "버거킹 랜덤뽑기") {
			totalList = kingArry;
			
		}

		for (var i = 0; i < 1000; i++) {

			var c;
			var rand = Math.floor(Math.random() * totalList.length);
			c = totalList[0];
			totalList[0] = totalList[rand];
			totalList[rand] = c;

		}

		return totalList;
	}

	function setNode(tableNode, trNum, tdNum, hamListDate) {

		var cardSum = 0;

		for (var i = 0; i < trNum; i++) {
			var trDom = document.createElement('tr');

			for (var j = 0; j < tdNum; j++) {

				var tdDom1 = document.createElement('td');

				var divDom1 = document.createElement('div');
				var divDom2 = document.createElement('div');
				var divDom3 = document.createElement('div');
				var divDom4 = document.createElement('div');
				var divDom5 = document.createElement('div');

				var h1Dom1 = document.createElement('h1');
				var h1Dom2 = document.createElement('h1');

				var txtDom1 = document.createTextNode(cardSum + 1);
				var txtDom2 = document.createTextNode(hamListDate[cardSum++].name); //

				divDom1.className = 'cardbg';
				divDom2.className = 'flip';
				divDom3.className = 'card';
				divDom4.className = 'front';
				divDom5.className = 'back';

				h1Dom1.appendChild(txtDom1);
				divDom4.appendChild(h1Dom1);

				h1Dom2.appendChild(txtDom2);
				divDom5.appendChild(h1Dom2);

				divDom3.appendChild(divDom5);
				divDom3.appendChild(divDom4);
				divDom2.appendChild(divDom3);
				divDom1.appendChild(divDom2);

				tdDom1.appendChild(divDom1);
				trDom.appendChild(tdDom1);

			}
			tableNode.appendChild(trDom);
		}
	}

	function clear() {
		$('#randomHambuger').remove();
		$('.randomHamImg').remove();
		$('.hambugerInfo').remove();
	}

	function shopmap() {
		var winObj = window.open("", '검색', "width=1500px, height=1000px");
		winObj.location.href = '../html/kakaomap.html';
	}

	function randomsite() {
		
		var navText = $(this).text().trim();
		console.log(navText);
		if(navText=="랜덤선택"){
			window.location.href = './randomSite.html';
		}else if(navText=="테마별햄버거"){
			window.location.href = './themeHam.html';
		}else if(navText=="매장검색"){
			shopmap();
		}
	}
});