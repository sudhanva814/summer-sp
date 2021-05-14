import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react'
import {useState} from 'react'
import Axios from 'axios'
import Footer from './Footer'


const History=()=>{
    const [hist,setHist]=useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8000/getHistory").then(
            (response)=>{
                setHist(response.data)
            }
        )
        console.log(hist)
    }, [])
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
           <div className="container box justify-content-center">
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Amount</th>
                            <th>Transaction Date</th>
                        </tr>
                            {
                                hist.map((histry)=>{
                                    return(
                                       <tr key={histry.id}>
                                            <td>{histry.fromname}</td>
                                            <td>{histry.toname}</td>
                                            <td>₹{histry.amount}</td>
                                            <td>{histry.dateandtime}</td>
                                       </tr>
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
export default History;