import { ethers } from 'ethers'
import { contractEthABI, contractEthAddress } from './constants'

const { ethereum } = window

const getEthereumContract = async () => {
  const provider = new ethers.BrowserProvider(ethereum)
  const signer = await provider.getSigner()
  try {
    return new ethers.Contract(contractEthAddress, contractEthABI, signer)
  } catch (error) {
    return new ethers.Contract(contractEthAddress, contractEthABI, provider)
  }
}

export default getEthereumContract
