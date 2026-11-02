const MOOD_IMAGE = "assets/goseong-east-sea.svg";

const seoulStart = {
  id: "seoul-start",
  time: "10:00",
  end: "출발",
  name: "서울 출발",
  short: "자차로 고성까지",
  travelAfter: "토성면까지 약 2시간 45분, 정체 시 3시간 30분 이상",
  type: "출발",
  duration: "약 3시간 이동",
  phase: "morning",
  coords: [37.5665, 126.978],
  address: "서울 → 서울양양고속도로 → 고성군 토성면",
  hours: "첫날은 예약 시간을 촘촘하게 잡지 않습니다. 휴게소도 편하게 들릅니다.",
  note: "13시 도착은 목표로 두되, 실시간 경로를 확인한 예상은 아닙니다. 첫 식사는 13시에서 14시 사이로 여유 있게 잡습니다.",
  image: MOOD_IMAGE,
  review:
    "서울에서 고성 토성면까지는 약 200km로, 정체가 없으면 2시간 40분 안팎이고 주말 낮 출발은 3시간 30분을 넘기는 사례가 많습니다.",
  reviewSource: "OpenStreetMap 경로 추정과 운전 후기 종합",
  reviewUrl: "https://www.rome2rio.com/ko/s/%EC%84%9C%EC%9A%B8/%EC%86%8D%EC%B4%88%EC%8B%9C",
};

const lahene = {
  coords: [38.3595154, 128.5071207],
  address: "강원 고성군 죽왕면 가진해변길 229 (공현진리 431-38)",
  image: "assets/lahene-j.jpg",
  review:
    "전 객실 오션뷰에 개별 스파를 갖춘 복층 풀빌라로, 야외 개별 바비큐장은 현장 결제로 21시까지 운영한다는 안내가 있습니다. 조용하고 객실 관리가 깨끗하다는 평이 많습니다.",
  reviewSource: "네이버 플레이스와 트립닷컴 공개 후기",
  reviewUrl: "https://m.place.naver.com/accommodation/36651683/home",
};

const tailCafe = {
  name: "카페 테일",
  coords: [38.3728017, 128.5087356],
  address: "강원 고성군 죽왕면 가진길 40-5 (가진리 6)",
  image: "assets/tail-cafe.jpg",
  review:
    "구옥을 고친 초록지붕 한옥 카페로 직접 로스팅한 브루잉 커피와 옥수수 크림라떼, 옥수수 에그타르트가 인기입니다. 도자기 작업실을 겸해 고래꼬리 무늬 컵에 커피가 나오고 주차는 가진리 마을주차장을 씁니다.",
  reviewSource: "네이버 플레이스와 다이닝코드 방문 후기",
  reviewUrl: "https://www.diningcode.com/profile.php?rid=dhtQcpzxa0GZ",
};

const day1Stops = [
  seoulStart,
  {
    id: "dongrugol",
    time: "13:00",
    end: "14:00",
    name: "동루골막국수",
    short: "올라가는 길에 점심",
    travelAfter: "가진 방향 이동 약 20분",
    type: "막국수",
    duration: "1시간",
    phase: "afternoon",
    coords: [38.254887, 128.5095382],
    address: "강원 고성군 토성면 성대로 188 (성대리 526-1)",
    hours: "10:00-17:00, 매주 화요일 휴무 (11/2 네이버 플레이스 기준)",
    note: "숙소까지 바로 올라갔다가 다시 내려오지 않도록 남쪽에서 먼저 식사합니다. 본점은 성대로에 있고 2호점과 속초점이 따로 있으니 내비 검색 때 본점을 고릅니다.",
    image: "assets/dongrugol.jpg",
    review:
      "순메밀 면에 동치미 국물을 부어 먹는 막국수와 촉촉한 수육이 대표 메뉴이고, 시골집 같은 외관에 넓은 주차장과 야외 테라스가 있어 편하다는 평입니다.",
    reviewSource: "네이버 플레이스 방문자 후기",
    reviewUrl: "https://m.place.naver.com/restaurant/15070351/home",
  },
  {
    ...tailCafe,
    id: "tail-day1",
    time: "14:30",
    end: "15:15",
    short: "커피와 옥수수 에그타르트",
    travelAfter: "숙소 이동 약 5분",
    type: "카페 · 휴무 주의",
    duration: "45분 또는 포장",
    phase: "afternoon",
    hours: "10:00-18:00, 매주 수·목 정기휴무 (11/2 네이버 플레이스 기준) — 수요일 방문 불가",
    note: "네이버 기준 수요일과 목요일이 정기휴무라 첫날에는 들를 수 없습니다. 금요일 체크아웃 직후로 옮기는 안을 마지막 날 경로에 넣어 두었으니, 출발 전 SNS 공지로 영업일을 한 번 더 확인하세요.",
  },
  {
    ...lahene,
    id: "lahene-day1",
    time: "15:30",
    end: "이후",
    name: "라헨느 풀빌라 J동",
    short: "체크인, 바다, 숙소 저녁",
    type: "숙소",
    duration: "첫째 밤",
    phase: "evening",
    hours: "공개 안내 입실 15:00 · 퇴실 11:00, 예약 문자 조건 우선",
    note: "첫날부터 다시 남쪽으로 나가지 않고 숙소와 주변 바다를 즐깁니다. 저녁은 포장 음식이나 숙소에서 허용하는 방식으로 준비하고, 바비큐를 할 거면 이용 조건과 신청 여부를 먼저 확인합니다. 객실 내 조리 가능 범위는 임의로 가정하지 않습니다. 4일 저녁 온라인 미팅이 그대로 있다면 이 구성이 특히 편합니다.",
  },
];

const day2Core = [
  {
    id: "bookkkeut",
    time: "11:00",
    end: "12:00",
    name: "북끝서점",
    short: "책 고르는 데 여유를",
    travelAfter: "고식당까지 도보 1분",
    type: "독립서점",
    duration: "1시간",
    phase: "morning",
    coords: [38.292056, 128.5454957],
    address: "강원 고성군 토성면 교암길 78-1 (교암리 2-5)",
    hours: "화-토 11:00-16:00, 일·월 정기휴무 (11/2 네이버 플레이스 기준)",
    note: "아침은 숙소에서 바다를 보며 느긋하게 보내고 10시 30분쯤 출발합니다. 영업 공지를 확인한 뒤 방문하고, 고식당 대기에 따라 서점과 순서를 바꿔도 됩니다. 서점 앞 교차로에서 교암교회 방면으로 우회전하면 주차할 수 있다는 안내가 있습니다.",
    image: "assets/bookkkeut.jpg",
    review:
      "교암해변 옆 어촌마을의 작은 독립서점으로 소설, 시, 에세이, 그림책을 책방지기가 큐레이션하고 쪽지 추천을 곳곳에 붙여 두었습니다. 실내화로 갈아 신고 들어가는 아늑한 공간이라 카페 같은 분위기라는 후기가 많습니다.",
    reviewSource: "지역문화진흥원 웹진 인터뷰와 네이버 방문자 후기",
    reviewUrl: "https://www.rcs.or.kr/webzine/202410/detail_meet1.jsp",
  },
  {
    id: "go-restaurant",
    time: "12:00",
    end: "13:00",
    name: "고식당",
    short: "해물 철판요리 점심",
    travelAfter: "교암해변까지 도보 3분",
    type: "철판요리",
    duration: "1시간",
    phase: "afternoon",
    coords: [38.2923182, 128.5454743],
    address: "강원 고성군 토성면 교암길 80 2층 (교암리 3-4)",
    hours: "11:00-20:00, 브레이크 15:00-17:00, 라스트오더 19:10, 화요일 휴무 (11/2 기준)",
    note: "서점과 가까워 한 번에 묶기 좋습니다. 붉은 벽돌 건물 2층이고 입구는 건물 뒤편입니다. 테이블링 대기 접수를 쓰니 대기가 길면 서점을 먼저 보고 돌아옵니다.",
    image: "assets/go-restaurant.jpg",
    review:
      "낙지, 관자, 새우, 가리비를 특제 양념에 버무려 테이블 무쇠 철판에 볶아 주고 남은 양념에 볶음밥으로 마무리하는 집입니다. 짜지 않은 양념과 파 물김치, 창가 바다 뷰가 호평입니다.",
    reviewSource: "다이닝코드 방문 후기",
    reviewUrl: "https://www.diningcode.com/profile.php?rid=hvpOCb0L6wNp",
  },
  {
    id: "gyoam-beach",
    time: "13:00",
    end: "13:40",
    name: "교암해변 산책",
    short: "날씨가 좋으면 천천히",
    travelAfter: "노라킴까지 약 5분",
    type: "해변 산책",
    duration: "40분, 바람 세면 생략",
    phase: "afternoon",
    coords: [38.2921, 128.547025],
    address: "강원 고성군 토성면 교암리 1-43 일원",
    hours: "비수기 자유 산책, 천학정 솔숲과 이어짐",
    note: "식사 후 날씨가 좋으면 천천히 걷고, 바람이 세면 생략합니다. 북쪽 끝 천학정까지 다녀오면 40분 정도입니다.",
    image: "assets/gyoam-beach.jpg",
    review:
      "교암항과 천학정 솔숲 사이의 1km 완만한 백사장으로 한적하고 바다색이 맑아 조용한 산책 코스로 소개됩니다.",
    reviewSource: "한국관광공사 대한민국 구석구석",
    reviewUrl:
      "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=c7845dd5-f7df-41dd-8483-3af99f77bc59",
  },
  {
    id: "norakim",
    time: "14:00",
    end: "15:00",
    name: "노라킴",
    short: "숙소 방향으로 돌아오며 쉬는 카페",
    travelAfter: "숙소까지 약 10분",
    type: "카페",
    duration: "1시간",
    phase: "afternoon",
    coords: [38.3064576, 128.5419643],
    address: "강원 고성군 죽왕면 자작도선사길 130-2 (문암진리 253-1)",
    hours: "10:00-18:00, 매주 화·수 정기휴무 (11/2 네이버 플레이스 기준) — 목요일 영업",
    note: "남쪽 교암에서 숙소 방향으로 돌아오며 쉬는 코스입니다. 자작도해변 건너편이라 바테이블에서는 바다가 보이고, 주차는 맞은편 길가를 씁니다.",
    image: "assets/norakim.jpg",
    review:
      "자작도해변 앞 화이트톤 남유럽풍 건물에 모래 마당이 있는 카페로 테이블 간격이 넓어 조용합니다. 뷰가 좋고 인테리어가 멋지다는 키워드가 많고 커피, 크로아상, 아포가토가 언급됩니다.",
    reviewSource: "네이버 플레이스 방문자 후기",
    reviewUrl: "https://m.place.naver.com/restaurant/1482818703/review/visitor",
  },
];

const yooklim = {
  id: "yooklim",
  time: "16:00",
  end: "17:00",
  name: "육림델리카트슨",
  short: "목요일 저녁 외식 선택지",
  travelAfter: "숙소까지 약 10분",
  type: "수제 소시지",
  duration: "1시간, 대기 포함",
  phase: "evening",
  coords: [38.3025818, 128.5451698],
  address: "강원 고성군 죽왕면 백도해변길 90 1층 (문암진리 82-5)",
  hours: "11:00-21:00, 브레이크 14:30-16:00, 라스트오더 20:30, 수요일 휴무 — 목요일 저녁 16:00부터",
  note: "꼭 가고 싶은 곳이면 노라킴 이후 이어서 방문하고 바로 숙소로 돌아갑니다. 매장이 작아 세션별 현장 대기를 받고 재료 소진이 잦으니 저녁 세션이 열리는 16시에 맞춰 갑니다.",
  image: "assets/yooklim.jpg",
  review:
    "서울 목동 샤퀴테리 브랜드가 백도해변 옆에 낸 수제 소시지 전문점으로 보크부어스트, 치앙마이부어스트, 매콤한 엘디아블로와 핫도그, 샌드위치가 주력입니다. 음식이 맛있고 재료가 신선하다는 키워드가 많지만 웨이팅과 재료 소진 후기도 많습니다.",
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
  time: "~11:00",
  end: "체크아웃",
  name: "라헨느 풀빌라 J동",
  short: "아침까지 쉬고 체크아웃",
  travelAfter: "테일까지 약 5분",
  type: "숙소",
  duration: "퇴실 11:00",
  phase: "morning",
  hours: "공개 안내 퇴실 11:00, 예약 조건 우선",
  note: "아침은 숙소에서 쉬고 11시에 체크아웃합니다. 가리비 안이면 체크아웃 전에 백도수산에 전화해 재고와 식사 가능 시간을 확인하고, 결과에 따라 체크아웃을 조금 앞당기거나 방문을 늦춥니다.",
};

const tailDay3 = {
  ...tailCafe,
  id: "tail-day3",
  time: "11:10",
  end: "11:50",
  short: "첫날 못 간 테일을 금요일에",
  type: "카페 · 선택",
  duration: "40분, 생략 가능",
  phase: "morning",
  hours: "10:00-18:00, 수·목 휴무라 여행 중에는 금요일만 영업",
  note: "첫날이 휴무라 못 들렀다면 체크아웃 직후 북쪽으로 5분 올라가 커피와 옥수수 에그타르트를 챙깁니다. 점심 시간이 빠듯하면 포장만 하거나 생략합니다.",
};

const seoulEnd = {
  id: "seoul-end",
  time: "~18:00",
  end: "도착",
  name: "서울 도착",
  short: "여행 마무리",
  type: "귀가",
  duration: "약 3시간 이동",
  phase: "night",
  coords: [37.5665, 126.978],
  address: "고성군 죽왕면 → 서울양양고속도로 → 서울",
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
        summary: "첫날 4개 정류장",
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
        summary: "둘째 날 5개 정류장",
        stops: [
          ...day2Core,
          laheneReturn(
            "16:00",
            "풀빌라를 잡았으니 오후를 전부 밖에서 쓰지 않습니다. 수영과 스파는 예약한 객실의 시설과 이용 조건에 맞춰 즐기고, 저녁은 포장이나 숙소 식사로 해결합니다. 숙소에 돌아왔다가 저녁 때문에 다시 왕복하는 구성은 피합니다.",
          ),
        ],
      },
      {
        key: "yooklim",
        label: "육림에서 저녁",
        summary: "둘째 날 6개 정류장",
        stops: [
          ...day2Core,
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
            time: "12:00",
            end: "13:00",
            name: "백도수산 가리비 직판장",
            short: "숯불 가리비로 마무리 점심",
            travelAfter: "백도해변까지 도보 5분",
            type: "가리비 직판",
            duration: "1시간",
            phase: "afternoon",
            coords: [38.3022337, 128.548811],
            address: "강원 고성군 죽왕면 문암항길 92 1층 (문암진리 산1-14) · 033-633-9555",
            hours: "09:00-16:00, 월요일 휴무 (11/2 기준). 12-13시 점심 휴게와 물량 소진 조기 마감 후기 있음",
            note: "점심시간 운영 안내가 엇갈려서 체크아웃 전에 전화로 재고와 식사 가능 시간을 확인합니다. 메뉴는 가리비뿐이고 숯과 초장은 별도이니 버터나 라면은 챙겨 갑니다.",
            image: "assets/baekdo-susan.jpg",
            review:
              "동해 참가리비만 파는 산지 직매장으로 씨알과 신선도에 호평이 몰리고, 바다 앞 야장에서 연탄과 숯불에 직접 구워 먹는 소박한 분위기가 매력입니다. 주말에는 30분 이상 대기 후기가 있습니다.",
            reviewSource: "다이닝코드와 폴레 공개 후기",
            reviewUrl: "https://www.diningcode.com/profile.php?rid=lWWmThWjKe1U",
          },
          {
            id: "baekdo-beach",
            time: "13:00",
            end: "13:30",
            name: "백도해변 산책",
            short: "짧게 걷고 출발",
            travelAfter: "서울까지 약 3시간",
            type: "해변 산책",
            duration: "30분",
            phase: "afternoon",
            coords: [38.3011306, 128.5463992],
            address: "강원 고성군 죽왕면 문암진리",
            hours: "비수기 자유 산책",
            note: "가리비를 먹고 바로 옆 해변을 짧게 걷습니다. 바람이 세면 등대만 보고 출발합니다.",
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
        label: "B안 · 카츠산도",
        summary: "마지막 날 5개 정류장",
        stops: [
          day3Checkout,
          { ...tailDay3, travelAfter: "천진까지 약 25분" },
          {
            id: "bobaejin",
            time: "12:00",
            end: "13:30",
            name: "보배진",
            short: "카츠산도가 메뉴에 있다면",
            travelAfter: "천진해변까지 도보 4분",
            type: "돈카츠 · 예약 확인",
            duration: "1시간 30분",
            phase: "afternoon",
            coords: [38.2581859, 128.5586654],
            address: "강원 고성군 토성면 토성로 148-1 1층 101호 (천진리 21-16) · 0507-1393-2266",
            hours: "금-월 12:00-20:00, 화·수·목 정기휴무 (11/2 기준) — 금요일 12시 오픈",
            note: "11/2 기준 보배진은 예약제 돈카츠 오마카세 코스로 운영되고 카츠산도는 코스 안에 포함됩니다. 단품 카츠산도는 여름 한정 팝업이었으니 판매 여부를 인스타그램이나 캐치테이블에서 확인하고, 메뉴가 달라졌다면 A안 가리비로 돌립니다. 주차는 어렵습니다.",
            image: "assets/bobaejin.jpg",
            review:
              "프렌치 출신 셰프가 오픈키친 바 테이블에서 안심, 등심, 가브리 등 부위별 카츠를 한 점씩 내는 돈카츠 오마카세로, 코스 후반에 카츠산도와 고성 쌀 푸딩이 나옵니다. 기름 냄새 없는 쾌적함이 호평입니다.",
            reviewSource: "한국관광공사 대한민국 구석구석",
            reviewUrl:
              "https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=fec8c601-f3ac-477b-b8ea-de2ff9768240",
          },
          {
            id: "cheonjin-beach",
            time: "13:30",
            end: "14:00",
            name: "천진해변 산책",
            short: "짧게 걷고 출발",
            travelAfter: "서울까지 약 2시간 45분",
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
          { ...seoulEnd, time: "~17:30" },
        ],
      },
    ],
  },
};

const sourceEntries = [
  ["동루골막국수 네이버 플레이스", "https://m.place.naver.com/restaurant/15070351/home"],
  ["카페 테일 다이닝코드 후기", "https://www.diningcode.com/profile.php?rid=dhtQcpzxa0GZ"],
  ["카페 테일 네이버 플레이스", "https://m.place.naver.com/restaurant/1351634164/home"],
  ["라헨느 풀빌라 J동 네이버 플레이스", "https://m.place.naver.com/accommodation/36651683/home"],
  ["라헨느 풀빌라 J동 공식 홈페이지", "http://lahenepoolvilla-j.com"],
  ["북끝서점 인터뷰 (지역문화진흥원 웹진)", "https://www.rcs.or.kr/webzine/202410/detail_meet1.jsp"],
  ["북끝서점 네이버 방문자 후기", "https://m.place.naver.com/place/1229121932/review/visitor"],
  ["고식당 다이닝코드 후기", "https://www.diningcode.com/profile.php?rid=hvpOCb0L6wNp"],
  [
    "교암해변 안내 (대한민국 구석구석)",
    "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=c7845dd5-f7df-41dd-8483-3af99f77bc59",
  ],
  ["노라킴 네이버 방문자 후기", "https://m.place.naver.com/restaurant/1482818703/review/visitor"],
  ["육림델리카트슨 네이버 플레이스", "https://m.place.naver.com/restaurant/2060215047/home"],
  ["백도수산 다이닝코드 후기", "https://www.diningcode.com/profile.php?rid=lWWmThWjKe1U"],
  ["백도수산 네이버 플레이스", "https://m.place.naver.com/restaurant/1506231167/home"],
  ["백도해변 안내와 사진 (고성군 관광포털)", "https://gwgs.go.kr/prog/tursmCn/tour/sub02_01/view.do?cntno=73"],
  [
    "보배진 안내와 사진 (대한민국 구석구석)",
    "https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=fec8c601-f3ac-477b-b8ea-de2ff9768240",
  ],
  ["보배진 네이버 플레이스", "https://m.place.naver.com/restaurant/1060028571/home"],
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

  const searchName = stop.name.replace(/ (산책|직판장)$/, "");
  document.querySelector("#naver-link").href = `https://map.naver.com/p/search/${encodeURIComponent(
    `고성 ${searchName}`,
  )}`;
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
renderSources();
refreshDayView();
