import Demo from "./component/Demo";
import ContactForm from './component/ConatctForm';
import Header from './component/Header';
import Footer from './component/Footer';
import Hero from './component/Hero';



const App = () => {

  let marks = 87;

  return (
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

    <div>
      {(
        ()=>{
          if(marks > 90){
            return <h1>Result is : A+</h1>
          }
          else if(marks >=80 && marks <90){
            return <h1>Result is : A</h1>
          }
          else{
            return <h1>Failed</h1>
          }
        }
      )()}
    </div>
  );


}
export default App;
