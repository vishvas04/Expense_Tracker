import React from 'react'
import { useEffect,useState } from 'react';
function Summary(props) {
  // const f=props.onFormSubmit;
  // console.log(f)
  // f()
  // console.log(props.response)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/expenses')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [props.response]);

  // const a=props.response
  return (
    <div className='container m-4'>
        {/* <h1>Hello</h1> */}
        <h1 className="display-13 m-4">Summary of the Expenses spent in month of january</h1>
        {/* <p className="lead">The money spent by you in the month of jan against groceries is {a.groceries} and against electricty bills is {a.electricity} and against water bills is {a.water} and against rents is {a.rent}</p> */}
        <table className='table table-striped table-dark'>
          {/* thead */}
          <tr>
            <th>Month</th>
            <th>Groceries</th>
            <th>Electricity</th>
            <th>Water</th>
            <th>Rent</th>
          </tr>
          {/* <tr>
            <td>20</td>
            <td>26</td>
            <td>35</td>
            <td>90</td>
          </tr> */}
          {/* <tr>
            <td>{a.groceries}</td>
            <td>{a.electricity}</td>
            <td>{a.water}</td>
            <td>{a.rent}</td>
          </tr> */}
  
        {posts.map((post) => (
          // <tr key={post.id}>{post.title}</tr>
          <tr>
            <td>{post.month}</td>
            <td>{post.groceries}</td>
            <td>{post.electricity}</td>
            <td>{post.water}</td>
            <td>{post.rent}</td>
          </tr>
        ))}
        </table>
    </div>
  )
}

export default Summary