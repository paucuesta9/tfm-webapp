import useWeb3 from '../hooks/useWeb3'

const Header = () => {
  const { walletConnected, connectWallet } = useWeb3()

  const handleConnect = async () => {
    try {
      await connectWallet()
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <header>
      <img src='/logo.png' alt='Bridge Logo' className='logo' />
      {walletConnected && <p>Connected</p>}
      {!walletConnected &&
        <button onClick={handleConnect}>
          <img src='/metamask.png' alt='Metamask logo' />Connect wallet
        </button>}
    </header>
  )
}

export default Header
