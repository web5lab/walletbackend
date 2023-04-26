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

  function getExplorerUrl(NetworkName) {
    const fieldNames = {
     bscTestnet:"https://testnet.bscscan.com/"
    };
    return fieldNames[NetworkName];
  }


  module.exports = {
    getExplorerUrl,
    getCurrencyIcon,
    getBalanceField
  }