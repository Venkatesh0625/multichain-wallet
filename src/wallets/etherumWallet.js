import { ethers, utils } from 'ethers'

export default class EthereumWallet {
    constructor(mnemonic, providerUrl) {
        this.wallet = ethers.Wallet.fromMnemonic(mnemonic)
        this.connection = new ethers.providers.JsonRpcProvider(providerUrl)
        this.signer = this.wallet.connect(this.connection)
    }

    signTransaction = async (recipient, ethers) => {
        let gasPrice = await this.connection.getGasPrice()

        let value = utils.parseEther(ethers)

        let nonce = await this.connection.getTransactionCount(this.wallet.address, 'latest')

        let gasLimit = utils.hexlify(100000)

        const tx = {
            from: this.wallet.address,
            to: recipient,
            value,
            gasPrice,
            gasLimit, 
            nonce
        }

        return this.signer.sendTransaction(tx);
    }

    getBalance() {
        return this.signer.getBalance()
    }
}