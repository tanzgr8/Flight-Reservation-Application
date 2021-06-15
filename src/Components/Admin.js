import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Delete ,Edit} from '../Redux/Action';
import Table from './Table';

function Admin() {
    const[eid,setEid] = useState("");
    const [edit ,setEdit]=useState(false);
    const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [time, setTime] = useState("12:30 - 2:30");
    const list =useSelector(state => state.bookingReducers.list);
    const dispatch = useDispatch();
    const Helper=(id)=>{
        setEid(id);
        setEdit(true);
}
const handleSubmit=(e)=>{
e.preventDefault();
dispatch(Edit(name,date,to,from,time,eid));

}
const EditHelp=()=>{
    if(edit){
        return(
        <>
           <form className="form"> 
           <div class="px-5 row form-group">
              <label className=" col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="form-control form-control-sm"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div class="px-5 row form-group">
              <label className=" col-sm-2 col-form-label">Date</label>
              <div className="col-sm-10">
                <input
                  type="date"
                  name="date"
                  required
                  className="form-control form-control-sm"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div class="px-5 row form-group">
              <label className=" col-sm-2 col-form-label">From </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="from"
                  className="form-control form-control-sm"
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
            </div>
            <div class="px-5 row form-group">
              <label className=" col-sm-2 col-form-label">Destination</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="to"
                  className="form-control form-control-sm"
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
            </div>
            <div class="px-5 row form-group">
              <label className=" col-sm-2 col-form-label">Time</label>
              <div className="col-sm-10">
                <select
                  class="form-control"
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option>12:30 - 2:30</option>
                  <option>12:30 - 2:30</option>
                  <option>2:30 - 4:30</option>
                  <option>4:30 - 6:30</option>
                  <option>6:30 - 8:30</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => handleSubmit(e)}
            >
              Book Tickets
            </button>

           </form>
        </>
        );
    }
}

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
                <th scope="col"> Edit </th>
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
                       edit ={()=>Helper(reservation.id)}
                     />
                   );
                })
            }  
         </table>  
         {EditHelp()}
    </div>   
        </>
       
    )
   
}


export default Admin
