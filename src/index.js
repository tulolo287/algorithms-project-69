export default function search(docs, word) {
  const index = reverseIndex(docs);
  const words = word.split(" ");
  for (let i = 0; i < words.length; i++) {
    let term = word.match(/\w+/);
    if (index[term]) {
      return index[term];
    }
  }
}

function reverseIndex(docs) {
  let index = {};
  let counter = {};
  docs.forEach((item, idx) => {
    item.text.split(" ").map((word) => {
      let term = word.match(/\w+/);
      if (!index[term]) index[term] = [];
      if (!index[term].includes(item.id)) {
        counter[item.id] = 1;
        index[term].push(item.id);
      } else {
        counter[item.id] += 1;
        if (counter[index[term][0]] < counter[item.id]) {
          let temp = index[term][0];
          index[term][0] = item.id;
          index[term][idx] = temp;
        }
      }
    });
  });
  return index;
}
