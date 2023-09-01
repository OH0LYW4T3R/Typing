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

  //variable
  // const userText = object.querySelector("#typingspace > #text");
  // userText.addEventListener("input", function () {});

  const presentText = object.querySelector("#ptext");
  const nextText = object.querySelector("#ntext");
  const userText = object.querySelector("#typing");
  let selectObj = []; // korea or english
  let index = 0; // size
  let choiceIndex = 0; // random index

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
  return { select: selectObj, index: index, choiceIndex: choiceIndex };
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
  let recordValue = [];
  let recordclear = false;

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

  return { rc: recordclear, rv: recordValue };
};

document.addEventListener("DOMContentLoaded", () => {
  // language toggle mode variables
  const languagetoggle = document.querySelector(
    "#languagemode > #languagetoggle"
  );
  const languageObj = { value: true }; // true : korea, false : english
  // text toggle mode variables
  const texttoggle = document.querySelector("#textmode > #texttoggle");
  const textObj = { value: true }; // true : sentence, false : paragraph
  // repeat count variables
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  let count = 0;
  let repeat = 5;
  // typing word
  const typingWord = document.querySelector("#typingspace");
  let typingObj = {};
  // compare and speed check variables
  const typing = document.querySelector("#typingspace");
  const typingspace = typing.querySelector("#typing");
  const speed = document.querySelector("#speed");
  const sc = speed.querySelector("#speedcount");
  let clear;
  let enter = { ent: false };
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
  ];
  // accuracy and wrong word check variables
  const accuracycount = document.querySelector("#accuracycount");
  const ptext = document.querySelector("#ptext");
  let lettercount = { lcount: 0 };
  let accuracy = 100;
  // record speed and accuracy variables
  const recordcheck = document.querySelectorAll("#recordcheck li");
  let recordclearNrecord = {};
  let recordIndex = { recidx: -1 };
  let info = [];

  // initailizing
  typingObj = typing_word(typingWord, languageObj.value, textObj.value);

  // language
  languagetoggle.addEventListener("click", (event) => {
    languageObj.value = languageChange(event, languageObj);
    typingObj = typing_word(typingWord, languageObj.value, textObj.value);
  });

  // text
  texttoggle.addEventListener("click", (event) => {
    textObj.value = textChange(event, textObj);
    typingObj = typing_word(typingWord, languageObj.value, textObj.value);
  });

  // repeat
  left.addEventListener("click", (event) => {
    count--;
    if (count < 0) count = 3;
    repeat = repeatChange(event, count);
  });
  right.addEventListener("click", (event) => {
    count++;
    repeat = repeatChange(event, count);
  });

  // compare and speed check
  typing.addEventListener("keydown", (event) => {
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
        accuracycount.textContent = "100%";

        // 추후 결과가 나온다면 info의 내용을 모두 지워주어야함. recidx = -1
        if (recordIndex.recidx == repeat) {
          recordIndex.recidx = 0;
          info.splice(0, info.length);
          console.log(info);
        }

        if (recordIndex.recidx > 4) {
          info[recordIndex.recidx % 5] = [
            intervalId.speed,
            accuracy,
            recordIndex.recidx,
          ];
        } else {
          info.push([intervalId.speed, accuracy, recordIndex.recidx]);
          console.log(repeat);
        }
      }

      recordclear = record(
        event,
        recordcheck,
        repeat,
        info,
        recordIndex.recidx
      );
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

      console.log(clear);

      clear = compare(event, typingObj, enter, keyObj, intervalId);
    }

    if (keyObj.letterKey === 1) {
      intervalId = speedcount(enter, keyObj, speed);
      //console.log(intervalId);
    }
  });

  typing.addEventListener("input", (event) => {
    compare(event, typingObj, enter, keyObj, intervalId);
    //console.log(typingObj.choiceIndex);
    accuracy = AccuracyNCheck(
      event,
      typingObj,
      accuracycount,
      lettercount,
      ptext
    );
  });
});
