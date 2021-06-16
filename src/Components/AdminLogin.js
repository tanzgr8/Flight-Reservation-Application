import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import './userLogin.css'
import "react-toastify/dist/ReactToastify.css";
function AdminLogin() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [emailerr, setemailErr] = useState("Not A Email Valid Format");
    const [passerr, setpassErr] = useState("Too Short Password...Minimum 6 characters");
    const [login, setLogin] = useState(false);
    const Helper = (e) => {
      e.preventDefault();
      notify();
    }
    const notify = () => {
  
      let eiderr = Evalidate();
      let perr = Pvalidate();
      if (eiderr === "false") {
        toast.error(emailerr, {
          position: "top-center",
        });
      } else if (perr === "false") {
        toast.error(passerr, {
          position: "top-center",
        });
      } else {
        setLogin(true);
        setEmail("");
        setPass("");
        toast.success("You are Logged in!!!!!", {
          position: "top-center",
        });
      }
    };
    const Evalidate = () => {
      if (!email.includes("@")) {
        setemailErr("Not a valid  Email Format");
        return "false";
      } else {
        setemailErr("Too Short Password...Minimum 6 characters ");
        return "true";
      }
    };
    const Pvalidate = () => {
      if (pass.length < 5) {
        setpassErr("Too Short Password...Minimum 6 characters");
        return "false";
      } else {
        setpassErr("");
        return "true";
      }
    };
    function renderbuttons() {
      if (login) {
        return (
          <React.Fragment>
            <div className="container text-center ct">
              <Link className="btn btn-success btn-lg" role="button" to="/admin">
                CONTINUE TO ADMIN PAGE <i className="arrow right icon"></i>
              </Link>
  
            </div>
          </React.Fragment>
        );
      } else {
        return (<React.Fragment>
          <div className="container  text-white">
            <h1 className="m-5"> ADMIN LOGIN</h1>
            <div className="ct1"> 
              <div class="mb-3 row">
                <label className=" col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="email"
                    className="form-control form-control-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label className=" col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    name="pass"
                    className="form-control form-control-sm"
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button onClick={Helper} className="btn btn-primary btn-lg">
                Submit
              </button>
            </div>
          </div>
        </React.Fragment>
        );
      }
    }
  
    return (
     <>
      {
        renderbuttons()
      }
      <ToastContainer />
  </>
  
    );
}

export default AdminLogin
