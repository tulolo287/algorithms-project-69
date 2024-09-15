import search from "../src/index.js";

test("seach word in string", () => {
  const doc1 = {
    id: "doc1",
    text: "I can't shoot straight unless I've had a pint!",
  };
  const doc2 = {
    id: "doc2",
    text: "Don't shoot shoot shoot that thing at me.",
  };
  const doc3 = { id: "doc3", text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];
  const word = "shoot";

  expect(search(docs, word)).toEqual(["doc2", "doc1"]);
});

test("search word in string with signs", () => {
  const doc1 = {
    id: "doc1",
    text: "I can't shoot straight unless I've had a pint!",
  };
  const docs = [doc1];
  const word = "pint!";

  expect(search(docs, word)).toEqual(["doc1"]);
});

test("search word in string with signs and relevant", () => {
  const doc1 = {
    id: "doc1",
    text: "I can't shoot straight unless I've had a pint!",
  };
  const doc2 = {
    id: "doc2",
    text: "Don't shoot shoot shoot that thing at me.",
  };
  const doc3 = { id: "doc3", text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];
  const word = "shoot";

  expect(search(docs, word)).toEqual(["doc2", "doc1"]);
});
