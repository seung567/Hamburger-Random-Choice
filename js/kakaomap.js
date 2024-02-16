/**
 * 
 */

$(function() {



	var map;

	$('#searchBTN').click(searchStart);



	// 검색한 키워드의 주소 값 추출
	var places = new kakao.maps.services.Places();

	var callback = function(result, status) {
		var positions = []; // 마커의 객체 정보를 담는 리스트

		if (status === kakao.maps.services.Status.OK) {
			for (var i = 0; i < result.length; i++) {

				var xVal = Math.ceil(result[i].x * 100000) / 100000;
				var yVal = Math.ceil(result[i].y * 100000) / 100000;

				positions.push({
					title: result[i].address_name,
					latlng: new kakao.maps.LatLng(yVal, xVal)
				})
			}

		}

		// 마커 이미지의 이미지 주소입니다
		var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

		for (var i = 0; i < positions.length; i++) {

			// 마커 이미지의 이미지 크기
			var imageSize = new kakao.maps.Size(24, 35);

			// 마커 이미지 생성
			var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

			// 마커를 생성
			var marker = new kakao.maps.Marker({
				map: map, // 마커를 표시할 지도
				position: positions[i].latlng, // 마커를 표시할 위치
				title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
				image: markerImage // 마커 이미지 
			});
		}

	}; // collback end 지점 - 마커 이벤트 종료

	places.keywordSearch('구로구 햄버거', callback);

	// 마커에 클릭이벤트
	kakao.maps.event.addListener(marker, 'click', function() {
		// 마커 위에 인포윈도우 표시 명령
		console.log(11);
		infowindow.open(map, marker);
	});

	// 현재 위치의 좌표
	function searchStart() {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			alert('위치 정보를 확인 할 수 없습니다.')
		}

		places.keywordSearch('구로구 햄버거', callback);
	}

	function showPosition(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		console.log(latitude);
		console.log(longitude);

		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(latitude, longitude),
			level: 3 //지도의 레벨(확대, 축소 정도)
		};
		map = new kakao.maps.Map(container, options);
	}

});