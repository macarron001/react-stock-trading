

const Portfolio = () => {
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
    <div className="wrapper-portfolio">
      <div className="container-portfolio">
        <table>
            <thead className="thead-portfolio">
              <tr>
                <th>Stock</th>
                <th>Shares</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="portfolio-table-body">
              {stocks !== "" && stocks.map((stock) => {
                console.log(stock.symbol);
                return (
                  <tr key={stock.symbol}>
                    <td>{stock.symbol}</td>
                    <td>{stock.company_name}</td>
                    <td>{stock.price}</td>
                    <td><button className='portfolio-sell'>Sell</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      </div>
      <div className="portfolio-footer">
        <div className="balance">
          <p>Investment Total: <span className="first">P10,000.00</span> </p>
          <p>Remaining Balance: <span className="last">P10,000.00</span></p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio