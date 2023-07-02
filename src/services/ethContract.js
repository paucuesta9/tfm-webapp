import getEthereumContract from '../utils/getEthereumContract'

export const burnEth = async (amount, nonce, signature) => {
  const contract = await getEthereumContract()

  console.log({ amount, nonce, signature, contract })

  const tx = await contract.burn(amount, nonce, signature)
  await tx.wait()
  return tx
}
