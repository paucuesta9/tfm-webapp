import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from './Input'
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import useWeb3 from '../hooks/useWeb3'

const BridgeBox = () => {
  const [order, setOrder] = useState(0)
  const [inputValue, setInputValue] = useState(0)
  const [value, setValue] = useState(0)
  const { sendTokensToBridge } = useWeb3()

  const handleClick = () => {
    setOrder(order === 0 ? 1 : 0)
    setInputValue(0)
    setValue(0)
  }

  const handleChange = (value) => {
    setInputValue(value)
    if (order === 0) {
      setValue(value * 50)
    } else {
      setValue(value / 50)
    }
  }

  const sendTokens = async () => {
    try {
      await sendTokensToBridge(order === 0 ? '0xaa36a7' : '0x13881', inputValue)
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <main>
      <div className='box'>
        <Input from='from' network={order === 0 ? 'ethereum' : 'polygon'} value={inputValue} onChange={handleChange} />
        <button className='box__arrow' onClick={handleClick}>
          <FontAwesomeIcon icon={faArrowsUpDown} color='#000' />
        </button>
        <Input from='to' network={order === 0 ? 'polygon' : 'ethereum'} value={value} />
        <button className='btn-send' onClick={sendTokens}>Send tokens</button>
      </div>
    </main>
  )
}

export default BridgeBox
