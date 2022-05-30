import React from 'react'

const Transactions = () => {
  const transactions = [
    {
      symbol : 'NVDA',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'BLH',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRW',
      quantity : 3,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRA',
      quantity : 3,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRB',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRC',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRD',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRE',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRF',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },  
    {
      symbol : 'GRG',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    }
  ]

  

  return (
    <div className="wrapper-portfolio">
      <div className="container-transaction">
        <table>
            <thead className="thead-transaction">
              <tr>
                <th>Stock</th>
                <th>Shares</th>
                <th>Price</th>
                <th>Total</th>
                <th>Type</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody className="transaction-table-body">
              {transactions !== "" && transactions.map((transaction) => {
                const total = (transaction.price) * (transaction.quantity)
                return (
                  <tr>
                    <td>{transaction.symbol}</td>
                    <td>{transaction.quantity}</td>
                    <td>₱ {transaction.price}</td>
                    <td>₱ {total}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.date}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default Transactions