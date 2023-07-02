const Input = ({ from, network, value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className='input'>
      <div className='input__label'>{from === 'from' ? 'From' : 'To'}
        <div className='input__network'>
          <img src={`${network}.png`} alt={`${network} logo`} className='network_logo' />
          <div className='network_name'>{network === 'ethereum' ? 'Ethereum Sepolia' : 'Polygon Mumbai'}</div>
        </div>
      </div>
      <div className='input__wrapper'>
        <input
          className='input__field'
          type='number'
          value={value}
          onChange={handleChange}
          {...from === 'to' && { readOnly: true }}
        />
        <div className='input__field__label'>{network === 'ethereum' ? 'ETFM' : 'MTFM'}</div>
      </div>
    </div>
  )
}

export default Input
