/**
 * 
 */

$(function() {

	$('#slide_banner').bxSlider({

		auto: true,
		autoControls: true,
		stopAutoOnClick: true,
		pager: true,
		slideWidth: 664,
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 10

	});

	$('#serchBtn').click(searchButton);
	$('.menubar span:eq(2)').click(shopmap);
	$('.menubar span:eq(0)').click(randomsite);
	$('#hambugerRandom').click(randomsite);
	
	function searchButton(){
		
		var searchDate = $('.searchInput').val();
		
		if(searchDate == '칼로리'){
			alert('칼로리 구현 사이트 연결');
		}else if(searchDate == '매운햄버거'){
			alert('매운햄버거 구현 사이트 연결');
		}else{
			siteSearch();
		}
		
	}

	function siteSearch() {
		var site = $('#siteChoice').val();
		var searchDate = $('.searchInput').val();
	
		var siteValue;

		if (site == '구글')  {
			siteValue = 'https://www.google.com/search?q=' + searchDate;
		} else if (site == '네이버') {
			siteValue = 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=' + searchDate;
		} else if (site == '다음') {
			siteValue = 'https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=' + searchDate;
		}

		var winObj = window.open("", '검색', "width=1500px, height=1000px");
		winObj.location.href = siteValue;
	}
	
	function shopmap(){
		var winObj = window.open("", '검색', "width=1500px, height=1000px");
		winObj.location.href = './html/kakaomap.html';
		
	}
	
	function randomsite(){
				window.location.href = './html/randomSite.html';
	}
});