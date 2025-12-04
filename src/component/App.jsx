import {useEffect, useState} from "react";
import Profile from "./Profile.jsx";
import ContactForm from "./ConatctForm.jsx";
import Footer from "./Footer.jsx";
const App=()=>{
    //
    // const [count,setCount] = useState(0);
    //         useEffect(()=>{
    //             console.log("Hi");
    //         },[count]);
    // return(
    //     <div>
    //         <p>{count}</p>
    //         <button onClick={()=>setCount(count+1)}>Click</button>
    //     </div>
    // )

    return(
        <div>
            <h1>App</h1>
            <Profile/>
            <Footer/>

        </div>
    )
}
export default App;