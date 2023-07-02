import { createContext, useEffect, useState } from 'react'
const { ethereum } = window

export const Web3Provider = ({ children }) => {
  const [currentAccount, setCurrentAccout] = useState('')
  const [currentNetwork, setCurrentNetwork] = useState('0xaa36a7')

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return window.alert('Please install MetaMask')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length !== 0) {
        setCurrentAccout(accounts[0])
      } else console.log('No accounts found')
    } catch (error) {
      console.log({ error })
      throw new Error('No ethereum object found')
    }
  }

  useEffect(() => {
    if (currentAccount === '') {
      return () => {
        setCurrentAccout('')
      }
    }
    checkIfWalletIsConnected()
  }, [])

  return (
    <Web3Context.Provider value={{
      currentAccount,
      setCurrentAccout,
      currentNetwork,
      setCurrentNetwork
    }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export const Web3Context = createContext()
