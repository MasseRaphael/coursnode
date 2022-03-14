export default function sunday() {
  let results = [];

  for (let i = 2014; i < 2051; i++) {
    let index = i + "/01/01";
    let date = new Date(index);
    if (date.getDay() === 0) {
      results.push(i);
    }
  }

  return results;
}
