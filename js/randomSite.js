/**
 * 
 */

$(function() {
	
	$('#logo').click(homepage);
	$('#cardStart').click(createCard);
	
	test();
	
	$(document).on('click', '.flip', function() {
	    console.log('클릭');
	    $(this).find('.card').css("transform", "rotateY(180deg)");

		
	});
	
	function homepage() {
		window.location.href = '../index.html';
	}

	function createCard() {
	
		var tableObj = document.getElementById('mainContent');
		
		if($('tr').length > 0){
			var list = $(document).find('tr');
			for(var i=0; i<list.length; i++){
				list.remove();
			}
		}
		
		for (var i = 0; i < 3; i++) {
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

				var txtDom1 = document.createTextNode('앞면');
				var txtDom2 = document.createTextNode('뒷면');

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
	
	function test(){
		var value = $('#hiddenTable tr > td').eq(1).text();		
		$('.hambugerInfo  ul > li').eq(1).text('가격 : ' + value);
		var value = $('#hiddenTable tr > td').eq(1).text();		
		$('randomHamImg'').attr('src','../img/lotto/1.png');
	}
});