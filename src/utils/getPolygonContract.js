import { ethers } from 'ethers'
import { contractPolABI, contractPolAddress } from './constants'

const { ethereum } = window

const getPolygonContract = async () => {
  const provider = new ethers.BrowserProvider(ethereum)
  const signer = await provider.getSigner()
  try {
    return new ethers.Contract(contractPolAddress, contractPolABI, signer)
  } catch (error) {
    return new ethers.Contract(contractPolAddress, contractPolABI, provider)
  }
}

export default getPolygonContract
