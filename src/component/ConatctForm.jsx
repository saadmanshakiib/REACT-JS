import {useContext} from "react";
import App from "./App.jsx";
import {AppContext} from "../ContextDirectory/AppContext.jsx";

const ContactForm = () =>{
const phone = useContext(AppContext);
    return(
        <div>
            {/*<input/>*/}
            {/*<button>Submit</button>*/}
            <h1>Contact</h1>
            <h3>Phone : {phone}</h3>
        </div>
    );

}
export default ContactForm;