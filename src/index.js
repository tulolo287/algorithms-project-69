export default function search(docs, word) {
  let result = [];
  for(const doc of docs) {
    if(doc.text.split(" ").indexOf(word) !== -1) {
      result.push(doc.id)
    }
  }
  return result;
}
