// Simple i18n for EN / KO
(function(){
  const translations = {
    en: {
      page_title: "Udon System - Smart Noodle Machine",
      header_title: "🍜 Udon System",
      header_subtitle: "Smart Noodle Machine with AI Orchestration",
      header_ros: "ROS 2 + CANopen + STM32 Integration",

      nav_overview: "Overview",
      nav_metrics: "Key Metrics",
      nav_architecture: "Architecture",
      nav_flow: "Order Flow",
      nav_stations: "Station Control",
      nav_safety: "Safety",
      nav_next: "Next Steps",

      overview_title: "Executive Summary",
      overview_intro: "The Udon System is an end-to-end smart noodle machine that combines AI-powered ordering, industrial automation, and real-time quality control to deliver consistent, high-quality meals in under 3 minutes.",

      metrics_title: "Performance Targets",
      metrics_intro: "All system components are designed with strict timing and reliability requirements to ensure consistent customer experience.",

      architecture_title: "System Architecture",
      architecture_intro: "The system follows a layered architecture with clear separation between customer-facing channels, business logic, and hardware control layers.",
      comm_protocols_title: "Communication Protocols",
      station_components_title: "Station Components",

      flow_title: "Complete Order Flow",
      flow_intro: "From customer order to pickup notification, the entire process is orchestrated with redundancy, fault recovery, and quality checks at every step.",
      flow_timing_title: "Detailed Timing Breakdown",

      stations_title: "Station State Management",
      stations_intro: "Each STM32-based station follows a strict state machine with safety interlocks and fault recovery paths.",
      pdo_title: "CANopen PDO Mapping",
      pdo_intro: "Process Data Objects (PDOs) enable real-time, low-latency communication between the orchestrator and station controllers.",

      orchestrator_title: "ROS 2 Orchestrator Job Lifecycle",
      orchestrator_intro: "The orchestrator manages job allocation, resource reservation, and failure recovery using behavior trees and state machines.",
      ros_nodes_title: "Key ROS 2 Nodes",

      sequence_title: "Detailed Cooking Sequence",
      sequence_intro: "Step-by-step message exchange between orchestrator and station controllers during a typical order execution.",

      faults_title: "Fault Detection & Recovery",
      faults_intro: "Comprehensive fault handling ensures system resilience and customer safety.",
      fault_table_title: "Fault Categories & Response Times",

      inventory_title: "Inventory Management",
      inventory_intro: "Real-time tracking and automatic refill alerts ensure uninterrupted operations.",
      tracked_items_title: "Tracked Inventory Items",

      quality_title: "Quality Feedback & Learning",
      quality_intro: "Customer feedback drives continuous improvement through adaptive parameter tuning.",
      feedback_categories_title: "Feedback Categories",
      tunable_params_title: "Tunable Parameters",

      safety_title: "Safety & Security",
      safety_intro: "Multi-layered safety systems protect operators, customers, and equipment.",

      observability_title: "Telemetry & Observability",
      observability_intro: "Comprehensive monitoring enables proactive maintenance and continuous optimization.",
      collected_metrics_title: "Collected Metrics",
      per_station_metrics_title: "Per-Station Metrics",
      per_job_metrics_title: "Per-Job Metrics",
      monitoring_stack_title: "Monitoring Stack",

      deployment_title: "Deployment Architecture",
      deployment_intro: "Production-ready deployment with separation between staging and production environments.",
      edge_computing_title: "Edge Computing",
      mcu_deployment_title: "MCU Deployment",
      env_strategy_title: "Environment Strategy",

      acceptance_title: "Go/No-Go Acceptance Criteria",
      acceptance_intro: "The system must meet all critical criteria before production deployment.",

      next_steps_title: "Next Steps & Deliverables",
      next_steps_intro: "Recommended artifacts for immediate implementation and testing.",

      footer_copy: "© 2025 Udon System Project | ROS 2 + CANopen Integration"
    },
    ko: {
      page_title: "우동 시스템 - 스마트 면 제조기",
      header_title: "🍜 우동 시스템",
      header_subtitle: "AI 오케스트레이션 기반 스마트 면 제조기",
      header_ros: "ROS 2 + CANopen + STM32 통합",

      nav_overview: "개요",
      nav_metrics: "핵심 지표",
      nav_architecture: "아키텍처",
      nav_flow: "주문 흐름",
      nav_stations: "스테이션 제어",
      nav_safety: "안전",
      nav_next: "다음 단계",

      overview_title: "요약",
      overview_intro: "우동 시스템은 AI 기반 주문, 산업 자동화, 실시간 품질 관리를 결합하여 3분 이내에 일관된 고품질의 식사를 제공하는 엔드투엔드 스마트 면 제조기입니다.",

      metrics_title: "성능 목표",
      metrics_intro: "일관된 고객 경험을 위해 모든 시스템 구성 요소는 엄격한 타이밍과 신뢰성 요구 사항을 충족하도록 설계되었습니다.",

      architecture_title: "시스템 아키텍처",
      architecture_intro: "고객 인터페이스, 비즈니스 로직, 하드웨어 제어 계층을 명확히 분리한 계층형 아키텍처를 따릅니다.",
      comm_protocols_title: "통신 프로토콜",
      station_components_title: "스테이션 구성 요소",

      flow_title: "전체 주문 흐름",
      flow_intro: "고객 주문부터 픽업 알림까지 전 과정은 중복, 장애 복구, 품질 점검을 통해 오케스트레이션됩니다.",
      flow_timing_title: "상세 타이밍",

      stations_title: "스테이션 상태 관리",
      stations_intro: "각 STM32 기반 스테이션은 안전 인터록과 장애 복구 경로를 갖춘 엄격한 상태 기계를 따릅니다.",
      pdo_title: "CANopen PDO 매핑",
      pdo_intro: "PDO(프로세스 데이터 오브젝트)는 오케스트레이터와 스테이션 컨트롤러 간의 실시간 저지연 통신을 제공합니다.",

      orchestrator_title: "ROS 2 오케스트레이터 작업 수명주기",
      orchestrator_intro: "오케스트레이터는 행동 트리와 상태 기계를 사용하여 작업 할당, 자원 예약, 장애 복구를 관리합니다.",
      ros_nodes_title: "주요 ROS 2 노드",

      sequence_title: "상세 조리 시퀀스",
      sequence_intro: "일반적인 주문 실행 동안 오케스트레이터와 스테이션 컨트롤러 간의 단계별 메시지 교환.",

      faults_title: "결함 감지 및 복구",
      faults_intro: "포괄적인 결함 처리는 시스템 탄력성과 고객 안전을 보장합니다.",
      fault_table_title: "결함 분류 및 대응 시간",

      inventory_title: "재고 관리",
      inventory_intro: "실시간 추적 및 자동 보충 알림으로 중단 없는 운영을 보장합니다.",
      tracked_items_title: "추적 재고 항목",

      quality_title: "품질 피드백 및 학습",
      quality_intro: "고객 피드백을 통해 적응형 매개변수 튜닝으로 지속적으로 개선합니다.",
      feedback_categories_title: "피드백 범주",
      tunable_params_title: "조정 가능 매개변수",

      safety_title: "안전 및 보안",
      safety_intro: "다층 안전 시스템은 작업자, 고객, 장비를 보호합니다.",

      observability_title: "텔레메트리 및 가시성",
      observability_intro: "포괄적인 모니터링은 사전 예방적 유지보수와 지속적인 최적화를 가능하게 합니다.",
      collected_metrics_title: "수집된 지표",
      per_station_metrics_title: "스테이션별 지표",
      per_job_metrics_title: "작업별 지표",
      monitoring_stack_title: "모니터링 스택",

      deployment_title: "배포 아키텍처",
      deployment_intro: "스테이징과 프로덕션 환경을 분리한 실사용 배포 구조.",
      edge_computing_title: "엣지 컴퓨팅",
      mcu_deployment_title: "MCU 배포",
      env_strategy_title: "환경 전략",

      acceptance_title: "Go/No-Go 승인 기준",
      acceptance_intro: "시스템은 프로덕션 배포 전에 모든 핵심 기준을 충족해야 합니다.",

      next_steps_title: "다음 단계 및 산출물",
      next_steps_intro: "즉시 구현 및 테스트를 위한 권장 산출물.",

      footer_copy: "© 2025 우동 시스템 프로젝트 | ROS 2 + CANopen 통합"
    }
  };

  // Literal content mapping for elements without data-i18n (full KO coverage)
  // key: exact English textContent (trimmed, single-spaced) -> Korean
  const contentMap = {
    // Feature cards
    "🤖 AI Ordering Channels": "🤖 AI 주문 채널",
    "Voice chatbot (KakaoTalk, WhatsApp)": "음성 챗봇 (카카오톡, WhatsApp)",
    "Call center with STT/NLU": "STT/NLU 기반 콜센터",
    "HMI/Kiosk interface": "HMI/키오스크 인터페이스",
    "Real-time payment processing": "실시간 결제 처리",

    "⚙️ Industrial Control": "⚙️ 산업 제어",
    "ROS 2 Humble orchestration": "ROS 2 Humble 오케스트레이션",
    "CANopen protocol (CiA 301)": "CANopen 프로토콜 (CiA 301)",
    "STM32 station controllers": "STM32 스테이션 컨트롤러",
    "Deterministic real-time control": "결정적 실시간 제어",

    "📊 Quality & Learning": "📊 품질 및 학습",
    "Customer feedback loop": "고객 피드백 루프",
    "Adaptive parameter tuning": "적응형 파라미터 조정",
    "A/B testing for recipes": "레시피 A/B 테스트",
    "Telemetry & analytics": "텔레메트리 및 분석",

    // Metrics table
    "Component": "구성 요소",
    "Metric": "지표",
    "Target": "목표",
    "Priority": "우선순위",
    "Order Processing": "주문 처리",
    "Parse & Validate": "파싱 및 검증",
    "Payment Gateway": "결제 게이트웨이",
    "Confirmation Time": "승인 시간",
    "Station Readiness": "스테이션 준비 상태",
    "Health Check": "상태 점검",
    "Heartbeat Monitor": "하트비트 모니터",
    "TPDO Interval": "TPDO 간격",
    "E-Stop Response": "비상 정지 응답",
    "Safe Halt Time": "안전 정지 시간",
    "Cooking Duration": "조리 시간",
    "Recipe Tolerance": "레시피 허용오차",
    "Inventory Alert": "재고 알림",
    "Low Threshold": "임계값",
    "End-to-End": "엔드 투 엔드",
    "Order to Pickup": "주문부터 픽업까지",
    "High": "높음",
    "Medium": "중간",
    "Critical": "치명적",

    // Architecture timeline items
    "CAN Bus: 500 kbps (scalable to 1 Mbps), CANopen CiA 301": "CAN 버스: 500 kbps(최대 1 Mbps 확장), CANopen CiA 301",
    "ROS 2: Humble distribution, DDS middleware": "ROS 2: Humble 배포판, DDS 미들웨어",
    "APIs: REST for orders, WebSocket for real-time updates": "API: 주문은 REST, 실시간 업데이트는 WebSocket",

    // Station components
    "Dispenser: Noodle & soup portion control": "디스펜서: 면·국물 계량 제어",
    "Lift/Basket: Cooking basket automation": "리프트/바스켓: 조리 바스켓 자동화",
    "Conveyor: Bowl positioning & transport": "컨베이어: 그릇 위치 지정 및 이송",
    "Boiler: Temperature & timing control": "보일러: 온도 및 시간 제어",
    "Delivery: Pickup window management": "딜리버리: 픽업 창구 관리",

    // Flow timing
    "t+0s: Order received from customer channel": "t+0초: 고객 채널로부터 주문 수신",
    "t+1s: Order validated and priced": "t+1초: 주문 검증 및 가격 산정",
    "t+4s: Payment confirmed, order in DB": "t+4초: 결제 확인, 주문 DB 기록",
    "t+5s: Job created, stations allocated": "t+5초: 작업 생성, 스테이션 할당",
    "t+10s: Boiler reaches target temp": "t+10초: 보일러 목표 온도 도달",
    "t+15s: Bowl placed, noodles dispensed": "t+15초: 그릇 투입, 면 배출",
    "t+45s: Cooking in progress (monitored)": "t+45초: 조리 진행(모니터링)",
    "t+150s: Soup added, ready for pickup": "t+150초: 국물 추가, 픽업 준비",
    "t+180s: Customer notified, order complete": "t+180초: 고객 알림, 주문 완료",

    // PDO mapping table
    "PDO Type": "PDO 유형",
    "COB-ID": "COB-ID",
    "Data Fields": "데이터 필드",
    "Purpose": "용도",
    "TPDO1 (Transmit)": "TPDO1(송신)",
    "0x180 + Node ID": "0x180 + 노드 ID",
    "Statusword, Position, Sensors": "상태워드, 위치, 센서",
    "Station → Orchestrator status": "스테이션 → 오케스트레이터 상태",
    "RPDO1 (Receive)": "RPDO1(수신)",
    "0x200 + Node ID": "0x200 + 노드 ID",
    "Controlword, Target Position": "제어워드, 목표 위치",
    "Orchestrator → Station commands": "오케스트레이터 → 스테이션 명령",
    "EMCY (Emergency)": "EMCY(비상)",
    "0x080 + Node ID": "0x080 + 노드 ID",
    "Error Code, Register, Data": "오류 코드, 레지스터, 데이터",
    "Fault notification": "결함 알림",
    "Heartbeat": "하트비트",
    "0x700 + Node ID": "0x700 + 노드 ID",
    "State Byte": "상태 바이트",
    "Liveness check (1 Hz)": "생존 확인(1 Hz)",

    // Highlight labels & texts
    "Critical Safety Feature:": "중요 안전 기능:",
    "If a station misses 3 consecutive heartbeats": "스테이션이 하트비트를 3회 연속 놓치면",
    "(3 seconds), the orchestrator marks it as DOWN and either reassigns the job or triggers": "(3초) 오케스트레이터는 상태를 DOWN으로 표시하고 작업을 재할당하거나",
    "a safe shutdown sequence. Hardware E-stop cuts power to all motion and heating elements": "안전 종료 시퀀스를 트리거합니다. 하드웨어 비상 정지는 모든 구동/가열 장치의 전원을",
    "within 200ms.": "200ms 이내에 차단합니다.",

    // Faults table
    "Fault Type": "결함 유형",
    "Example": "예시",
    "Response Time": "응답 시간",
    "Action": "조치",
    "E-Stop, Overtemp, Overcurrent": "비상 정지, 과열, 과전류",
    "Immediate power cut, SAFE_STOP": "즉시 전원 차단, SAFE_STOP",
    "Heartbeat miss (×3), Jam detected": "하트비트 누락(×3), 걸림 감지",
    "Station marked DOWN, job reassigned": "스테이션 DOWN 표시, 작업 재할당",
    "Sensor read error, Timing deviation": "센서 읽기 오류, 타이밍 편차",
    "Retry (max 2×), log incident": "재시도(최대 2회), 사건 기록",
    "Inventory low, Minor quality deviation": "재고 부족, 경미한 품질 편차",
    "Alert operator, adjust parameters": "운영자 알림, 파라미터 조정",

    // Inventory tracked items
    "Noodles": "면",
    "Grams": "그램",
    "Alert at 10kg remaining": "잔량 10kg에서 알림",
    "Soup Base": "국물 베이스",
    "Milliliters": "밀리리터",
    "Alert at 5L remaining": "잔량 5L에서 알림",
    "Bowls": "그릇",
    "Count": "개수",
    "Alert at 20 remaining": "잔량 20개에서 알림",
    "Spices": "향신료",
    "Portions": "포션",
    "Alert at 30 remaining": "잔량 30개에서 알림",

    // Quality feedback lists
    "Ratings (1-5 Stars)": "평점 (1-5 스타)",
    "⭐⭐⭐⭐⭐ Excellent - No changes": "⭐⭐⭐⭐⭐ 최고 - 변경 없음",
    "⭐⭐⭐⭐ Good - Minor tuning": "⭐⭐⭐⭐ 좋음 - 소폭 조정",
    "⭐⭐⭐ Average - Investigate parameters": "⭐⭐⭐ 보통 - 파라미터 점검",
    "⭐⭐ Poor - Significant adjustment needed": "⭐⭐ 미흡 - 큰 조정 필요",
    "⭐ Fail - Flag for quality team review": "⭐ 실패 - 품질팀 검토 대상",
    "Specific Flags": "특정 플래그",
    "🧂 Too Salty → Reduce soup concentration": "🧂 너무 짬 → 국물 농도 낮춤",
    "💧 Too Bland → Increase seasoning": "💧 밍밍함 → 양념 강화",
    "🍜 Too Dry → Increase soup volume": "🍜 너무 건조함 → 국물량 증가",
    "💦 Too Soupy → Decrease soup volume": "💦 너무 국물 많음 → 국물량 감소",
    "🌡️ Temperature Issue → Adjust boiler timing": "🌡️ 온도 문제 → 보일러 타이밍 조정",

    // Tunable parameters table
    "Parameter": "매개변수",
    "Default": "기본값",
    "Range": "범위",
    "Max Daily Delta": "일별 최대 변경량",
    "Boil Duration": "삶기 시간",
    "Soup Volume": "국물량",
    "Spice Amount": "향신료량",
    "Boiler Temp": "보일러 온도",

    // Safety features
    "🛑 Hardware Safety": "🛑 하드웨어 안전",
    "E-stop cuts power to all motors/heaters": "비상 정지 시 모든 모터/히터 전원 차단",
    "Hardware interlocks on all motion systems": "모든 구동계 하드웨어 인터록",
    "Temperature sensors with auto-shutoff": "온도 센서 및 자동 차단",
    "Pressure relief valves on boiler": "보일러 압력 릴리프 밸브",
    "Physical guards on rotating equipment": "회전 장치 물리적 가드",
    "🔒 Software Safety": "🔒 소프트웨어 안전",
    "Watchdog timers on all MCUs": "모든 MCU에 워치독 타이머",
    "CAN bus-off recovery": "CAN 버스 오프 복구",
    "Message sequence counters": "메시지 시퀀스 카운터",
    "State machine validation": "상태 기계 검증",
    "Bounded parameter ranges": "경계가 있는 파라미터 범위",
    "🔐 Cybersecurity": "🔐 사이버 보안",
    "PCI-compliant payment processing": "PCI 준수 결제 처리",
    "TLS 1.3 for all external APIs": "모든 외부 API에 TLS 1.3",
    "Role-based access control (RBAC)": "역할 기반 접근 제어(RBAC)",
    "Audit logs for all maintenance ops": "모든 유지보수 작업 감사 로그",
    "Air-gapped control network option": "에어갭 제어 네트워크 옵션",

    // Safety certification highlight
    "Safety Certification Target:": "안전 인증 목표:",
    "The system is designed to meet IEC 61508 (Functional Safety) and ISO 13849 (Safety of Machinery) standards for food processing equipment.": "이 시스템은 식품 가공 장비에 대한 IEC 61508(기능 안전) 및 ISO 13849(기계 안전) 기준 충족을 목표로 설계되었습니다.",

    // Observability lists
    "Per-Station Metrics": "스테이션별 지표",
    "📊 Cycle times & throughput": "📊 사이클 시간 및 처리량",
    "⚡ Motor current & power consumption": "⚡ 모터 전류 및 전력 소모",
    "🌡️ Temperature profiles": "🌡️ 온도 프로파일",
    "🔧 Fault codes & error rates": "🔧 결함 코드 및 오류율",
    "💓 Heartbeat latency": "💓 하트비트 지연",
    "Per-Job Metrics": "작업별 지표",
    "⏱️ End-to-end latency": "⏱️ 엔드 투 엔드 지연",
    "✅ Success vs abort rate": "✅ 성공/중단 비율",
    "🔄 Retry & reassignment count": "🔄 재시도 및 재할당 횟수",
    "🎯 Quality score distribution": "🎯 품질 점수 분포",
    "📦 Ingredient consumption": "📦 재료 소비량",

    // Monitoring stack table rows
    "Metrics Collection": "메트릭 수집",
    "Real-time time-series metrics": "실시간 시계열 메트릭",
    "Event Logging": "이벤트 로깅",
    "Full message replay capability": "전체 메시지 재생 기능",
    "Visualization": "시각화",
    "Live KPI monitoring": "실시간 KPI 모니터링",
    "Alerting": "알림",
    "Threshold-based notifications": "임계값 기반 알림",
    "Long-term Storage": "장기 저장소",
    "Historical analysis & trends": "과거 분석 및 추세",

    // Deployment
    "Edge Computing": "엣지 컴퓨팅",
    "Hardware:": "하드웨어:",
    "Industrial PC or NVIDIA Jetson": "산업용 PC 또는 NVIDIA Jetson",
    "OS:": "운영체제:",
    "Ubuntu 22.04 (ROS 2 Humble base)": "Ubuntu 22.04(ROS 2 Humble 기반)",
    "Containers:": "컨테이너:",
    "Docker Compose for all ROS 2 nodes": "모든 ROS 2 노드에 Docker Compose",
    "Networking:": "네트워킹:",
    "Isolated CAN subnet + external API gateway": "분리된 CAN 서브넷 + 외부 API 게이트웨이",

    "MCU Deployment": "MCU 배포",
    "Platform:": "플랫폼:",
    "OTA:": "OTA:",
    "Firmware updates via CANopen SDO": "CANopen SDO를 통한 펌웨어 업데이트",
    "Bootloader:": "부트로더:",
    "UART fallback for recovery": "복구용 UART 폴백",
    "Debug:": "디버그:",
    "SWD interface + RTT logging": "SWD 인터페이스 + RTT 로깅",

    // Environment strategy table
    "Environment": "환경",
    "Purpose": "목적",
    "Configuration": "구성",
    "Staging": "스테이징",
    "Pre-production testing & CI/CD": "사전 배포 테스트 및 CI/CD",
    "Production": "프로덕션",
    "Live customer orders": "실 주문 처리",
    "Real hardware stations + full monitoring": "실제 하드웨어 스테이션 + 전체 모니터링",
    "Development": "개발",
    "Local developer testing": "로컬 개발자 테스트",
    "Docker Compose + mocked stations": "Docker Compose + 모의 스테이션",

    // Acceptance table
    "Criteria": "기준",
    "Test Method": "테스트 방법",
    "Status": "상태",
    "End-to-End Latency": "엔드 투 엔드 지연",
    "< 3 min median": "< 3분 중앙값",
    "100 consecutive orders in staging": "스테이징에서 연속 100건 주문",
    "Success Rate": "성공률",
    "> 95%": "> 95%",
    "500 orders with fault injection": "결함 주입 조건에서 500건 주문",
    "Hardware timing measurement": "하드웨어 타이밍 측정",
    "Heartbeat Miss Detection": "하트비트 누락 감지",
    "3× miss → safe halt": "3회 누락 → 안전 정지",
    "Simulated node failures": "노드 실패 시뮬레이션",
    "Jam Recovery": "걸림(잼) 복구",
    "Auto-recover in ≤ 2 retries": "최대 2회 재시도 내 자동 복구",
    "Induced jams on dispenser": "디스펜서에 인위적 걸림 유도",
    "≤ 5 s from threshold": "임계 도달 후 ≤ 5초",
    "Simulated consumption spike": "소비 급증 시뮬레이션",
    "Feedback Loop": "피드백 루프",
    "Parameters within guardrails": "가드레일 내 파라미터 유지",
    "1000 feedback samples processed": "피드백 1000건 처리",
    "Payment Security": "결제 보안",
    "PCI-compliant": "PCI 준수",
    "Third-party security audit": "타사 보안 감사",
    "Pending": "대기",

    // Next steps cards
    "1️⃣ Behavior Tree Implementation": "1️⃣ 행동 트리 구현",
    "BehaviorTree.CPP XML for station_coordinator": "station_coordinator용 BehaviorTree.CPP XML",
    "Sequence nodes for cook flow": "조리 흐름 시퀀스 노드",
    "Fallback nodes for fault recovery": "장애 복구용 폴백 노드",
    "Decorator nodes for timing/retries": "타이밍/재시도 데코레이터 노드",
    "2️⃣ CANopen Configuration": "2️⃣ CANopen 구성",
    "Complete Object Dictionary (EDS files)": "완전한 오브젝트 사전(EDS 파일)",
    "PDO mapping for each station type": "스테이션 유형별 PDO 매핑",
    "EMCY and heartbeat setup": "EMCY 및 하트비트 설정",
    "SDO server configuration": "SDO 서버 구성",
    "3️⃣ ROS 2 Package Skeleton": "3️⃣ ROS 2 패키지 스켈레톤",
    "order_manager node structure": "order_manager 노드 구조",
    "inventory_core with SQL backend": "SQL 백엔드의 inventory_core",
    "quality_monitor feedback aggregation": "quality_monitor 피드백 집계",
    "Launch files & config YAMLs": "런치 파일 및 구성 YAML",
    "4️⃣ Test Harness": "4️⃣ 테스트 하니스",
    "Station simulators publishing TPDOs": "TPDO를 발행하는 스테이션 시뮬레이터",
    "Fault injection framework": "결함 주입 프레임워크",
    "Heartbeat timing tests": "하트비트 타이밍 테스트",
    "End-to-end integration tests": "엔드 투 엔드 통합 테스트"
  };

  function normalizeText(s){
    return s.replace(/\s+/g,' ').trim();
  }

  function translateContentLiterals(lang){
    const skipSelectors = ['.code-block', '.mermaid'];
    const shouldSkip = (node) => {
      return skipSelectors.some(sel => node.closest && node.closest(sel));
    };
    if (lang === 'ko') {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node){
          if (!node.parentElement) return NodeFilter.FILTER_REJECT;
          if (shouldSkip(node.parentElement)) return NodeFilter.FILTER_REJECT;
          const txt = normalizeText(node.textContent || '');
          if (!txt) return NodeFilter.FILTER_REJECT;
          if (contentMap[txt]) return NodeFilter.FILTER_ACCEPT;
          return NodeFilter.FILTER_REJECT;
        }
      });
      const toTranslate = [];
      while (walker.nextNode()) toTranslate.push(walker.currentNode);
      toTranslate.forEach(node => {
        if (!node.parentElement.getAttribute('data-i18n-orig')){
          node.parentElement.setAttribute('data-i18n-orig', node.textContent);
        }
        const key = normalizeText(node.textContent);
        node.textContent = contentMap[key] || node.textContent;
      });
    } else { // restore original English literals if saved
      document.querySelectorAll('[data-i18n-orig]').forEach(el => {
        const orig = el.getAttribute('data-i18n-orig');
        if (typeof orig === 'string') {
          // Replace only if element contains only text (no children)
          if (el.childNodes.length === 1 && el.firstChild.nodeType === Node.TEXT_NODE) {
            el.textContent = orig;
          }
        }
        el.removeAttribute('data-i18n-orig');
      });
    }
  }

  function applyTranslations(lang){
    const dict = translations[lang] || translations.en;
    // Update title
    if (dict.page_title) document.title = dict.page_title;

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Update text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key] || translations.en[key];
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });

    // Update switcher button active state
    const enBtn = document.getElementById('lang-en');
    const koBtn = document.getElementById('lang-ko');
    if (enBtn && koBtn) {
      if (lang === 'ko') {
        koBtn.classList.add('active');
        enBtn.classList.remove('active');
      } else {
        enBtn.classList.add('active');
        koBtn.classList.remove('active');
      }
    }

    // Apply literal content translations for remaining texts
    translateContentLiterals(lang);
  }

  function setLanguage(lang){
    const supported = ['en','ko'];
    const chosen = supported.includes(lang) ? lang : 'en';
    localStorage.setItem('lang', chosen);
    applyTranslations(chosen);
  }

  function initI18n(){
    // Determine default language
    const saved = localStorage.getItem('lang');
    const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    const defaultLang = saved || (browser.startsWith('ko') ? 'ko' : 'en');

    // Wire buttons
    const enBtn = document.getElementById('lang-en');
    const koBtn = document.getElementById('lang-ko');
    if (enBtn) enBtn.addEventListener('click', () => setLanguage('en'));
    if (koBtn) koBtn.addEventListener('click', () => setLanguage('ko'));

    // Apply
    setLanguage(defaultLang);
  }

  // expose
  window.initI18n = initI18n;
})();
