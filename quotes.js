const quotes = [
    {quote : "아무도 신뢰하지 않는 자는 누구의 신뢰도 받지 못한다.",
    author : "제롬 블래트너"},

    {qoute : "지혜로 향하는 첫걸음은 모든 것에 대해 질문하는 것이고 마지막 걸음은 모든 것을 그대로 수용하는 것이다.",
    author : "게오로크 크리스토프 리히텐베그"},

    {quote : "경험은 인간에게 일어나는 일이 아니라, 일어나는 일에 대해 인간이 하는 행동이다.",
    author : "올더스 헉슬리"},

    {quote : "나는 모든 것을 가졌지만, 아무것도 가지지 않았고, 아무것도 가지지 않았지만 그 무엇도 필요로 하지 않는다.",
    author : "테렌스"},

    {quote : "상처는 잊어라. 은혜는 결코 잊지 말라.",
    author : "공자"},

    {quote : "평등은 인간 조직이 만들어낸 결과물이다. 우리는 평등하게 태어나지 않았다.",
    author : "한나 아렌트"},

    {quote : "멋진 답이 떠오르지 않을 때는 침묵이 금이다.",
    author : "무하마드 알리"},

    {quote : "웃을 수 없다면 우리는 모두 돌아버릴 것이다.",
    author : "지미 버핏"},

    {quote : "나는 오직 하나의 자유를 알고 있다. 그것은 정신의 자유다.",
    author : "생텍쥐페리"},

    {quote : "진정한 미덕은 이성이 인도하는 삶이다.",
    author : "바뤼흐 스피노자"}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;