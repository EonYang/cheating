var pinyinText;

var showPinyin = () => {
  let input = document.getElementById('hanzi'); 
  let hanzi = input.value;
  let pinyinTemp = cjst.chineseToPinyin(hanzi).toString();
  let pinyinText = removeTone(pinyinTemp);
  document.getElementById('showPinyin').innerHTML = pinyinText;
};
