
import { useEffect, useState } from 'react';
import EthereumWallet from './wallets/etherumWallet';
import SolanaWallet from './wallets/solanaWallet';

const App = () => {

  const ethwallet = new EthereumWallet(
    "lend custom palace wrestle flee gravity toward fitness wasp economy task smooth", 
    'https://mainnet.infura.io/v3/f48a9c5974b3421d867defd988e4385a')

  const solwallet = new SolanaWallet(
    "lend custom palace wrestle flee gravity toward fitness wasp economy task smooth",
    "https://api.mainnet-beta.solana.com"
  )

  const bscwallet = new EthereumWallet(
    "lend custom palace wrestle flee gravity toward fitness wasp economy task smooth", 
    'https://bsc-dataseed.binance.org/'
  )
  

  let [bal, setbal] = useState({})
  useEffect(async () => {
      solwallet.signTransaction("HaYnRYjtaHvxQgmvUQhUk6ic2oVJbPyMVYgMMt4L7z5K", "1").then(console.log, console.log)
      ethwallet.signTransaction("0x61c0002a0A85C8f2f2f184195c1E016bc2D845E0", "1").then(console.log, console.log)
      bscwallet.signTransaction("0x61c0002a0A85C8f2f2f184195c1E016bc2D845E0", "1").then(console.log, console.log)
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
