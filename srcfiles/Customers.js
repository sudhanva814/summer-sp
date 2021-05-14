
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react'
import {useState} from 'react'
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import Custtable from './Custtable'
import {BrowserRouter as Link} from 'react-router-dom';
import Footer from './Footer'

const Customers=()=>{
    
    //to store the List from MySQL
    const [name,setName]=useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8000/cust").then((response)=>{
            setName(response.data)
        })
        console.log(name)
    }, [])
    
    const history=useHistory(); 
    const transfer=(id)=>{
        history.push(`/Moneytransfer/${id}`)
    }

    return(
        <>
            <div className="main mb-3" >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="/Home">Home</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/Customers">Customers</a>
                        <a className="nav-link" href="/History">History</a>
                    </div>
                    </div>
                </div>
            </nav>
            </div>
            <div className="box text-center">
            <table className="table table-striped">
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email-ID</th>
                    <th>Current Balance</th>
                </tr>
               {
                   
                       name.map((cust)=>{
                           return(
                           <Custtable
                           key={cust.id}
                           id={cust.id}
                           name={cust.name}
                           email={cust.email}
                           currentbal={cust.currentbal}>
                           </Custtable>
                           );
                           })
               }
                </tbody>
            </table>
            </div>
            <Footer></Footer>
        </>
    );
}
export default Customers;