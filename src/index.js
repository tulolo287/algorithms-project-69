export default function search(docs, word) {
  let result = [];
  const regex = new RegExp(`^.*\\b(${word})\\b.*$`);
  for (const doc of docs) {
    if (regex.test(doc.text)) {
      result.push(doc.id);
    }
  }
  return result;
}
