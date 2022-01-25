
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import EthereumWallet from './wallets/etherumWallet';
import {ethers }from "ethers"
import SolanaWallet from './wallets/solanaWallet';

const App = () => {

  // const wallet = new EthereumWallet(
  //   "lend custom palace wrestle flee gravity toward fitness wasp economy task smooth", 
  //   'https://mainnet.infura.io/v3/f48a9c5974b3421d867defd988e4385a')

  const wallet = new SolanaWallet(
    "lend custom palace wrestle flee gravity toward fitness wasp economy task smooth",
    "https://api.mainnet-beta.solana.com"
  )
  

  let [bal, setbal] = useState({})
  useEffect(async () => {
   
      var x = await wallet.signTransaction("0x61c0002a0A85C8f2f2f184195c1E016bc2D845E0", "1").then(console.log, console.log)

    
  }, [])
  
  return (
    <div>
        <h3>BSC</h3>
        <p>
          {JSON.stringify(bal)}
        </p>
    </div>
  );
}

export default App;
