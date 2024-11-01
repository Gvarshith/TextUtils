import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
function App() {
  const[mode,setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#333333'
        document.body.style.color = 'white'
        showAlert("Dark mode has been enabled" ,"success")
    }else{
      setMode('light')
       document.body.style.backgroundColor = '#BFC0C0'
       document.body.style.color = 'black'
       showAlert("Light mode has been enabled","success")
  }
  }
  return (
    <>
      <Navbar title="TextUtils" mode = {mode} toggleMode= {toggleMode} />
     <Alert alert={alert}/>
      <div className="container mb-3">
       <TextForm mode = {mode} showAlert = {showAlert} />
      {/* <h1 className="my-2">About Us</h1>
      <About/> */}
      </div>
    </>
  );
}

export default App;
