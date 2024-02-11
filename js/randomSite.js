/**
 * 
 */
import { lotteArry, macArry, kfcArry, kingArry, totalArry } from "./hamburger.js";

$(function() {

	var hamburgerList;

	$('#logo').click(homepage);
	$('#cardStart').click(createCard);

	$(document).on('click', '.flip', function() {
		$(this).find('.card').css("transform", "rotateY(180deg)");

		var selectCard = $(this).find('.back');
		var sumMainObj = $('#subMain');

		for (var i in hamburgerList) {

			if (selectCard.text() == hamburgerList[i].name) {

				clear();

				sumMainObj.append("<div id='randomHambuger'>선택된 햄버거 !!</div>");
				$('#randomHambuger').after("<div class='randomHamImg'></div>");

				if (hamburgerList[i].brand == "롯데리아") {
					$('.randomHamImg').append("<img width=500px height=375px src='../img/lotte/" + hamburgerList[i].img + "' />")
				} else if (hamburgerList[i].brand == "맥도날드") {
					$('.randomHamImg').append("<img width=500px height=375px src='../img/mac/" + hamburgerList[i].img + "' />")
				}

				sumMainObj.append("<div class='hambugerInfo'></div>");
				$('.hambugerInfo').append("<ul></ul>");
				$('.hambugerInfo ul').append("<li>이름 : " + hamburgerList[i].name + "</li>");
				$('.hambugerInfo ul').append("<li>가격 : " + hamburgerList[i].price + "</li>");
				$('.hambugerInfo ul').append("<li>칼로리 : " + hamburgerList[i].kal + "</li>");
				$('.hambugerInfo ul').append("<li>브랜드 : " + hamburgerList[i].brand + "</li>");

			} // end-if
		}
	});

	function homepage() {
		window.location.href = '../index.html';
	}

	function createCard() {

		clear();

		var hamlist = function() {

			var totalList = totalArry;

			for (var i = 0; i < 1000; i++) {

				var c;
				var rand = Math.floor(Math.random() * totalArry.length);
				c = totalList[0];
				totalList[0] = totalList[rand];
				totalList[rand] = c;

			}

			return totalList;
		}

		hamburgerList = hamlist();

		var tableObj = document.getElementById('mainContent');

		if ($('tr').length > 0) {
			var list = $(document).find('tr');
			for (var i = 0; i < list.length; i++) {
				list.remove();
			}
		}

		var cardSum = 0;

		for (var i = 0; i < 2; i++) {
			var trDom = document.createElement('tr');

			for (var j = 0; j < 4; j++) {

				var tdDom1 = document.createElement('td');

				var divDom1 = document.createElement('div');
				var divDom2 = document.createElement('div');
				var divDom3 = document.createElement('div');
				var divDom4 = document.createElement('div');
				var divDom5 = document.createElement('div');

				var h1Dom1 = document.createElement('h1');
				var h1Dom2 = document.createElement('h1');

				var txtDom1 = document.createTextNode(cardSum + 1);
				var txtDom2 = document.createTextNode(hamburgerList[cardSum++].name); //

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
			tableObj.appendChild(trDom);
		}
	}

	function clear() {
		$('#randomHambuger').remove();
		$('.randomHamImg').remove();
		$('.hambugerInfo').remove();
	}

});