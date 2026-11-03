const MOOD_IMAGE = "assets/goseong-east-sea.svg";
const CHECK_DATE = "11/3 네이버 플레이스 기준";

const seoulStart = {
  id: "seoul-start",
  time: "10:00",
  end: "출발",
  name: "서울 출발",
  short: "자차로 고성까지",
  travelAfter: "토성면까지 2시간 45분 (200km, 무정체 기준), 정체 시 3시간 30분 이상",
  type: "출발",
  duration: "약 3시간 이동",
  phase: "morning",
  coords: [37.5665, 126.978],
  address: "서울 → 서울양양고속도로 → 고성군 토성면",
  hours: "첫날은 예약 시간을 촘촘하게 잡지 않습니다. 휴게소도 편하게 들릅니다.",
  note: "구간 시간은 OpenStreetMap 경로(OSRM) 무정체 기준 실측값이라 실제로는 휴게소와 정체가 더해집니다. 첫 식사는 13시에서 14시 사이로 여유 있게 잡고, 가는 길 휴게소는 서울양양고속도로 내린천휴게소(동홍천 지나 약 1시간 반 지점)가 무난합니다.",
  image: MOOD_IMAGE,
  review:
    "서울에서 고성 토성면까지는 약 200km로, 정체가 없으면 2시간 40분 안팎이고 주말 낮 출발은 3시간 30분을 넘기는 사례가 많습니다.",
  reviewSource: "OpenStreetMap 경로 추정과 운전 후기 종합",
  reviewUrl: "https://www.rome2rio.com/ko/s/%EC%84%9C%EC%9A%B8/%EC%86%8D%EC%B4%88%EC%8B%9C",
};

const lahene = {
  naver: "accommodation/36651683",
  phone: "010-8644-3442",
  coords: [38.3595154, 128.5071207],
  address: "강원 고성군 죽왕면 가진해변길 229 (공현진리 431-38)",
  image: "assets/lahene-j.jpg",
  review:
    "전 객실 오션뷰에 개별 스파를 갖춘 복층 풀빌라로, 야외 개별 바비큐장은 현장 결제로 21시까지 운영한다는 안내가 있습니다. 조용하고 객실 관리가 깨끗하다는 평이 많습니다.",
  reviewSource: "네이버 플레이스와 트립닷컴 공개 후기",
  reviewUrl: "https://m.place.naver.com/accommodation/36651683/home",
};

const cheongganjeong = {
  name: "청간정",
  coords: [38.2644317, 128.5583707],
  address: "강원 고성군 토성면 청간리 (청간정해변 옆)",
  hours: "야외 정자, 상시 관람, 무료, 아래 무료 주차장",
  image: "assets/cheongganjeong.jpg",
  review:
    "관동팔경의 하나로, 주차가 편하고 붐비지 않으며 정자에서 데크길로 바다까지 내려갈 수 있다는 후기가 많습니다. 15분이면 충분합니다.",
  reviewSource: "네이버 플레이스 방문자 후기",
  reviewUrl: "https://m.place.naver.com/place/13491372/home",
};

const day1Stops = [
  seoulStart,
  {
    id: "dongrugol",
    naver: "restaurant/15070351",
    phone: "033-632-4328",
    time: "13:00",
    end: "13:50",
    name: "동루골막국수",
    short: "올라가는 길에 점심",
    travelAfter: "청간정까지 8분 (4.9km)",
    type: "막국수",
    duration: "50분",
    phase: "afternoon",
    coords: [38.254887, 128.5095382],
    address: "강원 고성군 토성면 성대로 188 (성대리 526-1)",
    hours: `10:00-17:00, 매주 화요일 휴무 (${CHECK_DATE}) — 수요일 영업`,
    note: "숙소까지 바로 올라갔다가 다시 내려오지 않도록 남쪽에서 먼저 식사합니다. 본점은 성대로에 있고 2호점과 속초점이 따로 있으니 내비 검색 때 본점을 고릅니다.",
    image: "assets/dongrugol.jpg",
    review:
      "순메밀 면에 동치미 국물을 부어 먹는 막국수와 촉촉한 수육이 대표 메뉴이고, 시골집 같은 외관에 넓은 주차장과 야외 테라스가 있어 편하다는 평입니다.",
    reviewSource: "네이버 플레이스 방문자 후기",
    reviewUrl: "https://m.place.naver.com/restaurant/15070351/home",
  },
  {
    ...cheongganjeong,
    id: "cheongganjeong-day1",
    naver: "place/13491372",
    time: "14:00",
    end: "14:15",
    short: "관동팔경 정자에서 바다 한 번",
    travelAfter: "토성당까지 3분 (1.3km)",
    type: "전망",
    duration: "15분",
    phase: "afternoon",
    note: "막국수 집에서 북쪽으로 2km입니다. 정자까지 5분 올라가 동해를 보고 내려옵니다. 바람이 세면 주차장에서 바다만 보고 바로 출발해도 됩니다.",
  },
  {
    id: "toseongdang",
    naver: "restaurant/1939232628",
    phone: "070-4580-7114",
    time: "14:20",
    end: "14:40",
    name: "스튜디오 토성당",
    short: "에그타르트 포장",
    travelAfter: "고비치5311까지 7분 (5.5km)",
    type: "디저트 · 포장",
    duration: "20분",
    phase: "afternoon",
    coords: [38.2552582, 128.5610807],
    address: "강원 고성군 토성면 토성로 111-5",
    hours: `매일 11:00-16:00, 휴무 없음 (${CHECK_DATE}) — 오후 품절 잦아 전화 예약 권장`,
    note: "테일의 옥수수 에그타르트 대신 고르는 자리입니다. 오후에 품절되는 날이 많다고 하니 점심 먹기 전에 전화해 남겨 달라고 하는 편이 안전합니다. 숙소 저녁 디저트로 챙깁니다.",
    image: "assets/toseongdang.jpg",
    review:
      "봉포의 에그타르트와 푸딩 전문점으로 강원도 에그타르트 중 제일이라는 평이 많습니다. 리뷰 211건에 평점 4.91이고 테이크아웃이 기본입니다.",
    reviewSource: "네이버 플레이스 방문자 후기",
    reviewUrl: "https://m.place.naver.com/restaurant/1939232628/home",
  },
  {
    id: "gobeach5311",
    naver: "restaurant/311710132",
    phone: "0507-1466-5311",
    time: "14:50",
    end: "15:40",
    name: "고비치5311",
    short: "교암해변 루프탑에서 커피",
    travelAfter: "숙소까지 10분 (8.3km)",
    type: "오션뷰 카페",
    duration: "50분",
    phase: "afternoon",
    coords: [38.2963908, 128.5476367],
    address: "강원 고성군 죽왕면 괘진길 53-11 (1~3층 루프탑)",
    hours: `월-금 10:00-17:30, 토·일 09:40-18:00 (${CHECK_DATE}) — 수요일 영업`,
    note: "테일이 수·목 휴무라 첫날 커피는 여기서 마십니다. 교암해변 바로 앞 화이트톤 3층 건물이고, 옆집 온더버튼은 수요일 휴무입니다. 컨디션에 따라 포장해서 숙소로 가도 됩니다.",
    image: "assets/gobeach5311.jpg",
    review:
      "교암해변 바로 앞 3층 루프탑 오션뷰 카페로 오레오케이크와 옥수수찰빵이 호평입니다. 리뷰 2,873건에 평점 4.7이고 포장이 가능합니다.",
    reviewSource: "네이버 플레이스 방문자 후기",
    reviewUrl: "https://m.place.naver.com/restaurant/311710132/home",
  },
  {
    ...lahene,
    id: "lahene-day1",
    naver: "accommodation/36651683",
    phone: "010-8644-3442",
    time: "16:00",
    end: "체크인",
    name: "라헨느 풀빌라 J동",
    short: "체크인, 바다, 스파",
    travelAfter: "샘이네횟집까지 2분 (1.2km)",
    type: "숙소",
    duration: "첫째 밤",
    phase: "evening",
    hours: "공개 안내 입실 15:00 · 퇴실 11:00, 예약 문자 조건 우선",
    note: "첫날부터 다시 남쪽으로 나가지 않고 숙소와 주변 바다를 즐깁니다. 바비큐를 할 거면 이용 조건과 신청 여부를 먼저 확인합니다. 객실 내 조리 가능 범위는 임의로 가정하지 않습니다. 4일 저녁 온라인 미팅이 그대로 있다면 이 구성이 특히 편합니다.",
  },
  {
    id: "saemine",
    naver: "restaurant/1406051653",
    phone: "0507-1497-6302",
    time: "17:30",
    end: "18:00",
    name: "샘이네횟집",
    short: "회 포장해서 숙소 저녁",
    type: "횟집 · 포장",
    duration: "포장 30분",
    phase: "evening",
    coords: [38.3673459, 128.5103638],
    address: "강원 고성군 죽왕면 가진해변길 123 1호 (가진항)",
    hours: `09:30-21:00, 주문 마감 20:00, 매달 첫째·셋째 월요일 휴무 (${CHECK_DATE})`,
    note: "숙소에서 1km라 포장해서 돌아와 저녁을 먹습니다. 전화로 미리 주문하면 대기가 짧고, 늦은 저녁이 되면 공현진회센터의 안가네가족(22시까지)이 대안입니다.",
    image: "assets/saemine.jpg",
    review:
      "가진항 횟집으로 젊은 사장님이 활고등어와 자연산 회를 눈앞에서 손질하고, 곁들임은 적고 회에 집중하는 집입니다. 리뷰 351건에 평점 4.9로 권역 횟집 중 가장 높습니다.",
    reviewSource: "네이버 플레이스 방문자 후기",
    reviewUrl: "https://m.place.naver.com/restaurant/1406051653/home",
  },
];

const day2Core = [
  {
    id: "bookkkeut",
    naver: "place/1229121932",
    time: "11:00",
    end: "11:40",
    name: "북끝서점",
    short: "책 고르는 데 여유를",
    travelAfter: "천학정까지 도보 5분",
    type: "독립서점",
    duration: "40분",
    phase: "morning",
    coords: [38.292056, 128.5454957],
    address: "강원 고성군 토성면 교암길 78-1 (교암리 2-5)",
    hours: `화-토 11:00-16:00, 일·월 정기휴무 (${CHECK_DATE}) — 목요일 영업`,
    note: "아침은 숙소에서 바다를 보며 느긋하게 보내고 10시 45분쯤 출발합니다(숙소에서 10분, 8.4km). 고식당 대기에 따라 서점과 순서를 바꿔도 됩니다. 서점 앞 교차로에서 교암교회 방면으로 우회전하면 주차할 수 있다는 안내가 있고, 실내화로 갈아 신고 들어갑니다.",
    image: "assets/bookkkeut.jpg",
    review:
      "교암해변 옆 어촌마을의 작은 독립서점으로 소설, 시, 에세이, 그림책을 책방지기가 큐레이션하고 쪽지 추천을 곳곳에 붙여 두었습니다. 조용하고 아늑해 카페 같은 분위기라는 후기가 많습니다.",
    reviewSource: "지역문화진흥원 웹진 인터뷰와 네이버 방문자 후기",
    reviewUrl: "https://www.rcs.or.kr/webzine/202410/detail_meet1.jsp",
  },
  {
    id: "cheonhakjeong",
    naver: "place/19493918",
    time: "11:40",
    end: "11:55",
    name: "천학정",
    short: "절벽 위 정자, 도보 5분",
    travelAfter: "고성식해물철판구이까지 도보 5분",
    type: "전망",
    duration: "15분",
    phase: "morning",
    coords: [38.2890014, 128.5476596],
    address: "강원 고성군 토성면 천학정길 10 (교암리 177-1)",
    hours: "야외, 상시 개방, 무료",
    note: "서점에서 걸어서 5분입니다. 1931년에 세운 정자가 기암절벽 위에 있어 소나무와 동해가 한 프레임에 들어옵니다. 점심 전 짧은 산책으로 넣었습니다.",
    image: "assets/cheonhakjeong.jpg",
    review:
      "고성8경 중 하나로 조용하고 사진이 잘 나온다는 평입니다. 규모가 작아 10분이면 돌아볼 수 있습니다.",
    reviewSource: "네이버 플레이스 방문자 후기",
    reviewUrl: "https://m.place.naver.com/place/19493918/home",
  },
  {
    id: "go-restaurant",
    naver: "restaurant/1942643290",
    phone: "0507-1335-7859",
    bookingUrl: "https://booking.naver.com/booking/6/bizes/1717020",
    time: "12:00",
    end: "13:00",
    name: "고성식해물철판구이 (구 고식당)",
    short: "해물 철판요리 점심",
    travelAfter: "교암해변까지 도보 3분",
    type: "철판요리",
    duration: "1시간",
    phase: "afternoon",
    coords: [38.2923182, 128.5454743],
    address: "강원 고성군 토성면 교암길 80 2층 (교암리 3-4)",
    hours: `11:00-20:00, 브레이크 15:00-17:00, 라스트오더 19:10, 화요일 휴무 (${CHECK_DATE})`,
    note: "상호가 고식당에서 고성식해물철판구이로 바뀌었으니 내비는 새 이름으로 검색합니다. 붉은 벽돌 건물 2층이고 입구는 건물 뒤편입니다. 네이버 예약이 열려 있고 현장은 테이블링 대기이니 예약해 두면 서점 일정이 편합니다. 1층 주차장은 옆 가게 전용이라 건물 앞이나 골목에 댑니다.",
    image: "assets/go-restaurant.jpg",
    review:
      "낙지 베이스 무쇠 철판에 새우, 관자, 전복, 가리비를 올려 사장님이 직접 손질해 주고 치즈 토핑이 트레이드마크입니다. 리뷰 709건에 평점 4.57이고 남은 양념에 볶음밥으로 마무리합니다.",
    reviewSource: "네이버 플레이스 방문자 후기",
    reviewUrl: "https://m.place.naver.com/restaurant/1942643290/home",
  },
  {
    id: "gyoam-beach",
    naver: "attraction/13491638",
    time: "13:00",
    end: "13:20",
    name: "교암해변 산책",
    short: "날씨가 좋으면 천천히",
    travelAfter: "능파대까지 1분 (600m)",
    type: "해변 산책",
    duration: "20분, 바람 세면 생략",
    phase: "afternoon",
    coords: [38.2921, 128.547025],
    address: "강원 고성군 토성면 교암리 1-43 일원",
    hours: "비수기 자유 산책",
    note: "식사 후 날씨가 좋으면 천천히 걷고, 바람이 세면 생략합니다. 천학정을 오전에 봤으니 해변은 짧게 걷습니다.",
    image: "assets/gyoam-beach.jpg",
    review:
      "교암항과 천학정 솔숲 사이의 1km 완만한 백사장으로 한적하고 바다색이 맑아 조용한 산책 코스로 소개됩니다.",
    reviewSource: "한국관광공사 대한민국 구석구석",
    reviewUrl:
      "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=c7845dd5-f7df-41dd-8483-3af99f77bc59",
  },
  {
    id: "neungpadae",
    naver: "place/15150899",
    time: "13:25",
    end: "13:50",
    name: "능파대",
    short: "타포니 기암 데크길",
    travelAfter: "노라킴까지 4분 (1.5km)",
    type: "지질공원",
    duration: "25분",
    phase: "afternoon",
    coords: [38.2967403, 128.5488754],
    address: "강원 고성군 죽왕면 괘진길 65 (문암진리 134-16)",
    hours: "상시 개방, 무료, 문암2리 항구 옆 소형 주차장",
    note: "벌집 모양으로 풍화된 화강암 위로 데크길이 15분 코스로 이어집니다. BTS 앨범 촬영지로 알려졌고, 바람이 세면 바위가 미끄러우니 데크만 걷습니다. 온더버튼 카페가 바로 옆이라 노라킴이 붐비면 여기서 대신 쉽니다.",
    image: "assets/neungpadae.jpg",
    review:
      "강원평화지역 국가지질공원 명소로 규모는 작지만 접근이 쉽고, 기암과 바다가 어우러져 사진이 잘 나온다는 평입니다.",
    reviewSource: "네이버 플레이스 방문자 후기",
    reviewUrl: "https://m.place.naver.com/place/15150899/home",
  },
  {
    id: "norakim",
    naver: "restaurant/1482818703",
    phone: "0507-1460-2382",
    time: "14:00",
    end: "15:00",
    name: "노라킴",
    short: "자작도해변 앞 조용한 카페",
    travelAfter: "송지호 관망타워까지 7분 (4.7km)",
    type: "카페",
    duration: "1시간",
    phase: "afternoon",
    coords: [38.3064576, 128.5419643],
    address: "강원 고성군 죽왕면 자작도선사길 130-2 (문암진리 253-1)",
    hours: `목-월 10:00-18:00, 매주 화·수 정기휴무 (${CHECK_DATE}) — 목요일 영업`,
    note: "남쪽 교암에서 숙소 방향으로 돌아오며 쉬는 코스입니다. 자작도해변 건너편이라 ㄱ자 통창으로 바다와 논이 함께 보이고, 주차는 맞은편 공터를 씁니다. 붐비면 능파대 옆 온더버튼(목 10:30-18:00)으로 바꿉니다.",
    image: "assets/norakim.jpg",
    review:
      "화이트톤 남유럽풍 건물에 모래 마당이 있는 카페로 테이블 간격이 넓어 조용합니다. 뷰가 좋고 인테리어가 멋지다는 키워드가 많고, 커피는 무난하다는 평입니다.",
    reviewSource: "네이버 플레이스 방문자 후기",
    reviewUrl: "https://m.place.naver.com/restaurant/1482818703/review/visitor",
  },
  {
    id: "songjiho-tower",
    naver: "place/20027267",
    phone: "033-680-3556",
    time: "15:10",
    end: "15:50",
    name: "송지호 철새관망타워",
    short: "호수와 바다를 한눈에",
    travelAfter: "숙소까지 3분 (2.9km)",
    type: "전망대",
    duration: "40분",
    phase: "afternoon",
    coords: [38.3362709, 128.5176535],
    address: "강원 고성군 죽왕면 동해대로 6021",
    hours: `동절기 09:00-17:30, 매표 마감 16:40, 무료 주차 (${CHECK_DATE})`,
    note: "5층 전망대에서 송지호, 죽도, 동해가 한 번에 보이고 11월부터 고니 같은 겨울 철새가 들어오기 시작합니다. 4층 카페(11:00-17:00)는 노라킴을 건너뛰었을 때의 대안입니다. 9월에 개장한 송지호 바다하늘길 스카이워크는 11월 운영 주체가 미공지라 가려면 관광과에 먼저 전화합니다.",
    image: "assets/songjiho-tower.jpg",
    review:
      "송지호와 바다 양쪽이 트인 전망이 좋고, 한 층씩 내려오며 보는 구성이라 부담이 없다는 평입니다. 리뷰 392건에 평점 4.12입니다.",
    reviewSource: "네이버 플레이스 방문자 후기",
    reviewUrl: "https://m.place.naver.com/place/20027267/home",
  },
];

const yooklim = {
  id: "yooklim",
    naver: "restaurant/2060215047",
    phone: "0507-1329-5027",
  time: "16:00",
  end: "17:00",
  name: "육림델리카트슨",
  short: "목요일 저녁 외식 선택지",
  travelAfter: "숙소까지 9분 (7.8km)",
  type: "수제 소시지",
  duration: "1시간, 대기 포함",
  phase: "evening",
  coords: [38.3025818, 128.5451698],
  address: "강원 고성군 죽왕면 백도해변길 90 1층 (문암진리 82-5)",
  hours: `11:00-21:00, 브레이크 14:30-16:00, 라스트오더 20:30, 수요일 휴무 (${CHECK_DATE}) — 목요일 저녁 16:00부터`,
  note: "송지호에서 남쪽으로 10분 되돌아가는 구성입니다. 오후 대기 등록은 15:30부터 현장 태블릿에서만 받고 원격 줄서기는 안 되니, 송지호를 짧게 보고 15:30에 맞춰 내려갑니다. 품절이 잦으면 같은 골목의 백도벅스 가리비수산(목 14:00-21:00, 평점 4.91)으로 바로 바꿉니다.",
  image: "assets/yooklim.jpg",
  review:
    "서울 목동 샤퀴테리 브랜드가 백도해변 옆에 낸 수제 소시지 전문점으로 보크부어스트 핫도그가 베스트라는 평입니다. 매장이 작아 품절 메뉴가 많으니 일찍 가야 한다는 후기가 많습니다.",
  reviewSource: "네이버 플레이스 방문자 후기",
  reviewUrl: "https://m.place.naver.com/restaurant/2060215047/home",
};

function laheneReturn(time, note) {
  return {
    ...lahene,
    id: `lahene-day2-${time.replace(":", "")}`,
    time,
    end: "이후",
    name: "라헨느 풀빌라 J동",
    short: "오후 수영·스파와 둘째 밤",
    type: "숙소",
    duration: "둘째 밤",
    phase: "night",
    hours: "예약한 객실의 시설과 이용 조건에 맞춰 수영·스파 이용",
    note,
  };
}

const day3Checkout = {
  ...lahene,
  id: "lahene-checkout",
    naver: "accommodation/36651683",
    phone: "010-8644-3442",
  time: "~11:00",
  end: "체크아웃",
  name: "라헨느 풀빌라 J동",
  short: "아침까지 쉬고 체크아웃",
  travelAfter: "테일까지 3분 (1.8km)",
  type: "숙소",
  duration: "퇴실 11:00",
  phase: "morning",
  hours: "공개 안내 퇴실 11:00, 예약 조건 우선",
  note: "아침은 숙소에서 쉬고 11시에 체크아웃합니다. 일출을 볼 거면 숙소에서 걸어서 10분인 공현진항 옵바위가 일출 명소입니다(11/6 일출 약 06:56). 가리비 안이면 체크아웃 전에 백도수산에 전화해 재고와 식사 가능 시간을 확인합니다.",
};

const tailDay3 = {
  id: "tail-day3",
    naver: "restaurant/1351634164",
    phone: "070-7585-8080",
  time: "11:10",
  end: "11:50",
  name: "카페 테일",
  short: "금요일에만 여는 테일",
  travelAfter: "백도수산까지 13분 (10.2km)",
  type: "카페",
  duration: "40분, 생략 가능",
  phase: "morning",
  coords: [38.3728017, 128.5087356],
  address: "강원 고성군 죽왕면 가진길 40-5 (가진리 6)",
  hours: `10:00-18:00, 수·목 정기휴무 (${CHECK_DATE}) — 여행 중 금요일만 영업`,
  note: "수·목 휴무라 첫날에 못 가는 대신 체크아웃 직후 북쪽으로 5분 올라가 커피와 옥수수 에그타르트를 챙깁니다. 점심 시간이 빠듯하면 포장만 하거나 생략합니다. 주차는 가진리 마을주차장입니다.",
  image: "assets/tail-cafe.jpg",
  review:
    "구옥을 고친 초록지붕 한옥 카페로 직접 로스팅한 브루잉 커피와 옥수수 크림라떼, 옥수수 에그타르트가 인기입니다. 도자기 작업실을 겸해 고래꼬리 무늬 컵에 커피가 나옵니다.",
  reviewSource: "네이버 플레이스와 다이닝코드 방문 후기",
  reviewUrl: "https://www.diningcode.com/profile.php?rid=dhtQcpzxa0GZ",
};

const seoulEnd = {
  id: "seoul-end",
  time: "~17:30",
  end: "도착",
  name: "서울 도착",
  short: "여행 마무리",
  type: "귀가",
  duration: "약 3시간 이동",
  phase: "night",
  coords: [37.5665, 126.978],
  address: "고성군 → 서울양양고속도로 → 서울",
  hours: "금요일 오후 귀경 정체를 고려해 14시 전후 출발",
  note: "두 식당을 연속으로 넣기보다 하나를 제대로 먹고 올라옵니다. 금요일 오후는 양양 방면 정체가 생길 수 있어 해변 산책을 짧게 끝내고 출발합니다.",
  image: MOOD_IMAGE,
  review:
    "죽왕면에서 서울까지는 약 210km로 정체가 없으면 3시간 안팎이고, 주말과 휴일 오후에는 4시간을 넘기는 사례가 있습니다.",
  reviewSource: "OpenStreetMap 경로 추정과 운전 후기 종합",
  reviewUrl: "https://www.clien.net/service/board/cm_car/16689242",
};

const tripDays = {
  1: {
    variants: [
      {
        key: "default",
        label: "첫날",
        summary: "첫날 7개 정류장",
        stops: day1Stops,
      },
    ],
  },
  2: {
    label: "목요일 저녁",
    variants: [
      {
        key: "stay",
        label: "숙소에서 저녁",
        summary: "둘째 날 8개 정류장",
        stops: [
          ...day2Core,
          laheneReturn(
            "16:00",
            "풀빌라를 잡았으니 오후를 전부 밖에서 쓰지 않습니다. 수영과 스파는 예약한 객실의 시설과 이용 조건에 맞춰 즐기고, 저녁은 포장이나 숙소 식사로 해결합니다. 걸어서 8분인 금강산도식후경(물회, 20시 마감)이나 샘이네횟집 포장이 가까운 선택지입니다.",
          ),
        ],
      },
      {
        key: "yooklim",
        label: "육림에서 저녁",
        summary: "둘째 날 9개 정류장",
        stops: [
          ...day2Core.slice(0, -1),
          { ...day2Core[day2Core.length - 1], end: "15:30", duration: "20분", travelAfter: "육림까지 7분 (4.9km, 남쪽으로 되돌아감)" },
          yooklim,
          laheneReturn(
            "17:30",
            "육림델리카트슨에서 이른 저녁을 먹고 바로 숙소로 돌아옵니다. 남은 저녁 시간은 수영과 스파로 쓰고, 다시 밖으로 나가지 않습니다.",
          ),
        ],
      },
    ],
  },
  3: {
    label: "마지막 날 점심",
    variants: [
      {
        key: "A",
        label: "A안 · 가리비",
        summary: "마지막 날 5개 정류장",
        stops: [
          day3Checkout,
          tailDay3,
          {
            id: "baekdo-susan",
    naver: "restaurant/1506231167",
    phone: "033-633-9555",
            time: "12:00",
            end: "13:00",
            name: "백도수산 가리비 직판장",
            short: "숯불 가리비로 마무리 점심",
            travelAfter: "백도해변까지 도보 5분",
            type: "가리비 직판",
            duration: "1시간",
            phase: "afternoon",
            coords: [38.3022337, 128.548811],
            address: "강원 고성군 죽왕면 문암항길 92 1층 (문암진리 산1-14)",
            hours: `매일 09:00-16:00, 정기휴무 없음 (${CHECK_DATE}). 물량 소진 시 조기 마감, 12-13시 점심 휴게는 블로그에만 있는 미확인 정보`,
            note: "체크아웃 전에 전화로 재고와 식사 가능 시간을 확인합니다. 메뉴는 가리비뿐이고 초장은 별도, 숯과 연탄불에 직접 굽습니다. 11월에도 비닐하우스 천막 안에서 먹을 수 있고 버터나 컵라면은 챙겨 갑니다. 주말에는 1시간 반 대기 후기가 있지만 평일 오후는 짧았다는 10월 후기가 있습니다.",
            image: "assets/baekdo-susan.jpg",
            review:
              "동해 참가리비만 파는 산지 직매장으로 씨알과 신선도에 호평이 몰리고, 바다 앞 천막에서 연탄과 숯불에 직접 구워 먹는 소박한 분위기가 매력입니다. 버터와 치즈를 넣으면 기절한다는 후기가 있습니다.",
            reviewSource: "네이버 플레이스와 다이닝코드 공개 후기",
            reviewUrl: "https://m.place.naver.com/restaurant/1506231167/home",
          },
          {
            id: "baekdo-beach",
    naver: "attraction/13491937",
            time: "13:00",
            end: "13:30",
            name: "백도해변 산책",
            short: "짧게 걷고 출발",
            travelAfter: "서울까지 2시간 50분 (207km, 무정체 기준)",
            type: "해변 산책",
            duration: "30분",
            phase: "afternoon",
            coords: [38.3011306, 128.5463992],
            address: "강원 고성군 죽왕면 문암진리",
            hours: "비수기 자유 산책",
            note: "가리비를 먹고 바로 옆 해변을 짧게 걷습니다. 둘째 날 능파대를 이미 봤으니 등대까지만 보고 출발합니다.",
            image: "assets/baekdo-beach.jpg",
            review:
              "백도항과 문암항 사이 활처럼 휜 200m 백사장에 송림과 기암괴석, 붉은 등대가 어우러진 조용한 해변입니다. 이름은 갈매기 때문에 하얗게 보이는 앞바다 섬 백도에서 왔습니다.",
            reviewSource: "고성군 관광포털",
            reviewUrl: "https://gwgs.go.kr/prog/tursmCn/tour/sub02_01/view.do?cntno=73",
          },
          seoulEnd,
        ],
      },
      {
        key: "B",
        label: "B안 · 샌드위치",
        summary: "마지막 날 5개 정류장",
        stops: [
          day3Checkout,
          { ...tailDay3, travelAfter: "세컨드바이트까지 18분 (15.1km)" },
          {
            id: "secondbite",
    naver: "restaurant/1621171959",
            time: "12:15",
            end: "13:15",
            name: "세컨드바이트",
            short: "천진해변 앞 샌드위치 브런치",
            travelAfter: "천진해변까지 도보 2분",
            type: "브런치 · 샌드위치",
            duration: "1시간",
            phase: "afternoon",
            coords: [38.2600336, 128.5595044],
            address: "강원 고성군 토성면 천진해변길 35-2",
            hours: `금 09:30-15:00, 토·일 08:00-16:00, 목요일 휴무 (${CHECK_DATE})`,
            note: "카츠산도 대신 고른 자리입니다. 보배진은 10월 리뉴얼 후 예약제 코스(77,000원, 캐치테이블 전용)로만 운영되고 카츠산도가 코스에서 빠졌다는 후기가 있어 제외했습니다. 코스를 예약했다면 같은 천진 권역이라 이 자리를 보배진으로 바꾸면 됩니다.",
            image: "assets/secondbite.jpg",
            review:
              "천진해변 앞 작은 브런치 카페로 그릴치즈, 잠봉, 클럽 샌드위치와 시즌 무화과 오픈토스트, 양송이수프가 언급되고 원두가 좋다는 평입니다.",
            reviewSource: "네이버 플레이스 방문자 후기",
            reviewUrl: "https://m.place.naver.com/restaurant/1621171959/home",
          },
          {
            id: "cheonjin-beach",
    naver: "attraction/13491824",
            time: "13:15",
            end: "13:45",
            name: "천진해변 산책",
            short: "짧게 걷고 출발",
            travelAfter: "서울까지 2시간 45분 (202km, 무정체 기준)",
            type: "해변 산책",
            duration: "30분",
            phase: "afternoon",
            coords: [38.2599347, 128.5603054],
            address: "강원 고성군 토성면 천진리",
            hours: "비수기 자유 산책, 주차장 있음",
            note: "식사 후 초승달 모양 해변을 짧게 걷고 바로 서울로 출발합니다. 썬크림은 바로 옆이지만 여행 기간 임시휴무라 제외했습니다.",
            image: "assets/cheonjin-beach.jpg",
            review:
              "청간정 남쪽의 초승달 모양 아담한 해변으로 한쪽은 천진항, 다른 쪽은 봉포해변과 이어져 산책하기 좋고, 비수기에는 한적하다는 소개입니다.",
            reviewSource: "브런치 여행작가 기록",
            reviewUrl: "https://brunch.co.kr/@travie/1160",
          },
          { ...seoulEnd, time: "~17:00" },
        ],
      },
    ],
  },
};

const phoneDirectory = [
  ["라헨느 풀빌라 J동", "010-8644-3442", "입실·바비큐 조건"],
  ["스튜디오 토성당", "070-4580-7114", "에그타르트 예약"],
  ["고성식해물철판구이", "0507-1335-7859", "점심 예약 확인"],
  ["샘이네횟집", "0507-1497-6302", "회 포장 선주문"],
  ["백도수산", "033-633-9555", "가리비 재고"],
  ["고성군 관광과", "033-680-3356", "송지호 바다하늘길 운영"],
  ["카페 테일", "070-7585-8080", "금요일 영업 확인"],
  ["육림델리카트슨", "0507-1329-5027", "품절 여부"],
];

const sourceEntries = [
  ["동루골막국수 네이버 플레이스", "https://m.place.naver.com/restaurant/15070351/home"],
  ["청간정 네이버 플레이스", "https://m.place.naver.com/place/13491372/home"],
  ["스튜디오 토성당 네이버 플레이스", "https://m.place.naver.com/restaurant/1939232628/home"],
  ["고비치5311 네이버 플레이스", "https://m.place.naver.com/restaurant/311710132/home"],
  ["라헨느 풀빌라 J동 네이버 플레이스", "https://m.place.naver.com/accommodation/36651683/home"],
  ["라헨느 풀빌라 J동 공식 홈페이지", "http://lahenepoolvilla-j.com"],
  ["샘이네횟집 네이버 플레이스", "https://m.place.naver.com/restaurant/1406051653/home"],
  ["북끝서점 인터뷰 (지역문화진흥원 웹진)", "https://www.rcs.or.kr/webzine/202410/detail_meet1.jsp"],
  ["북끝서점 네이버 플레이스", "https://m.place.naver.com/place/1229121932/home"],
  ["천학정 네이버 플레이스", "https://m.place.naver.com/place/19493918/home"],
  ["고성식해물철판구이 네이버 플레이스", "https://m.place.naver.com/restaurant/1942643290/home"],
  [
    "교암해변 안내 (대한민국 구석구석)",
    "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=c7845dd5-f7df-41dd-8483-3af99f77bc59",
  ],
  ["능파대 네이버 플레이스", "https://m.place.naver.com/place/15150899/home"],
  ["노라킴 네이버 플레이스", "https://m.place.naver.com/restaurant/1482818703/home"],
  ["송지호 철새관망타워 네이버 플레이스", "https://m.place.naver.com/place/20027267/home"],
  ["송지호 바다하늘길 개장 보도", "https://thetravelnews.co.kr/2026/09/goseong-songjiho-bada-haneulgil-open-2026/"],
  ["육림델리카트슨 네이버 플레이스", "https://m.place.naver.com/restaurant/2060215047/home"],
  ["백도벅스 가리비수산 네이버 플레이스", "https://m.place.naver.com/restaurant/1956412699/home"],
  ["카페 테일 다이닝코드 후기", "https://www.diningcode.com/profile.php?rid=dhtQcpzxa0GZ"],
  ["백도수산 네이버 플레이스", "https://m.place.naver.com/restaurant/1506231167/home"],
  ["백도해변 안내와 사진 (고성군 관광포털)", "https://gwgs.go.kr/prog/tursmCn/tour/sub02_01/view.do?cntno=73"],
  ["세컨드바이트 네이버 플레이스", "https://m.place.naver.com/restaurant/1621171959/home"],
  ["보배진 10월 방문 후기 (코스 변경)", "https://m.blog.naver.com/seobways/224454204673"],
  ["천진해변 기록 (브런치)", "https://brunch.co.kr/@travie/1160"],
  ["천진해변 사진 (맘맘)", "https://mom-mom.net/travel/places/64e80358780235c472e8bf48"],
  ["썬크림 임시휴무 공지 (네이버 플레이스)", "https://m.place.naver.com/restaurant/1477690882/home"],
  ["서울-고성 이동 시간 참고", "https://www.rome2rio.com/ko/s/%EC%84%9C%EC%9A%B8/%EC%86%8D%EC%B4%88%EC%8B%9C"],
];

const ROUTE_SEGMENT_DURATION_MS = 3200;
const REDUCED_MOTION_STOP_DELAY_MS = 1200;

const state = {
  day: 1,
  variantIndex: 0,
  selectedIndex: 0,
  isPlaying: false,
  animationFrame: null,
  routeLine: null,
  traveledLine: null,
  vehicleMarker: null,
};

const timeline = document.querySelector("#timeline");
const placeImage = document.querySelector("#place-image");
const placeVisual = document.querySelector(".place-visual");
const imageState = document.querySelector(".image-state");
const routeButton = document.querySelector(".route-button");
const heroPlayButton = document.querySelector(".hero-play");
const variantSwitcher = document.querySelector("#variant-switcher");
const variantLabel = document.querySelector("#variant-label");

const map = L.map("map", {
  center: [38.3, 128.53],
  zoom: 11,
  zoomControl: false,
});

L.control.zoom({ position: "bottomright" }).addTo(map);
const mapStatus = document.querySelector("#map-status");
let loadedTileCount = 0;

function showMapError() {
  mapStatus.hidden = false;
  mapStatus.classList.add("is-error");
  mapStatus.innerHTML =
    '<i class="ph ph-warning-circle" aria-hidden="true"></i><span>지도를 불러오지 못했습니다. 장소 목록과 외부 지도 링크를 이용해 주세요.</span>';
}

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
})
  .on("tileload", () => {
    loadedTileCount += 1;
    mapStatus.hidden = true;
    mapStatus.classList.remove("is-error");
  })
  .on("load", () => {
    if (loadedTileCount > 0) {
      mapStatus.hidden = true;
    } else {
      showMapError();
    }
  })
  .on("tileerror", () => {
    if (loadedTileCount === 0) showMapError();
  })
  .addTo(map);

let markers = [];

function createMarkerIcon(index, isActive = false) {
  return L.divIcon({
    className: "trip-marker",
    html: `<span class="marker-pin${isActive ? " is-active" : ""}">${index + 1}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
}

function getCurrentDay() {
  return tripDays[state.day];
}

function getCurrentVariant() {
  return getCurrentDay().variants[state.variantIndex];
}

function getCurrentStops() {
  return getCurrentVariant().stops;
}

function createTimeline() {
  timeline.innerHTML = "";
  const stops = getCurrentStops();
  stops.forEach((stop, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `timeline-item${index === state.selectedIndex ? " is-active" : ""}`;
    button.dataset.index = index;
    button.setAttribute("aria-pressed", index === state.selectedIndex ? "true" : "false");
    button.innerHTML = `
      <span class="timeline-time">
        ${stop.time}
        <small>${stop.end}</small>
      </span>
      <span class="timeline-dot" aria-hidden="true"></span>
      <span class="timeline-copy">
        <strong>${stop.name}</strong>
        <span>${stop.short}</span>
        ${stop.travelAfter ? `<small>${stop.travelAfter}</small>` : ""}
      </span>
    `;
    button.addEventListener("click", () => selectStop(index, { focusMap: true }));
    timeline.appendChild(button);
  });
}

function renderVariantSwitcher() {
  const day = getCurrentDay();
  const hasChoice = day.variants.length > 1;
  variantSwitcher.hidden = !hasChoice;
  variantSwitcher.querySelectorAll(".variant-tab").forEach((tab) => tab.remove());
  if (!hasChoice) return;

  variantLabel.textContent = day.label;
  variantSwitcher.setAttribute("aria-label", `${day.label} 선택`);
  day.variants.forEach((variant, index) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = `variant-tab${index === state.variantIndex ? " is-active" : ""}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", index === state.variantIndex ? "true" : "false");
    tab.textContent = variant.label;
    tab.addEventListener("click", () => setVariant(index));
    variantSwitcher.appendChild(tab);
  });
}

function accentColor() {
  return getComputedStyle(document.documentElement).getPropertyValue("--accent-strong").trim();
}

function fitStops(stops, animate) {
  map.fitBounds(L.latLngBounds(stops.map((stop) => stop.coords)).pad(0.2), { animate });
}

function updateMap() {
  stopRouteAnimation();
  markers.forEach((marker) => marker.remove());
  markers = [];

  if (state.routeLine) state.routeLine.remove();
  if (state.traveledLine) state.traveledLine.remove();
  if (state.vehicleMarker) state.vehicleMarker.remove();

  const stops = getCurrentStops();
  const coords = stops.map((stop) => stop.coords);

  state.routeLine = L.polyline(coords, {
    color: accentColor(),
    weight: 4,
    opacity: 0.72,
    dashArray: "2 9",
    lineCap: "round",
  }).addTo(map);

  stops.forEach((stop, index) => {
    const marker = L.marker(stop.coords, {
      icon: createMarkerIcon(index, index === state.selectedIndex),
      title: stop.name,
      zIndexOffset: index,
    })
      .addTo(map)
      .on("click", () => selectStop(index, { focusMap: true }));
    markers.push(marker);
  });

  fitStops(stops, false);
}

function updatePlacePanel(stop) {
  const isMoodImage = stop.image === MOOD_IMAGE;
  placeVisual.classList.add("is-loading");
  imageState.hidden = true;
  placeImage.alt = isMoodImage
    ? "늦가을 동해 수평선을 표현한 일러스트"
    : `${stop.name} 관련 공개 사진`;
  placeImage.src = stop.image;

  document.querySelector("#current-time").textContent = stop.time;
  document.querySelector("#current-place").textContent = stop.name;
  document.querySelector("#place-type").textContent = stop.type;
  document.querySelector("#place-duration").textContent = stop.duration;
  document.querySelector("#place-name").textContent = stop.name;
  document.querySelector("#place-note").textContent = stop.note;
  document.querySelector("#place-address").textContent = stop.address;
  document.querySelector("#place-hours").textContent = stop.hours;
  document.querySelector("#review-text").textContent = stop.review;
  document.querySelector("#review-source").textContent = stop.reviewSource;
  document.querySelector("#review-link").href = stop.reviewUrl;
  document.querySelector("#media-disclaimer").textContent = isMoodImage
    ? "이 구간의 이미지는 분위기 연출용 일러스트입니다. 이동 시간은 지도 경로로 다시 확인하세요."
    : "사진과 후기 요약은 연결된 공개 페이지를 바탕으로 표시합니다. 최신 운영 여부는 방문 직전 공식 채널에서 다시 확인하세요.";

  const searchName = stop.name.replace(/ (산책|직판장)$/, "").replace(/ \(구 .*\)$/, "");
  document.querySelector("#naver-link").href = stop.naver
    ? `https://map.naver.com/p/entry/place/${stop.naver.split("/")[1]}`
    : `https://map.naver.com/p/search/${encodeURIComponent(`고성 ${searchName}`)}`;

  const phoneLink = document.querySelector("#place-phone");
  phoneLink.hidden = !stop.phone;
  if (stop.phone) {
    phoneLink.href = `tel:${stop.phone.replace(/-/g, "")}`;
    phoneLink.textContent = stop.phone;
  }

  const bookingLink = document.querySelector("#booking-link");
  bookingLink.hidden = !stop.bookingUrl;
  if (stop.bookingUrl) bookingLink.href = stop.bookingUrl;
  document.querySelector("#google-link").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${searchName} ${stop.address}`,
  )}`;

  document.body.classList.remove("phase-morning", "phase-afternoon", "phase-evening", "phase-night");
  document.body.classList.add(`phase-${stop.phase}`);
}

function updateTimelineState() {
  const items = [...document.querySelectorAll(".timeline-item")];
  items.forEach((item, index) => {
    const isActive = index === state.selectedIndex;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  const stops = getCurrentStops();
  const progress = stops.length > 1 ? (state.selectedIndex / (stops.length - 1)) * 100 : 100;
  document.querySelector(".timeline-panel").style.setProperty("--timeline-progress", `${progress}%`);

  markers.forEach((marker, index) => {
    marker.setIcon(createMarkerIcon(index, index === state.selectedIndex));
  });
}

function selectStop(index, options = {}) {
  state.selectedIndex = index;
  const stop = getCurrentStops()[index];
  updateTimelineState();
  updatePlacePanel(stop);

  if (options.focusMap) {
    map.flyTo(stop.coords, stop.image === MOOD_IMAGE ? 10 : 14, { duration: 0.8 });
  }

  const activeTimelineItem = timeline.querySelector(`[data-index="${index}"]`);
  activeTimelineItem?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "nearest",
    inline: "center",
  });
}

function refreshDayView() {
  document.querySelector("#route-summary").textContent = getCurrentVariant().summary;
  renderVariantSwitcher();
  createTimeline();
  updateMap();
  selectStop(0);
}

function setDay(day) {
  state.day = Number(day);
  state.variantIndex = 0;
  state.selectedIndex = 0;
  document.querySelectorAll(".day-tab").forEach((tab) => {
    const isActive = Number(tab.dataset.day) === state.day;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  refreshDayView();
}

function setVariant(index) {
  state.variantIndex = index;
  state.selectedIndex = 0;
  refreshDayView();
}

function interpolateRoute(stops, progress) {
  const segmentCount = stops.length - 1;
  const scaled = Math.min(progress, 0.999999) * segmentCount;
  const segmentIndex = Math.floor(scaled);
  const localProgress = scaled - segmentIndex;
  const start = stops[segmentIndex].coords;
  const end = stops[segmentIndex + 1].coords;
  return [
    start[0] + (end[0] - start[0]) * localProgress,
    start[1] + (end[1] - start[1]) * localProgress,
  ];
}

function buildTraveledCoordinates(stops, progress) {
  const segmentCount = stops.length - 1;
  const scaled = Math.min(progress, 0.999999) * segmentCount;
  const segmentIndex = Math.floor(scaled);
  const coords = stops.slice(0, segmentIndex + 1).map((stop) => stop.coords);
  coords.push(interpolateRoute(stops, progress));
  return coords;
}

function updatePlayButtons(isPlaying) {
  [routeButton, heroPlayButton].forEach((button) => {
    const icon = button.querySelector("i");
    icon.className = isPlaying ? "ph ph-pause" : "ph ph-play";
    button.querySelector("span").textContent = isPlaying ? "경로 멈춤" : "경로 재생";
  });
}

function playRoute() {
  if (state.isPlaying) {
    stopRouteAnimation();
    return;
  }

  const stops = getCurrentStops();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    stops.forEach((_, index) => {
      window.setTimeout(
        () => selectStop(index, { focusMap: true }),
        index * REDUCED_MOTION_STOP_DELAY_MS,
      );
    });
    return;
  }

  state.isPlaying = true;
  updatePlayButtons(true);
  fitStops(stops, true);

  if (state.vehicleMarker) state.vehicleMarker.remove();
  if (state.traveledLine) state.traveledLine.remove();

  state.vehicleMarker = L.marker(stops[0].coords, {
    icon: L.divIcon({
      className: "trip-marker",
      html: '<span class="vehicle-marker"><i class="ph ph-car-profile"></i></span>',
      iconSize: [38, 38],
      iconAnchor: [19, 19],
    }),
    zIndexOffset: 1000,
  }).addTo(map);

  state.traveledLine = L.polyline([stops[0].coords], {
    color: accentColor(),
    weight: 5,
    opacity: 0.95,
    lineCap: "round",
  }).addTo(map);

  const segmentCount = stops.length - 1;
  const duration = segmentCount * ROUTE_SEGMENT_DURATION_MS;
  const startTime = performance.now();
  let previousIndex = -1;

  function frame(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const currentCoords =
      progress === 1 ? stops[stops.length - 1].coords : interpolateRoute(stops, progress);
    state.vehicleMarker.setLatLng(currentCoords);
    state.traveledLine.setLatLngs(
      progress === 1 ? stops.map((stop) => stop.coords) : buildTraveledCoordinates(stops, progress),
    );

    const selectedIndex =
      progress === 1 ? stops.length - 1 : Math.floor(progress * segmentCount);
    if (selectedIndex !== previousIndex) {
      previousIndex = selectedIndex;
      selectStop(selectedIndex);
    }

    if (progress < 1 && state.isPlaying) {
      state.animationFrame = requestAnimationFrame(frame);
    } else {
      state.isPlaying = false;
      state.animationFrame = null;
      updatePlayButtons(false);
    }
  }

  state.animationFrame = requestAnimationFrame(frame);
}

function stopRouteAnimation() {
  if (state.animationFrame) cancelAnimationFrame(state.animationFrame);
  state.animationFrame = null;
  state.isPlaying = false;
  updatePlayButtons(false);
}

function initializeTheme() {
  const saved = localStorage.getItem("goseong-trip-theme");
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = saved || (preferredDark ? "dark" : "light");
  document.documentElement.dataset.theme = initialTheme;
  updateThemeIcon(initialTheme);
}

function updateThemeIcon(theme) {
  const icon = document.querySelector(".theme-toggle i");
  icon.className = theme === "dark" ? "ph ph-sun" : "ph ph-moon";
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme;
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("goseong-trip-theme", next);
  updateThemeIcon(next);
  updateMap();
  selectStop(state.selectedIndex);
}

function renderPhoneDirectory() {
  const list = document.querySelector("#phone-directory");
  phoneDirectory.forEach(([name, phone, why]) => {
    const anchor = document.createElement("a");
    anchor.href = `tel:${phone.replace(/-/g, "")}`;
    anchor.innerHTML = `<strong>${name}</strong><span>${phone}</span><small>${why}</small>`;
    list.appendChild(anchor);
  });
}

function renderSources() {
  const list = document.querySelector("#source-list");
  sourceEntries.forEach(([label, url]) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    anchor.innerHTML = `<span>${label}</span><i class="ph ph-arrow-up-right" aria-hidden="true"></i>`;
    list.appendChild(anchor);
  });
}

placeImage.addEventListener("load", () => {
  placeVisual.classList.remove("is-loading");
  imageState.hidden = true;
});

placeImage.addEventListener("error", () => {
  placeVisual.classList.remove("is-loading");
  imageState.hidden = false;
});

document.querySelectorAll(".day-tab").forEach((tab) => {
  tab.addEventListener("click", () => setDay(tab.dataset.day));
});

document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
routeButton.addEventListener("click", playRoute);
heroPlayButton.addEventListener("click", () => {
  document.querySelector("#trip-planner").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(playRoute, 500);
});

initializeTheme();
renderPhoneDirectory();
renderSources();
refreshDayView();
