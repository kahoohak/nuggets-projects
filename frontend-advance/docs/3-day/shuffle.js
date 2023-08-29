function shuffle(items) {
  return items.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
}

const weights = Array(9).fill(0);

for(let i = 0; i < 10000; i++) {
  const testItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffle(testItems);
  testItems.forEach((item, idx) => weights[idx] += item);
}

console.log(weights);

// [45071, 45016, 49406, 50455, 50727, 50205, 50981, 52346, 55793]
// 每次结果有变化，但总的来说前面的数字小，后面的数字大

