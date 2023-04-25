function getCurrencyIcon(currencyName) {
    const iconUrls = {
      Usdt: 'https://bc.game/coin/USDT.black.png',
      Busd: 'https://bc.game/coin/BUSD.black.png',
      testPay: 'https://bc.game/coin/PEOPLE.black.png',
      Btc: 'https://bc.game/coin/BTC.black.png',
    };
    return iconUrls[currencyName];
  }

  function getBalanceField(currencyName) {
    const fieldNames = {
      Usdt: 'usdtBalance',
      Busd: 'busdBalance',
      testPay: 'testPayBalance',
      Btc: 'btcBalance',
    };
    return fieldNames[currencyName];
  }


  module.exports = {
    getCurrencyIcon,
    getBalanceField
  }