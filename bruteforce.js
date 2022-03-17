export default function bruteForce(phrase, key) {
  let res = "";

  for (let i = 0; i < phrase.length; i++) {
    let c = phrase[i];

    if (c.match(/[a-z]/i)) {
      let code = phrase.charCodeAt(i);
      //majuscule
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + key) % 26) + 65);
      } //minuscule
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
    }

    res += c;
  }
  return res;
}

export function bruteforce2(str) {
  let decryptedString = "";
  console.log("Voici les résultats :\n");
  const tab = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < 25; i++) {
    for (let x = 0; x < str.length; x++) {
      let c = str.charAt(x);
      let position = tab.indexOf(c);
      let decalage = (position + i) % 25;
      decryptedString += tab[decalage];
    }
    console.log(decryptedString);
    console.log("\n");
    decryptedString = "";
  }
}
