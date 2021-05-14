import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import Footer from './Footer'


 const Moneytransfer=()=>{
    const [name,setName]=useState([]);
    const [balance,setBalance]=useState();
    const [user,setUser]=useState("");
    const [amount,setAmount]=useState();
    const [totransfer,setTotransfer]=useState("");
    const {id}=useParams();

    useEffect(() => {
        Axios.post('http://localhost:8000/getuser',{userid:id}).then((response)=>{
        setUser(response.data[0].name)
        setBalance(response.data[0].currentbal)
    })

        Axios.post("http://localhost:8000/cust").then((response)=>{
            setName(response.data)
        })
    }, [])

    const transfermoney=()=>{
        Axios.post('http://localhost:8000/newHistory',{name:user,toname:totransfer,amount:amount}).then(
            (response)=>{console.log(response)}
        )


        Axios.post('http://localhost:8000/fromcust',{name:user,amount:amount}).then(
            (response)=>{ console.log(response)}
        )

        alert("Money transferred Successfully");
        window.location.reload();

        Axios.post('http://localhost:8000/updatecust',{name:totransfer,amount:amount}).then(
            (response)=>{console.log(response)}
        )
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
           <div className="text-center">
                <div className="container">
              <h2>Transfer money</h2> 
              <br></br>
              <br></br>
              <select className="form-control form-control-lg" onChange={(e)=>{setTotransfer(e.target.value);}}>
                {
                    name.map((custom)=>{
                        if(custom.id!=id){
                        return(
                            <option key={custom.id}>{custom.name}</option>
                        );
                        }
                    })
                }
              </select>
              <input className="form-control form-control-lg" type="number" placeholder="Enter Amount" onChange={(e)=>{setAmount(e.target.value);}}/>
              <h4>Available Balance: ₹{balance}</h4>
              <input className="btn btn-success mt-3 btn-lg" type="submit" value="Transfer" onClick={transfermoney}/>
              </div>
           </div>
           <Footer></Footer>
        </>
    );
 }
 export default Moneytransfer;