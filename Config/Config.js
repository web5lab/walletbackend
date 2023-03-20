// Mainnet Master Secret Phrase
const mainMasterPhrase = ""

// MongoDb Url 
const MongoDbUrl = ""

// Testnet Master Secret Phrase
const MasterPhrase = "session dial switch visual distance twelve adjust cotton metal know bring void"

// Testnet Wallet for faucet
const testnetWallet = {
   address: "0x0e170E7Efe1458fe9049ACeC8B4433b79a0A7DBB",
   privateKey: "34b7cd0c29091919040ed9b8cc4b24f53611ba3f2311ea5028c114af88bf2cba"
}

// Testnet rpc
const TestnetRpc = {
   Bsc: "https://data-seed-prebsc-2-s1.binance.org:8545",
   Eth: "https://goerli.infura.io/v3/b2c6b02b3c3946cc9055b48339e42c1c",
   Matic: "https://rpc-mumbai.maticvigil.com/",
   Litecoin: ""
}

// Mainnet rpc
const MainnetRpc = {
   Bsc: "",
   Eth: "",
   Matic: "",
   Litecoin: "",
   Bitcoin: ""
}

// Admin Secret Key
const Adminkey = "Shiva1234@"

// testnet Contract Configs
const TestnetContract = {
   UsdtEth : "",
   busdEth : "",
   TestCoinEth : "",
   UsdtBsc : "0x6F85f769c9b0eb71Fcf9DAf793e2dbD23F1f3b3D",
   BusdBsc : "0x0249CA3806d52e3D612aC7aeB5351b2C763dFB87",
   TestCoinBsc : "0x3F0B6d90C09A82597247BA019a70921fae248Ae5",
   Usdtmatic: "0x6F85f769c9b0eb71Fcf9DAf793e2dbD23F1f3b3D",
   BusdMatic: "0x3F0B6d90C09A82597247BA019a70921fae248Ae5",
   TestCoinMatic: "0x0249CA3806d52e3D612aC7aeB5351b2C763dFB87",
}

// Mainnet Contract Config
const MainnetContract = {
   UsdtEth : "",
   busdEth : "",
   MetaCoinEth : "",
   UsdtBsc : "",
   BusdBsc : "",
   MetaCoinBsc : "",
   Usdtmatic: "",
   BusdMatic: "",
   MetaCoinMatic: "",
}


module.exports = {
   MasterPhrase,
   TestnetRpc,
   MainnetRpc,
   Adminkey,
   testnetWallet,
   TestnetContract,
   MainnetContract
}