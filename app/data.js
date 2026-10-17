// All site copy, in English and Korean. Edit text here; the page renders from this file.

export const profile = {
  name: { en: "Askar Shamshidinov", ko: "아스카르 샴시디노프" },
  role: { en: "AI Engineer · RAG, retrieval & computer vision", ko: "AI 엔지니어 · RAG, 검색, 컴퓨터 비전" },
  intro: {
    en: "Final-year AI & Big Data student at Woosong University in Daejeon. I build AI systems that real people use: a production RAG assistant, an offline document Q&A for an energy company, and research on semantic search for the Kyrgyz language. Before AI I worked as a frontend and full-stack developer, so I can ship the product around the model too.",
    ko: "대전 우송대학교 AI·빅데이터학과 4학년입니다. 실제 사용자가 쓰는 AI 시스템을 만듭니다. 실서비스 RAG 어시스턴트, 에너지 기업을 위한 오프라인 문서 Q&A, 키르기스어 의미 검색 연구를 진행했습니다. AI 이전에는 프론트엔드·풀스택 개발자로 일해 모델을 감싸는 제품까지 직접 만들 수 있습니다.",
  },
  availability: {
    en: "Open to a full-time AI/ML internship in Korea (credited by my university as a co-op; no visa sponsorship needed).",
    ko: "한국에서 풀타임 AI/ML 인턴십을 찾고 있습니다 (학교 현장실습으로 학점 인정, 비자 지원 불필요).",
  },
  facts: [
    { n: "50–300", en: "questions a day answered by my RAG assistant in production", ko: "실서비스 RAG 어시스턴트가 하루에 답변한 질문 수" },
    { n: "+18 pp", en: "retrieval accuracy on human-written Kyrgyz questions after fine-tuning", ko: "파인튜닝 후 사람이 쓴 키르기스어 질문 검색 정확도 향상" },
    { n: "2+ yrs", en: "frontend and full-stack development before AI", ko: "AI 이전 프론트엔드·풀스택 개발 경력" },
  ],
  email: "askarkanatbekovic@gmail.com",
  phone: "+82 10 5750 8162",
  github: "https://github.com/askarbekkk",
  location: { en: "Daejeon, South Korea", ko: "대한민국 대전" },
};

const img = (slug, file) => `/projects/${slug}/${file}`;

export const aiProjects = [
  {
    slug: "kyrgyz-retrieval",
    badge: { en: "Research", ko: "연구" },
    title: { en: "Kyrgyz Semantic Retrieval", ko: "키르기스어 의미 검색" },
    tagline: {
      en: "Can LLM-generated test sets be trusted to rank search models for a low-resource language?",
      ko: "저자원 언어에서 LLM이 만든 테스트셋으로 검색 모델 순위를 믿을 수 있을까?",
    },
    tags: ["PyTorch", "sentence-transformers", "multilingual-e5", "BGE-M3", "BM25", "Hugging Face"],
    results: [
      { en: "Accuracy@1 0.56 → 0.74 on 900 human-written questions", ko: "사람이 쓴 900개 질문에서 Accuracy@1 0.56 → 0.74" },
      { en: "Found an evaluation bug that reversed the conclusion", ko: "결론을 뒤집은 평가 버그 발견·수정" },
      { en: "9 systems compared, bootstrap CIs, Kendall's τ", ko: "9개 시스템 비교, 부트스트랩 신뢰구간, 켄달 τ" },
    ],
    problem: {
      en: "Kyrgyz has about 5 million speakers and almost no data for training search models. I wanted to know how well multilingual models retrieve Kyrgyz text, whether fine-tuning on LLM-generated data helps, and whether an LLM-generated test set ranks models the same way human questions do.",
      ko: "키르기스어 사용자는 약 500만 명이지만 검색 모델 학습 데이터가 거의 없습니다. 다국어 모델이 키르기스어를 얼마나 잘 검색하는지, LLM이 생성한 데이터로 파인튜닝하면 좋아지는지, 그리고 LLM이 만든 테스트셋이 사람의 질문과 같은 순위를 내는지 확인하고 싶었습니다.",
    },
    points: {
      en: [
        "Built 1,698 query–passage pairs from Kyrgyz Wikipedia: an LLM wrote one search question per passage, then heuristic and LLM filters removed bad pairs.",
        "Fine-tuned multilingual-e5-base with mined hard negatives (MultipleNegativesRankingLoss, 3 seeds).",
        "Tested on Belebele kir_Cyrl: 900 human-written questions, 488 passages + 5,000 distractors. Fine-tuning gave +18 pp Accuracy@1 over the untuned model.",
        "Audited my own evaluation and found 34% of gold passages duplicated as distractors; the bug understated every model by up to 26 points and flipped the BM25-vs-neural conclusion.",
        "Now a research study with my professor: native-speaker annotation and agreement analysis to test whether LLM-made benchmarks can be trusted.",
      ],
      ko: [
        "키르기스어 위키백과로 질의–문단 쌍 1,698개를 구축했습니다. LLM이 문단마다 검색 질문을 하나씩 만들고, 휴리스틱과 LLM 필터로 품질이 낮은 쌍을 제거했습니다.",
        "하드 네거티브를 채굴해 multilingual-e5-base를 파인튜닝했습니다 (MultipleNegativesRankingLoss, 시드 3개).",
        "Belebele kir_Cyrl(사람이 쓴 질문 900개, 문단 488개 + 방해 문단 5,000개)에서 파인튜닝 모델이 Accuracy@1을 18%p 높였습니다.",
        "직접 평가를 점검하다가 정답 문단의 34%가 방해 문단으로 중복된 버그를 발견했습니다. 이 버그로 모든 모델 점수가 최대 26점 낮게 나왔고 BM25와 신경망 모델의 비교 결론이 뒤집혀 있었습니다.",
        "현재 지도교수와 함께 원어민 주석과 주석자 간 일치도 분석으로 LLM 생성 벤치마크의 신뢰성을 검증하는 연구를 진행 중입니다.",
      ],
    },
    images: [
      { src: img("kyrgyz-retrieval", "demo_search.png"), cap: { en: "Live demo: BGE-M3 ranks the correct passage first, BM25 ranks it 4th (900 Belebele questions: 0.841 vs 0.570 Accuracy@1)", ko: "데모: BGE-M3는 정답 문단을 1위, BM25는 4위로 찾음 (Belebele 900문항 Accuracy@1 0.841 vs 0.570)" } },
      { src: img("kyrgyz-retrieval", "result_belebele_finetuning.png"), cap: { en: "Fine-tuning on ~1.5k synthetic pairs: +18 pp on human-written questions", ko: "합성 데이터 약 1.5k쌍으로 파인튜닝: 사람이 쓴 질문에서 +18%p" } },
      { src: img("kyrgyz-retrieval", "architecture.png"), cap: { en: "Research pipeline", ko: "연구 파이프라인" } },
      { src: img("kyrgyz-retrieval", "result_eval_bug.png"), cap: { en: "Fixing the evaluation bug changed the conclusion", ko: "평가 버그 수정으로 결론이 바뀜" } },
      { src: img("kyrgyz-retrieval", "result_model_comparison.png"), cap: { en: "8 retrieval systems on Belebele", ko: "Belebele에서 8개 검색 시스템 비교" } },
    ],
    links: [{ label: "GitHub", href: "https://github.com/askarbekkk/kyrgyz-embeddings" }, { label: "Demo code", href: "https://github.com/askarbekkk/kyrgyz-embeddings/tree/main/demo" }],
  },
  {
    slug: "motion-rag",
    badge: { en: "Production", ko: "실서비스" },
    title: { en: "RAG Assistant for Motion Group", ko: "Motion Group RAG 어시스턴트" },
    tagline: {
      en: "Replaced a menu-driven FAQ bot with an assistant that answers from 105 internal documents.",
      ko: "메뉴형 FAQ 봇을 사내 문서 105개 기반으로 답하는 어시스턴트로 교체했습니다.",
    },
    tags: ["Python", "RAG", "Vector search", "LLM", "Telegram Bot API"],
    results: [
      { en: "105 documents · ~600 pages", ko: "문서 105개 · 약 600페이지" },
      { en: "50–300 questions a day, 20–25 users", ko: "하루 질문 50–300개, 사용자 20–25명" },
      { en: "Simple questions answered in ~5 s", ko: "간단한 질문 약 5초 내 응답" },
    ],
    problem: {
      en: "Employees and clients used a rule-based Telegram bot with fixed menus. Any question outside the menu went unanswered, and the documents behind it were long and hard to search.",
      ko: "직원과 고객은 고정 메뉴로 된 규칙 기반 텔레그램 봇을 사용했습니다. 메뉴 밖 질문에는 답할 수 없었고, 근거 문서는 길고 검색하기 어려웠습니다.",
    },
    points: {
      en: [
        "Built the full pipeline: document ingestion and chunking, embeddings, vector search and LLM answer generation grounded in the retrieved passages.",
        "Deployed it as a Telegram bot, the channel people already used, so adoption needed no training.",
        "In production: 20–25 employees and clients a day, 50–300 questions daily.",
      ],
      ko: [
        "문서 수집과 청킹, 임베딩, 벡터 검색, 검색된 문단에 근거한 LLM 답변 생성까지 전체 파이프라인을 구축했습니다.",
        "사용자들이 이미 쓰던 텔레그램 봇으로 배포해 별도 교육 없이 바로 사용할 수 있게 했습니다.",
        "실서비스에서 하루 20–25명의 직원과 고객이 질문 50–300개를 사용했습니다.",
      ],
    },
    images: [{ src: img("motion-rag", "architecture.png"), cap: { en: "System overview (company code is private)", ko: "시스템 개요 (회사 코드는 비공개)" } }],
    links: [],
  },
  {
    slug: "korea-visa-guide",
    badge: { en: "LLM agent · mobile app", ko: "LLM 에이전트 · 모바일 앱" },
    title: { en: "Korea Visa Guide: tool-calling agent", ko: "Korea Visa Guide: 도구 호출 에이전트" },
    tagline: {
      en: "A visa assistant for foreigners in Korea that decides which tools to use: app guides, official-site search, a deadline calculator and exchange rates.",
      ko: "가이드 검색, 공식 사이트 검색, 기한 계산, 환율 중 필요한 도구를 스스로 고르는 외국인용 비자 어시스턴트입니다.",
    },
    tags: ["Gemini function calling", "Agent", "Evaluation", "Expo / React Native", "TypeScript", "Tavily"],
    results: [
      { en: "Correct answers: 8–13% → 96–100% (24-question eval, 3 runs)", ko: "정답률 8–13% → 96–100% (24문항 평가, 3회)" },
      { en: "Expected tool chosen in 92–96% of questions", ko: "92–96% 질문에서 올바른 도구 선택" },
      { en: "Dates computed by code, never guessed by the model", ko: "날짜는 모델이 아닌 코드가 계산" },
    ],
    problem: {
      en: "The first version of the bot only searched the web. On \"How do I extend a D-2 visa?\" it answered \"not in the sources\", although the app's own checklist had the answer; it also could not work out dates or convert fees.",
      ko: "첫 번째 봇은 웹 검색만 했습니다. \"D-2 연장 방법\"을 물으면 앱 체크리스트에 답이 있는데도 \"자료에 없음\"이라고 답했고, 날짜 계산이나 수수료 환산도 하지 못했습니다.",
    },
    points: {
      en: [
        "Rebuilt the bot as a Gemini function-calling agent (up to 5 steps) with 4 tools: search_app_guides, search_official_sources (HiKorea, MOJ, MOFA), calculate_deadline and get_exchange_rate.",
        "The model must base every fact on tool results; dates (extension window, 90-day ARC rule, 14-day address rule) come from code, not from the model.",
        "Built a 24-question evaluation in Russian and English with checkable facts and compared the old bot and the agent on the same model: 8–13% vs 96–100% across three runs.",
        "Found and fixed issues along the way: a retired Gemini model name, no fallback on overload, a token limit that cut long answers to empty, and Markdown showing as raw symbols in the chat.",
        "Also: onboarding by country and visa, personal checklists with progress saved on the device, RU/EN interface.",
      ],
      ko: [
        "봇을 Gemini 함수 호출 에이전트(최대 5단계)로 다시 만들었습니다. 도구는 4개입니다: 앱 가이드 검색, 공식 사이트 검색(하이코리아·법무부·외교부), 기한 계산, 환율 조회.",
        "모든 사실은 도구 결과에 근거해야 하며, 날짜(연장 신청 기간, ARC 90일, 주소 변경 14일)는 모델이 아니라 코드가 계산합니다.",
        "검증 가능한 사실이 담긴 러시아어·영어 24문항 평가셋을 만들어 같은 모델로 기존 봇과 에이전트를 비교했습니다: 3회 실행 기준 8–13% 대 96–100%.",
        "개발 중 발견한 문제도 해결했습니다: 서비스 종료된 Gemini 모델명, 과부하 시 대체 로직 부재, 긴 답변을 빈 응답으로 만들던 토큰 한도, 채팅에 그대로 보이던 마크다운 기호.",
        "그 외: 국가·비자별 온보딩, 기기에 저장되는 맞춤 체크리스트, 러시아어·영어 인터페이스.",
      ],
    },
    images: [
      { src: img("korea-visa-guide", "06_agent_deadline_fee.png"), cap: { en: "One question, three tools: deadline window, fee in Kyrgyz som, documents from the app's checklist", ko: "질문 하나에 도구 세 개: 신청 기간, 솜 환산 수수료, 체크리스트 서류" }, phone: true },
      { src: img("korea-visa-guide", "architecture.png"), cap: { en: "Agent architecture", ko: "에이전트 아키텍처" } },
      { src: img("korea-visa-guide", "03_checklist_d2.png"), cap: { en: "D-2 extension checklist", ko: "D-2 연장 체크리스트" }, phone: true },
      { src: img("korea-visa-guide", "02_dashboard.png"), cap: { en: "Dashboard", ko: "대시보드" }, phone: true },
    ],
    links: [{ label: "GitHub", href: "https://github.com/askarbekkk/korea-visa-guide" }],
  },
  {
    slug: "offline-rag",
    badge: { en: "Client project", ko: "클라이언트 프로젝트" },
    title: { en: "Secure Offline RAG", ko: "보안 오프라인 RAG" },
    tagline: {
      en: "Document Q&A for a Korean energy company that runs fully on local hardware: no API calls, no data leaving the network.",
      ko: "국내 에너지 기업을 위한 문서 Q&A. 외부 API 없이 로컬 하드웨어에서만 동작해 데이터가 외부로 나가지 않습니다.",
    },
    tags: ["LangChain", "Ollama", "ChromaDB", "BM25", "Cross-encoder", "Streamlit"],
    results: [
      { en: "Hybrid search: 0.8 × vector + 0.2 × BM25 → reranker", ko: "하이브리드 검색: 0.8 × 벡터 + 0.2 × BM25 → 리랭커" },
      { en: "Korean and English PDFs, cross-lingual answers", ko: "한·영 PDF, 언어 간 검색 답변" },
      { en: "Same code on a GPU server or a CPU laptop", ko: "GPU 서버와 CPU 노트북에서 같은 코드로 동작" },
    ],
    problem: {
      en: "The client needed answers from internal technical documents in Korean and English, but cloud LLM APIs were not allowed: the documents could not leave the company network.",
      ko: "고객사는 한·영 사내 기술 문서에서 답을 얻고 싶었지만 클라우드 LLM API는 사용할 수 없었습니다. 문서가 사내망 밖으로 나가면 안 되기 때문입니다.",
    },
    points: {
      en: [
        "Loaders for PDF (with OCR fallback), CSV, TXT, Office files and code; header-aware chunking.",
        "Dense embeddings in ChromaDB plus a BM25 index, cached by content hash for fast restarts.",
        "A rule-based router skips retrieval for small talk; a multilingual cross-encoder reranks the top 15 and sends 5 to a local LLM with a strict grounding prompt.",
        "Two hardware profiles in YAML: BGE-M3 + Llama 3.1 8B on the server, e5-small + EXAONE 2.4B on a laptop.",
        "While preparing the demo I found and fixed an encoding bug that broke Korean text files on Windows.",
      ],
      ko: [
        "PDF(OCR 대체 포함), CSV, TXT, 오피스 파일, 코드용 로더와 문서 구조를 따르는 청킹을 구현했습니다.",
        "ChromaDB 벡터 인덱스와 BM25 인덱스를 함께 두고, 내용 해시로 캐시해 재시작을 빠르게 했습니다.",
        "규칙 기반 라우터가 잡담은 검색을 건너뛰고, 다국어 크로스 인코더가 상위 15개를 재정렬해 5개를 엄격한 근거 프롬프트와 함께 로컬 LLM에 전달합니다.",
        "YAML로 두 가지 하드웨어 프로필을 지원합니다: 서버는 BGE-M3 + Llama 3.1 8B, 노트북은 e5-small + EXAONE 2.4B.",
        "데모를 준비하면서 윈도우에서 한국어 텍스트 파일을 깨뜨리던 인코딩 버그를 찾아 수정했습니다.",
      ],
    },
    images: [
      { src: img("offline-rag", "demo_ko.png"), cap: { en: "Korean question, answered from Korean and English sources on a laptop CPU", ko: "한국어 질문에 한·영 자료로 답변 (노트북 CPU)" } },
      { src: img("offline-rag", "architecture.png"), cap: { en: "Architecture", ko: "아키텍처" } },
      { src: img("offline-rag", "demo_en.png"), cap: { en: "English question with sources", ko: "영어 질문과 출처" } },
    ],
    links: [{ label: "GitHub", href: "https://github.com/askarbekkk/offline_rag" }],
  },
  {
    slug: "smart-traffic",
    badge: { en: "Team project", ko: "팀 프로젝트" },
    title: { en: "Smart Traffic Monitoring", ko: "스마트 교통 모니터링" },
    tagline: {
      en: "Vehicle detection, tracking and counting on live city CCTV, trained on a dataset we built from scratch.",
      ko: "직접 구축한 데이터셋으로 학습해 실시간 도시 CCTV에서 차량을 탐지·추적·집계합니다.",
    },
    tags: ["YOLOv8", "SAHI", "DeepSORT", "PyTorch", "OpenCV", "Roboflow", "FastAPI"],
    results: [
      { en: "~4,000 images annotated by hand", ko: "이미지 약 4,000장 직접 라벨링" },
      { en: "Fine-tuned YOLOv8 on a university GPU cluster", ko: "대학 GPU 클러스터에서 YOLOv8 파인튜닝" },
      { en: "Line-crossing counts per class and camera", ko: "클래스·카메라별 가상선 통과 집계" },
    ],
    problem: {
      en: "Generic detectors missed small and distant vehicles on Korean streets, and automatic labelling produced too many errors to train on.",
      ko: "범용 탐지 모델은 한국 도로의 작고 먼 차량을 놓쳤고, 자동 라벨링은 학습에 쓰기에는 오류가 너무 많았습니다.",
    },
    points: {
      en: [
        "My part: a scraper that saved a frame from public road cameras every 5 seconds, ~4,000 hand-annotated images, YOLOv8 fine-tuning, and the YOLOv8 + DeepSORT detection-and-tracking pipeline with CUDA → CPU fallback.",
        "SAHI sliced inference (512 px tiles) recovers small vehicles far from the camera.",
        "Counts are served by a FastAPI backend to a Svelte dashboard with live video.",
      ],
      ko: [
        "담당 업무: 공공 도로 카메라에서 5초마다 프레임을 저장하는 스크레이퍼, 이미지 약 4,000장 수작업 라벨링, YOLOv8 파인튜닝, CUDA → CPU 자동 전환이 되는 YOLOv8 + DeepSORT 탐지·추적 파이프라인.",
        "SAHI 분할 추론(512px 타일)으로 카메라에서 먼 작은 차량도 탐지합니다.",
        "집계 결과는 FastAPI 백엔드를 통해 실시간 영상이 있는 Svelte 대시보드로 제공됩니다.",
      ],
    },
    images: [
      { src: img("smart-traffic", "detection_result.png"), cap: { en: "Our trained model on a city-camera frame", ko: "도시 카메라 프레임에 적용한 학습 모델" } },
      { src: img("smart-traffic", "architecture.png"), cap: { en: "Data, training and live pipeline", ko: "데이터·학습·실시간 파이프라인" } },
    ],
    links: [],
  },
  {
    slug: "ai-job-assistant",
    badge: { en: "Full-stack AI", ko: "풀스택 AI" },
    title: { en: "AI Job & Internship Matcher", ko: "AI 채용·인턴십 매칭" },
    tagline: {
      en: "Upload a resume, get the top 10 matching jobs in Korea with a score and the exact skills you are missing.",
      ko: "이력서를 올리면 국내 맞춤 공고 상위 10개와 점수, 부족한 기술을 보여줍니다.",
    },
    tags: ["FastAPI", "React", "SQLAlchemy", "LLM", "TF-IDF / SBERT", "pytest"],
    results: [
      { en: "Skill extraction F1 0.976 (hand-labelled resumes)", ko: "기술 추출 F1 0.976 (수작업 라벨 이력서)" },
      { en: "EN/KO skill aliases: 파이썬 → Python", ko: "한·영 기술 별칭 정규화: 파이썬 → Python" },
      { en: "23 automated tests", ko: "자동화 테스트 23개" },
    ],
    problem: {
      en: "International students in Korea scroll through hundreds of postings and cannot quickly see which fit their skills, location and Korean level.",
      ko: "한국의 유학생들은 수많은 공고를 보지만 자신의 기술, 지역, 한국어 수준에 맞는 공고를 빠르게 찾기 어렵습니다.",
    },
    points: {
      en: [
        "PDF → text → skills (an LLM, or dictionary matching with no API key) → normalized against ~190 skills with English and Korean aliases.",
        "Filters by location, job type and Korean level, then scores: 100 × (0.7 × skill overlap + 0.3 × text similarity).",
        "JWT auth, saved jobs, editable skills, and full account deletion including the resume file.",
        "Honest evaluation: ranking P@5 equals a keyword baseline on the current small label set; the next step is 20 labelled resumes before tuning weights.",
      ],
      ko: [
        "PDF → 텍스트 → 기술 추출(LLM 또는 API 키 없이 사전 매칭) → 한·영 별칭이 있는 약 190개 기술로 정규화합니다.",
        "지역, 고용 형태, 한국어 수준으로 필터링한 뒤 점수를 매깁니다: 100 × (0.7 × 기술 일치율 + 0.3 × 텍스트 유사도).",
        "JWT 인증, 관심 공고 저장, 기술 수정, 이력서 파일까지 삭제하는 회원 탈퇴 기능을 갖췄습니다.",
        "평가는 솔직하게 기록했습니다: 현재 소규모 라벨셋에서는 순위 P@5가 키워드 기준선과 같아, 가중치 조정 전 라벨 이력서 20개 확보가 다음 단계입니다.",
      ],
    },
    images: [
      { src: img("ai-job-assistant", "03_recommendations.png"), cap: { en: "Top matches with skill gap", ko: "상위 매칭 결과와 부족한 기술" } },
      { src: img("ai-job-assistant", "02_resume_skills.png"), cap: { en: "Skills extracted from a resume", ko: "이력서에서 추출한 기술" } },
      { src: img("ai-job-assistant", "architecture.png"), cap: { en: "Architecture", ko: "아키텍처" } },
    ],
    links: [{ label: "GitHub", href: "https://github.com/askarbekkk/ai-job-assistant" }],
  },
  {
    slug: "hamkke-mt",
    badge: { en: "Benchmark · in progress", ko: "벤치마크 · 진행 중" },
    title: { en: "Hamkke (함께): Korean ↔ 19 languages", ko: "함께: 한국어 ↔ 19개 언어 번역" },
    tagline: {
      en: "How well do Korean AI models translate for the people who work in Korea?",
      ko: "한국의 AI 모델은 한국에서 일하는 사람들의 언어를 얼마나 잘 번역할까?",
    },
    tags: ["FLORES-200", "chrF++", "Ollama", "LoRA", "Streamlit"],
    results: [
      { en: "19 languages, both directions", ko: "19개 언어, 양방향" },
      { en: "EXAONE 2.4B averages chrF++ ≈ 16", ko: "EXAONE 2.4B 평균 chrF++ 약 16" },
      { en: "Every raw output saved and browsable", ko: "모든 원본 출력 저장·탐색 가능" },
    ],
    problem: {
      en: "Korean models are mostly evaluated on Korean, English, Japanese and Chinese. Their quality on Vietnamese, Nepali, Khmer, Burmese, Uzbek and other languages of Korea's foreign workforce is rarely reported.",
      ko: "국내 모델은 주로 한국어, 영어, 일본어, 중국어로 평가됩니다. 베트남어, 네팔어, 크메르어, 미얀마어, 우즈베크어 등 외국인 근로자의 언어에 대한 성능은 거의 보고되지 않습니다.",
    },
    points: {
      en: [
        "Benchmark on FLORES-200 professional translations, both directions, scored with chrF++; an output cleaner strips chat preambles so the score measures the translation.",
        "First results: Indonesian 39, Vietnamese 29, but Uzbek and Burmese ≈ 5 (unusable).",
        "Improvement track: OPUS pairs filtered with LaBSE similarity, test sentences removed, LoRA on a small open model (Colab).",
        "Streamlit explorer shows every model output next to the reference.",
      ],
      ko: [
        "FLORES-200 전문 번역으로 양방향을 평가하고 chrF++로 채점합니다. 출력 정제기로 채팅식 서두를 제거해 번역 자체만 평가합니다.",
        "첫 결과: 인도네시아어 39, 베트남어 29, 반면 우즈베크어와 미얀마어는 약 5로 사용이 어렵습니다.",
        "개선 단계: LaBSE 유사도로 걸러낸 OPUS 병렬 데이터(테스트 문장 제거)로 소형 공개 모델에 LoRA를 학습합니다 (Colab).",
        "Streamlit 탐색기로 모든 모델 출력을 정답 번역과 나란히 볼 수 있습니다.",
      ],
    },
    images: [
      { src: img("hamkke-mt", "demo_explorer.png"), cap: { en: "Translation explorer", ko: "번역 탐색기" } },
      { src: img("hamkke-mt", "architecture.png"), cap: { en: "Benchmark and fine-tuning pipeline", ko: "벤치마크·파인튜닝 파이프라인" } },
    ],
    links: [{ label: "GitHub", href: "https://github.com/askarbekkk/hamkke-mt" }],
  },
  {
    slug: "ai-daily-assistant",
    badge: { en: "Automation", ko: "자동화" },
    title: { en: "AI Daily Assistant & LMS Watcher", ko: "AI 데일리 어시스턴트 & LMS 감시" },
    tagline: {
      en: "Watches two university portals, filters AI jobs and news, and sends one short Telegram digest three times a day.",
      ko: "학교 포털 두 곳을 감시하고 AI 채용·뉴스를 걸러 하루 세 번 텔레그램 요약을 보냅니다.",
    },
    tags: ["Playwright", "aiogram", "Gemini", "Pydantic", "SQLite", "GitHub Actions"],
    results: [
      { en: "Deadlines rendered by code, never by the LLM", ko: "마감일은 LLM이 아닌 코드가 출력" },
      { en: "Model fallback + template mode on outages", ko: "장애 시 모델 대체 + 템플릿 모드" },
      { en: "17 automated tests", ko: "자동화 테스트 17개" },
    ],
    problem: {
      en: "Deadlines move on two learning portals (Moodle and Canvas) and things get missed; checking jobs and AI news by hand every day wastes time.",
      ko: "두 학습 포털(Moodle, Canvas)의 마감일이 자주 바뀌어 놓치기 쉽고, 채용·AI 뉴스를 매일 직접 확인하는 데 시간이 듭니다.",
    },
    points: {
      en: [
        "Playwright logs in headlessly and reads the platforms' own JSON endpoints instead of fragile HTML scraping; a diff against SQLite snapshots reports only new, moved and removed tasks.",
        "Jobs from 5 sources pass regex rules and then an LLM relevance check; news is de-duplicated.",
        "The LLM writes the summary through a Pydantic schema under a word limit; on 503/429 it switches to a lighter model, and if all fail it still sends a template digest.",
      ],
      ko: [
        "Playwright로 헤드리스 로그인한 뒤 HTML 대신 플랫폼의 JSON 엔드포인트를 읽고, SQLite 스냅샷과 비교해 새 과제·변경된 마감·삭제된 과제만 알립니다.",
        "5개 출처의 채용 공고를 정규식 규칙과 LLM 관련성 검사로 거르고, 뉴스는 중복을 제거합니다.",
        "LLM은 Pydantic 스키마로 단어 수 제한 안에서 요약을 작성합니다. 503/429 오류 시 경량 모델로 전환하고, 모두 실패해도 템플릿 요약을 보냅니다.",
      ],
    },
    images: [
      { src: img("ai-daily-assistant", "demo_digest_telegram.png"), cap: { en: "Real digest from a dry run (Gemini overloaded → automatic fallback)", ko: "드라이런 실제 요약 (Gemini 과부하 → 자동 대체)" } },
      { src: img("ai-daily-assistant", "architecture.png"), cap: { en: "Architecture", ko: "아키텍처" } },
    ],
    links: [{ label: "GitHub", href: "https://github.com/askarbekkk/ai-daily-assistant" }],
  },
  {
    slug: "gas-price-forecasting",
    badge: { en: "Forecasting", ko: "시계열 예측" },
    title: { en: "Natural Gas Price Forecasting", ko: "천연가스 가격 예측" },
    tagline: {
      en: "Henry Hub prices 1–3 months ahead with a strict walk-forward backtest and an honest baseline.",
      ko: "엄격한 워크포워드 백테스트와 정직한 기준선으로 헨리허브 가격을 1–3개월 앞서 예측합니다.",
    },
    tags: ["LightGBM", "Optuna", "SHAP", "scikit-learn", "pandas"],
    results: [
      { en: "Beat the naive baseline at every horizon", ko: "모든 예측 구간에서 단순 기준선 능가" },
      { en: "Test MAPE 13.6 / 20.6 / 27.0% vs 13.7 / 22.9 / 29.2%", ko: "테스트 MAPE 13.6 / 20.6 / 27.0% (기준선 13.7 / 22.9 / 29.2%)" },
      { en: "SHAP analysis of the misses", ko: "SHAP으로 오차 원인 분석" },
    ],
    problem: {
      en: "A take-home test for an AI company: only ~200 months of history, and a test period with the 2021 Texas freeze and the 2022 price spike.",
      ko: "AI 기업 과제 테스트: 학습 데이터는 약 200개월뿐이고, 테스트 기간에 2021년 텍사스 한파와 2022년 가격 급등이 포함됩니다.",
    },
    points: {
      en: [
        "A leakage assertion checks that no feature looks into the future; every forecast uses only data available at that month.",
        "Ridge and Lasso lost to the random-walk baseline until I reframed the target as the change in price (the lags were almost collinear).",
        "LightGBM per horizon, tuned with Optuna; SHAP shows the model follows momentum and storage and is blind to one-off shocks.",
      ],
      ko: [
        "누수 검증으로 어떤 특징도 미래 정보를 쓰지 않도록 했고, 모든 예측은 해당 시점까지의 데이터만 사용합니다.",
        "Ridge와 Lasso는 시차 변수의 다중공선성 때문에 랜덤워크 기준선에 졌지만, 목표를 가격 변화량으로 바꾸자 해결됐습니다.",
        "예측 구간별 LightGBM을 Optuna로 튜닝했고, SHAP 분석 결과 모델은 추세와 저장량을 따르며 일회성 충격은 예측하지 못합니다.",
      ],
    },
    images: [
      { src: img("gas-price-forecasting", "backtest_h1.png"), cap: { en: "1-month-ahead backtest, 2020–2024", ko: "1개월 앞 백테스트, 2020–2024" } },
      { src: img("gas-price-forecasting", "model_comparison.png"), cap: { en: "Model comparison on validation", ko: "검증 구간 모델 비교" } },
      { src: img("gas-price-forecasting", "architecture.png"), cap: { en: "Pipeline", ko: "파이프라인" } },
    ],
    links: [{ label: "GitHub", href: "https://github.com/askarbekkk/gas-price-forecasting" }],
  },
  {
    slug: "petmedbot",
    badge: { en: "LLM app", ko: "LLM 앱" },
    title: { en: "PetMedBot", ko: "PetMedBot 반려동물 AI 상담" },
    tagline: {
      en: "AI veterinary assistant with chat and photo analysis, where emergencies are caught by code before the model is called.",
      ko: "대화와 사진 분석이 가능한 반려동물 AI 상담. 응급 상황은 모델 호출 전에 코드가 먼저 잡아냅니다.",
    },
    tags: ["Gemini (vision)", "Streamlit", "Prompt design", "Safety rules"],
    results: [
      { en: "Red-flag symptoms → fixed 'go to a vet now' reply", ko: "위험 증상 → 즉시 동물병원 안내 고정 응답" },
      { en: "Never gives medication dosages", ko: "약 용량은 절대 안내하지 않음" },
      { en: "Deployed on Streamlit Cloud", ko: "Streamlit Cloud 배포" },
    ],
    problem: {
      en: "Owners search symptoms at night and either panic or miss real emergencies. An LLM should never be the thing that decides whether a poisoned pet sees a vet.",
      ko: "보호자는 밤에 증상을 검색하다 과하게 걱정하거나 진짜 응급 상황을 놓칩니다. 중독된 반려동물이 병원에 갈지는 LLM이 결정해서는 안 됩니다.",
    },
    points: {
      en: [
        "Plain-code emergency check runs first (poisoning, seizures, bloat, trauma); only safe questions reach Gemini.",
        "Photo analysis for visible symptoms; multi-chat history; vet-tech tone with a follow-up question.",
      ],
      ko: [
        "중독, 발작, 고창증, 외상 등 응급 키워드를 코드가 먼저 확인하고, 안전한 질문만 Gemini로 보냅니다.",
        "눈에 보이는 증상의 사진 분석, 여러 대화 기록, 후속 질문을 하는 수의 테크니션 말투를 갖췄습니다.",
      ],
    },
    images: [
      { src: img("petmedbot", "live_emergency.png"), cap: { en: "Normal answer, then an emergency handled without the LLM", ko: "일반 답변과 LLM 없이 처리된 응급 상황" } },
      { src: img("petmedbot", "architecture.png"), cap: { en: "Request flow", ko: "요청 흐름" } },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/askarbekkk/petmedbot__LLM" },
      { label: "Live", href: "https://petmedbot.streamlit.app" },
    ],
  },
];

export const appProjects = [
  {
    slug: "currency-radar",
    badge: { en: "PWA + Android", ko: "PWA + 안드로이드" },
    title: { en: "Currency Radar", ko: "Currency Radar 환율 앱" },
    tagline: {
      en: "KRW against the Kyrgyz som, dollar and ruble, with alerts and where to exchange.",
      ko: "원화 대비 키르기스 솜·달러·루블 환율, 알림, 환전 장소 비교.",
    },
    tags: ["React 19", "Vite", "Tailwind", "Recharts", "Capacitor", "PWA"],
    results: [
      { en: "Live rates with offline fallback", ko: "실시간 환율과 오프라인 대체값" },
      { en: "Installable PWA and Android app", ko: "설치형 PWA와 안드로이드 앱" },
      { en: "Dark and light theme", ko: "다크·라이트 테마" },
    ],
    problem: {
      en: "People from Central Asia working in Korea send money home and want a quick, mobile view of rates and exchange options.",
      ko: "한국에서 일하는 중앙아시아 출신들은 송금을 위해 휴대폰에서 환율과 환전 방법을 빠르게 확인하고 싶어 합니다.",
    },
    points: {
      en: ["Rate history chart with 7/30/90-day ranges (currently simulated around the live rate; a history API is next), alerts saved on the device, links to Wise and Naver/Google Maps."],
      ko: ["7/30/90일 환율 그래프(현재는 실시간 환율 기준 시뮬레이션, 이력 API 연동 예정), 기기 저장형 알림, Wise와 네이버·구글 지도 연결."],
    },
    images: [
      { src: img("currency-radar", "01_home.png"), cap: { en: "Rates", ko: "환율" }, phone: true },
      { src: img("currency-radar", "02_history.png"), cap: { en: "History", ko: "환율 추이" }, phone: true },
      { src: img("currency-radar", "04_exchangers.png"), cap: { en: "Exchange options", ko: "환전 비교" }, phone: true },
    ],
    links: [{ label: "GitHub", href: "https://github.com/askarbekkk/currency-radar" }],
  },
  {
    slug: "healthchain",
    badge: { en: "Web3", ko: "Web3" },
    title: { en: "HealthChain", ko: "HealthChain 의료기록 dApp" },
    tagline: {
      en: "Patient-controlled medical records: access rights on Ethereum, files on IPFS.",
      ko: "환자가 직접 관리하는 의료 기록: 접근 권한은 이더리움, 파일은 IPFS.",
    },
    tags: ["React", "ethers.js", "MetaMask", "Solidity contracts", "IPFS", "Sepolia"],
    results: [
      { en: "3 roles: patient, doctor, lab", ko: "3개 역할: 환자, 의사, 검사기관" },
      { en: "5 smart contracts on Sepolia", ko: "Sepolia 스마트 컨트랙트 5개" },
      { en: "Live on Vercel", ko: "Vercel 배포" },
    ],
    problem: {
      en: "Medical records are scattered across hospitals and labs, and patients cannot see or control who reads them.",
      ko: "의료 기록이 병원과 검사기관에 흩어져 있고, 환자는 누가 기록을 보는지 확인하거나 통제할 수 없습니다.",
    },
    points: {
      en: ["Patients grant and revoke doctors' access on-chain; doctors and labs add records; files go to IPFS and only content IDs are stored on the blockchain."],
      ko: ["환자가 온체인에서 의사의 접근을 허용·철회하고, 의사와 검사기관이 기록을 추가하며, 파일은 IPFS에 저장하고 블록체인에는 콘텐츠 ID만 기록합니다."],
    },
    images: [
      { src: img("healthchain", "live_landing.png"), cap: { en: "Live site", ko: "실제 사이트" } },
      { src: img("healthchain", "architecture.png"), cap: { en: "Architecture", ko: "아키텍처" } },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/askarbekkk/HealthchainDapp" },
      { label: "Live", href: "https://healthchain-dapp-one.vercel.app" },
    ],
  },
];

export const clientWork = [
  {
    title: { en: "Café chain website", ko: "카페 체인 웹사이트" },
    text: { en: "Multilingual site (UZ / RU / EN) with menu and pricing, branch maps (Google & Yandex) and mobile-app links.", ko: "메뉴·가격, 지점 지도(구글·얀덱스), 앱 링크를 갖춘 다국어(우즈베크어·러시아어·영어) 사이트." },
    tags: ["i18n", "Maps"],
  },
  {
    title: { en: "Web3 token launchpad", ko: "Web3 토큰 런치패드" },
    text: { en: "Frontend for a token launchpad: MetaMask wallet connection and smart-contract calls via ethers.js. No longer online.", ko: "토큰 런치패드 프론트엔드: MetaMask 지갑 연결과 ethers.js 스마트 컨트랙트 호출. 현재는 서비스 종료." },
    tags: ["React", "ethers.js", "MetaMask"],
  },
  {
    title: { en: "CRM systems and admin panels", ko: "CRM 시스템·관리자 패널" },
    text: { en: "Full-stack work: authentication and REST APIs in NestJS, React / Next.js interfaces, maintenance of jQuery pages.", ko: "풀스택 개발: NestJS 인증·REST API, React / Next.js 화면, jQuery 페이지 유지보수." },
    tags: ["Next.js", "NestJS", "REST"],
  },
  {
    title: { en: "Company website (UAE)", ko: "기업 웹사이트 (UAE)" },
    text: { en: "Corporate website built with Next.js.", ko: "Next.js로 만든 기업 웹사이트." },
    tags: ["Next.js"],
  },
  {
    title: { en: "Secure sign-in with Azure AD", ko: "Azure AD 보안 로그인" },
    text: { en: "React app with Microsoft Entra ID sign-in (OAuth 2.0 / OpenID Connect via MSAL), protected routes and Microsoft Graph profile.", ko: "Microsoft Entra ID 로그인(MSAL 기반 OAuth 2.0 / OpenID Connect), 보호 라우트, Microsoft Graph 프로필을 갖춘 React 앱." },
    tags: ["React", "MSAL", "OAuth 2.0"],
  },
];

export const experience = [
  {
    role: { en: "AI Developer Intern", ko: "AI 개발 인턴" },
    org: "Motion Group",
    text: { en: "Built and deployed a RAG assistant over 105 internal documents; 50–300 questions a day on Telegram.", ko: "사내 문서 105개 기반 RAG 어시스턴트를 구축·배포했습니다. 텔레그램에서 하루 50–300개 질문 처리." },
  },
  {
    role: { en: "Frontend Developer", ko: "프론트엔드 개발자" },
    org: "MotionWeb",
    text: { en: "Client websites in React and TypeScript and the frontend of a Web3 launchpad (projects under NDA).", ko: "React·TypeScript 고객사 웹사이트와 Web3 런치패드 프론트엔드 개발 (NDA 프로젝트)." },
  },
  {
    role: { en: "Full-Stack Developer Intern", ko: "풀스택 개발 인턴" },
    org: "NEVIS TECH ITDB (Dubai)",
    text: { en: "CRM systems and admin panels with React / Next.js and NestJS; authentication and REST APIs.", ko: "React / Next.js와 NestJS로 CRM과 관리자 패널 개발, 인증·REST API 구현." },
  },
];

export const education = {
  school: { en: "Woosong University, Endicott College of International Studies", ko: "우송대학교 엔디컷국제대학" },
  degree: { en: "B.S. Artificial Intelligence & Big Data", ko: "인공지능·빅데이터학 학사" },
  courses: { en: "A+ in Generative AI, Understanding LLM, AI & Digital Forensics", ko: "생성형 AI, LLM 이해, AI·디지털 포렌식 A+" },
};

export const skills = [
  { k: { en: "AI / ML", ko: "AI / ML" }, v: "PyTorch · sentence-transformers · Hugging Face · LangChain · YOLOv8 · DeepSORT · OpenCV · LightGBM · scikit-learn · pandas" },
  { k: { en: "LLM systems", ko: "LLM 시스템" }, v: "RAG · hybrid search (BM25 + vectors) · reranking · ChromaDB · Ollama · Gemini / Claude / OpenAI APIs · structured output · evaluation" },
  { k: { en: "Software", ko: "소프트웨어" }, v: "Python · TypeScript · JavaScript · SQL · FastAPI · NestJS · React · Next.js · React Native · Streamlit" },
  { k: { en: "Tools", ko: "도구" }, v: "Git · Linux · Docker · Playwright · GitHub Actions · Vercel · Roboflow · Azure" },
  { k: { en: "Languages", ko: "언어" }, v: "Russian, Kyrgyz (native) · English (advanced) · Korean (basic)" },
];

export const ui = {
  nav: { ai: { en: "AI projects", ko: "AI 프로젝트" }, apps: { en: "Apps & web", ko: "앱·웹" }, exp: { en: "Experience", ko: "경력" }, contact: { en: "Contact", ko: "연락처" } },
  cv: { en: "Download CV", ko: "이력서 다운로드" },
  aiTitle: { en: "AI projects", ko: "AI 프로젝트" },
  aiSub: { en: "Each project lists the problem, what I built, how it works and what I measured.", ko: "각 프로젝트의 문제, 구현 내용, 작동 방식, 측정 결과를 정리했습니다." },
  appsTitle: { en: "Apps & web", ko: "앱·웹 프로젝트" },
  appsSub: { en: "Products I built end to end before and alongside AI work.", ko: "AI 작업 이전과 병행해 처음부터 끝까지 만든 제품입니다." },
  clientTitle: { en: "Client web work", ko: "고객사 웹 작업" },
  clientSub: { en: "Shown without names: these projects are under NDA.", ko: "NDA 프로젝트라 고객사 이름은 표시하지 않습니다." },
  problem: { en: "Problem", ko: "문제" },
  built: { en: "What I built", ko: "구현 내용" },
  more: { en: "Show details", ko: "자세히 보기" },
  less: { en: "Hide details", ko: "접기" },
  expTitle: { en: "Experience", ko: "경력" },
  eduTitle: { en: "Education", ko: "학력" },
  skillsTitle: { en: "Skills", ko: "기술" },
  contactTitle: { en: "Let's talk", ko: "연락하기" },
  contactSub: { en: "I reply in English or Russian; Korean is basic and improving.", ko: "영어 또는 러시아어로 답변드립니다. 한국어는 기초 수준이며 꾸준히 공부하고 있습니다." },
  copy: { en: "Copy email", ko: "이메일 복사" },
  copied: { en: "Copied", ko: "복사됨" },
};
