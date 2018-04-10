var pinyinText;

var showPinyin = (hanzi) => {
  let pinyinTemp = cjst.chineseToPinyin(hanzi).toString();
  let pinyinText = removeTone(pinyinTemp);
  let result = document.getElementById('showPinyin').innerHTML = pinyinText;
};
