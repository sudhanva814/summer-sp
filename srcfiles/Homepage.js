
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react'
import {useState} from 'react'
import Axios from 'axios';
import Footer from './Footer'
import {BrowserRouter as Link} from "react-router-dom"

const Homepage=()=>{
const [name,setName]=useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8000/cust").then((response)=>{
            setName(response.data)
        })
        console.log(name)
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
         <div className="container box">
             <div className="text-center">
                <h1 className="display-4">TSF BANK</h1>
                <img src="https://static8.depositphotos.com/1005404/996/i/600/depositphotos_9968183-stock-photo-build-bank.jpg" alt="Bank Image"></img>
             </div>
             <div className="text-center m-4">
             <button className="button btn-sm btn-primary"><a href="/Customers" className="text-white">View all Customers</a></button>
             </div>
             
         </div>

        <Footer></Footer>
        </>
    );
    
}
export default Homepage;