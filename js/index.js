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

document.addEventListener("DOMContentLoaded", () => {
  const languagetoggle = document.querySelector(
    "#languagemode > #languagetoggle"
  );
  const languageObj = { value: true }; // true : korea, false : english

  const texttoggle = document.querySelector("#textmode > #texttoggle");
  const textObj = { value: true }; // true : sentence, false : paragraph

  // language
  languagetoggle.addEventListener("click", (event) => {
    languageObj.value = languageChange(event, languageObj);
    console.log(languageObj.value);
  });

  // text
  texttoggle.addEventListener("click", (event) => {
    textObj.value = textChange(event, textObj);
  });

  console.log(languageObj.value);
});
