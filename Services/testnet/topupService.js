const compareBalance = async (previousBal, latestBal) => {
  const bal1 =
    latestBal.BalBusdBsc +
    latestBal.BalBusdEth +
    latestBal.BalBusdMatic +
    latestBal.BalTestPayBsc +
    latestBal.BalTestPayEth +
    latestBal.BalTestPayMatic +
    latestBal.BalUsdtBsc +
    latestBal.BalUsdtEth +
    latestBal.BalUsdtMatic;
  const bal2 =
    previousBal.busdBalanceOnBsc +
    previousBal.busdBalanceOnEth +
    previousBal.busdBalanceOnMatic +
    previousBal.usdtBalanceOnBsc +
    previousBal.usdtBalanceOnEth +
    previousBal.usdtBalanceOnMatic +
    previousBal.testPayBalnceOnBsc +
    previousBal.testPayBalnceOnEth +
    previousBal.testPayBalnceOnMatic;
  if (bal1 == bal2) {
    return "no topup";
  } else {
    return "topup Found";
  }
};

module.exports = {
  compareBalance,
};
