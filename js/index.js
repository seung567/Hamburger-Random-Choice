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

	$('.logo').click(function(){window.location.href = './index.html';})
	$('.menubar span').click(randomsite);
	$('#serchBtn').click(searchButton);
	$('#hambugerRandom').click(randomsite);
	$('.customer div').click(customerConnect);
	
	$('#hambugerRandom').click(function(){
		window.location.href = './html/randomSite.html';
	});
	
	$('#hambugershop').click(function(){
		window.location.href = './html/themeHam.html';
	});

	$(".btnBox input").hover(function(){

		$(this).css({
			'color' : '#ffffff',
			'background-color':'#ff9100'
		})

	});

	$(".btnBox input").mouseleave(function(){

		$(this).css({
			'color' : '#ff9100',
			'background-color':'transparent'
		})

	});

	function searchButton() {

		var searchDate = $('.searchInput').val();

		if (searchDate == '칼로리') {
			var winObj = window.open("", '랭킹', "width=800, height=1000px");
			winObj.location.href = './html/searchInputView.html';
		} else if (searchDate == '매운햄버거') {
			var winObj = window.open("", '랭킹', "width=800, height=1000px");
			winObj.location.href = './html/searchInputView.html';
		} else {
			siteSearch();
		}

	}

	function siteSearch() {
		var site = $('#siteChoice').val();
		var searchDate = $('.searchInput').val();

		var siteValue;

		if (site == '구글') {
			siteValue = 'https://www.google.com/search?q=' + searchDate;
		} else if (site == '네이버') {
			siteValue = 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=' + searchDate;
		} else if (site == '다음') {
			siteValue = 'https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=' + searchDate;
		}

		var winObj = window.open("", '검색', "width=1500px, height=1000px");
		winObj.location.href = siteValue;
	}

	function shopmap() {
		var winObj = window.open("", '검색', "width=1500px, height=1000px");
		winObj.location.href = './html/kakaomap.html';
	}

	function randomsite() {
		
		var navText = $(this).text().trim();

		if(navText=="랜덤선택"){
			window.location.href = './html/randomSite.html';
		}else if(navText=="테마별햄버거"){
			window.location.href = './html/themeHam.html';
		}else if(navText=="매장검색"){
			shopmap();
		}else if(navText=="햄벅순위"){
			var winObj = window.open("", '랭킹', "width=800px, height=1000px");
			winObj.location.href = './html/rank.html';
		}else if(navText=="매장찾기"){
			var winObj = window.open("", '근처 햄버거 매장 찾기', "width=1120px, height=750px");
			winObj.location.href = './html/kakaomap.html';
		}
	}

	function customerConnect() {
		
		var navText = $(this).text().trim();

		if(navText=="로그인"){
			var winObj = window.open("./html/login.html", '로그인', 'width=375, height=240, status=no,toolbar=no,scrollbars=no');
			// winObj.location.href = './html/login.html';

		}else if(navText=="회원가입"){
			window.location.href = './html/themeHam.html';
		}
	}
});