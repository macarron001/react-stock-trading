import React from 'react'
import Row from './Row'

const Table = () => {
  const stocks = [
    {
      symbol : 'NVDA',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'BLH',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRW',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRA',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRB',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRC',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRD',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRE',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRF',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRG',
      company_name : 'HEHE',
      price : 2.00,
    }
  ]

  return (
    <div className='wrapper-table'>
      <div className='container-table'>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>

          <tbody className='stock-table-body'>
            {stocks !== "" && stocks.map((stock) => {
              console.log(stock.symbol);
              return (
                <Row key={stock.symbol} stock={stock} />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table