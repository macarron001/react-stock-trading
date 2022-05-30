import React from 'react'

const Row = ({stock}) => {

  return (
    <tr>
      <td>{stock.symbol}</td>
      <td>{stock.company_name}</td>
      <td>{stock.price}</td>
      <td className='row-end'><button>BUY</button></td>
    </tr>
  )
}

export default Row