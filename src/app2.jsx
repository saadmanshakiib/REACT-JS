import Demo from "./component/Demo";
import ContactForm from './component/ConatctForm';
import Header from './component/Header';
import Footer from './component/Footer';
import Hero from './component/Hero';
import { use, useRef } from "react";


// const loginButton=(status)=>{
//   if(status){
//     return <button>Logout</button>
//   }
//   else{
//     return <button>Login</button>
//   }
// }


const App = () => {

  let fName,sName = useRef();
  

  const clicked =()=>{
    let firstname = fName.value;
  let secname = sName.value;
    alert("Hello "+firstname+" "+secname);
  }

  return(
    <div>
      <input ref={(a)=>fName=a}></input>
      <input ref={(a)=>sName=a}></input>
      <button onClick={clicked}>Submit</button>
    </div>
  )
  //     let firstNameRef = useRef();
  //     let lastNameRef = useRef();

  //     const submit=()=>{
  //       alert("Hello " + firstNameRef.current.value +" "+ lastNameRef.current.value)
  //     }

  // return(
  //   <div>
  //     <input ref={firstNameRef} placeholder="Enter first name"></input>
  //     <input ref={lastNameRef} placeholder="Enter last name"></input>
  //     <button onClick={submit}>Submit</button>
  //   </div>
  // )
  // let myImgRef = useRef();

  // const change = () => {
  //     myImgRef.current.src = "https://wallpapers.com/messi-pictures";
  // }

  // return(
  //   <div>
  //     <img ref={myImgRef} src="https://www.gettyimages.in/photos/ruud-gullit-photos"></img>
  //   <button onClick={change}>Click to change photo</button>
  //   </div>
  // )

  // const postFormData = (event) =>{
  //   event.preventDefault();
  //   alert("Submitted");
  // }

  //   let myRef = useRef();


  //   const change=()=>{
  //   myRef.current.innerHTML = "<ul><li>Sadman</li><li>Sakib</li></ul>";
  //   }


  // return(
  //    <div>
  //     <h1 ref={myRef}></h1>
  //     <button onClick={change}>Click</button>
  // </div>
  //   <div>
  //     <form onSubmit={postFormData}>
  //       <input placeholder="Name"></input>
  //     <button type="submit">Submit</button>
  //     </form>
  //   </div>
   //)

  // // const buttonClick=()=>{
  // //   alert("Error")
  // // }
  // return(
  //   // <div>
  //   //   <Hero btnclk = {buttonClick}/>
  //   // </div>
  //   <button onClick={()=>{
  //     alert("Error!!!")
  //   }}>Click For Error</button>
  // )
  // const itemObj = {
  //   name : "Sadman",
  //   age : 23,
  //   city : "Dhaka"
  // }
  // return(
  //   <div>
  //     <Hero item = {itemObj}/> 
  //   </div>
  // );

  // return(
  //     <div>
  //       <Hero title="Learning with Sadman" des="Parent Function App.jsx is sending data to the child function hero.jsx"/>
  //     </div>
  // );

  // const status = false; //automatically invoked function
  // return(
  //   <div>
  //     {(()=>{
  //       if(status == true){
  //         return <button>Logout</button>
  //       }
  //       else{
  //         return <button>Login</button>
  //       }
  //     })()}
  //   </div>
  // );

//  const status = false;

// let isLoggedIn = false;
// return(

//   <div>
//     <h1>Login Status : </h1>
//     {isLoggedIn && <button>LogOut</button>}
//   </div>

// );

  // return(
  
  //    <div>
  //      {
  //       status? 
  //        <button>Logout</button>
  //       :
  //       <button>Login</button>
  //     }
  //    </div>

  // );


  // const status = false;

  // switch(status){
  //   case true: return <button>Logout</button>
  //   case false: return <button>Login</button>
  //   default: return null;
  // }

//  let marks = 87;
         // const city = ["Dhaka","Chittagong","London","Dublin"];
        // const letter = ["e","q","a","f"];


  // return(
  //       // <div>
  //       //   <h1>Login status</h1>
  //       //   {loginButton(false)}
  //       // </div>

  //     );
    // <div>
    //   <Demo/>
    //   <ContactForm/>
    //   <Header/>
    //   <Footer/>
    //   <Hero/>
    //   <button onClick = {() =>alert("Hello") }>Click</button>
    //   <button style={
    //     {
    //       color : "red"
    //     }
    //   }>Style</button>
    // </div>
    // <div>
    //     { marks>80 ? <h1>Passed</h1> : <h2>Failed</h2> }
    // </div>

    // <div>
    //   {(
    //     ()=>{
    //       if(marks > 90){
    //         return <h1>Result is : A+</h1>
    //       }
    //       else if(marks >=80 && marks <90){
    //         return <h1>Result is : A</h1>
    //       }
    //       else{
    //         return <h1>Failed</h1>
    //       }
    //     }
    //   )()}
    // </div>

    // <div>
    //   <ul>
    //     {
    //       city.map((cities,iterate)=>{
    //         return <li key={iterate.toString()}>
    //           {cities}
    //         </li>
    //       })
    //     }
    //   </ul>
    // </div>

    // <div>
    //     <ol>
    //       {
    //         letter.map((alphabet,iterate)=>{
    //           return <li key={iterate.toString()}>
    //             {alphabet}
    //           </li>
    //         })
    //       }
    //     </ol>
    // </div>
   



}
export default App;
