import React from 'react'

const Traders = () => {

  const users = [
    {
      email : 'test1@gmail.com',
      approved: false,
      date: '04/13/2009'
    },
    {
      email : 'test2@gmail.com',
      approved: false,
      date: '04/13/2009'
    },
    {
      email : 'test3@gmail.com',
      approved: false,
      date: '04/13/2009'
    },
    {
      email : 'test4@gmail.com',
      approved: false,
      date: '04/13/2009'
    },
    {
      email : 'test5@gmail.com',
      approved: false,
      date: '04/13/2009'
    },
    {
      email : 'test6@gmail.com',
      approved: false,
      date: '04/13/2009'
    },
    {
      email :'test7@gmail.com',
      approved: false,
      date: '04/13/2009'
    },
    {
      email : 'test8@gmail.com',
      approved: false,
      date: '04/13/2009'
    },
    {
      email : 'test9@gmail.com',
      approved: false,
      date: '04/13/2009'
    },  
    {
      email : 'test10@gmail.com',
      approved: false,
      date: '04/13/2009'
    }
  ]

  return (
    <div className="wrapper-portfolio">
      <div className="container-transaction">
        <table>
            <thead className="thead-transaction">
              <tr>
                <th>Email</th>
                <th>Status</th>
                <th>Created At</th>
              </tr>
            </thead>

            <tbody className="transaction-table-body">
              {users !== "" && users.map((user) => {
                return (
                  <tr key={user.email}>
                    <td>{user.email}</td>
                    <td>{user.approved == true ? 'Approved' : 'Pending'}</td>
                    <td>{user.date}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default Traders