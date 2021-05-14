import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom'

let Custtable=({id,name,email,currentbal})=>{
    const history=useHistory();
    const transfer=()=>{
        history.push(`/Moneytransfer/${id}`)
    }
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>₹{currentbal}</td>
            <td><button className="button btn-sm btn-primary" onClick={transfer}><span className="text-white">Transfer</span></button></td>
        </tr>
    );

}
export default Custtable;