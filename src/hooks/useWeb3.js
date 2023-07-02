import { Web3Context } from '../context/Web3Context'
import { useCallback, useContext } from 'react'
import { ethers } from 'ethers'
import { burnEth } from '../services/ethContract'
import { burnMatic } from '../services/polContract'

export default function useWeb3() {
  const { ethereum } = window
  const { currentAccount, setCurrentAccout } = useContext(Web3Context)

  const connectWallet = useCallback(async () => {
    try {
      if (!ethereum) return window.alert('Please install MetaMask')

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setCurrentAccout(accounts[0])
      return accounts[0]
    } catch (error) {
      console.log({ error })
      throw new Error('No ethereum object found')
    }
  }, [setCurrentAccout])

  const sendTokensToBridge = useCallback(async (networkFrom, amount) => {
    try {
      if (!ethereum) return window.alert('Please install MetaMask')
      if (!currentAccount) return window.alert('Please connect your wallet')

      const currentNetwork = await ethereum.request({ method: 'net_version' })
      if (currentNetwork !== networkFrom) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: networkFrom }]
        })
      }

      const amountWei = ethers.parseEther(amount.toString())
      const nonce = Math.floor(Math.random() * 1000000000)

      const message = ethers.solidityPackedKeccak256(
        ['address', 'address', 'uint256', 'uint256'],
        [currentAccount, currentAccount, amountWei, nonce]
      ).toString()

      const signature = await ethereum.request({
        method: 'personal_sign',
        params: [message, currentAccount]
      })

      if (currentNetwork === '11155111') {
        await burnEth(amountWei, nonce, signature)
      } else {
        await burnMatic(amountWei, nonce, signature)
      }
    } catch (error) {
      console.log({ error })
    }
  }, [ethereum, currentAccount])

  return {
    currentAccount,
    connectWallet,
    sendTokensToBridge,
    walletConnected: currentAccount !== ''
  }
}
