export default function search(docs, word) {
  let result = [];
  let term = word.match(/\w+/);
  let reg = new RegExp(`\\b${term}\\b`, "g");
  let counter = 1;

  for (let doc of docs) {
    let wordsArr = doc.text.match(reg);
    if (wordsArr && wordsArr.length > counter) {
      result.unshift(doc.id);
      counter = wordsArr.length;
    } else if (wordsArr) result.push(doc.id);
  }
  return result;
}
