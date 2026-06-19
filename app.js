// BookLog - Vanilla JavaScript Application
// Contains 90 recommended books across 문학 and 비문학 categories

// 1. Database Definitions
const initialRecommendations = [
  // ==================== 문학 (30권) ====================
  // (1) 소설 (10권)
  {
    id: "rec-lit-nov-1",
    title: "당신 인생의 이야기",
    author: "테드 창",
    mainCategory: "literature",
    category: "소설",
    description: "SF 장르의 거장 테드 창이 남긴 단편집. 영화 '컨택트'의 원작 소설로 외계 언어를 통해 시간의 비선형성을 이해하는 언어학자의 깊이 있는 이야기를 다룹니다.",
    tags: ["SF소설", "시간", "철학"]
  },
  {
    id: "rec-lit-nov-2",
    title: "트로피컬 나이트",
    author: "조예은",
    mainCategory: "literature",
    category: "소설",
    description: "쓸쓸하고 기묘한 도시 속 괴물들과 연민 가득한 인간관계의 따뜻한 연대를 다룬 스릴러 환상문학 소설집입니다.",
    tags: ["스릴러", "환상소설", "한국문학"]
  },
  {
    id: "rec-lit-nov-3",
    title: "삼체",
    author: "류츠신",
    mainCategory: "literature",
    category: "소설",
    description: "아시아 최초 휴고상 수상작. 외계 문명과의 대립 속에서 전 인류 문명의 위기와 연대를 장엄한 과학적 가설들로 풀어낸 하드 SF입니다.",
    tags: ["우주SF", "휴고상", "대서사"]
  },
  {
    id: "rec-lit-nov-4",
    title: "프로젝트 헤일메리",
    author: "앤디 위어",
    mainCategory: "literature",
    category: "소설",
    description: "지구를 태양 에너지 고갈 위기에서 구하기 위해 나선 유일한 생존 우주비행사와 낯선 외계 생명체 친구의 유쾌하고 감동적인 우정의 과학 모험담.",
    tags: ["우주생존", "외계인", "유머"]
  },
  {
    id: "rec-lit-nov-5",
    title: "용의자 X의 헌신",
    author: "히가시노 게이고",
    mainCategory: "literature",
    category: "소설",
    description: "사랑하는 여인을 지키기 위해 천재 수학자가 설계한 완벽한 알리바이와 이를 파헤치려는 물리학자 갈릴레오의 치밀한 지력 대결을 다룬 추리극입니다.",
    tags: ["추리소설", "수학자", "히가시노게이고"]
  },
  {
    id: "rec-lit-nov-6",
    title: "그리고 아무도 없었다",
    author: "애거서 크리스티",
    mainCategory: "literature",
    category: "소설",
    description: "추리 소설의 영원한 여왕 애거서 크리스티의 전설적인 명작. 외딴 섬에 초대받은 10명의 남녀가 인디언 인형 노래 가사에 맞춰 의문의 죽음을 맞이합니다.",
    tags: ["추리소설", "밀실살인", "고전"]
  },
  {
    id: "rec-lit-nov-7",
    title: "듄",
    author: "프랭크 허버트",
    mainCategory: "literature",
    category: "소설",
    description: "우주 스파이스의 생산지 아라키스를 무대로 황실 가문의 암투와 생태학적 성찰, 메시아 전설을 녹여낸 불후의 SF 우주 대서사시.",
    tags: ["사막행성", "가문암투", "스페이스오페라"]
  },
  {
    id: "rec-lit-nov-8",
    title: "7년의 밤",
    author: "정유정",
    mainCategory: "literature",
    category: "소설",
    description: "세령호에서 벌어진 우발적인 살인 사건과 그로 인해 딸을 잃고 처절한 복수를 계획하는 남자, 그리고 그의 아들의 숨 가쁜 사투를 그린 스릴러.",
    tags: ["스릴러", "복수극", "밀도높은문체"]
  },
  {
    id: "rec-lit-nov-9",
    title: "멋진 신세계",
    author: "올더스 헉슬리",
    mainCategory: "literature",
    category: "소설",
    description: "시험관 아기 생산, 감정 억제용 약물 소마 등으로 완벽하게 기획된 통제 유토피아 이면의 인성 상실을 예견한 시대를 초월한 디스토피아 소설.",
    tags: ["디스토피아", "고전소설", "미래사회"]
  },
  {
    id: "rec-lit-nov-10",
    title: "가면산장 살인사건",
    author: "히가시노 게이고",
    mainCategory: "literature",
    category: "소설",
    description: "외딴 산장에 침입한 은행 강도 무리 속에서 벌어지는 의문의 살인사건. 반전에 반전을 거듭하는 고도의 연출과 밀실 추리가 돋보입니다.",
    tags: ["밀실추리", "이중반전", "산장"]
  },

  // (2) 시/희곡 (10권)
  {
    id: "rec-lit-poetry-1",
    title: "하늘과 바람과 별과 시",
    author: "윤동주",
    mainCategory: "literature",
    category: "시/희곡",
    description: "어두운 시대 속에서 부끄러움 없는 삶을 갈구하며 자신을 성찰한 청년 시인 윤동주의 맑고 단단한 마음이 담긴 유고 시집입니다.",
    tags: ["한국시", "서시", "윤동주", "일제강점기"]
  },
  {
    id: "rec-lit-poetry-2",
    title: "입 속의 검은 잎",
    author: "기형도",
    mainCategory: "literature",
    category: "시/희곡",
    description: "요절한 시인 기형도의 유작 시집. 80년대 우울한 시대의 초상과 개인의 고독, 죽음의 이미지를 독특하고 건조한 시적 미학으로 그려냈습니다.",
    tags: ["현대시", "도시고독", "기형도"]
  },
  {
    id: "rec-lit-poetry-3",
    title: "진달래꽃",
    author: "김소월",
    mainCategory: "literature",
    category: "시/희곡",
    description: "민족의 보편적인 이별 정서와 전통적인 가락을 아름다운 한글의 은유로 담아낸 서정시인 김소월의 기념비적인 시집.",
    tags: ["서정시", "한국가락", "이별정서"]
  },
  {
    id: "rec-lit-poetry-4",
    title: "사슴",
    author: "백석",
    mainCategory: "literature",
    category: "시/희곡",
    description: "평안도 지방 고유의 방언과 토속적인 민속 풍경을 독자적 모더니즘 기법으로 아로새긴 천재 시인 백석의 시집입니다.",
    tags: ["토속적", "평안도방언", "백석"]
  },
  {
    id: "rec-lit-poetry-5",
    title: "햄릿",
    author: "윌리엄 셰익스피어",
    mainCategory: "literature",
    category: "시/희곡",
    description: "'사느냐 죽느냐 그것이 문제로다.' 덴마크 왕가의 비극적인 음모와 살인 속에서 갈등하며 고뇌하는 인간의 본성을 해부한 희곡.",
    tags: ["셰익스피어", "5대비극", "희곡대본"]
  },
  {
    id: "rec-lit-poetry-6",
    title: "맥베스",
    author: "윌리엄 셰익스피어",
    mainCategory: "literature",
    category: "시/희곡",
    description: "마녀의 예언과 부인의 충동질에 눈이 멀어 국왕을 살해하고 왕좌를 찬탈한 맥베스의 내면적 양심 가책과 파멸을 담은 희곡 걸작.",
    tags: ["양심가책", "파멸", "희곡"]
  },
  {
    id: "rec-lit-poetry-7",
    title: "인형의 집",
    author: "헨리크 입센",
    mainCategory: "literature",
    category: "시/희곡",
    description: "현대 페미니즘과 사회주의 연극의 신호탄. 남편의 인형에 불과했던 노라가 진정한 인간으로서 자아를 깨닫고 집을 나가는 과정을 그린 희곡.",
    tags: ["여성해방", "노라", "입센"]
  },
  {
    id: "rec-lit-poetry-8",
    title: "고도를 기다리며",
    author: "사무엘 베케트",
    mainCategory: "literature",
    category: "시/희곡",
    description: "누군지도 모를 존재 '고도'를 마냥 기다리는 두 방랑자의 부조리하고 우스꽝스러운 대화를 통해 인간 실존의 무의미와 허무를 극대화한 부조리극.",
    tags: ["부조리극", "실존주의", "노벨문학상"]
  },
  {
    id: "rec-lit-poetry-9",
    title: "꽃을 보듯 너를 본다",
    author: "나태주",
    mainCategory: "literature",
    category: "시/희곡",
    description: "'자세히 보아야 예쁘다, 오래 보아야 사랑스럽다, 너도 그렇다'의 풀꽃 시인 나태주가 일상의 소박한 사랑과 위로를 따뜻하게 전하는 시집.",
    tags: ["풀꽃시인", "소박한위로", "사랑"]
  },
  {
    id: "rec-lit-poetry-10",
    title: "서시 (윤동주 전집)",
    author: "윤동주",
    mainCategory: "literature",
    category: "시/희곡",
    description: "윤동주 시인의 대표작들과 미공개 시, 산문, 편지글까지 한 권에 수록한 그의 삶과 문학 세계 전체를 입체적으로 아우르는 전집입니다.",
    tags: ["유고시", "한국시", "윤동주전집"]
  },

  // (3) 에세이(수필) (10권)
  {
    id: "rec-lit-essay-1",
    title: "운다고 달라지는 일은 아무것도 없겠지만",
    author: "박준",
    mainCategory: "literature",
    category: "에세이(수필)",
    description: "시인 박준이 일상의 소소한 상실과 아픔, 추억과 사람에 대한 연민을 깊고 조용한 한 마디로 다정하게 녹여낸 산문 에세이.",
    tags: ["산문집", "위로", "시인의눈"]
  },
  {
    id: "rec-lit-essay-2",
    title: "보통의 존재",
    author: "이석원",
    mainCategory: "literature",
    category: "에세이(수필)",
    description: "누구나 평범한 보통의 존재일 뿐이라는 깊은 성찰을 솔직하고 담담한 필체로 기록하여 현대인들에게 깊은 위로와 공감을 이끌어낸 에세이입니다.",
    tags: ["일상감성", "솔직담백", "공감"]
  },
  {
    id: "rec-lit-essay-3",
    title: "태도에 관하여",
    author: "임경선",
    mainCategory: "literature",
    category: "에세이(수필)",
    description: "자발성, 정직함 등 인간관계와 일, 사랑을 마주하며 유지해야 할 주체적인 태도의 중요성을 힘있고 담백하게 설파하는 에세이.",
    tags: ["인생태도", "담백한글", "마인드셋"]
  },
  {
    id: "rec-lit-essay-4",
    title: "죽고 싶지만 떡볶이는 먹고 싶어",
    author: "백세희",
    mainCategory: "literature",
    category: "에세이(수필)",
    description: "가벼운 우울증에 지친 저자가 정신과 의사와의 상담 내용을 가감 없이 기록하여 현대인들에게 나를 마주할 용기와 공감을 전해 줍니다.",
    tags: ["우울증치유", "마음처방", "베스트셀러"]
  },
  {
    id: "rec-lit-essay-5",
    title: "한 글자",
    author: "정철",
    mainCategory: "literature",
    category: "에세이(수필)",
    description: "꿈, 땀, 힘, 틈 등 평범한 한 글자의 단어들을 크리에이티브한 시선과 인생 통찰로 새롭게 바라보게 하는 촌철살인의 짧은 에세이 모음.",
    tags: ["인사이트", "기발함", "카피라이팅"]
  },
  {
    id: "rec-lit-essay-6",
    title: "나로서 서는 법",
    author: "김수현",
    mainCategory: "literature",
    category: "에세이(수필)",
    description: "타인의 평판이나 세상의 기준에 맞춰 살지 않고 나의 온전한 존재 자체를 긍정하며 나로서 온전히 존립하기 위한 따뜻한 위로와 일러스트 에세이.",
    tags: ["자아존중", "자존감에세이", "위로"]
  },
  {
    id: "rec-lit-essay-7",
    title: "모든 순간이 꽃봉오리인 것을",
    author: "정채봉",
    mainCategory: "literature",
    category: "에세이(수필)",
    description: "동화작가 정채봉이 말하는 어린아이와 같은 맑은 영혼의 회복. 자연과 주변 이웃을 다뜻한 마음으로 안아주는 치유의 이야기들.",
    tags: ["동화작가", "순수함", "치유"]
  },
  {
    id: "rec-lit-essay-8",
    title: "보노보노처럼 살다니 다행이야",
    author: "김신회",
    mainCategory: "literature",
    category: "에세이(수필)",
    description: "느리고 서툴지만 자신만의 속도로 살아가는 보노보노와 친구들의 에피소드를 통해, 조금 서툴러도 괜찮다는 안도감과 지혜를 줍니다.",
    tags: ["보노보노", "어른용위로", "담담함"]
  },
  {
    id: "rec-lit-essay-9",
    title: "언어의 온도",
    author: "이기주",
    mainCategory: "literature",
    category: "에세이(수필)",
    description: "우리가 무심코 뱉는 말과 글의 온도를 조명하여, 따뜻한 위로와 성찰을 주는 아날로그적 온기가 가득한 수필 모음집입니다.",
    tags: ["말과말씨", "아날로그감성", "따뜻함"]
  },
  {
    id: "rec-lit-essay-10",
    title: "무소유",
    author: "법정",
    mainCategory: "literature",
    category: "에세이(수필)",
    description: "법정 스님이 전하는 비움의 철학. 물건뿐 아니라 마음의 집착과 소유욕을 버릴 때 찾아오는 진정한 자유와 내면의 평화를 담은 수필집.",
    tags: ["비움의지혜", "법정스님", "인생공부"]
  },

  // ==================== 비문학 (60권) ====================
  // (1) 인문/사회/역사 (10권)
  {
    id: "rec-nf-humanities-1",
    title: "사피엔스",
    author: "유발 하라리",
    mainCategory: "nonfiction",
    category: "인문/사회/역사",
    description: "아프리카 변방의 보잘것없는 유인원 사피엔스가 수많은 상상의 질서(돈, 제국, 종교)를 창조해 지구를 정복한 거시 인류 진화의 역사서.",
    tags: ["인문학", "인류학", "하라리"]
  },
  {
    id: "rec-nf-humanities-2",
    title: "정의란 무엇인가",
    author: "마이클 샌델",
    mainCategory: "nonfiction",
    category: "인문/사회/역사",
    description: "공동체 윤리와 도덕적 딜레마를 다양한 사상적 관점(공리주의, 자유주의 등)을 통해 치열하게 논증하고 토론해 보는 대중 철학서.",
    tags: ["정의론", "정치철학", "딜레마토론"]
  },
  {
    id: "rec-nf-humanities-3",
    title: "총, 균, 쇠",
    author: "재레드 다이아몬드",
    mainCategory: "nonfiction",
    category: "인문/사회/역사",
    description: "민족 간 번영의 격차가 생겨난 요인을 환경적 지리적 여건 차이로 파악하고 무기(총), 병원균(균), 금속(쇠)으로 그 궤적을 추적합니다.",
    tags: ["인류문명", "환경결정론", "퓰리처상"]
  },
  {
    id: "rec-nf-humanities-4",
    title: "지적 대화를 위한 넓고 얕은 지식 1",
    author: "채사장",
    mainCategory: "nonfiction",
    category: "인문/사회/역사",
    description: "역사, 경제, 정치, 사회, 윤리 등 현실을 구성하는 대주제들을 관통하는 이분법적 축을 제시하여 세상의 구조를 명확히 이해시키는 교양서.",
    tags: ["교양인문", "지식뼈대", "베스트셀러"]
  },
  {
    id: "rec-nf-humanities-5",
    title: "역사의 역사",
    author: "유시민",
    mainCategory: "nonfiction",
    category: "인문/사회/역사",
    description: "사마천, 마르크스 등 역사적 역사가들이 남긴 고전들을 통해 역사를 쓴다는 행위의 본질과 역사관의 흐름을 해부한 독서 에세이.",
    tags: ["사학사", "유시민", "독서기행"]
  },
  {
    id: "rec-nf-humanities-6",
    title: "소크라테스 익스프레스",
    author: "에릭 와이너",
    mainCategory: "nonfiction",
    category: "인문/사회/역사",
    description: "니체, 아우렐리우스 등 14명의 위대한 철학자들의 통찰을 여행이라는 서사 속에 위트 있게 녹여내어 현대인의 복잡한 삶에 해답을 줍니다.",
    tags: ["철학여행", "일러스트교양", "인생지혜"]
  },
  {
    id: "rec-nf-humanities-7",
    title: "역사란 무엇인가",
    author: "E. H. 카",
    mainCategory: "nonfiction",
    category: "인문/사회/역사",
    description: "역사적 사실과 역사가 사이의 끊임없는 상호작용 및 현재와 과거 사이의 끈질긴 대화라는 관점으로 사관의 본질을 정립한 명저.",
    tags: ["역사철학", "사관개념", "고전교양"]
  },
  {
    id: "rec-nf-humanities-8",
    title: "목민심서",
    author: "정약용",
    mainCategory: "nonfiction",
    category: "인문/사회/역사",
    description: "지방 목민관(관리)들이 지녀야 할 도덕적 품행과 백성을 사랑하는 공직자로서의 자세, 부패 척결 요령 등을 총망라한 실학 고전.",
    tags: ["실학", "공직자윤리", "정약용"]
  },
  {
    id: "rec-nf-humanities-9",
    title: "명리",
    author: "강헌",
    mainCategory: "nonfiction",
    category: "인문/사회/역사",
    description: "미신으로 치부되던 명리학을 나를 이해하고 우주와 인간의 질서를 통찰하는 합리적인 성격 분석 인문 텍스트로 풀어냈습니다.",
    tags: ["명리학", "나의이해", "인문교양"]
  },
  {
    id: "rec-nf-humanities-10",
    title: "국가란 무엇인가",
    author: "유시민",
    mainCategory: "nonfiction",
    category: "인문/사회/역사",
    description: "홉스, 로크, 마르크스 등의 사상을 검토하며 훌륭한 국가란 무엇인지, 시민은 어떻게 공적인 정의를 실현할 것인지 탐독합니다.",
    tags: ["국가론", "정치학", "시민윤리"]
  },

  // (2) 경제/경영 (10권)
  {
    id: "rec-nf-econ-1",
    title: "부의 시나리오",
    author: "오건영",
    mainCategory: "nonfiction",
    category: "경제/경영",
    description: "금리와 환율, 국제 유가 등 다가가기 힘든 거시경제 파도를 쉬운 비유와 4가지 시나리오로 해설하여 흔들리지 않는 재테크 기초를 잡아줍니다.",
    tags: ["재테크", "금리환율", "거시경제"]
  },
  {
    id: "rec-nf-econ-2",
    title: "부자 아빠 가난한 아빠",
    author: "로버트 기요사키",
    mainCategory: "nonfiction",
    category: "경제/경영",
    description: "돈을 위해 일하지 말고 돈이 나를 위해 일하도록 시스템을 구축하라는 금융 지식의 혁신적 바이블. 부채와 자산의 차이를 알려 줍니다.",
    tags: ["금융IQ", "부자마인드", "자본투자"]
  },
  {
    id: "rec-nf-econ-3",
    title: "돈의 속성",
    author: "김승호",
    mainCategory: "nonfiction",
    category: "경제/경영",
    description: "맨손에서 시작해 글로벌 기업을 일군 자산가가 전하는 부의 철학. 돈을 독립된 인격체로 존중하고 자본을 어떻게 다룰지 인생 규칙을 전수합니다.",
    tags: ["돈의철학", "자산가조언", "경영"]
  },
  {
    id: "rec-nf-econ-4",
    title: "원씽 (The One Thing)",
    author: "게리 켈러",
    mainCategory: "nonfiction",
    category: "경제/경영",
    description: "멀티태스킹의 함정에서 벗어나 인생과 비즈니스의 성공을 보장하는 오직 하나의 핵심 과제(One Thing)에 극단적으로 집중하는 생산성 방법론.",
    tags: ["생산성", "집중", "시간관리"]
  },
  {
    id: "rec-nf-econ-5",
    title: "자본론 (쉽게 읽는 판)",
    author: "칼 마르크스",
    mainCategory: "nonfiction",
    category: "경제/경영",
    description: "마르크스 경제학의 대작 자본론의 주요 개념을 자본가와 노동자의 역학구도를 들어 쉽게 풀어낸 자본주의 모순 비판서.",
    tags: ["자본주의비판", "노동가치", "칼마르크스"]
  },
  {
    id: "rec-nf-econ-6",
    title: "넥스트 디케이드",
    author: "조지 프리드먼",
    mainCategory: "nonfiction",
    category: "경제/경영",
    description: "세계적 지정학 예측가 프리드먼이 조망한 향후 10년의 지구 정치 및 무역 동맹 시나리오와 국가 간 패권 변화의 향방을 그립니다.",
    tags: ["미래예측", "국제정치", "지정학"]
  },
  {
    id: "rec-nf-econ-7",
    title: "트렌드 코리아 2026",
    author: "김난도",
    mainCategory: "nonfiction",
    category: "경제/경영",
    description: "대한민국 소비시장의 미세한 흐름과 신조어, 라이프스타일의 분화를 선제적으로 요약하고 비즈니스 생존 키워드를 제시합니다.",
    tags: ["소비트렌드", "대한민국시장", "마케팅"]
  },
  {
    id: "rec-nf-econ-8",
    title: "행동경제학",
    author: "리처드 탈러",
    mainCategory: "nonfiction",
    category: "경제/경영",
    description: "인간은 결코 합리적으로만 소비하지 않는다는 점에 착안해 편견과 심리적 요인이 시장 거래에 미치는 파장을 파헤쳐 행동적 넛지 모델을 설명합니다.",
    tags: ["심리경제학", "넛지이론", "노벨상"]
  },
  {
    id: "rec-nf-econ-9",
    title: "주식투자 무작정 따라하기",
    author: "윤재수",
    mainCategory: "nonfiction",
    category: "경제/경영",
    description: "주식 초보를 위한 투자의 정석. 기본적 가치 분석과 재무제표 읽기, 봉 차트 분석 등을 직관적이고 친절하게 담아낸 입문 바이블.",
    tags: ["주식투자", "차트분석", "재무제표"]
  },
  {
    id: "rec-nf-econ-10",
    title: "돈의 역사",
    author: "홍춘욱",
    mainCategory: "nonfiction",
    category: "경제/경영",
    description: "인류 문명사와 국가의 운명을 결정지었던 거대 전쟁, 조세 개혁 등 이면에 깔려 있던 화폐의 힘과 금융 역사를 풍성하게 해설한 대중 역사경제서.",
    tags: ["세계사금융", "화폐역사", "경제사교양"]
  },

  // (3) 자기계발 (10권)
  {
    id: "rec-nf-self-1",
    title: "아주 작은 습관의 힘",
    author: "제임스 습관",
    title: "아주 작은 습관의 힘",
    author: "제임스 클리어",
    mainCategory: "nonfiction",
    category: "자기계발",
    description: "매일 1%씩 성장하여 거대한 복리 변화를 유도하는 4단계 습관 구조화 법칙. 나쁜 습관을 버리고 좋은 시스템을 만드는 행동 규칙을 줍니다.",
    tags: ["습관형성", "자기경영", "의지력"]
  },
  {
    id: "rec-nf-self-2",
    title: "미움받을 용기",
    author: "기시미 이치로",
    mainCategory: "nonfiction",
    category: "자기계발",
    description: "아들러 개인심리학을 기반으로, 인간의 고통은 인간관계에서 비롯된다는 철학과 타인의 시선을 끊어내고 나답게 살 용기를 건넵니다.",
    tags: ["아들러심리", "용기", "인간관계"]
  },
  {
    id: "rec-nf-self-3",
    title: "자존감 수업",
    author: "윤홍균",
    mainCategory: "nonfiction",
    category: "자기계발",
    description: "자존감 전문가가 내리는 정서적 진단과 자존감을 세우기 위한 셀프 행동 솔루션. 매일 자존감을 훈련하는 실천 팁을 제공합니다.",
    tags: ["정서자가진단", "자존감수업", "마음근육"]
  },
  {
    id: "rec-nf-self-4",
    title: "그릿 (Grit)",
    author: "앤절라 더크워스",
    mainCategory: "nonfiction",
    category: "자기계발",
    description: "성공을 좌우하는 것은 천재적 지능이나 재능이 아닌 열정과 집념(Grit)이라는 점을 현장 조사와 심리학 실험으로 입증한 명작.",
    tags: ["집념끈기", "열정", "성공동기"]
  },
  {
    id: "rec-nf-self-5",
    title: "데일 카네기 인간관계론",
    author: "데일 카네기",
    mainCategory: "nonfiction",
    category: "자기계발",
    description: "사회생활 처세와 타인의 마음에 호감을 얻고 비즈니스를 원활하게 성사시키는 대인관계 기본 원칙들을 풍성한 역사 사례로 전수합니다.",
    tags: ["카네기처세", "호감얻기", "대인소통"]
  },
  {
    id: "rec-nf-self-6",
    title: "몰입",
    author: "황농문",
    mainCategory: "nonfiction",
    category: "자기계발",
    description: "뇌를 최대로 사용하는 생각의 극대화 솔루션. 하루 종일 한 가지 문제에만 긍정적으로 깊이 집중하여 한계를 깨부수는 몰입 훈련 프로세스.",
    tags: ["몰입훈련", "창의성", "집중생각"]
  },
  {
    id: "rec-nf-self-7",
    title: "회복탄력성",
    author: "김주환",
    mainCategory: "nonfiction",
    category: "자기계발",
    description: "시련과 실패의 낙차를 오히려 도약의 원동력으로 승화시키는 회복 탄력성. 나를 돌보고 관계 능력을 다지는 긍정 심리 피트니스.",
    tags: ["실패도약", "정신근력", "회복력"]
  },
  {
    id: "rec-nf-self-8",
    title: "생각에 관한 생각",
    author: "대니얼 카너먼",
    mainCategory: "nonfiction",
    category: "자기계발",
    description: "노벨상 수상 심리학자가 설계한 이성적 판단 맵. 빠르고 직관적인 시스템 1과 느리고 논리적인 시스템 2의 왜곡과 편향을 해부합니다.",
    tags: ["편향오류", "판단결정", "대니얼카너먼"]
  },
  {
    id: "rec-nf-self-9",
    title: "타이탄의 도구들",
    author: "팀 페리스",
    mainCategory: "nonfiction",
    category: "자기계발",
    description: "세계 최고 반열에 오른 거인(타이탄)들의 남다른 아침 루틴, 습관, 생각법을 현장 밀착 취재를 통해 실용적으로 모은 자기계발 레시피.",
    tags: ["거인루틴", "실천가이드", "성공노하우"]
  },
  {
    id: "rec-nf-self-10",
    title: "시크릿 (The Secret)",
    author: "론다 번",
    mainCategory: "nonfiction",
    category: "자기계발",
    description: "끌어당김의 법칙. 간절히 원하고 상상하면 우주의 에너지가 이를 실현해 준다는 시크릿 법칙과 긍정적 자기 시각화의 힘을 논합니다.",
    tags: ["끌어당김", "시각화", "마음의힘"]
  },

  // (4) 과학/IT (10권)
  {
    id: "rec-nf-science-1",
    title: "코스모스",
    author: "칼 세이건",
    mainCategory: "nonfiction",
    category: "과학/IT",
    description: "우주의 태초 비밀과 인류 역사, 과학의 발전을 인문학적 감성으로 하나 되게 엮은 우주 대서사 과학 책.",
    tags: ["우주탐험", "칼세이건", "교양과학"]
  },
  {
    id: "rec-nf-science-2",
    title: "이기적 유전자",
    author: "리처드 도킨스",
    mainCategory: "nonfiction",
    category: "과학/IT",
    description: "인간은 유전자의 생존과 보존을 위해 프로그래밍된 생물학적 컴퓨터에 불과하다는 다윈주의 진화설을 새롭게 선언한 대작.",
    tags: ["유전자", "다윈진화", "도킨스"]
  },
  {
    id: "rec-nf-science-3",
    title: "클린 코드",
    author: "로버트 C. 마틴",
    mainCategory: "nonfiction",
    category: "과학/IT",
    description: "개발자의 필독 도서. 읽기 쉽고 에러를 줄이며 리팩토링하기 쉬운 가독성 높은 깨끗한 코드를 짜기 위한 개발 장인 정신의 규칙서.",
    tags: ["클린코드", "개발자필독", "소프트웨어"]
  },
  {
    id: "rec-nf-science-4",
    title: "생성형 AI 시대의 프로그래밍",
    author: "오정근",
    mainCategory: "nonfiction",
    category: "과학/IT",
    description: "ChatGPT 등 거대 생성형 AI 모델들을 코딩 업무와 소프트웨어 아키텍처 설계에 효과적으로 융합시키는 실무적인 AI 협업 팁.",
    tags: ["생성형AI", "코딩협업", "IT트렌드"]
  },
  {
    id: "rec-nf-science-5",
    title: "수학의 쓸모",
    author: "닉 폴슨",
    mainCategory: "nonfiction",
    category: "과학/IT",
    description: "넷플릭스 알고리즘, 자율주행차, AI 예측 뒤에 숨은 기본 수학 원리들을 소설처럼 풀어내 수학의 강력한 실용성을 안내합니다.",
    tags: ["수학알고리즘", "인공지능수학", "실용교양"]
  },
  {
    id: "rec-nf-science-6",
    title: "위험한 과학책",
    author: "랜들 먼로",
    mainCategory: "nonfiction",
    category: "과학/IT",
    description: "전직 NASA 웹툰 작가 랜들 먼로가 황당하고 기상천외한 질문들(예: 광속 야구공)을 과학 이론과 계산을 동원해 엄숙하게 대답해 주는 코믹 과학.",
    tags: ["기발한질문", "NASA웹툰", "재미있는과학"]
  },
  {
    id: "rec-nf-science-7",
    title: "컴퓨터 구조와 원리",
    author: "우종정",
    mainCategory: "nonfiction",
    category: "과학/IT",
    description: "CPU, 메모리, 메인보드가 하드웨어에서 데이터를 어떻게 이진수로 연산하고 처리하는지 하드웨어의 저레벨 동작 원리를 그림으로 알려주는 전공 교양서.",
    tags: ["하드웨어구조", "이진수연산", "컴퓨터기초"]
  },
  {
    id: "rec-nf-science-8",
    title: "인공지능의 시대",
    author: "헨리 키신저",
    mainCategory: "nonfiction",
    category: "과학/IT",
    description: "세계적 석학들이 AI의 폭발적 성장이 가져올 안보 대변혁, 외교 정세 파장, 인간 이성과 정체성에 대한 철학적 성찰을 꼼꼼히 탐독한 예견서.",
    tags: ["AI윤리", "안보정치", "인공지능미래"]
  },
  {
    id: "rec-nf-science-9",
    title: "침묵의 봄",
    author: "레이첼 카슨",
    mainCategory: "nonfiction",
    category: "과학/IT",
    description: "환경 운동의 시발점. 무분별한 DDT 화학 살충제 남용이 어떻게 조류 생태계를 파괴하고 침묵 어린 봄을 초래했는지 일깨워준 고전 과학 서적.",
    tags: ["살충제남용", "환경보호", "레이첼카슨"]
  },
  {
    id: "rec-nf-science-10",
    title: "모든 사람을 위한 빅뱅 우주론",
    author: "이강환",
    mainCategory: "nonfiction",
    category: "과학/IT",
    description: "우주가 하나의 점으로부터 폭발해 팽창하게 된 빅뱅 우주론의 역사와 허블의 법칙, 우주 배경 복사 등 핵심 이론을 쉽고 일목요연하게 훑어 줍니다.",
    tags: ["빅뱅이론", "우주팽창", "천문학개론"]
  },

  // (5) 예술/문화/여행 (10권)
  {
    id: "rec-nf-art-1",
    title: "여행의 이유",
    author: "김영하",
    mainCategory: "nonfiction",
    category: "예술/문화/여행",
    description: "소설가 김영하가 낯선 길 위에서 마주친 생각들. 왜 우리는 안락한 집을 떠나 고통과 뜻밖의 모험이 도사리는 여행을 가는지 성찰하는 에세이.",
    tags: ["여행성찰", "김영하", "인문산문"]
  },
  {
    id: "rec-nf-art-2",
    title: "방구석 미술관",
    author: "조원재",
    mainCategory: "nonfiction",
    category: "예술/문화/여행",
    description: "반 고흐, 피카소 등 교과서 속 거장들의 사생활, 연애사 등 껍데기를 벗긴 비밀 에피소드를 유쾌하고 발랄하게 풀어 예술과 친해지게 만드는 미술 입문서.",
    tags: ["미술입문", "반고흐피카소", "재밌는미술"]
  },
  {
    id: "rec-nf-art-3",
    title: "나의 문화유산답사기 1",
    author: "유홍준",
    mainCategory: "nonfiction",
    category: "예술/문화/여행",
    description: "남도 답사 일번지부터 해남까지, 우리 땅 곳곳의 사찰과 석탑, 문화유산에 얽힌 역사와 미적 감상법을 '아는 만큼 보인다'는 격조 높은 문장으로 엮었습니다.",
    tags: ["문화재답사", "유홍준", "국토문화"]
  },
  {
    id: "rec-nf-art-4",
    title: "끌림",
    author: "이병률",
    mainCategory: "nonfiction",
    category: "예술/문화/여행",
    description: "시인 이병률이 수년간 전 세계 80여 개국을 떠돌며 찍은 필름 사진과 감각적이고 다정한 언어로 작성한 방랑 에세이 고전.",
    tags: ["여행사진", "감성여행", "시인에세이"]
  },
  {
    id: "rec-nf-art-5",
    title: "바람이 분다 당신이 좋다",
    author: "이병률",
    mainCategory: "nonfiction",
    category: "예술/문화/여행",
    description: "끌림에 이은 이병률의 두 번째 여행 에세이. 사람 냄새 나는 따뜻한 여행 에피소드와 쓸쓸하지만 아름다운 단상들이 스며들어 있습니다.",
    tags: ["바람감성", "만남헤어짐", "사랑에세이"]
  },
  {
    id: "rec-nf-art-6",
    title: "클래식 클라우드: 셰익스피어",
    author: "황광수",
    mainCategory: "nonfiction",
    category: "예술/문화/여행",
    description: "영국 스트랫퍼드어폰에이번부터 런던 극장가까지, 셰익스피어의 일생과 창작 흔적을 따라 영국의 풍광을 인문학적 답사로 탐험합니다.",
    tags: ["답사기행", "셰익스피어흔적", "인문여행"]
  },
  {
    id: "rec-nf-art-7",
    title: "서양미술사",
    author: "에른스트 곰브리치",
    mainCategory: "nonfiction",
    category: "예술/문화/여행",
    description: "미술 전공자들의 영원한 교과서. 원시 시대 동굴 벽화부터 모던 현대 미술에 이르기까지 미술의 역사를 가장 정통하고 방대하게 묘사한 책.",
    tags: ["서양미술", "곰브리치", "미술사바이블"]
  },
  {
    id: "rec-nf-art-8",
    title: "음악의 역사",
    author: "신동원",
    mainCategory: "nonfiction",
    category: "예술/문화/여행",
    description: "중세 그레고리오 성가부터 바흐, 베토벤의 고전을 지나 현대 대중 재즈와 팝음악에 이르기까지 소리의 인류 문화 발전사를 안내합니다.",
    tags: ["클래식재즈", "음악사", "소리의문화"]
  },
  {
    id: "rec-nf-art-9",
    title: "시네마 클래식",
    author: "이대현",
    mainCategory: "nonfiction",
    category: "예술/문화/여행",
    description: "위대한 영화 속에 수록된 클래식 음악 명곡들을 해부해 영화의 서사와 사운드트랙의 절묘한 매칭이 어떻게 영화적 몰입을 낳았는지 조명합니다.",
    tags: ["영화음악", "사운드트랙", "클래식선율"]
  },
  {
    id: "rec-nf-art-10",
    title: "이지 유럽 (Easy Europe)",
    author: "고재열",
    mainCategory: "nonfiction",
    category: "예술/문화/여행",
    description: "유럽 배낭여행자들의 필독 가이드북. 효율적인 교통 패스 끊기부터 꼭 가봐야 할 명소 코스, 가성비 호텔과 맛집 정보를 총망라합니다.",
    tags: ["유럽배낭여행", "가이드북", "루트일정"]
  },

  // (6) 가정/생활/건강 (10권)
  {
    id: "rec-nf-home-1",
    title: "백종원이 추천하는 집밥 메뉴 52",
    author: "백종원",
    mainCategory: "nonfiction",
    category: "가정/생활/건강",
    description: "요리 초보도 만능 양념장과 종이컵 계량만으로 백종원표 한국 집밥 요리를 맛있고 빠르게 완성할 수 있는 황금 레시피 북.",
    tags: ["백종원집밥", "만능양념장", "요리책"]
  },
  {
    id: "rec-nf-home-2",
    title: "삐뽀삐뽀 119 소아과",
    author: "하정훈",
    mainCategory: "nonfiction",
    category: "가정/생활/건강",
    description: "초보 부모들의 필수 육아 가정의학 바이블. 아기가 열이 나거나 기침할 때 즉시 취해야 할 대처법과 소아 발달 수칙을 세심하게 담았습니다.",
    tags: ["소아과가이드", "육아비상", "하정훈"]
  },
  {
    id: "rec-nf-home-3",
    title: "스탠포드식 최고의 식사법",
    author: "야마다 요시노리",
    mainCategory: "nonfiction",
    category: "가정/생활/건강",
    description: "스탠포드 대학 스포츠 의학 센터가 입증한 신체 면역력과 집중력을 최대로 끌어올리는 건강한 식재료 조합과 섭취 시간대 건강 지침.",
    tags: ["스포츠의학", "건강식단", "피로회복"]
  },
  {
    id: "rec-nf-home-4",
    title: "당신은 뇌를 고칠 수 있다",
    author: "톰 오브라이언",
    mainCategory: "nonfiction",
    category: "가정/생활/건강",
    description: "브레인 포그(머리가 멍한 증상), 만성 피로의 주범인 글루텐과 장 내 독소의 관계를 밝혀 뇌 기능을 최적화하는 식이요법을 소개합니다.",
    tags: ["글루텐프리", "뇌건강", "디톡스식단"]
  },
  {
    id: "rec-nf-home-5",
    title: "수면의 과학",
    author: "매튜 워커",
    mainCategory: "nonfiction",
    category: "가정/생활/건강",
    description: "잠이 부족할 때 일어나는 인지 저하, 면역 붕괴를 경고하며, 인생의 3분의 1을 채우는 양질의 수면을 확보하는 수면 위생 가이드를 전합니다.",
    tags: ["불면증치료", "수면위생", "뇌휴식"]
  },
  {
    id: "rec-nf-home-6",
    title: "아이의 정서발달",
    author: "오은영",
    mainCategory: "nonfiction",
    category: "가정/생활/건강",
    description: "국민 육아 멘토 오은영 박사가 전하는 자녀 훈육의 정석. 아이의 불안을 잠재우고 내면이 단단한 아이로 성장시키는 정서 소통법.",
    tags: ["자녀훈육", "오은영박사", "육아상담"]
  },
  {
    id: "rec-nf-home-7",
    title: "식사가 잘못됐습니다",
    author: "마키타 젠지",
    mainCategory: "nonfiction",
    category: "가정/생활/건강",
    description: "비만과 각종 현대 성인병의 핵심 요인인 당질(탄수화물) 과잉 섭취를 지적하고, 혈당치를 평온하게 유지하는 과학적인 식생활 가이드를 제공합니다.",
    tags: ["저탄수화물", "혈당관리", "의학건강"]
  },
  {
    id: "rec-nf-home-8",
    title: "부모 공부",
    author: "고영성",
    mainCategory: "nonfiction",
    category: "가정/생활/건강",
    description: "아동심리학, 뇌과학 등 최신 연구 통계를 토대로 부모가 되어가는 데 반드시 배워야 할 대화법, 교육관, 가정 내 심리적 안전지대 구축 요령을 공부합니다.",
    tags: ["부모역할", "육아공부", "가족심리"]
  },
  {
    id: "rec-nf-home-9",
    title: "다이어트 불변의 법칙",
    author: "하비 다이아몬드",
    mainCategory: "nonfiction",
    category: "가정/생활/건강",
    description: "열량 계산을 멈추고 생명 유기체의 주기(배출, 섭취, 동화)에 맞춰 수분이 풍부한 살아있는 과일과 채소를 섭취해 건강하게 살을 빼는 자연 치유 요법.",
    tags: ["자연식물식", "해독주기", "건강감량"]
  },
  {
    id: "rec-nf-home-10",
    title: "내 몸 사용설명서",
    author: "마이클 로이젠",
    mainCategory: "nonfiction",
    category: "가정/생활/건강",
    description: "우리 몸의 심장, 혈관, 뼈 등 각 장기가 어떻게 일하고 노화하는지 해학적인 비유와 흥미진진한 자가 진단으로 쉽게 풀어낸 평생 건강 설명서.",
    tags: ["신체노화방지", "가정의학", "건강습관"]
  }
];

const initialBooks = [
  {
    id: "book-1",
    title: "당신 인생의 이야기",
    author: "테드 창",
    status: "completed",
    startDate: "2026-05-02",
    rating: 5,
    summary: "외계어인 '헵타포드 B'를 통해 시간의 비선형적인 흐름을 이해하게 되는 설정이 신선했습니다. 미래를 알면서도 현재의 비극과 슬픔을 기꺼이 받아들이는 주인공의 결단은 잔잔한 여운을 남깁니다. SF이면서도 대단히 문학적이고 철학적인 최고의 단편집입니다.",
    thoughts: "외계어인 '헵타포드 B'를 통해 시간의 비선형적인 흐름을 이해하게 되는 설정이 신선했습니다. 미래를 알면서도 현재의 비극과 슬픔을 기꺼이 받아들이는 주인공의 결단은 잔잔한 여운을 남깁니다.",
    createdAt: "2026-05-02T10:00:00.000Z"
  },
  {
    id: "book-2",
    title: "클린 코드",
    author: "로버트 C. 마틴",
    status: "reading",
    startDate: "2026-06-01",
    rating: 4,
    summary: "나쁜 코드가 개발과 비즈니스에 미치는 악영향을 경고하고, 깨끗하고 가독성 높으며 유지보수하기 쉬운 코드를 작성하기 위한 구체적인 원칙, 패턴, 실무 지침을 상세히 제공합니다.",
    thoughts: "개발자라면 반드시 읽어야 할 고전. 나쁜 코드는 늪과 같아서 점차 개발 속도를 지연시킨다는 말에 크게 공감했습니다. 의미 있는 이름 짓기와 단일 책임 원칙을 적용해 과제용 소스코드를 리팩토링해보려고 노력 중입니다.",
    createdAt: "2026-06-01T15:30:00.000Z"
  },
  {
    id: "book-3",
    title: "오버씽킹",
    author: "벳시 홈버그",
    status: "unread",
    startDate: "2026-06-10",
    rating: 0,
    summary: "꼬리에 꼬리를 무는 생각의 굴레에서 벗어나 마인드셋을 전환하는 실천적 심리학 가이드. 뇌의 디폴트 모드 네트워크(DMN) 과활성화를 다스리고, 자기비판과 쓸데없는 걱정을 멈추고 현재에 집중하며 평온함을 찾는 과학적인 방법을 제시합니다.",
    thoughts: "",
    createdAt: "2026-06-10T09:00:00.000Z"
  },
  {
    id: "book-4",
    title: "사피엔스",
    author: "유발 하라리",
    status: "completed",
    startDate: "2026-04-10",
    rating: 5,
    summary: "아프리카 변방의 보잘것없는 유인원 사피엔스가 수많은 상상의 질서(돈, 제국, 종교)를 창조해 지구를 정복한 거시 인류 진화의 역사서.",
    thoughts: "인간이 지구상에서 가장 강력해진 계기가 '가상의 질서(돈, 국가, 종교)'를 믿는 상상력에 기반한 대규모 협력 덕분이라는 통찰이 매우 명쾌했습니다. 인간 사회의 본질을 거시적인 관점에서 돌아볼 수 있는 흥미진진한 도서입니다.",
    createdAt: "2026-04-10T12:00:00.000Z"
  },
  {
    id: "book-5",
    title: "아주 작은 습관의 힘",
    author: "제임스 클리어",
    status: "completed",
    startDate: "2026-03-15",
    rating: 4,
    summary: "매일 1%씩 성장하여 인생의 극적인 변화를 만드는 4단계 습관 형성 법칙. 저자의 생생한 경험과 최신 뇌과학, 심리학 연구를 토대로 나쁜 습관은 버리고 좋은 습관은 자연스럽게 삶의 일부로 정착시키는 구체적인 행동 가이드를 제시합니다.",
    thoughts: "매일 1%씩 나아지는 작은 변화가 복리로 쌓여 1년 뒤엔 37배 성장한다는 실증이 인상적이었습니다. 습관을 만들기 위해선 신호, 열망, 반응, 보상의 4단계 원칙을 설계하는 구체적인 실천 로직을 알려주어 바로 행동하게 만듭니다.",
    createdAt: "2026-03-15T08:00:00.000Z"
  }
];

// 2. Global State Management
const state = {
  theme: localStorage.getItem('booklog_theme') || 'dark',
  currentProfile: JSON.parse(localStorage.getItem('booklog_current_profile') || 'null'),
  activeTab: 'dashboard', // 'dashboard' | 'library' | 'recs'
  books: [],
  isBannerVisible: localStorage.getItem('booklog_banner_dismissed') !== 'true',
  
  // Modals state
  isAddEditOpen: false,
  isDetailOpen: false,
  selectedBook: null,
  editingBook: null,
  
  // Rating state in Add/Edit modal
  formRating: 0,
  hoveredRating: 0,
  
  // Filters & Search state
  searchTerm: '',
  statusFilter: 'all',
  sortBy: 'latest',
  
  // Recommendations state
  selectedRecMainCategory: 'all', // 'all' | 'literature' | 'nonfiction'
  selectedRecSubCategory: 'all', // 'all' | sub-category name
};

// 3. Application Core Functions
function initApp() {
  document.documentElement.setAttribute('data-theme', state.theme);
  loadBooksForProfile();
  render();
}

function loadBooksForProfile() {
  if (state.currentProfile) {
    const storageKey = `booklog_books_${state.currentProfile.name}_${state.currentProfile.birthdate}`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        state.books = JSON.parse(saved);
      } catch (e) {
        state.books = [];
      }
    } else {
      state.books = [];
    }
  } else {
    state.books = [];
  }
}

function saveBooks() {
  if (state.currentProfile) {
    const storageKey = `booklog_books_${state.currentProfile.name}_${state.currentProfile.birthdate}`;
    localStorage.setItem(storageKey, JSON.stringify(state.books));
  }
}

function formatBirthdate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  return `${parts[0].substring(2)}.${parts[1]}.${parts[2]}`;
}

function formatDateKorean(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

// 4. Rendering Engine
function render() {
  const root = document.getElementById('app');
  if (!root) return;

  if (!state.currentProfile) {
    root.innerHTML = renderProfileSetup();
    bindProfileSetupEvents();
    return;
  }

  root.innerHTML = `
    <div class="app-container">
      ${renderHeader()}
      <main>
        ${renderOnboardingBanner()}
        ${renderTabContent()}
      </main>
      ${renderFooter()}
      ${renderAddEditModal()}
      ${renderDetailModal()}
    </div>
  `;

  bindMainEvents();
}

// (1) Profile Setup View (Login Gate)
function renderProfileSetup() {
  let existingProfiles = [];
  const saved = localStorage.getItem('booklog_profiles');
  if (saved) {
    try {
      existingProfiles = JSON.parse(saved);
    } catch (e) {}
  }

  let quickLoginHTML = '';
  if (existingProfiles.length > 0) {
    quickLoginHTML = `
      <div style="display: flex; flex-direction: column; gap: 0.5rem; text-align: left; margin-top: 0.5rem;">
        <span class="form-label" style="display: flex; align-items: center; gap: 0.25rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary)"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
          <span>기존 등록된 서재 (클릭 시 바로 입장)</span>
        </span>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; max-height: 150px; overflow-y: auto; padding-right: 0.25rem;">
          ${existingProfiles.map((p, idx) => `
            <button
              type="button"
              data-profile-idx="${idx}"
              class="add-rec-btn quick-login-btn"
              style="justify-content: space-between; padding: 0.65rem 1rem; background: rgba(255,255,255,0.03)"
            >
              <span style="font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--secondary)"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                ${p.name} 
                <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 400;">
                  (${formatBirthdate(p.birthdate)})
                </span>
              </span>
              <span style="font-size: 0.75rem; color: var(--primary)">입장하기 →</span>
            </button>
          `).join('')}
        </div>
        <div style="display: flex; align-items: center; gap: 1rem; margin: 0.75rem 0 0.25rem 0;">
          <div style="flex-grow: 1; height: 1px; background: var(--border-color)"></div>
          <span style="font-size: 0.75rem; color: var(--text-muted)">또는 새로운 서재 만들기</span>
          <div style="flex-grow: 1; height: 1px; background: var(--border-color)"></div>
        </div>
      </div>
    `;
  }

  return `
    <div class="profile-setup-container">
      <div class="glass-card profile-setup-card">
        <div>
          <div class="profile-setup-logo">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary)"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
            <span>BookLog</span>
          </div>
          <h2 style="font-size: 1.4rem; font-weight: 700; color: var(--text-primary)">
            나만의 독서 서재 입장하기
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.85rem; marginTop: 0.35rem; line-height: 1.5">
            개인화된 독서 기록 공간에 로그인하거나 새로운 공간을 생성하세요.<br />
            입력하신 정보는 브라우저(LocalStorage)에 안전하게 로컬 저장됩니다.
          </p>
        </div>

        ${quickLoginHTML}

        <form id="profile-setup-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
          <div class="form-group" style="text-align: left;">
            <label class="form-label" style="display: flex; align-items: center; gap: 0.25rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary)"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>이름 (성함)</span>
            </label>
            <input 
              type="text" 
              id="setup-name"
              class="form-input" 
              placeholder="예: 홍길동"
              required
            />
          </div>

          <div class="form-group" style="text-align: left;">
            <label class="form-label" style="display: flex; align-items: center; gap: 0.25rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--secondary)"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>생년월일</span>
            </label>
            <input 
              type="date" 
              id="setup-birthdate"
              class="form-input" 
              required
            />
          </div>

          <label class="checkbox-group" style="margin-top: 0.25rem;">
            <input 
              type="checkbox" 
              id="setup-include-samples"
              checked
            />
            <span class="checkbox-label">
              <strong>샘플 독서 데이터 로드하기 (권장)</strong><br />
              <span style="font-size: 0.75rem; color: var(--text-muted)">
                대시보드 통계와 차트를 즉시 체험할 수 있도록 5권의 샘플 도서 기록을 미리 넣어줍니다.
              </span>
            </span>
          </label>

          <button type="submit" class="primary-btn" style="justify-content: center; padding: 0.85rem; margin-top: 0.5rem;">
            <span>서재 입장하기</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </form>
      </div>
    </div>
  `;
}

// (2) Header View
function renderHeader() {
  const formattedBirth = formatBirthdate(state.currentProfile.birthdate);
  return `
    <header>
      <div style="display: flex; align-items: center; gap: 1.25rem">
        <div class="logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary)"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
          <span>BookLog</span>
        </div>

        <div class="profile-badge-wrapper" title="현재 로그인된 서재 프로필">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary)"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span class="profile-user-name">${state.currentProfile.name}</span>
          <span class="profile-user-birth">(${formattedBirth})</span>
        </div>
      </div>

      <nav class="nav-links">
        <button class="nav-item ${state.activeTab === 'dashboard' ? 'active' : ''}" data-tab="dashboard">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.25rem"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
          <span>대시보드</span>
        </button>
        
        <button class="nav-item ${state.activeTab === 'library' ? 'active' : ''}" data-tab="library">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.25rem"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
          <span>나의 서재</span>
        </button>
        
        <button class="nav-item ${state.activeTab === 'recs' ? 'active' : ''}" data-tab="recs">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.25rem"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span>추천 도서</span>
        </button>
      </nav>

      <div class="header-actions">
        <button class="theme-toggle" id="theme-toggle-btn" title="테마 전환">
          ${state.theme === 'dark' 
            ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary)"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>` 
            : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--secondary)"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>`
          }
        </button>

        <button class="logout-btn" id="logout-btn" title="로그아웃" style="display: flex; align-items: center; gap: 0.25rem">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          <span>로그아웃</span>
        </button>

        <button class="primary-btn" id="header-add-book-btn">
          <span>새 도서 등록</span>
        </button>
      </div>
    </header>
  `;
}

// (3) Onboarding Banner View
function renderOnboardingBanner() {
  if (!state.isBannerVisible) return '';

  return `
    <div class="glass-card onboarding-banner" id="onboarding-banner">
      <div class="onboarding-header">
        <div class="onboarding-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span>BookLog에 오신 것을 환영합니다!</span>
        </div>
        <button class="close-banner-btn" id="close-banner-btn" aria-label="닫기">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <p style="font-size: 0.95rem; color: var(--text-secondary)">
        북로그는 여러분의 독서 경험을 체계적으로 기록하고 관리하는 최적의 동반자입니다. 아래의 간단한 가이드를 따라 독서 기록을 시작해 보세요.
      </p>
      <div class="onboarding-steps">
        <div class="step-card">
          <div class="step-number">Step 1</div>
          <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.25rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary)"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
            도서 등록
          </div>
          <div class="step-text">우측 상단 '새 도서 등록'을 클릭해 읽고 싶은 책이나 읽는 중인 책을 저장하세요.</div>
        </div>
        <div class="step-card">
          <div class="step-number">Step 2</div>
          <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.25rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--warning)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            줄거리 및 감상
          </div>
          <div class="step-text">도서 상세 보기창에서 줄거리 소개글과 나만의 별점(1~5점), 솔직한 감상평을 남겨 보세요.</div>
        </div>
        <div class="step-card">
          <div class="step-number">Step 3</div>
          <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.25rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--secondary)"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
            독서 분석
          </div>
          <div class="step-text">대시보드 탭의 비주얼 통계와 월별 그래프로 나의 독서 성향을 한눈에 파악하세요.</div>
        </div>
        <div class="step-card">
          <div class="step-number">Step 4</div>
          <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.25rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary)"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            추천도서 추가
          </div>
          <div class="step-text">추천 도서 탭에서 선별된 명저들을 터치 한 번으로 즉시 내 서재에 등록해 보세요.</div>
        </div>
      </div>
    </div>
  `;
}

// (4) Tab Routing View
function renderTabContent() {
  switch (state.activeTab) {
    case 'dashboard':
      return renderDashboard();
    case 'library':
      return renderLibrary();
    case 'recs':
      return renderRecommendations();
    default:
      return '';
  }
}

// (5) Dashboard Tab View
function renderDashboard() {
  const totalBooks = state.books.length;
  const completedBooks = state.books.filter(b => b.status === 'completed').length;
  const readingBooks = state.books.filter(b => b.status === 'reading').length;
  
  const ratedBooks = state.books.filter(b => b.rating > 0);
  const avgRating = ratedBooks.length > 0 
    ? (ratedBooks.reduce((sum, b) => sum + b.rating, 0) / ratedBooks.length).toFixed(1)
    : '0.0';

  // Last 6 months calculation
  const getLast6Months = () => {
    const months = [];
    const d = new Date();
    for (let i = 5; i >= 0; i--) {
      const targetDate = new Date(d.getFullYear(), d.getMonth() - i, 1);
      const year = targetDate.getFullYear();
      const month = String(targetDate.getMonth() + 1).padStart(2, '0');
      months.push({
        label: `${targetDate.getMonth() + 1}월`,
        key: `${year}-${month}`,
        count: 0
      });
    }
    return months;
  };

  const monthlyData = getLast6Months();
  state.books.forEach(book => {
    if (book.startDate) {
      const bookYM = book.startDate.substring(0, 7);
      const matched = monthlyData.find(m => m.key === bookYM);
      if (matched) matched.count += 1;
    }
  });

  // SVG parameters
  const maxCount = Math.max(...monthlyData.map(d => d.count), 4);
  const chartHeight = 160;
  const chartWidth = 500;
  const paddingLeft = 30;
  const paddingRight = 10;
  const paddingTop = 20;
  const paddingBottom = 30;
  const graphWidth = chartWidth - paddingLeft - paddingRight;
  const graphHeight = chartHeight - paddingTop - paddingBottom;
  const barWidth = 35;
  const gap = (graphWidth - barWidth * monthlyData.length) / (monthlyData.length - 1);

  // SVG Chart rendering
  let svgChartHTML = '';
  if (totalBooks === 0) {
    svgChartHTML = `
      <div class="empty-chart-state">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="9" y1="18" x2="9" y2="10"/><line x1="15" y1="18" x2="15" y2="6"/><line x1="21" y1="18" x2="21" y2="14"/><line x1="3" y1="18" x2="3" y2="18"/></svg>
        <p>등록된 도서가 없습니다.</p>
        <button class="primary-btn" id="dash-empty-add-btn" style="padding: 0.5rem 1rem; font-size: 0.85rem; margin-top: 0.5rem;">
          책 등록하기
        </button>
      </div>
    `;
  } else {
    // Generate horizontal gridlines
    let gridlines = '';
    [0, 0.25, 0.5, 0.75, 1].forEach((ratio) => {
      const y = paddingTop + ratio * graphHeight;
      const val = Math.round(maxCount * (1 - ratio));
      gridlines += `
        <g>
          <line x1="${paddingLeft}" y1="${y}" x2="${chartWidth - paddingRight}" y2="${y}" class="svg-grid-line" />
          <text x="${paddingLeft - 8}" y="${y + 4}" text-anchor="end" class="svg-text">${val}</text>
        </g>
      `;
    });

    // Generate bars
    let bars = '';
    monthlyData.forEach((d, index) => {
      const x = paddingLeft + index * (barWidth + gap);
      const barHeight = (d.count / maxCount) * graphHeight;
      const y = chartHeight - paddingBottom - barHeight;
      
      bars += `
        <g class="svg-bar-group" data-idx="${index}">
          <rect
            x="${x}"
            y="${y}"
            width="${barWidth}"
            height="${barHeight > 0 ? barHeight : 2}"
            rx="6"
            ry="6"
            class="svg-bar"
          />
          <text x="${x + barWidth / 2}" y="${chartHeight - 10}" text-anchor="middle" class="svg-text">${d.label}</text>
          ${d.count > 0 ? `<text x="${x + barWidth / 2}" y="${y - 6}" text-anchor="middle" class="svg-text-title">${d.count}권</text>` : ''}
        </g>
      `;
    });

    svgChartHTML = `
      <svg viewBox="0 0 ${chartWidth} ${chartHeight}" class="svg-chart">
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--primary)" />
            <stop offset="100%" stop-color="var(--secondary)" />
          </linearGradient>
          <linearGradient id="barHoverGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="100%" stop-color="#2dd4bf" />
          </linearGradient>
        </defs>
        ${gridlines}
        ${bars}
      </svg>
    `;
  }

  // Recent Books
  const recentBooks = [...state.books]
    .sort((a, b) => new Date(b.createdAt || b.startDate) - new Date(a.createdAt || a.startDate))
    .slice(0, 3);

  let recentBooksHTML = '';
  if (recentBooks.length === 0) {
    recentBooksHTML = `
      <div style="display: flex; flex-grow: 1; align-items: center; justify-content: center; color: var(--text-muted); font-size: 0.9rem;">
        최근 기록이 없습니다.
      </div>
    `;
  } else {
    recentBooksHTML = recentBooks.map(book => {
      let starsHTML = '';
      if (book.rating > 0) {
        starsHTML = `
          <div style="display: flex; gap: 1px;">
            ${[...Array(5)].map((_, i) => `
              <svg width="10" height="10" viewBox="0 0 24 24" fill="${i < book.rating ? 'var(--warning)' : 'transparent'}" stroke="${i < book.rating ? 'var(--warning)' : 'var(--text-muted)'}" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            `).join('')}
          </div>
        `;
      } else {
        starsHTML = `<span style="font-size: 0.7rem; color: var(--text-muted)">평점 없음</span>`;
      }

      return `
        <div class="mini-book-item" data-book-id="${book.id}">
          <div class="mini-book-info">
            <span class="mini-book-title">${book.title}</span>
            <span class="mini-book-author">${book.author}</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem;">
            <span class="badge ${book.status === 'completed' ? 'completed' : book.status === 'reading' ? 'reading' : 'unread'}" style="font-size: 0.7rem; padding: 0.15rem 0.4rem;">
              ${book.status === 'completed' ? '완료' : book.status === 'reading' ? '읽는 중' : '읽기 전'}
            </span>
            ${starsHTML}
          </div>
        </div>
      `;
    }).join('');
  }

  return `
    <div>
      <div class="dashboard-grid">
        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper primary">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z"/></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">다 읽은 책</span>
            <span class="stat-value">${completedBooks} <span style="font-size: 1rem; font-weight: 500; color: var(--text-secondary)">권</span></span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper secondary">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">지금 읽는 중</span>
            <span class="stat-value">${readingBooks} <span style="font-size: 1rem; font-weight: 500; color: var(--text-secondary)">권</span></span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper warning">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--warning)" stroke="var(--warning)" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">평균 별점</span>
            <span class="stat-value">${avgRating} <span style="font-size: 1rem; font-weight: 500; color: var(--text-secondary)">점</span></span>
          </div>
        </div>
      </div>

      <div class="overview-section">
        <div class="glass-card chart-card">
          <div class="card-header">
            <h3 class="card-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary)"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              월별 독서량
            </h3>
            <span style="font-size: 0.8rem; color: var(--text-muted)">최근 6개월 기준 (도서 시작일 기준)</span>
          </div>
          <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
            <div style="position: relative;">
              ${svgChartHTML}
            </div>
          </div>
        </div>

        <div class="glass-card recent-card">
          <div class="card-header">
            <h3 class="card-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--secondary)"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              최근 등록한 도서
            </h3>
            <span style="font-size: 0.8rem; color: var(--text-muted)">최근 3개</span>
          </div>
          <div class="recent-list">
            ${recentBooksHTML}
          </div>
        </div>
      </div>
    </div>
  `;
}

// (6) Library Tab View
function renderLibrary() {
  // Filtering
  const filtered = state.books.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(state.searchTerm.toLowerCase());
    const matchesStatus = state.statusFilter === 'all' || book.status === state.statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (state.sortBy === 'latest') {
      return new Date(b.createdAt || b.startDate) - new Date(a.createdAt || a.startDate);
    }
    if (state.sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    if (state.sortBy === 'rating') {
      return b.rating - a.rating;
    }
    if (state.sortBy === 'startDate') {
      return new Date(b.startDate || 0) - new Date(a.startDate || 0);
    }
    return 0;
  });

  let gridHTML = '';
  if (sorted.length === 0) {
    gridHTML = `
      <div class="glass-card empty-library-state">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" class="empty-library-icon"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        ${state.books.length === 0 ? `
          <h3>서재가 비어 있습니다</h3>
          <p>읽고 계시거나 완료한 도서를 등록하여 독서 기록을 작성해 보세요!</p>
          <button class="primary-btn" id="lib-empty-add-btn" style="margin-top: 0.5rem;">
            첫 도서 등록하기
          </button>
        ` : `
          <h3>검색 조건에 맞는 도서가 없습니다</h3>
          <p>검색어를 다시 확인하거나 독서 상태 필터를 조정해 보세요.</p>
        `}
      </div>
    `;
  } else {
    gridHTML = `
      <div class="books-grid">
        ${sorted.map(book => {
          let starsHTML = '';
          if (book.rating > 0) {
            starsHTML = `
              <div class="stars-rating">
                ${[...Array(5)].map((_, i) => `
                  <svg width="14" height="14" viewBox="0 0 24 24" class="star-icon ${i < book.rating ? 'filled' : ''}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                `).join('')}
              </div>
            `;
          } else {
            starsHTML = `<span style="font-size: 0.75rem; color: var(--text-muted)">평점 없음</span>`;
          }

          const statusText = book.status === 'completed' ? '완료' : book.status === 'reading' ? '읽는 중' : '읽기 전';
          const badgeClass = book.status === 'completed' ? 'completed' : book.status === 'reading' ? 'reading' : 'unread';

          return `
            <div class="glass-card book-card" data-book-id="${book.id}">
              <div class="book-card-header">
                <span class="badge ${badgeClass}">${statusText}</span>
                ${starsHTML}
              </div>
              <h4 class="book-title" title="${book.title}">${book.title}</h4>
              <p class="book-author">${book.author}</p>
              <p class="book-excerpt">${book.summary || book.thoughts || `<span style="font-style: italic; color: var(--text-muted)">작성된 줄거리/감상이 없습니다.</span>`}</p>
              <div class="book-card-footer">
                <span style="display: flex; align-items: center; gap: 0.25rem;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  ${book.startDate || '날짜 미지정'}
                </span>
                <span style="font-size: 0.75rem;">상세 보기</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  return `
    <div>
      <div class="library-actions">
        <div class="search-filter-group">
          <div class="search-input-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input 
              type="text" 
              placeholder="책 제목 또는 저자로 검색..." 
              id="library-search"
              value="${state.searchTerm}"
              class="search-input"
            />
          </div>

          <select id="library-filter" class="filter-select">
            <option value="all" ${state.statusFilter === 'all' ? 'selected' : ''}>모든 독서 상태</option>
            <option value="unread" ${state.statusFilter === 'unread' ? 'selected' : ''}>읽기 전</option>
            <option value="reading" ${state.statusFilter === 'reading' ? 'selected' : ''}>읽는 중</option>
            <option value="completed" ${state.statusFilter === 'completed' ? 'selected' : ''}>읽기 완료</option>
          </select>

          <select id="library-sort" class="filter-select">
            <option value="latest" ${state.sortBy === 'latest' ? 'selected' : ''}>최근 등록순</option>
            <option value="title" ${state.sortBy === 'title' ? 'selected' : ''}>제목 이름순</option>
            <option value="rating" ${state.sortBy === 'rating' ? 'selected' : ''}>별점 높은순</option>
            <option value="startDate" ${state.sortBy === 'startDate' ? 'selected' : ''}>시작일 순</option>
          </select>
        </div>

        <button class="primary-btn" id="lib-add-book-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>새 도서 등록</span>
        </button>
      </div>

      ${gridHTML}
    </div>
  `;
}

// (7) Recommendations Tab View
function renderRecommendations() {
  const currentMonthName = new Date().getMonth() + 1;
  const currentMonth = new Date().getMonth();

  // Deterministic 3 monthly pick books
  const idx1 = (currentMonth * 7) % initialRecommendations.length;
  const idx2 = (currentMonth * 11 + 23) % initialRecommendations.length;
  const idx3 = (currentMonth * 13 + 57) % initialRecommendations.length;
  const monthlyPicks = [
    initialRecommendations[idx1],
    initialRecommendations[idx2],
    initialRecommendations[idx3]
  ];

  // Filtering based on two-level categories
  const filtered = initialRecommendations.filter(book => {
    if (state.selectedRecMainCategory !== 'all' && book.mainCategory !== state.selectedRecMainCategory) {
      return false;
    }
    if (state.selectedRecSubCategory !== 'all' && book.category !== state.selectedRecSubCategory) {
      return false;
    }
    return true;
  });

  const subCategories = state.selectedRecMainCategory === 'literature' 
    ? [
        { id: 'all', name: '문학 전체' },
        { id: '소설', name: '소설 (추리, SF 등)' },
        { id: '시/희곡', name: '시/희곡 (시집, 극본)' },
        { id: '에세이(수필)', name: '에세이(수필)' }
      ]
    : state.selectedRecMainCategory === 'nonfiction'
      ? [
          { id: 'all', name: '비문학 전체' },
          { id: '인문/사회/역사', name: '인문/사회/역사' },
          { id: '경제/경영', name: '경제/경영' },
          { id: '자기계발', name: '자기계발' },
          { id: '과학/IT', name: '과학/IT' },
          { id: '예술/문화/여행', name: '예술/문화/여행' },
          { id: '가정/생활/건강', name: '가정/생활/건강' }
        ]
      : [];

  return `
    <div>
      <div class="recs-header">
        <h2>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-right: 0.5rem; vertical-align: middle; color: var(--primary)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          BookLog 선별 추천 도서
        </h2>
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-top: 0.25rem;">
          독서가들이 추천하는 명저 아카이브입니다. 서재에 담아 계획을 세워 보세요.
        </p>
      </div>

      <!-- 이달의 추천 도서 -->
      <div class="glass-card" style="padding: 1.75rem; margin-bottom: 2.5rem; border: 1px solid rgba(14, 165, 233, 0.35); background: linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(20, 184, 166, 0.08) 100%); box-shadow: 0 0 25px rgba(14, 165, 233, 0.1);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.75rem;">
          <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.25rem; font-weight: 700; color: var(--primary);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>🌟 ${currentMonthName}월 이달의 추천 도서</span>
          </h3>
          <span style="font-size: 0.8rem; color: var(--text-secondary); background: rgba(255,255,255,0.05); padding: 0.25rem 0.6rem; border-radius: 20px;">
            📅 매달 자동 롤링 업데이트
          </span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.5;">
          💡 시스템의 현재 월(Month) 시간 정보를 로컬에서 실시간으로 감지하여, 매월 다른 분야의 엄선된 도서 3권이 '이달의 추천 도서'로 자동 롤링 노출됩니다.
        </p>

        <div class="recs-grid" style="gap: 1.25rem;">
          ${monthlyPicks.map(book => {
            const added = isBookInLibrary(book);
            return `
              <div class="glass-card rec-card" style="min-height: 260px; padding: 1.25rem; background: rgba(9, 13, 22, 0.6); border: 1px solid rgba(255, 255, 255, 0.05)">
                <span class="rec-category" style="top: 1rem; right: 1rem; background: var(--primary-glow); color: var(--primary); border-color: rgba(14, 165, 233, 0.3); font-size: 0.7rem;">
                  ${book.category}
                </span>
                <h4 class="rec-title" style="font-size: 1.1rem; margin-top: 0.5rem">${book.title}</h4>
                <p class="rec-author" style="font-size: 0.85rem; margin-bottom: 0.75rem">${book.author}</p>
                <p class="rec-description" style="font-size: 0.8rem; margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; height: 3.6rem;">
                  ${book.description}
                </p>
                <button
                  type="button"
                  data-rec-id="${book.id}"
                  class="add-rec-btn ${added ? 'added' : ''}"
                  style="padding: 0.5rem; font-size: 0.85rem"
                  ${added ? 'disabled' : ''}
                >
                  ${added ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:0.25rem"><polyline points="20 6 9 17 4 12"/></svg> 추가 완료` : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:0.25rem"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> 내 서재 담기`}
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 분야별 도서 탐색 -->
      <div style="margin-bottom: 1rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
        <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--secondary)"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
          <span>체계적인 분야별 도서 탐색 (${initialRecommendations.length}권 아카이브)</span>
        </h3>

        <!-- Level 1: Main Category Selection -->
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
          ${mainCategories.map(mainCat => `
            <button
              type="button"
              class="rec-main-cat-btn"
              data-main-cat="${mainCat.id}"
              style="
                background: ${state.selectedRecMainCategory === mainCat.id ? 'var(--primary)' : 'rgba(255,255,255,0.03)'};
                color: #ffffff;
                border: 1px solid ${state.selectedRecMainCategory === mainCat.id ? 'var(--primary)' : 'var(--border-color)'};
                padding: 0.55rem 1.25rem;
                border-radius: 10px;
                font-size: 0.9rem;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.2s;
                box-shadow: ${state.selectedRecMainCategory === mainCat.id ? '0 4px 12px var(--primary-glow)' : 'none'};
              "
            >
              ${mainCat.name}
            </button>
          `).join('')}
        </div>

        <!-- Level 2: Sub Category Selection -->
        ${state.selectedRecMainCategory !== 'all' ? `
          <div style="background: rgba(0, 0, 0, 0.15); padding: 1rem; border-radius: 12px; border: 1px solid var(--border-color); display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1.5rem; animation: fadeIn 0.2s ease-out;">
            ${subCategories.map(subCat => `
              <button
                type="button"
                class="rec-sub-cat-btn"
                data-sub-cat="${subCat.id}"
                style="
                  background: ${state.selectedRecSubCategory === subCat.id ? 'var(--secondary)' : 'transparent'};
                  color: ${state.selectedRecSubCategory === subCat.id ? '#ffffff' : 'var(--text-secondary)'};
                  border: 1px solid ${state.selectedRecSubCategory === subCat.id ? 'var(--secondary)' : 'transparent'};
                  padding: 0.35rem 0.8rem;
                  border-radius: 20px;
                  font-size: 0.8rem;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.2s;
                  box-shadow: ${state.selectedRecSubCategory === subCat.id ? '0 3px 8px var(--secondary-glow)' : 'none'};
                "
              >
                ${subCat.name}
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <div style="margin-bottom: 1.25rem; font-size: 0.85rem; color: var(--text-secondary);">
        🔍 분류 매칭 도서: <strong>${filtered.length}</strong>권
      </div>

      <div class="recs-grid">
        ${filtered.map(rec => {
          const added = isBookInLibrary(rec);
          return `
            <div class="glass-card rec-card" style="min-height: 300px">
              <span class="rec-category" style="font-size: 0.7rem;">${rec.category}</span>
              <h3 class="rec-title">${rec.title}</h3>
              <p class="rec-author">${rec.author}</p>
              <p class="rec-description">${rec.description}</p>
              ${rec.tags ? `
                <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
                  ${rec.tags.map(tag => `<span style="font-size: 0.75rem; padding: 0.15rem 0.5rem; border-radius: 4px; background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); color: var(--text-secondary);">#${tag}</span>`).join('')}
                </div>
              ` : ''}
              <div class="rec-action">
                <button
                  type="button"
                  data-rec-id="${rec.id}"
                  class="add-rec-btn ${added ? 'added' : ''}"
                  ${added ? 'disabled' : ''}
                >
                  ${added ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.25rem;"><polyline points="20 6 9 17 4 12"/></svg> 추가 완료` : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.25rem;"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> 내 서재에 담기`}
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// (8) Footer View
function renderFooter() {
  return `
    <footer>
      <p>© 2026 BookLog. All rights reserved.</p>
      <p style="font-size: 0.75rem; margin-top: 0.25rem; color: var(--text-muted);">
        컴퓨터공학과 SW프로그래밍 기말대체 과제 프로젝트 | 
        ${!state.isBannerVisible ? `<button id="reset-banner-link" style="background: none; border: none; color: var(--primary); cursor: pointer; text-decoration: underline; margin-left: 0.5rem;">도움말 배너 다시 켜기</button>` : ''}
      </p>
    </footer>
  `;
}

// (9) Add / Edit Modal View
function renderAddEditModal() {
  if (!state.isAddEditOpen) return '';

  const isEdit = !!state.editingBook;
  const modalTitle = isEdit ? '도서 기록 수정' : '새로운 도서 등록';
  
  const bookTitle = isEdit ? state.editingBook.title : '';
  const bookAuthor = isEdit ? state.editingBook.author : '';
  const bookStatus = isEdit ? state.editingBook.status : 'reading';
  const bookStartDate = isEdit ? (state.editingBook.startDate || '') : getTodayString();
  const bookSummary = isEdit ? (state.editingBook.summary || '') : '';
  const bookThoughts = isEdit ? (state.editingBook.thoughts || '') : '';

  const showRatingAndThoughts = bookStatus !== 'unread';

  let ratingHTML = '';
  if (showRatingAndThoughts) {
    ratingHTML = `
      <div class="form-group">
        <label class="form-label">나의 평점</label>
        <div class="rating-input-group">
          ${[1, 2, 3, 4, 5].map(val => `
            <button
              type="button"
              class="interactive-star star-btn"
              data-star-val="${val}"
              aria-label="${val}점 주기"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" 
                fill="${(state.hoveredRating || state.formRating) >= val ? 'var(--warning)' : 'transparent'}" 
                stroke="${(state.hoveredRating || state.formRating) >= val ? 'var(--warning)' : 'var(--text-muted)'}" 
                stroke-width="2" class="star-icon">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </button>
          `).join('')}
          <span style="font-size: 0.9rem; color: var(--text-secondary); margin-left: 0.5rem; font-weight: 600;">
            ${state.formRating > 0 ? `${state.formRating}점 / 5점` : '선택 안 함'}
          </span>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">독서 감상평</label>
        <textarea 
          id="form-thoughts"
          class="form-textarea" 
          placeholder="책을 읽고 느낀 점이나 마음에 남는 한 줄을 적어보세요..."
        >${bookThoughts}</textarea>
      </div>
    `;
  } else {
    ratingHTML = `
      <p style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; background: rgba(255,255,255,0.03); padding: 0.6rem; border-radius: 8px; border: 1px solid var(--border-color)">
        💡 '읽기 전' 상태에서는 평점과 감상평을 입력할 수 없습니다. 책을 읽기 시작하거나 완독한 뒤에 입력해보세요!
      </p>
    `;
  }

  return `
    <div class="modal-backdrop" id="add-edit-modal-backdrop">
      <div class="glass-card modal-content">
        <button class="modal-close" id="add-edit-modal-close-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <h3 style="font-size: 1.4rem; font-weight: 700; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
          ${modalTitle}
        </h3>

        <form id="add-edit-book-form" style="display: flex; flex-direction: column; gap: 1.2rem;">
          <div class="form-group">
            <label class="form-label">책 제목 <span style="color: var(--danger)">*</span></label>
            <input 
              type="text" 
              id="form-title"
              class="form-input" 
              placeholder="예: 사피엔스"
              value="${bookTitle}"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">저자 <span style="color: var(--danger)">*</span></label>
            <input 
              type="text" 
              id="form-author"
              class="form-input" 
              placeholder="예: 유발 하라리"
              value="${bookAuthor}"
              required
            />
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label">독서 상태</label>
              <select id="form-status" class="form-select">
                <option value="unread" ${bookStatus === 'unread' ? 'selected' : ''}>읽기 전</option>
                <option value="reading" ${bookStatus === 'reading' ? 'selected' : ''}>읽는 중</option>
                <option value="completed" ${bookStatus === 'completed' ? 'selected' : ''}>읽기 완료</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">시작 / 등록일 <span style="color: var(--danger)">*</span></label>
              <input 
                type="date" 
                id="form-start-date"
                class="form-input"
                value="${bookStartDate}"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">도서 줄거리 / 소개</label>
            <textarea 
              id="form-summary"
              class="form-textarea" 
              placeholder="책의 핵심 줄거리나 소개글을 직접 작성해 보세요..."
              style="min-height: 80px;"
            >${bookSummary}</textarea>
          </div>

          ${ratingHTML}

          <div class="form-actions">
            <button type="button" class="secondary-btn" id="add-edit-cancel-btn">취소</button>
            <button type="submit" class="primary-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:0.25rem"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              <span>저장하기</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

// (10) Detail Modal View
function renderDetailModal() {
  if (!state.isDetailOpen || !state.selectedBook) return '';

  const book = state.selectedBook;
  
  if (state.showConfirmDelete) {
    return `
      <div class="modal-backdrop" id="detail-modal-backdrop">
        <div class="glass-card modal-content">
          <button class="modal-close" id="detail-modal-close-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 1.25rem; padding: 1rem 0; text-align: center;">
            <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(239, 68, 68, 0.1); color: var(--danger); display: flex; align-items: center; justify-content: center; display: inline-flex; justify-content: center;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="align-self: center"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">정말 삭제하시겠습니까?</h3>
              <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5;">
                '<strong>${book.title}</strong>' 도서 기록과 평점, 감상평이 영구히 삭제되며 복구할 수 없습니다.
              </p>
            </div>
            <div style="display: flex; gap: 0.75rem; width: 100%; margin-top: 0.5rem;">
              <button type="button" class="secondary-btn" id="delete-cancel-btn" style="flex: 1;">취소</button>
              <button type="button" class="danger-btn" id="delete-confirm-btn" style="flex: 1;">삭제하기</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  const statusText = book.status === 'completed' ? '읽기 완료' : book.status === 'reading' ? '읽는 중' : '읽기 전';
  const badgeClass = book.status === 'completed' ? 'completed' : book.status === 'reading' ? 'reading' : 'unread';
  const formattedDate = formatDateKorean(book.startDate);

  let ratingStarsHTML = '';
  if (book.status === 'unread') {
    ratingStarsHTML = `<span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 400;">기록 불가</span>`;
  } else if (book.rating > 0) {
    ratingStarsHTML = `
      <div class="stars-rating">
        ${[...Array(5)].map((_, i) => `
          <svg width="14" height="14" viewBox="0 0 24 24" class="star-icon ${i < book.rating ? 'filled' : ''}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        `).join('')}
      </div>
      <span style="font-size: 0.85rem; color: var(--text-secondary); margin-left: 0.25rem;">(${book.rating}점)</span>
    `;
  } else {
    ratingStarsHTML = `<span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 400;">평가 없음</span>`;
  }

  return `
    <div class="modal-backdrop" id="detail-modal-backdrop">
      <div class="glass-card modal-content">
        <button class="modal-close" id="detail-modal-close-btn" aria-label="닫기">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div class="detail-header">
          <span class="badge ${badgeClass}" style="margin-bottom: 0.75rem;">${statusText}</span>
          <h3 class="detail-title">${book.title}</h3>
          <p class="detail-author" style="display: flex; align-items: center; gap: 0.25rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>${book.author}</span>
          </p>
        </div>

        <div class="detail-meta-grid">
          <div class="detail-meta-item">
            <span class="detail-meta-label">별점 평점</span>
            <span class="detail-meta-value" style="display: flex; align-items: center; gap: 0.25rem; margin-top: 0.15rem;">
              ${ratingStarsHTML}
            </span>
          </div>

          <div class="detail-meta-item">
            <span class="detail-meta-label">시작 / 등록일</span>
            <span class="detail-meta-value" style="display: flex; align-items: center; gap: 0.25rem; margin-top: 0.15rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary)"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>${formattedDate}</span>
            </span>
          </div>
        </div>

        <!-- 도서 줄거리 / 소개 -->
        <div class="detail-thoughts-section" style="margin-bottom: 0.5rem;">
          <h4 class="detail-thoughts-title" style="color: var(--secondary);">도서 줄거리 / 소개</h4>
          <div class="detail-thoughts-body" style="background: rgba(0,0,0,0.05);">
            ${book.summary || `<span style="font-style: italic; color: var(--text-muted);">등록된 줄거리가 없습니다. 수정을 통해 줄거리를 추가해 보세요.</span>`}
          </div>
        </div>

        <!-- 독서 감상평 -->
        <div class="detail-thoughts-section">
          <h4 class="detail-thoughts-title">독서 감상평</h4>
          <div class="detail-thoughts-body">
            ${book.status === 'unread' 
              ? `<span style="font-style: italic; color: var(--text-muted)">읽기 전 도서입니다. 책을 읽기 시작한 후에 느낀 감상을 남겨보세요!</span>`
              : (book.thoughts || `<span style="font-style: italic; color: var(--text-muted)">기록된 감상평이 아직 없습니다. 수정을 눌러 감상평을 남겨보세요.</span>`)
            }
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; gap: 0.75rem; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
          <button type="button" class="danger-btn" id="detail-delete-btn" style="display: flex; align-items: center; gap: 0.35rem; padding: 0.6rem 1.2rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            <span>삭제</span>
          </button>

          <div style="display: flex; gap: 0.75rem;">
            <button type="button" class="secondary-btn" id="detail-close-btn" style="padding: 0.6rem 1.2rem;">닫기</button>
            <button type="button" class="primary-btn" id="detail-edit-btn" style="display: flex; align-items: center; gap: 0.35rem; padding: 0.6rem 1.2rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              <span>수정하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 5. Event Binding and DOM Interactivity
// (1) Profile Gate Events
function bindProfileSetupEvents() {
  const form = document.getElementById('profile-setup-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('setup-name').value.trim();
      const birthdate = document.getElementById('setup-birthdate').value;
      const includeSamples = document.getElementById('setup-include-samples').checked;
      
      const profile = { name, birthdate };
      
      // Save profile to database
      localStorage.setItem('booklog_current_profile', JSON.stringify(profile));
      
      // Load or initialize user books
      const storageKey = `booklog_books_${name}_${birthdate}`;
      const existing = localStorage.getItem(storageKey);
      let initialList = [];
      if (existing) {
        try {
          initialList = JSON.parse(existing);
        } catch (e) {
          initialList = includeSamples ? initialBooks : [];
        }
      } else {
        initialList = includeSamples ? initialBooks : [];
      }
      localStorage.setItem(storageKey, JSON.stringify(initialList));
      
      // Save to profiles list if unique
      const savedProfiles = localStorage.getItem('booklog_profiles');
      let profilesList = [];
      if (savedProfiles) {
        try {
          profilesList = JSON.parse(savedProfiles);
        } catch (e) {
          profilesList = [];
        }
      }
      const exists = profilesList.some(p => p.name.trim().toLowerCase() === name.toLowerCase() && p.birthdate === birthdate);
      if (!exists) {
        profilesList.push(profile);
        localStorage.setItem('booklog_profiles', JSON.stringify(profilesList));
      }
      
      state.currentProfile = profile;
      state.books = initialList;
      state.activeTab = 'dashboard';
      render();
    });
  }

  // Quick Login Buttons
  const quickLoginButtons = document.querySelectorAll('.quick-login-btn');
  quickLoginButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-profile-idx'), 10);
      const saved = localStorage.getItem('booklog_profiles');
      if (saved) {
        try {
          const profilesList = JSON.parse(saved);
          const profile = profilesList[idx];
          if (profile) {
            localStorage.setItem('booklog_current_profile', JSON.stringify(profile));
            state.currentProfile = profile;
            loadBooksForProfile();
            state.activeTab = 'dashboard';
            render();
          }
        } catch(e){}
      }
    });
  });
}

// (2) Main Application Events (Event delegation or querySelector binding)
function bindMainEvents() {
  // Theme Toggle
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('booklog_theme', state.theme);
      render();
    });
  }

  // Logout
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('booklog_current_profile');
      state.currentProfile = null;
      state.books = [];
      render();
    });
  }

  // Onboarding Banner close
  const closeBannerBtn = document.getElementById('close-banner-btn');
  if (closeBannerBtn) {
    closeBannerBtn.addEventListener('click', () => {
      state.isBannerVisible = false;
      localStorage.setItem('booklog_banner_dismissed', 'true');
      render();
    });
  }

  // Onboarding Banner reset link in footer
  const resetBannerLink = document.getElementById('reset-banner-link');
  if (resetBannerLink) {
    resetBannerLink.addEventListener('click', () => {
      state.isBannerVisible = true;
      localStorage.removeItem('booklog_banner_dismissed');
      render();
    });
  }

  // Tab switching
  const tabs = document.querySelectorAll('.nav-item');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      state.activeTab = tab.getAttribute('data-tab');
      render();
    });
  });

  // Open Add Book Modal
  const addButtons = [
    document.getElementById('header-add-book-btn'),
    document.getElementById('lib-add-book-btn'),
    document.getElementById('lib-empty-add-btn'),
    document.getElementById('dash-empty-add-btn')
  ];
  addButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        state.editingBook = null;
        state.formRating = 0;
        state.isAddEditOpen = true;
        render();
      });
    }
  });

  // Modal events (Add/Edit)
  const addEditForm = document.getElementById('add-edit-book-form');
  if (addEditForm) {
    addEditForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('form-title').value.trim();
      const author = document.getElementById('form-author').value.trim();
      const status = document.getElementById('form-status').value;
      const startDate = document.getElementById('form-start-date').value;
      const summary = document.getElementById('form-summary').value.trim();
      
      let rating = 0;
      let thoughts = '';
      if (status !== 'unread') {
        rating = state.formRating;
        thoughts = document.getElementById('form-thoughts').value.trim();
      }

      if (state.editingBook) {
        // Edit existing book
        state.books = state.books.map(b => b.id === state.editingBook.id ? {
          ...b,
          title,
          author,
          status,
          startDate,
          summary,
          rating,
          thoughts
        } : b);
      } else {
        // Create new book
        const newBook = {
          id: `book-${Date.now()}`,
          title,
          author,
          status,
          startDate,
          summary,
          rating,
          thoughts,
          createdAt: new Date().toISOString()
        };
        state.books = [newBook, ...state.books];
      }

      saveBooks();
      state.isAddEditOpen = false;
      state.editingBook = null;
      render();
    });

    // Form status dropdown change
    const statusSelect = document.getElementById('form-status');
    if (statusSelect) {
      statusSelect.addEventListener('change', () => {
        // Temporarily adjust status in forms to toggle fields
        const tempStatus = statusSelect.value;
        const thoughtsGroup = document.getElementById('form-thoughts');
        // Render rating fields instantly by altering formRating or updating view
        // For simplicity in Vanilla JS, we can just trigger a partial rerender or full rerender
        // But doing a full rerender will lose current unsaved title/author inputs!
        // To preserve inputs, we just manually show/hide or set state and redraw
        // Let's store current values in state before partial rerender
        state.editingBook = {
          id: state.editingBook ? state.editingBook.id : undefined,
          title: document.getElementById('form-title').value,
          author: document.getElementById('form-author').value,
          status: tempStatus,
          startDate: document.getElementById('form-start-date').value,
          summary: document.getElementById('form-summary').value,
          rating: state.formRating,
          thoughts: thoughtsGroup ? thoughtsGroup.value : '',
          createdAt: state.editingBook ? state.editingBook.createdAt : undefined
        };
        render();
      });
    }

    // Rating star clicks & hovers in form
    const starBtns = document.querySelectorAll('.star-btn');
    starBtns.forEach(btn => {
      const val = parseInt(btn.getAttribute('data-star-val'), 10);
      btn.addEventListener('click', () => {
        state.formRating = val;
        // Pre-save inputs
        state.editingBook = {
          id: state.editingBook ? state.editingBook.id : undefined,
          title: document.getElementById('form-title').value,
          author: document.getElementById('form-author').value,
          status: document.getElementById('form-status').value,
          startDate: document.getElementById('form-start-date').value,
          summary: document.getElementById('form-summary').value,
          rating: val,
          thoughts: document.getElementById('form-thoughts') ? document.getElementById('form-thoughts').value : '',
          createdAt: state.editingBook ? state.editingBook.createdAt : undefined
        };
        render();
      });
      btn.addEventListener('mouseenter', () => {
        state.hoveredRating = val;
        updateStarsUI();
      });
      btn.addEventListener('mouseleave', () => {
        state.hoveredRating = 0;
        updateStarsUI();
      });
    });
  }

  // Helper to visually update stars on hover without full rerendering
  function updateStarsUI() {
    const starBtns = document.querySelectorAll('.star-btn');
    starBtns.forEach(btn => {
      const val = parseInt(btn.getAttribute('data-star-val'), 10);
      const svg = btn.querySelector('.star-icon');
      if (svg) {
        const active = (state.hoveredRating || state.formRating) >= val;
        svg.setAttribute('fill', active ? 'var(--warning)' : 'transparent');
        svg.setAttribute('stroke', active ? 'var(--warning)' : 'var(--text-muted)');
      }
    });
  }

  // Cancel / Close Add-Edit Modal
  const closeAddEditBtn = document.getElementById('add-edit-modal-close-btn');
  const cancelAddEditBtn = document.getElementById('add-edit-cancel-btn');
  const addEditBackdrop = document.getElementById('add-edit-modal-backdrop');
  const closeAddEdit = () => {
    state.isAddEditOpen = false;
    state.editingBook = null;
    render();
  };
  if (closeAddEditBtn) closeAddEditBtn.addEventListener('click', closeAddEdit);
  if (cancelAddEditBtn) cancelAddEditBtn.addEventListener('click', closeAddEdit);
  if (addEditBackdrop) {
    addEditBackdrop.addEventListener('click', (e) => {
      if (e.target === addEditBackdrop) closeAddEdit();
    });
  }

  // Book card detail clicks (Library tab)
  const bookCards = document.querySelectorAll('.book-card');
  bookCards.forEach(card => {
    card.addEventListener('click', () => {
      const bookId = card.getAttribute('data-book-id');
      const book = state.books.find(b => b.id === bookId);
      if (book) {
        state.selectedBook = book;
        state.showConfirmDelete = false;
        state.isDetailOpen = true;
        render();
      }
    });
  });

  // Recent book mini-item clicks (Dashboard tab)
  const miniItems = document.querySelectorAll('.mini-book-item');
  miniItems.forEach(item => {
    item.addEventListener('click', () => {
      const bookId = item.getAttribute('data-book-id');
      const book = state.books.find(b => b.id === bookId);
      if (book) {
        state.selectedBook = book;
        state.showConfirmDelete = false;
        state.isDetailOpen = true;
        render();
      }
    });
  });

  // Detail Modal action clicks (Edit / Close / Delete)
  const closeDetailBtn = document.getElementById('detail-modal-close-btn');
  const cancelDetailBtn = document.getElementById('detail-close-btn');
  const editDetailBtn = document.getElementById('detail-edit-btn');
  const deleteDetailBtn = document.getElementById('detail-delete-btn');
  const detailBackdrop = document.getElementById('detail-modal-backdrop');

  const closeDetail = () => {
    state.isDetailOpen = false;
    state.selectedBook = null;
    render();
  };

  if (closeDetailBtn) closeDetailBtn.addEventListener('click', closeDetail);
  if (cancelDetailBtn) cancelDetailBtn.addEventListener('click', closeDetail);
  if (detailBackdrop) {
    detailBackdrop.addEventListener('click', (e) => {
      if (e.target === detailBackdrop) closeDetail();
    });
  }

  if (editDetailBtn) {
    editDetailBtn.addEventListener('click', () => {
      state.editingBook = state.selectedBook;
      state.formRating = state.selectedBook.rating || 0;
      state.isAddEditOpen = true;
      state.isDetailOpen = false;
      render();
    });
  }

  if (deleteDetailBtn) {
    deleteDetailBtn.addEventListener('click', () => {
      state.showConfirmDelete = true;
      render();
    });
  }

  // Delete confirm / cancel
  const deleteConfirmBtn = document.getElementById('delete-confirm-btn');
  const deleteCancelBtn = document.getElementById('delete-cancel-btn');
  if (deleteConfirmBtn) {
    deleteConfirmBtn.addEventListener('click', () => {
      state.books = state.books.filter(b => b.id !== state.selectedBook.id);
      saveBooks();
      state.isDetailOpen = false;
      state.selectedBook = null;
      state.showConfirmDelete = false;
      render();
    });
  }
  if (deleteCancelBtn) {
    deleteCancelBtn.addEventListener('click', () => {
      state.showConfirmDelete = false;
      render();
    });
  }

  // Library Search and Filter inputs binding
  const libSearch = document.getElementById('library-search');
  if (libSearch) {
    libSearch.addEventListener('input', (e) => {
      state.searchTerm = e.target.value;
      // Partial rerender: to prevent losing input focus, we just query list and overwrite its innerHTML
      // Or we just call render() but set focus back
      // Since rendering in Vanilla JS is very fast, let's just rerender but keep focus by saving selection/focus
      const cursorStart = libSearch.selectionStart;
      const cursorEnd = libSearch.selectionEnd;
      
      const grid = document.querySelector('.books-grid') || document.querySelector('.empty-library-state');
      if (grid) {
        // Redraw list only
        const libView = document.createElement('div');
        libView.innerHTML = renderLibrary();
        const newGrid = libView.querySelector('.books-grid') || libView.querySelector('.empty-library-state');
        grid.parentNode.replaceChild(newGrid, grid);
        
        // Re-attach card click listeners
        const newBookCards = document.querySelectorAll('.book-card');
        newBookCards.forEach(card => {
          card.addEventListener('click', () => {
            const bookId = card.getAttribute('data-book-id');
            const book = state.books.find(b => b.id === bookId);
            if (book) {
              state.selectedBook = book;
              state.showConfirmDelete = false;
              state.isDetailOpen = true;
              render();
            }
          });
        });
        
        // Restore search focus
        const freshSearch = document.getElementById('library-search');
        if (freshSearch) {
          freshSearch.focus();
          freshSearch.setSelectionRange(cursorStart, cursorEnd);
        }
      }
    });
  }

  const libFilter = document.getElementById('library-filter');
  if (libFilter) {
    libFilter.addEventListener('change', (e) => {
      state.statusFilter = e.target.value;
      render();
    });
  }

  const libSort = document.getElementById('library-sort');
  if (libSort) {
    libSort.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      render();
    });
  }

  // Recommendation Click actions (Add from Recommendations)
  const addRecButtons = document.querySelectorAll('.add-rec-btn:not(.quick-login-btn)');
  addRecButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const recId = btn.getAttribute('data-rec-id');
      const recBook = initialRecommendations.find(r => r.id === recId);
      if (recBook) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const todayStr = `${yyyy}-${mm}-${dd}`;

        const newBook = {
          id: `book-${Date.now()}`,
          title: recBook.title,
          author: recBook.author,
          status: 'unread',
          startDate: todayStr,
          rating: 0,
          summary: recBook.description,
          thoughts: '',
          createdAt: new Date().toISOString()
        };

        state.books = [newBook, ...state.books];
        saveBooks();
        
        // Jump to library to show it
        state.activeTab = 'library';
        render();
      }
    });
  });

  // Recommendation Level 1: Main Category Buttons
  const recMainCatBtns = document.querySelectorAll('.rec-main-cat-btn');
  recMainCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedRecMainCategory = btn.getAttribute('data-main-cat');
      state.selectedRecSubCategory = 'all';
      render();
    });
  });

  // Recommendation Level 2: Sub Category Buttons
  const recSubCatBtns = document.querySelectorAll('.rec-sub-cat-btn');
  recSubCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedRecSubCategory = btn.getAttribute('data-sub-cat');
      render();
    });
  });
}

// 6. Bootstrap Application
document.addEventListener('DOMContentLoaded', initApp);
// If page was already loaded (Vite environments, HMR)
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initApp();
}
