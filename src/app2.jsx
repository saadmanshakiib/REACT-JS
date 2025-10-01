import Demo from "./component/Demo";
import ContactForm from './component/ConatctForm';
import Header from './component/Header';
import Footer from './component/Footer';
import Hero from './component/Hero';
import { use, useRef, useState } from "react";


// const loginButton=(status)=>{
//   if(status){
//     return <button>Logout</button>
//   }
//   else{
//     return <button>Login</button>
//   }
// }


const App = () => {
  return(
    <div>
      
    </div>
  )

  // const [obj,setObj] = useState({
  //   fname : "sadman",
  //   lname : "sakib"
  // });

  //   const change=()=>{
  //       setObj({fname : "Nissan" , lname:"Shakib"})
  //   }
  //   const Reverse=()=>{
  //     setObj({fname : "sadman",lname : "sakib"})
  //   }
  //   const update=()=>{
  //     setObj(
  //       prevObj=>({
  //         ...prevObj,
  //         fname : "saadman"
  //       })
  //     )
  //   }

  // return(

  //   <div>
  //     <h1>{obj.fname}</h1>
  //           <h1>{obj.lname}</h1>
  //           <button onClick={update}>Change</button>
  //                       <button onClick={Reverse}>Reverse</button>
  //   </div>
  // )

  // const [count,setCount] = useState(0);

  // return(
  //   <div>
  //     <h1>Count : {count}</h1>
  //     <button onClick={()=>setCount(count+1)}>Increase</button>
  //     <button onClick={()=>setCount(count-1)}>Decrease</button>
  //     <button onClick={()=>setCount(0)}>Reset</button>
  //   </div>
  // )
//   const user = {
//     name: "saadman",
//     img: "https://media.licdn.com/dms/image/v2/D5603AQFmcw_PNY7Veg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732471936930?e=1760572800&v=beta&t=gjUBYLcwL1r1wcXfoYe3myEhSMUaK3Arj7CUb6cxhVw",
//     imgsize: 40,
//   };

//   let apiData = useRef(null);
//   let mytag = useRef();

// const fetchData = async() =>{
//      const response = await fetch('https://dummyjson.com/products');
//     apiData.current = await response.json();
      
// }

//   const showData=()=>{
//       mytag.current.innerText = JSON.stringify(apiData);
//   }

//   return (
//     <div>
//       <h1>Hi {user.name}</h1>
//         <p ref={mytag}></p>
//       <button onClick={fetchData}>Call API</button>
//       <button onClick={showData}>Show Data</button>
      
//     </div>
//   );
};


  // let myref = useRef();
  // const change=()=>{
  //   myref.current.classList.remove("text-success");
  //   myref.current.classList.add('text-danger');
  // }

  // return(
  //   <div>
  //     <h1 className="text-success" ref={myref}>Success</h1>
  //   <button onClick={change}>Change</button>
  //   </div>
  // )

  // let fName,sName = useRef();
  

  // const clicked =()=>{
  //   let firstname = fName.value;
  // let secname = sName.value;
  //   alert("Hello "+firstname+" "+secname);
  // }

  // return(
  //   <div>
  //     <input ref={(a)=>fName=a}></input>
  //     <input ref={(a)=>sName=a}></input>
  //     <button onClick={clicked}>Submit</button>
  //   </div>
  // )
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
   
export default App;
