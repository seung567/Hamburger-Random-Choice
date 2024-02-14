
export var lotteArry = [];
export var macArry = [];
export var kfcArry = [];
export var kingArry = [];
export var totalArry = [];

export var kalArry = [];

var hamMenu = function(brand, name, price, kal, nat, spicy, newHamburger, img) {
	this.brand = brand;
	this.name = name;
	this.price = price;
	this.kal = kal;
	this.nat = nat;
	this.spicy = spicy;
	this.newHamburger = newHamburger;
	this.img = img;
}

function hamPush(brand, name, price, kal, nat, spicy, newHamburger, img) {
	if (brand == '롯데리아') {
		var lh1 = new hamMenu(brand, name, price, kal, nat, spicy, newHamburger, img);
		lotteArry.push(lh1);
		totalArry.push(lh1);
	} else if (brand == '맥도날드') {
		var mh1 = new hamMenu(brand, name, price, kal, nat, spicy, newHamburger, img);
		macArry.push(mh1);
		totalArry.push(mh1);
	}
}

function kalPush(brand, name, price, kal, nat, spicy, newHamburger, img){
	var lh1 = new hamMenu(brand, name, price, kal, nat, spicy, newHamburger, img);
	kalArry.push(lh1);
}
// 롯데리아 제품군
hamPush('롯데리아','전주 비빔라이스 버거','6,900원','572','1460','매운맛','신제품','1.png');
hamPush('롯데리아','새우베이컨버거','5,800원','538','870','0단계','신제품','2.png');
hamPush('롯데리아','불고기 베이컨','5,800원','522','840','0단계','신제품','3.png');
hamPush('롯데리아','한우불고기','8,400원','572','797','0단계','','4.png');
hamPush('롯데리아','불고기버거','4,700원','476','778','0단계','','5.png');
hamPush('롯데리아','핫크리스피버거','5,900원','503','929','매운맛','','6.png');
hamPush('롯데리아','새우버거','4,700원','492','810','0단계','','7.png');
hamPush('롯데리아','T-REX','4,700원','475','874','0단계','','8.png');
hamPush('롯데리아','더블리아미라클2','6,700원','520','880','0단계','대체육','9.png');
hamPush('롯데리아','모짜레랄 인 더 버거 베이커','7,400원','699','1020','0단계','','10.png');

// 맥도날드 제품군    
hamPush('맥도날드','쿼터파운더 치즈 BBQ 베이컨','8,200원','719','1434','0단계','','1.png');
hamPush('맥도날드','빅맥','5,500원','582','902','0단계','','2.png');
hamPush('맥도날드','맥크리스피 디럭스 버거','6,800원','600','1296','0단계','신제품','3.png');
hamPush('맥도날드','맥스파이시 상하이버거','5,500원','501','1102','0단계','','4.png');
hamPush('맥도날드','1955 버거','6,400원','572','930','0단계','','5.png');
hamPush('맥도날드','더블불고기버거','4,500원','635','997','0단계','','6.png');
hamPush('맥도날드','불고기버거','3,100원','409','670','0단계','','7.png');
hamPush('맥도날드','슈슈버거','4,700원','409','808','0단계','','8.png');
hamPush('맥도날드','슈비버거','5,800원','540','1001','0단계','','9.png');
hamPush('맥도날드','베이컨 토마토 디럭스','5,800원','570','933','0단계','','10.png');

// 버거킹 제품군


// KFC 제품군


// 칼로리순 정렬
kalPush('맥도날드','불고기버거','3,100원','409','670','0단계','','7.png');
kalPush('맥도날드','슈슈버거','4,700원','409','808','0단계','','8.png');
kalPush('롯데리아','T-REX','4,700원','475','874','0단계','','8.png');
kalPush('롯데리아','불고기버거','4,700원','476','778','0단계','','5.png');
kalPush('롯데리아','새우버거','4,700원','492','810','0단계','','7.png');
kalPush('맥도날드','맥스파이시 상하이버거','5,500원','501','1102','0단계','','4.png');
kalPush('롯데리아','핫크리스피버거','5,900원','503','929','2단계','','6.png');
kalPush('롯데리아','더블리아미라클2','6,700원','520','880','0단계','대체육','9.png');
kalPush('롯데리아','불고기 베이컨','5,800원','522','840','0단계','신제품','3.png');
kalPush('롯데리아','새우베이컨버거','5,800원','538','870','0단계','신제품','2.png');
kalPush('맥도날드','슈비버거','5,800원','540','1001','0단계','','9.png');
kalPush('맥도날드','베이컨 토마토 디럭스','5,800원','570','933','0단계','','10.png');
kalPush('롯데리아','전주 비빔라이스 버거','6,900원','572','1460','1단계','신제품','1.png');
kalPush('롯데리아','한우불고기','8,400원','572','797','0단계','','4.png');
kalPush('맥도날드','1955 버거','6,400원','572','930','0단계','','5.png');
kalPush('맥도날드','빅맥','5,500원','582','902','0단계','','2.png');
kalPush('맥도날드','맥크리스피 디럭스 버거','6,800원','600','1296','0단계','신제품','3.png');
kalPush('맥도날드','더블불고기버거','4,500원','635','997','0단계','','6.png');
kalPush('롯데리아','모짜레랄 인 더 버거 베이커','7,400원','699','1020','0단계','','10.png');
kalPush('맥도날드','쿼터파운더 치즈 BBQ 베이컨','8,200원','719','1434','0단계','','1.png');
