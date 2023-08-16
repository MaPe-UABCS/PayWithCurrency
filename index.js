// code made by Manuel Peñaloza as assigment of the class "Metodología de la programacion" IDS UABCS 2023

function calcTotal(coins) {
  let total = coins.reduce((count, currency) => {
    return parseInt(count) + currency[0] * currency[1];
  }, 0);
  return total;
}

function test(toPay, wallet) {
  let totalCoinsValue = calcTotal(wallet);
  if (totalCoinsValue < toPay) {
    return "not enough money :(";
  }
  if (toPay == 0) {
    return "there is nothing to pay XD?";
  }

  const result = {};

  while (toPay > 0) {
    let control = 0;
    for (let i = wallet.length - 1; i >= 0; i--) {
      const [currencyValue, amount] = wallet[i];
      control++;
      if (amount == 0) continue;

      // finds the highest currency value that can be used
      if (currencyValue <= toPay) {
        // this only verifies if we already give that currency, if not we just set a new attribute to store that data (just a JS literal objects trick to avoid array search)
        if (result[currencyValue] != undefined) {
          // "gives the currency"
          result[currencyValue] += 1;
        } else {
          result[currencyValue] = 1;
        }
        // removes the selected currency from the wallet
        wallet[i][1] -= 1;
        toPay -= currencyValue;
        control--;
        break;
      }
    }
    if (control == wallet.length) {
      return "imposible to pay the exact amount :(";
    }
  }
  return result;
}

const wallet_example1 = [
  [1, 80],
  [5, 0],
  [10, 8],
  [20, 4],
  [50, 0],
  [100, 4],
  [200, 2],
  [500, 1],
  [1000, 1],
];

let amount2Pay = 980;
console.log(`pay: ${amount2Pay}`);
console.log("wallet: ");
console.table(wallet_example1);

let result = test(amount2Pay, wallet_example1);
console.log("result(delivered currency):");
console.table(result);