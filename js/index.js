//Language Change
const languageChange = (event, languageObj) => {
  const button = event.currentTarget.querySelector("#languagebutton");
  const language = event.currentTarget.querySelector("#languagemodeindicator");

  if (languageObj.value) {
    // korea
    languageObj.value = false;

    button.style.left = "42px";

    language.textContent = "ENGLISH";
    language.style.left = "8px";
  } else {
    // english
    languageObj.value = true;

    button.style.left = "3px";

    language.textContent = "KOREA";
    language.style.left = "14px";
  }

  return languageObj.value;
};
//Language Change

//Text Change
const textChange = (event, textObj) => {
  const button = event.currentTarget.querySelector("#textbutton");
  const text = event.currentTarget.querySelector("#textmodeindicator");

  if (textObj.value) {
    // SENTENCE
    textObj.value = false;

    button.style.left = "42px";

    text.textContent = "PARAGRAPH";
    text.style.left = "-2px";
  } else {
    // PARAGRAPH
    textObj.value = true;

    button.style.left = "3px";

    text.textContent = "SENTENCE";
    text.style.left = "2px";
  }

  return textObj.value;
};
//Text Change

//Mode Change
const modeChange = (event, modeObj, modetoggle, background) => {
  const button = event.currentTarget.querySelector("#button");
  const text = event.currentTarget.querySelector("#indicator");

  if (modeObj.value) {
    // light
    modeObj.value = false;

    text.textContent = "DARK";
    text.style.color = "rgb(199, 199, 199)";
    button.style.left = "65px";

    background.querySelector("#clickimg").src =
      "./icon/icons8-천연-사용자-인터페이스-(2)-50 (1).png";
    background.querySelector("#develop > a > img").src =
      "./icon/icons8-github의-48 (1).png";
    background.querySelector("#comment > img").src =
      "./icon/icons8-야후!-96(1).png";
    const footprints = background.querySelectorAll(
      ".keyboard-base > div > img"
    );
    footprints.forEach((footprint) => {
      footprint.src = "./icon/icons8-개-발자국-64.png";
    });

    background.style.backgroundColor = "rgb(24, 24, 24)";
    background.querySelector("#logo > h1").style.color = "rgb(199, 199, 199)";

    background.querySelector("#help").style.backgroundColor = "rgb(82, 82, 82)";
    background.querySelector("#help > #footone").style.backgroundColor =
      "rgb(82, 82, 82)";
    background.querySelector("#help > #foottwo").style.backgroundColor =
      "rgb(82, 82, 82)";
    background.querySelector("#help > #footthree").style.backgroundColor =
      "rgb(82, 82, 82)";
    background.querySelector("#help > #questionmark").style.color =
      "rgb(199, 199, 199)";

    const divs1 = background.querySelectorAll("#workspace > #modebox > div");
    const imgs = background.querySelectorAll(
      "#workspace > #modebox > div > img"
    );
    divs1.forEach((div) => {
      div.style.backgroundColor = "rgb(82, 82, 82)";
    });
    imgs.forEach((img) => {
      img.style.filter =
        "invert(82%) sepia(9%) saturate(0%) hue-rotate(309deg) brightness(95%) contrast(96%)";
    });

    background.querySelector(
      "#workspace > #modebox > #languagemode > #languagetoggle"
    ).style.backgroundColor = "rgb(199, 199, 199)";
    background.querySelector(
      "#workspace > #modebox > #languagemode > #languagetoggle > #languagebutton"
    ).style.backgroundColor = "rgb(82, 82, 82)";
    background.querySelector(
      "#workspace > #modebox > div > #languagetoggle > #languagemodeindicator"
    ).style.color = "rgb(199, 199, 199)";

    background.querySelector(
      "#workspace > #modebox > #textmode > #texttoggle"
    ).style.backgroundColor = "rgb(199, 199, 199)";
    background.querySelector(
      "#workspace > #modebox > #textmode > #texttoggle > #textbutton"
    ).style.backgroundColor = "rgb(82, 82, 82)";
    background.querySelector(
      "#workspace > #modebox > div > #texttoggle > #textmodeindicator"
    ).style.color = "rgb(199, 199, 199)";

    background.querySelector(
      "#workspace > #modebox > div > #settingmodeindicator"
    ).style.color = "rgb(199, 199, 199)";
    background.querySelector("#settingmode > #left").style.color =
      "rgb(199, 199, 199)";
    background.querySelector("#settingmode > #right").style.color =
      "rgb(199, 199, 199)";
    background.querySelector("#settingmode > #repeatcount").style.color =
      "rgb(199, 199, 199)";

    background.querySelector("#workspace > #indicator").style.backgroundColor =
      "rgb(82, 82, 82)";
    const spans1 = background.querySelectorAll("#indicator > div > span");
    spans1.forEach((span) => {
      span.style.color = "rgb(199, 199, 199)";
    });
    background.querySelector(
      "#workspace > #indicator > #speed"
    ).style.borderBottom = "1px solid rgb(24, 24, 24)";
    background.querySelector(
      "#workspace > #indicator > #speed"
    ).style.borderRight = "1px solid rgb(24, 24, 24)";

    background.querySelector(
      "#workspace > #indicator > #record"
    ).style.borderLeft = "1px solid rgb(24, 24, 24)";
    background.querySelector("#record > #recordcheck").style.color =
      "rgb(199, 199, 199) ";
    const lis = background.querySelectorAll("#record > #recordcheck > li");
    lis.forEach((li) => {
      li.querySelector("#speedtext").style.color = "rgb(199, 199, 199)";
      li.querySelector("#accuracytext").style.color = "rgb(199, 199, 199)";
    });
    // background.querySelector(
    //   "#record > #recordcheck > li > #speedtext"
    // ).style.color = "rgb(199, 199, 199)";
    // background.querySelector(
    //   "#record > #recordcheck > li > #accuracytext"
    // ).style.color = "rgb(199, 199, 199)";
    background.querySelector(
      "#workspace > #indicator > #accuracy"
    ).style.borderTop = "1px solid rgb(24, 24, 24)";
    background.querySelector(
      "#workspace > #indicator > #accuracy"
    ).style.borderRight = "1px solid rgb(24, 24, 24)";

    background.querySelector("#typingspace").style.backgroundColor =
      "rgb(82, 82, 82)";
    background.querySelector("#typingspace > input").style.color =
      "rgb(199, 199, 199)";
    background.querySelector("#typingspace > input").style.borderBottom =
      "3px solid rgb(199, 199, 199)";
    background.querySelector("#typingspace > input").style.caretColor =
      "rgb(199, 199, 199)";

    background.querySelector("#modetoggle").style.backgroundColor =
      "rgb(82, 82, 82)";
    background.querySelector("#button").style.backgroundColor =
      "rgb(199, 199, 199)";

    background.querySelector("#result > #click > #clicktext").style.color =
      "rgb(65, 65, 65)";
    background.querySelector("#resultcard").style.backgroundColor =
      "rgb(65, 65, 65)";
    background.querySelector("#title").style.color = "rgb(199, 199, 199)";
    background.querySelector("#maxspeed").style.borderTop =
      "2px solid rgb(199, 199, 199)";
    background.querySelector("#maxspeed").style.borderBottom =
      "2px solid rgb(199, 199, 199)";
    background.querySelector("#maxspeed > #maxstitle").style.color =
      "rgb(199, 199, 199)";
    background.querySelector("#maxspeed > #maxspeedtext").style.color =
      "rgb(199, 199, 199)";
    background.querySelector("#saresult").style.borderBottom =
      "2px solid rgb(199, 199, 199)";
    background.querySelector("#saresult > #sbox > #stitle").style.color =
      "rgb(199, 199, 199)";
    background.querySelector("#saresult > #sbox > #sresulttext").style.color =
      "rgb(199, 199, 199)";
    background.querySelector("#saresult > #abox > #atitle").style.color =
      "rgb(199, 199, 199)";
    background.querySelector("#saresult > #abox > #aresulttext").style.color =
      "rgb(199, 199, 199)";
    background.querySelector("#comment > #escape").style.borderBottom =
      "1px solid rgb(199, 199, 199)";

    const keys = background.querySelectorAll(".key");
    keys.forEach((key) => {
      key.style.backgroundColor = "rgb(82, 82, 82)";
      key.style.color = "rgb(199, 199, 199)";
    });
    const commands = background.querySelectorAll(".command");
    const alts = background.querySelectorAll(".alt");
    commands.forEach((command) => {
      command.style.backgroundColor = "rgb(24, 24, 24)";
    });
    alts.forEach((alt) => {
      alt.style.backgroundColor = "rgb(24, 24, 24)";
    });
    background.querySelector(".leftctrl").style.backgroundColor =
      "rgb(24, 24, 24)";
    background.querySelector(".rightctrl").style.backgroundColor =
      "rgb(24, 24, 24)";

    background.querySelector("#developer").style.color = "rgb(199, 199, 199)";
  } else {
    // dark
    modeObj.value = true;

    text.textContent = "LIGHT";
    text.style.color = "rgb(158, 144, 114)";
    button.style.left = "5px";

    background.querySelector("#clickimg").src =
      "./icon/icons8-천연-사용자-인터페이스-(2)-50.png";
    background.querySelector("#develop > a > img").src =
      "./icon/icons8-github의-48.png";
    background.querySelector("#comment > img").src =
      "./icon/icons8-야후!-96.png";
    const footprints = background.querySelectorAll(
      ".keyboard-base > div > img"
    );
    footprints.forEach((footprint) => {
      footprint.src = "./icon/icons8-고양이-발자국-48.png";
    });

    background.style.backgroundColor = "rgb(230, 223, 188)";
    background.querySelector("#logo > h1").style.color = "rgb(116, 105, 83)";

    background.querySelector("#help").style.backgroundColor =
      "rgb(158, 144, 114)";
    background.querySelector("#help > #footone").style.backgroundColor =
      "rgb(158, 144, 114)";
    background.querySelector("#help > #foottwo").style.backgroundColor =
      "rgb(158, 144, 114)";
    background.querySelector("#help > #footthree").style.backgroundColor =
      "rgb(158, 144, 114)";
    background.querySelector("#help > #questionmark").style.color =
      "rgb(230, 223, 188)";

    const divs = background.querySelectorAll("#workspace > #modebox > div");
    const imgs = background.querySelectorAll(
      "#workspace > #modebox > div > img"
    );
    divs.forEach((div) => {
      div.style.backgroundColor = "rgb(158, 144, 114)";
    });
    imgs.forEach((img) => {
      img.style.filter =
        "invert(95%) sepia(3%) saturate(2305%) hue-rotate(7deg) brightness(95%) contrast(92%)";
    });

    background.querySelector(
      "#workspace > #modebox > #languagemode > #languagetoggle"
    ).style.backgroundColor = "rgb(230, 223, 188)";
    background.querySelector(
      "#workspace > #modebox > #languagemode > #languagetoggle > #languagebutton"
    ).style.backgroundColor = "rgb(158, 144, 114)";
    background.querySelector(
      "#workspace > #modebox > div > #languagetoggle > #languagemodeindicator"
    ).style.color = "rgb(230, 223, 188)";

    background.querySelector(
      "#workspace > #modebox > #textmode > #texttoggle"
    ).style.backgroundColor = "rgb(230, 223, 188)";
    background.querySelector(
      "#workspace > #modebox > #textmode > #texttoggle > #textbutton"
    ).style.backgroundColor = "rgb(158, 144, 114)";
    background.querySelector(
      "#workspace > #modebox > div > #texttoggle > #textmodeindicator"
    ).style.color = "rgb(230, 223, 188)";

    background.querySelector(
      "#workspace > #modebox > div > #settingmodeindicator"
    ).style.color = "rgb(230, 223, 188)";
    background.querySelector("#settingmode > #left").style.color =
      "rgb(230, 223, 188)";
    background.querySelector("#settingmode > #right").style.color =
      "rgb(230, 223, 188)";
    background.querySelector("#settingmode > #repeatcount").style.color =
      "rgb(230, 223, 188)";

    background.querySelector("#workspace > #indicator").style.backgroundColor =
      "rgb(158, 144, 114)";
    const spans1 = background.querySelectorAll("#indicator > div > span");
    spans1.forEach((span) => {
      span.style.color = "rgb(230, 223, 188)";
    });
    background.querySelector(
      "#workspace > #indicator > #speed"
    ).style.borderBottom = "1px solid rgb(230, 223, 188)";
    background.querySelector(
      "#workspace > #indicator > #speed"
    ).style.borderRight = "1px solid rgb(230, 223, 188)";

    background.querySelector(
      "#workspace > #indicator > #record"
    ).style.borderLeft = "1px solid rgb(230, 223, 188)";
    background.querySelector("#record > #recordcheck").style.color =
      "1px solid rgb(230, 223, 188)";
    const lis = background.querySelectorAll("#record > #recordcheck > li");
    lis.forEach((li) => {
      li.querySelector("#speedtext").style.color = "rgb(230, 223, 188)";
      li.querySelector("#accuracytext").style.color = "rgb(230, 223, 188)";
    });
    // background.querySelector(
    //   "#record > #recordcheck > li > #speedtext"
    // ).style.color = "rgb(230, 223, 188)";
    // background.querySelector(
    //   "#record > #recordcheck > li > #accuracytext"
    // ).style.color = "rgb(230, 223, 188)";
    background.querySelector(
      "#workspace > #indicator > #accuracy"
    ).style.borderTop = "1px solid rgb(230, 223, 188)";
    background.querySelector(
      "#workspace > #indicator > #accuracy"
    ).style.borderRight = "1px solid rgb(230, 223, 188)";

    background.querySelector("#typingspace").style.backgroundColor =
      "rgb(158, 144, 114)";
    background.querySelector("#typingspace > input").style.color =
      "rgb(230, 223, 188)";
    background.querySelector("#typingspace > input").style.borderBottom =
      "3px solid rgb(230, 223, 188)";
    background.querySelector("#typingspace > input").style.caretColor =
      "rgb(230, 223, 188)";

    background.querySelector("#modetoggle").style.backgroundColor =
      "rgb(158, 144, 114)";
    background.querySelector("#button").style.backgroundColor =
      "rgb(230, 223, 188)";

    background.querySelector("#result > #click > #clicktext").style.color =
      "rgb(116, 105, 83)";
    background.querySelector("#resultcard").style.backgroundColor =
      "rgb(116, 105, 83)";
    background.querySelector("#title").style.color = "rgb(230, 223, 188)";
    background.querySelector("#maxspeed").style.borderTop =
      "2px solid rgb(230, 223, 188)";
    background.querySelector("#maxspeed").style.borderBottom =
      "2px solid rgb(230, 223, 188)";
    background.querySelector("#maxspeed > #maxstitle").style.color =
      "rgb(230, 223, 188)";
    background.querySelector("#maxspeed > #maxspeedtext").style.color =
      "rgb(230, 223, 188)";
    background.querySelector("#saresult").style.borderBottom =
      "2px solid rgb(230, 223, 188)";
    background.querySelector("#saresult > #sbox > #stitle").style.color =
      "rgb(230, 223, 188)";
    background.querySelector("#saresult > #sbox > #sresulttext").style.color =
      "rgb(230, 223, 188)";
    background.querySelector("#saresult > #abox > #atitle").style.color =
      "rgb(230, 223, 188)";
    background.querySelector("#saresult > #abox > #aresulttext").style.color =
      "rgb(230, 223, 188)";
    background.querySelector("#comment > #escape").style.borderBottom =
      "1px solid rgb(230, 223, 188)";

    const keys = background.querySelectorAll(".key");
    keys.forEach((key) => {
      key.style.backgroundColor = "rgb(158, 144, 114)";
      key.style.color = "rgb(230, 223, 188)";
    });
    const commands = background.querySelectorAll(".command");
    const alts = background.querySelectorAll(".alt");
    commands.forEach((command) => {
      command.style.backgroundColor = "rgb(230, 223, 188)";
    });
    alts.forEach((alt) => {
      alt.style.backgroundColor = "rgb(230, 223, 188)";
    });
    background.querySelector(".leftctrl").style.backgroundColor =
      "rgb(230, 223, 188)";
    background.querySelector(".rightctrl").style.backgroundColor =
      "rgb(230, 223, 188)";

    background.querySelector("#developer").style.color = "rgb(158, 144, 114)";
  }

  return modeObj.value;
};
//Mode Change

//Repeat Change
const repeatChange = (event, index) => {
  const settingmode = event.currentTarget.parentNode;
  const repeat = settingmode.querySelector("#repeatcount");
  let repeatcount = [5, 10, 15, "∞"];
  let result = repeatcount[index % 4];

  repeat.textContent = result;

  if (result === "∞") {
    result = 9999;
    repeat.style.top = "7px";
  } else {
    repeat.style.top = "10px";
  }

  return result;
};
//Repeat Change

//Typing Word
const typing_word = (object, language, text) => {
  //Korea_SENTENCE
  koreaSentence = [
    "진정한 사랑은 영원히 자신을 성장시키는 경험이다.",
    "중요한 것은 사랑을 받는 것이 아니라 사랑을 하는 것이었다.",
    "누군가를 사랑한다는 것은 자신을 그와 동일시 하는 것이다.",
    "사랑은 우리가 원해서 피우는 폭발하는 시가이다.",
    "마음에 대해 논할 때, 자기 기만에 대해서는 할 말이 많다.",
    "진정한 힘은 영혼을 다스리는 것이다.",
    "삶이 있는 한 희망은 있다.",
    "성공의 비밀은 처음과 같은 마음으로 일하는 것이다.",
    "미소는 인간이 가진 가장 큰 재산이다.",
    "노력 없이 얻을 수 있는 것은 없다.",
    "한 걸음 한 걸음이야말로 시작이다.",
    "가장 어려운 순간일수록 나 자신을 믿어야 한다.",
    "작은 변화가 큰 성취로 이어진다.",
    "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    "오늘 나무 그늘이 되어 내일 나무가 되기를.",
    "계획이 없는 목표는 소망일 뿐이다.",
    "인내는 성공의 열쇠이다.",
    "끊임없이 발전하라. 지식은 무한하다.",
    "배우자, 실행하라, 성공하라, 다시 시작하라.",
    "나는 생각한다, 고로 나는 존재한다.",
    "기회는 새와 같은 것, 날아가기 전에 꼭 잡아라.",
    "노력하는 사람은 언제나 희망을 가지고 있습니다.",
    "계획 없는 목표는 단지 희망에 불과하다.",
    "성공한 사람이 되기 위해서는 성공하지 못한 적이 많아야 한다.",
    "삶이 있는 한 희망은 있다.",
    "오늘 어제로부터 나아지고, 내일은 오늘보다 더 나아질 것이다.",
    "작은 구멍 하나가 큰 배를 침몰시킨다.",
    "오늘 하루는 내일의 시작입니다.",
    "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
    "우리의 인내는 우리의 최고의 보물이다.",
    "나비를 잡으려 하지 말고, 정원을 가꾸어야 한다.",
  ];
  //Korea_PARAGRAPH
  koreaParagraph = [
    "꽃 피는 언덕에는 어린이의 발자욱이 가장 많다.",
    "그림자 없이 빛날 수 없다.",
    "최선을 다해 했을 때, 그때 비로소 인생의 의미를 찾게 된다.",
    "시간을 선택하는 것이 아니라, 시간과 어울리는 사람이 되어야 한다.",
    "인생은 어떤 것을 기다리고 있을 때가 아니라, 어떤 일을 기다리는 동안에 일어나는 일들이다.",
    "죽음은 마지막 꿈을 꾼 후에도 살아 있는 힘이다.",
    "사랑은 할 때마다 늘어난다.",
    "아무리 멀리 떨어져 있더라도 가슴은 가까운 곳에서 울부짖는다.",
    "최선을 다해 실패한 것은 참으로 영광스러운 일이다.",
    "사람이 사랑할 때에는 아무 말도 필요하지 않다.",
    "나무가 넘어지면 아무나 흔들린다.",
    "빛이 없어도 어둠은 없다.",
    "포기하지 않으면 반드시 기회는 온다.",
    "행복은 어떤 일이 아니라 태도에서 비롯된다.",
    "죽음보다 무서운 게 삶이다.",
    "꿈은 이루어질 때가 아니라 키워지는 동안 행복하다.",
    "새처럼 하늘을 나는 사람이 있으니 나는 아직 자유롭지 못한 것 같다.",
    "예술은 모든 언어의 가장 화려한 고백이다.",
    "강한 인간은 그림자도 스스로 만들어낸다.",
    "행복한 사람들은 누구든 무엇이든 감사할 수 있는 방법을 찾아낸다.",
  ];
  //English_SENTENCE
  englishSentence = [
    "The only true wisdom is in knowing you know nothing.",
    "The unexamined life is not worth living.",
    "Where there is love there is life.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The only way to do great work is to love what you do.",
    "Life is really simple, but we insist on making it complicated.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
    "The purpose of our lives is to be happy.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Believe you can and you're halfway there.",
    "Change your thoughts and you change your world.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who prepare for it today.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "The best way to predict your future is to create it.",
    "The journey of a thousand miles begins with one step.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The harder the conflict, the greater the triumph.",
  ];
  //English_PARAGRAPH
  englishParagraph = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only way to do great work is to love what you do.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "In the middle of every difficulty lies opportunity.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Believe you can and you're halfway there.",
    "The future depends on what you do today.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your time is limited, don't waste it living someone else's life.",
    "Strive not to be a success, but rather to be of value.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "It always seems impossible until it's done.",
    "You don't have to be great to start, but you have to start to be great.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "Life is either a daring adventure or nothing at all.",
    "The only person you should try to be better than is the person you were yesterday.",
  ];

  //function
  const speedfn = function () {};
  const getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const presentText = object.querySelector("#ptext");
  const nextText = object.querySelector("#ntext");
  const userText = object.querySelector("#typing");
  let selectObj = []; // korea or english
  let index = 0; // size
  let choiceIndex = 0; // random index
  let choicelanguage = 1;

  userText.value = "";

  //language => true : korea, false : english
  //text => true : sentence, false : paragraph
  if (language) {
    //korea
    if (text) {
      // sentence
      selectObj = [...koreaSentence];
      index = selectObj.length;
      choiceIndex = getRandomInt(0, index - 1);
    } else {
      // paragraph
      selectObj = [...koreaParagraph];
      index = selectObj.length;
      choiceIndex = getRandomInt(0, index - 1);
    }
  } else {
    //english
    if (text) {
      // sentence
      selectObj = [...englishSentence];
      index = selectObj.length;
      choiceIndex = getRandomInt(0, index - 1);
    } else {
      // paragraph
      selectObj = [...englishParagraph];
      index = selectObj.length;
      choiceIndex = getRandomInt(0, index - 1);
    }
  }

  presentText.textContent = selectObj[choiceIndex];

  console.log(`${index}, ${choiceIndex}`);

  if (choiceIndex == index - 1) nextText.textContent = selectObj[0];
  else nextText.textContent = selectObj[choiceIndex + 1];

  //return [...selectObj, index, choiceIndex];
  return {
    select: selectObj,
    index: index,
    choiceIndex: choiceIndex,
    language: language,
  };
};
//Typing Word

//Compare And Speed Check
const compare = (event, typingObj, enter, keyObj, intervalId) => {
  const inputText = event.currentTarget.querySelector("#typing");
  const presentText = event.currentTarget.querySelector("#ptext");
  const nextText = event.currentTarget.querySelector("#ntext");

  let userWord = inputText.value;
  let clear = false;
  let word = { text: "" };

  const changeText = function (ptext, ntext, tObj, word) {
    if (tObj.choiceIndex === tObj.index) tObj.choiceIndex = 0;

    //console.log(tObj.choiceIndex);

    word.text = tObj.select[tObj.choiceIndex];

    ptext.textContent = word.text;

    if (tObj.choiceIndex == tObj.index - 1) ntext.textContent = tObj.select[0];
    else ntext.textContent = tObj.select[tObj.choiceIndex + 1];
  };

  changeText(presentText, nextText, typingObj, word);

  if (word.text.length <= userWord.length) {
    // if word.text.length == userWord.length and press enter
    // word.text.length < userWord.length and press any key
    // change next text
    if (enter.ent || word.text.length < userWord.length) {
      // clear section
      clear = true;
      typingObj.choiceIndex++;
      inputText.value = "";

      changeText(presentText, nextText, typingObj, word);

      clearInterval(intervalId.id1);
      clearInterval(intervalId.id2);
      keyObj.backspaceKey = 0;
      keyObj.letterKey = 0;
      keyObj.sec = 0;
      //console.log(intervalId);
      //console.log(`${keyObj.letterKey}, ${keyObj.backspaceKey}, ${keyObj.sec}`);
    }
  }

  if (clear) {
    // if clear, save speed
  } else {
    // else speed claculate
  }

  //console.log(`compare : ${clear}`);

  return clear;
};

const speedcount = (event, keyObj, speed) => {
  const speedcount = speed.querySelector("#speedcount");
  console.log(speedcount);
  let intervalId = { id1: 0, id2: 0, speed: 0 };
  let currentSpeed;

  intervalId.id1 = setInterval(() => {
    currentSpeed = Math.round(
      ((keyObj.letterKey - keyObj.backspaceKey * 2) / keyObj.sec) * 60
    );

    if (currentSpeed < 0) currentSpeed = 0;
    else if (currentSpeed > 2000) currentSpeed = 2000;

    speedcount.textContent = currentSpeed;

    intervalId.speed = currentSpeed;
  }, 50);

  intervalId.id2 = setInterval(() => {
    keyObj.sec += 0.065;
  }, 50);

  return intervalId;
};
//Compare And Speed Check

// Accuracy And Wrong Word Check
const AccuracyNCheck = (event, typingObj, accuracycount, count, ptext) => {
  //use typingObj => typingObj.select[tObj.choiceIndex];
  const typing = event.currentTarget.querySelector("#typing").value;
  const word = typingObj.select[typingObj.choiceIndex];
  const wordlength = word.length;
  let typinglength = typing.length;
  let accuracy;
  let accuracytext;
  let refactoring = "";
  let index = -1;
  let wrongWord = "";

  //console.log(wordlength);
  //console.log(typinglength);

  // korea
  for (let i = 0; i < typinglength; i++) {
    if (word[i] !== typing[i]) {
      wrongWord += `<span style="color: rgb(231, 134, 127);">${word[i]}</span>`;
      index = i;
      count.lcount++;
    } else {
      wrongWord += word[i];
    }
  }

  if (typinglength < wordlength) {
    wrongWord += word.slice(typinglength);
  }

  accuracy = Math.round(((wordlength - count.lcount) / wordlength) * 100);
  accuracytext = `${accuracy}%`;

  accuracycount.textContent = accuracytext;

  ptext.innerHTML = wrongWord;

  count.lcount = 0;

  return accuracy;
};
// Accuracy And Wrong Word Check

// Record Speed and Accuracy
// 메인에 저장해야함
// 여기서 부터 다시
const record = (event, recorddom, repeat, info, index) => {
  const record = recorddom;
  let recordContent = [];
  // let recordValue = [];
  // let recordclear = false;

  console.log(index);
  console.log(index % 5);
  record[index % 5].querySelector(
    "#speedtext"
  ).textContent = `${info[index][0]}`;
  record[index % 5].querySelector(
    "#accuracytext"
  ).textContent = `${info[index][1]}`;

  // if (recordIndex <= repeat) {
  //   for (let i = 0; i < recordIndex; i++) {
  //     recordContent.push(`${speed} ${accuracy}`);
  //     recordValue.push(speed);
  //     recordValue.push(accuracy);
  //   }
  // } else {
  //   recordIndex = 0;
  //   recordclear = true;
  // }

  // return { rc: recordclear, rv: recordValue };
};

// Result Setting
const resultSetting = (
  event,
  info,
  typingObj,
  maxspeed,
  sbox,
  abox,
  commenttext
) => {
  console.log(info, typingObj, maxspeed, sbox, abox, commenttext);
  const maxspeedtext = maxspeed.querySelector("#maxspeedtext");
  const sresulttext = sbox.querySelector("#sresulttext");
  const aresulttext = abox.querySelector("#aresulttext");
  let speeddata = [];
  let maxspd;
  let avgspd = 0;
  let avgacr = 0;
  let color;
  let moving;

  console.log(maxspeedtext, sresulttext);

  for (let i = 0; i < info.length; i++) {
    speeddata.push(info[i][0]);

    avgspd += info[i][0];
    avgacr += info[i][1];
  }

  maxspd = Math.max(...speeddata);
  avgspd = Math.round(avgspd / info.length);
  avgacr = Math.round(avgacr / info.length);

  maxspeedtext.textContent = `${maxspd}`;
  sresulttext.textContent = `${avgspd}`;
  aresulttext.textContent = `${avgacr}%`;

  console.log(commenttext);

  if (typingObj.language) {
    //korea
    if (avgspd > 600 && avgacr > 0) {
      commenttext.textContent = "PERPECT!!!!";
      commenttext.style.backgroundImage =
        "linear-gradient( 45deg, rgb(250, 43, 43), rgb(104, 250, 32), rgb(38, 123, 250))";
    } else if (400 < avgspd && avgspd <= 600 && 80 < avgacr && avgacr <= 100) {
      commenttext.textContent = "GREAT!!";
      commenttext.style.backgroundImage =
        "linear-gradient( 45deg, rgb(248, 123, 123), rgb(143, 245, 93), rgb(98, 157, 245))";
    } else if (200 < avgspd && avgspd <= 400 && 70 < avgacr && avgacr <= 100) {
      commenttext.textContent = "COMMON";
      commenttext.style.backgroundImage =
        "linear-gradient( 45deg, rgb(230, 223, 188), rgb(116, 105, 83), rgb(158, 144, 114))";
    } else {
      commenttext.textContent = "BAD...";
      commenttext.style.backgroundImage =
        "linear-gradient( 45deg, rgb(187, 187, 187), rgb(92, 92, 92), rgb(15, 15, 15))";
    }
  } else {
    //english
    if (avgspd > 400 && avgacr > 95) {
      commenttext.textContent = "PERPECT!!!!";
      commenttext.style.backgroundImage =
        "linear-gradient( 45deg, rgb(250, 43, 43), rgb(104, 250, 32), rgb(38, 123, 250))";
    } else if (250 < avgspd && avgspd <= 400 && 80 < avgacr && avgacr <= 100) {
      commenttext.textContent = "GREAT!!";
      commenttext.style.backgroundImage =
        "linear-gradient( 45deg, rgb(248, 123, 123), rgb(143, 245, 93), rgb(98, 157, 245))";
    } else if (150 < avgspd && avgspd <= 250 && 70 < avgacr && avgacr <= 100) {
      commenttext.textContent = "COMMON";
      commenttext.style.backgroundImage =
        "linear-gradient( 45deg, rgb(230, 223, 188), rgb(116, 105, 83), rgb(158, 144, 114))";
    } else {
      commenttext.textContent = "BAD...";
      commenttext.style.backgroundImage =
        "linear-gradient( 45deg, rgb(187, 187, 187), rgb(92, 92, 92), rgb(15, 15, 15))";
    }
  }

  console.log(commenttext.style.backgroundImage);
};
// Result Setting

// Help
const helpInfn = (event, help) => {
  const questionmark = help.querySelector("#questionmark");
  const helpstring = help.querySelectorAll("div");

  questionmark.textContent = "";

  for (let i = 0; i < helpstring.length; i++)
    helpstring[i].style.display = "block";

  return true;
};

const helpOutfn = (event, help) => {
  const questionmark = help.querySelector("#questionmark");
  const helpstring = help.querySelectorAll("div");

  questionmark.textContent = "?";

  for (let i = 0; i < helpstring.length; i++)
    helpstring[i].style.display = "none";

  return false;
};
// Help

// keyboard effect
const keyboardEffect = (event, keyboard, flag) => {
  let key;
  let img;

  if (event.keyCode >= 48 && event.keyCode <= 57) {
    let extraction = `${event.code}`;
    let value = extraction[5];
    let str = "Digit-" + `${value}`;
    key = keyboard.querySelector(`.${str}`);
    img = key.querySelector("img");
  } else if (
    event.code === "ShiftLeft" ||
    event.code === "ShiftRight" ||
    event.code === "Minus" ||
    event.code === "Equal" ||
    event.code === "Space" ||
    event.code === "BracketLeft" ||
    event.code === "BracketRight" ||
    event.code === "Backslash" ||
    event.code === "Semicolon" ||
    event.code === "Quote" ||
    event.code === "Comma" ||
    event.code === "Period" ||
    event.code === "Slash"
  ) {
    key = keyboard.querySelector(`.${event.code}`);
    img = key.querySelector("img");
  } else {
    key = keyboard.querySelector(`.${event.code}`);
    img = key.querySelector("img");
  }

  if (flag === 1) {
    // img display : block
    img.style.display = "block";
  } else {
    // img display : none
    img.style.display = "none";
  }
};
// keyboard effect

document.addEventListener("DOMContentLoaded", () => {
  // language toggle mode variables
  const languagetoggle = document.querySelector(
    "#languagemode > #languagetoggle"
  );
  const languageObj = { value: true }; // true : korea, false : english
  // text toggle mode variables
  const texttoggle = document.querySelector("#textmode > #texttoggle");
  const textObj = { value: true }; // true : sentence, false : paragraph
  // modetoggle variables
  const modetoggle = document.querySelector("#modetoggle");
  const background = document.querySelector("#background");
  const modeObj = { value: true }; // true : light, false: dark
  // repeat count variables
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  let count = 0;
  let repeat = 5;
  // typing word variables
  const typingWord = document.querySelector("#typingspace");
  let typingObj = {};
  // compare and speed check variables
  const typing = document.querySelector("#typingspace");
  const typingspace = typing.querySelector("#typing");
  const speed = document.querySelector("#speed");
  const sc = speed.querySelector("#speedcount");
  let clear;
  let enter = { ent: false };
  let entercount = 0;
  let intervalId = {}; // add speed
  let keyObj = {
    letterKey: 0,
    backspaceKey: 0,
    sec: 0,
  };
  const specialKeys = [
    "Shift",
    "Control",
    "Alt",
    "Meta",
    "CapsLock",
    "Tab",
    "Escape",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Enter",
    "Backspace",
    "Home", // Home 키
    "End", // End 키
    "Insert", // Insert 키
    "Delete", // Delete 키
  ];
  // accuracy and wrong word check variables
  const accuracycount = document.querySelector("#accuracycount");
  const ptext = document.querySelector("#ptext");
  let lettercount = { lcount: 0 };
  let accuracy = 100;
  // record speed and accuracy variables
  const recordcheck = document.querySelectorAll("#recordcheck li");
  let recordclear = false;
  let recordIndex = { recidx: -1 };
  let info = [];
  // result card variables
  const result = document.querySelector("#result");
  const maxNAvg = function (info) {};
  let resultflag = false;
  const deleteRecord = function () {
    for (let i = 0; i < 5; i++) {
      recordcheck[i].querySelector("#speedtext").textContent = "";
      recordcheck[i].querySelector("#accuracytext").textContent = "";
    }
  };
  // result value setting variables
  const maxspeed = document.querySelector("#maxspeed");
  const sbox = document.querySelector("#sbox");
  const abox = document.querySelector("#abox");
  const commenttext = document.querySelector("#commenttext");
  // help variables
  const help = document.querySelector("#help");
  const div = help.querySelectorAll("div");
  let mouseObj = { value: false };
  // key effect variable
  const keyboard = document.querySelector(".keyboard-base");

  // initailizing
  typingObj = typing_word(typingWord, languageObj.value, textObj.value);

  // language
  languagetoggle.addEventListener("click", (event) => {
    languageObj.value = languageChange(event, languageObj);
    typingObj = typing_word(typingWord, languageObj.value, textObj.value);
    typingspace.focus();
  });

  // text
  texttoggle.addEventListener("click", (event) => {
    textObj.value = textChange(event, textObj);
    typingObj = typing_word(typingWord, languageObj.value, textObj.value);
    typingspace.focus();
  });

  //mode
  modetoggle.addEventListener("click", (event) => {
    console.log(background);
    modeObj.value = modeChange(event, modeObj, modetoggle, background);
    typingspace.focus();
  });

  //help
  help.addEventListener("mouseenter", (event) => {
    if (!mouseObj.value) mouseObj.value = helpInfn(event, help);
    console.log(mouseObj.value);
  });

  // div.addEventListener("mouseover", (event) => {
  //   if (!mouseObj.value) mouseObj.value = helpInfn(event, help);
  //   console.log(mouseObj.value);
  // });

  // background.addEventListener("mouseover", (event) => {
  //   if (!mouseObj.value) mouseObj.value = helpOutfn(event, help);
  //   console.log(mouseObj.value);
  // });

  // background.addEventListener("mouseenter", (event) => {
  //   helpOutfn(event, help);
  //   mouseObj.value = false;
  // });

  help.addEventListener("mouseleave", (event) => {
    if (mouseObj.value) mouseObj.value = helpOutfn(event, help);
    console.log(mouseObj.value);
  });

  // div.addEventListener("mouseout", (event) => {
  //   if (!mouseObj.value) mouseObj.value = helpOutfn(event, help);
  //   console.log(mouseObj.value);
  // });

  // repeat
  left.addEventListener("click", (event) => {
    count--;
    if (count < 0) count = 3;
    repeat = repeatChange(event, count);
    typingspace.focus();
  });
  right.addEventListener("click", (event) => {
    count++;
    repeat = repeatChange(event, count);
    typingspace.focus();
  });

  // result escape
  result.addEventListener("click", (event) => {
    console.log("눌렸다.");
    if (recordclear) {
      result.style.display = "none";
      recordclear = false;
      deleteRecord();
      typingspace.removeAttribute("readonly");
      typingspace.focus();
    }
  });

  // compare, speed check, record
  typing.addEventListener("keydown", (event) => {
    keyboardEffect(event, keyboard, 1);

    if (!recordclear) {
      if (event.key === "Enter") {
        enter.ent = true;
        clear = compare(event, typingObj, enter, keyObj, intervalId);
        enter.ent = false;
        console.log("enter");
        console.log(clear);

        if (clear) {
          // clear section
          recordIndex.recidx++;
          sc.textContent = "0";
          console.log(typingspace.value);
          accuracycount.textContent = "100%";

          // 추후 결과가 나온다면 info의 내용을 모두 지워주어야함. recidx = -1
          console.log(recordIndex.recidx);
          if (recordIndex.recidx == repeat - 1) {
            // 반복 횟수 만큼 다 채웠다는 소리

            // max and avg

            //result process
            resultflag = true;
            recordclear = true;
            console.log(result.style.display);
            result.style.display = "block";
            typingspace.setAttribute("readonly", true);
          }

          if (recordIndex.recidx > 4) {
            info[recordIndex.recidx] = [
              intervalId.speed,
              accuracy,
              recordIndex.recidx,
            ];

            console.log(info);
          } else {
            info.push([intervalId.speed, accuracy, recordIndex.recidx]);
            console.log(info);
          }

          typingspace.value = "";
        }

        record(event, recordcheck, repeat, info, recordIndex.recidx);

        if (resultflag) {
          resultSetting(
            event,
            info,
            typingObj,
            maxspeed,
            sbox,
            abox,
            commenttext
          );
          result.focus();
          console.log(recordIndex.recidx);
          recordIndex.recidx = -1;
          info.splice(0, info.length);
          console.log(info);
          resultflag = false;
        }

        console.log(recordclear);
      }

      if (event.key === "Backspace") {
        console.log(typingspace.value);
        if (typingspace.value === "") {
          keyObj.letterKey = 0;
          keyObj.backspaceKey = 0;
          keyObj.sec = 0;
          clearInterval(intervalId.id1);
          clearInterval(intervalId.id2);
          sc.textContent = "0";
        }

        keyObj.backspaceKey++;
        compare(event, typingObj, enter, keyObj, intervalId);
      }

      if (!specialKeys.includes(event.key)) {
        keyObj.letterKey++;

        clear = compare(event, typingObj, enter, keyObj, intervalId);

        accuracy = AccuracyNCheck(
          event,
          typingObj,
          accuracycount,
          lettercount,
          ptext
        );
      }

      if (keyObj.letterKey === 1) {
        intervalId = speedcount(enter, keyObj, speed);
        //console.log(intervalId);
      }
    }

    if (event.key === "Escape") {
      console.log("esc");
      if (recordclear) {
        result.style.display = "none";
        recordclear = false;
        deleteRecord();
        typingspace.removeAttribute("readonly");
        typingspace.focus();
      }
    }
  });

  typing.addEventListener("keyup", (event) => {
    keyboardEffect(event, keyboard, 2);
  });

  typing.addEventListener("input", (event) => {
    //compare(event, typingObj, enter, keyObj, intervalId);
    //console.log(typingObj.choiceIndex);
    // accuracy = AccuracyNCheck(
    //   event,
    //   typingObj,
    //   accuracycount,
    //   lettercount,
    //   ptext
    // );
  });
});
