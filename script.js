var answer;

var newQuestion = (ques) => {
  document.getElementById('showLevel').innerHTML = `LEVEL : ${level}`;
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
};


var start = () => {
  switch(level){
    case 1:
      newQuestion(getHanzi(level1));
      break;
    case 2:
      newQuestion(getHanzi(level2));
      break;
    case 3:
      newQuestion(getHanzi(level3));
      break;
    case 4:
      newQuestion(getHanzi(level4));
      break;
    case 5:
      newQuestion(getHanzi(level5));
      break;
               }
}

var dropD = document.getElementById("dropDownSetLevel");

dropD.onchange = () => {
  level = dropD.value;
  start();
};

// .change(function() {
//     var str = "";
//     $( "select option:selected" ).each(function() {
//       str += $( this ).text() + " ";
//     });
//     $( "div" ).text( str );
//   })
//   .trigger( "change" );

// $("#level").change(() => {
//     $("#level option:selected").each(function(){
//       level = 
//     })
// }
// )
window.onload = start;
