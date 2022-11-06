const quotes = [
  {
    quote: "성공은 열심히 노력하며 기다리는 사람에게 찾아온다.",
    author: "토마스 A. 에디슨",
  },
  {
    quote: "승리는 가장 끈기있는 자에게 돌아간다.",
    author: "나폴레옹 보나파르트",
  },
  {
    quote:
      "성공은 자연연소의 결과가 아니다. 먼저 자기 자신에게 불을 지펴야 한다.",
    author: "레기 리치",
  },
  {
    quote: "성공하기까지는 항상 실패를 거친다.",
    author: "미키 루니",
  },
  {
    quote:
      "성공은 형편없는 선생이다. 똑똑한 사람들로 하여금 절대 패할 수 없다고 착각하게 만든다.",
    author: "빌 게이츠",
  },
  {
    quote: "창의성의 비밀은 자신의 창의력의 원천을 숨길 줄 아는 것이다.",
    author: "알버트 아인슈타인",
  },
  {
    quote:
      "우연은 항상 강력하다. 항상 낚싯 바늘을 던져두라. 전혀 기대하지 않은 곳에 물고기가 있을 것이다.",
    author: "오비디우스",
  },
  {
    quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라.",
    author: "제임스 딘",
  },
  {
    quote: "그 여정이 바로 보상이다.",
    author: "스티브 잡스",
  },
  {
    quote: "위험은 자신이 무엇을 하는지 모르는 데서 온다.",
    author: "워렌 버핏",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
