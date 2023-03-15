const createNewWallet = (n) => {
    let ad = []
    // const mnemonic0 = ethers.Wallet.createRandom();
    const mn = "session dial switch visual distance twelve adjust cotton metal know bring void"
    const walletNode = ethers.HDNodeWallet.fromPhrase(mn)
    for (let i = 1; i <= n; i++) {
      ad.push(walletNode.derivePath(`m/44'/60'/0'/0/${i}`)); // push each number into the array
    }
    console.log(ad)
     return ad
  }