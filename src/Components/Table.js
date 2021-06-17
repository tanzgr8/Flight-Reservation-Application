import React from 'react'

function Table(props) {
    return (
       <>
      
          
          <tbody>
              <tr>
                  <th>{props.name}</th>
                  <th>{props.date}</th>
                  <th>{props.to}</th>
                  <th>{props.from}</th>
                  <th>{props.time}</th>
                  <th><button className="btn btn-danger" onClick={()=>{props.delete(props.id)}}><i className="trash alternate outline icon"></i></button></th>
                  <th><button className="btn btn-danger" onClick={()=>{props.edit()}}><i className="trash alternate outline icon"></i></button></th>
              </tr>
          </tbody>
      
       </>
    )
}

export default Table
