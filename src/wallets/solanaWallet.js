import web3, { Keypair, Transaction, SystemProgram, LAMPORTS_PER_SOL, Connection, sendAndConfirmTransaction } from '@solana/web3.js'
import { mnemonicToSeedSync } from 'bip39'
import { derivePath } from 'ed25519-hd-key'



export default class SolanaWallet {
    constructor(mnemonic, providerUrl) {
        let derivePathCode = "m/44'/501'/0'"
        //alert(derivePath)
        const seed = mnemonicToSeedSync(mnemonic)
        let derivedSeed = derivePath(derivePathCode, seed.toString('hex')).key;

        this.keypair = Keypair.fromSeed(Uint8Array.from(derivedSeed))
        this.connection = new Connection(providerUrl)

        //console.log(this.keypair.publicKey.toBase58())
    }

    signTransaction = async (recipient, sol) => {
        let tx = new Transaction()

        tx.add(
            SystemProgram.transfer({
                fromPubkey: this.keypair.publicKey,
                toPubkey: Keypair.generate().publicKey, //temperorily creating random receiving address, need to convert base58 -> Uint8Array.then only it works
                lamports: LAMPORTS_PER_SOL
            })
        )

        return sendAndConfirmTransaction(
            this.connection,
            tx,
            [this.keypair]
        )
    }

    getBalance() {
        return 1;
    }
}