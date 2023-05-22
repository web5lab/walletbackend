let Btc_Price = 1000;


const fetchMarketPriceFromApi = async () => {
  try {
    const response = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");
    if (!response.ok) {
      throw new Error("Error fetching market price from API");
    }
    const btcData = await response.json();
    Btc_Price = btcData.price;
    console.log(btcData);
  } catch (error) {
    console.error(error);
  }
};

const BtcPrice = async () => {
  return Btc_Price;
}

setInterval(fetchMarketPriceFromApi, 60000);
fetchMarketPriceFromApi();

module.exports = {
  BtcPrice,
};
