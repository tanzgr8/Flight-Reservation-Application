import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Delete } from '../Redux/Action';
import Table from './Table';

function Admin() {
 const dispatch = useDispatch();
 const list = useSelector((state)=>state.bookingReducers.list);
    return (<>
    <div className="container">
        <h1>Admin page</h1>
        <h3 className="mt-5">Reservations Logs</h3> 
    </div> 
    <div className="container">
    <table className="table m-5 px-auto table-hover table-sm table-bordered">
    <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date of Travelling</th>
                <th scope="col">Travelling To</th>
                <th scope="col">Travelling From</th>
                <th scope="col">Time of Flight</th>
                <th scope="col"> Delete </th>
              </tr>
          </thead>
            {
                list.map((reservation)=>{
                   return (
                     <Table
                       key={reservation.id}
                       id={reservation.id}
                       name={reservation.name}
                       date={reservation.date}
                       to={reservation.to}
                       from={reservation.from}
                       time={reservation.time}
                       delete ={()=>dispatch(Delete(reservation.id))}
                     />
                   );
                })
            }  
         </table>  
    </div>   
        </>
       
    )
   
}


export default Admin
