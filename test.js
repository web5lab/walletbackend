const Web3 = require("web3");
const axios = require("axios");

contarctAddress = [
  "0x0249CA3806d52e3D612aC7aeB5351b2C763dFB87",
  "0x3F0B6d90C09A82597247BA019a70921fae248Ae5",
  "0x6F85f769c9b0eb71Fcf9DAf793e2dbD23F1f3b3D",
];
const MonitorLogs = async () => {
  const web3 = new Web3(
    "wss://bsc-testnet.blastapi.io/e8854780-5b4e-4a90-b994-149df5c99ce9"
  );
  const subscription = web3.eth.subscribe(
    "logs",
    {
      address: contarctAddress,
    },
    (error, result) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(result.transactionHash);
      const data = result.data;
      const decodedData = web3.eth.abi.decodeLog(
        [
          {
            indexed: true,
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            name: "value",
            type: "uint256",
          },
        ],
        data,
        result.topics.slice(1)
      );
      console.log(decodedData);
      console.log(
        `Transfer from ${decodedData.from} to ${decodedData.to}: ${
          decodedData.value / 10 ** 18
        }`
      );
      // axios
      //   .get(
      //     `http://localhost:3001/testnet/updated-transaction?address=${decodedData.to}`
      //   )
      //   .then((response) => {
      //     console.log(response.data, "response from api");
      //     if (!response.data.error) {
      //       axios
      //         .post("http://15.207.226.246:8000/payment/update-user-crypto-deposit-transaction", response.data.data)
      //         .then((response) => {
      //           // Handle the response data
      //           console.log(response.data);
      //         })
      //         .catch((error) => {
      //           // Handle any errors that occurred during the request
      //           console.error(error, "error from websocket");
      //         });
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  );

  subscription.on("connected", () => {
    console.log("Connected to WebSocket endpoint");
  });

  subscription.on("error", (error) => {
    console.error("Error:", error);
  });
};

MonitorLogs();
