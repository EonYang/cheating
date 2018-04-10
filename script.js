var quesion, answer;
var initLevel = (ques) => {
  // let i = Math.floor(Math.random()*qa.length);
  document.getElementById('question').innerHTML = ques;
  let answerTemp = cjst.chineseToPinyin(ques).toString();
  answer = removeTone(answerTemp);
}
var showResult = () => {
  let input = document.getElementById('input'); 
  let text = input.value == answer ? 'Correct!':'Wrong';
  let result = document.getElementById('result').innerHTML = text;
  setTimeout(()=>{
    document.getElementById('result').innerHTML = ' ';
    input.value = '';
  },3000);
  // console.log(text);
};

var start = (number) => {
  switch(number){
    case 1:
      initLevel(getQuestion(level1));
      break;
    case 2:
      initLevel(getQuestion(level2));
      break;
    case 3:
      initLevel(getQuestion(level3));
      break;
    case 4:
      initLevel(getQuestion(level4));
      break;
    case 5:
      initLevel(getQuestion(level5));
      break;
               }
}

start(3);
