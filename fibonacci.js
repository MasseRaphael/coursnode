export default function fibonacci(nbr) {
  let firstNumber = 0;
  let secondNumber = 1;

  let fibo = [0, 1];

  for (let i = 2; i <= nbr; i++) {
    let somme = firstNumber + secondNumber;

    firstNumber = secondNumber;

    secondNumber = somme;

    fibo.push(somme);
  }

  return fibo;
}
