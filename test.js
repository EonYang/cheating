var quesion, answer;

var _set = (ques) => {
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

_set('天');