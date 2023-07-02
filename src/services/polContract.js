import getPolygonContract from '../utils/getPolygonContract'

export const burnMatic = async (amount, nonce, signature) => {
  const contract = await getPolygonContract()

  const tx = await contract.burn(amount, nonce, signature)
  await tx.wait()
  return tx
}
