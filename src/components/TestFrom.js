
import {useState} from "react";


export default function TextForm(props) {
    const [test,setText] = useState("");
  

    const handleOnChange = (e)=>{
        console.log("test changesss");
        setText(e.target.value)
    }
    const upperCase = ()=>{
        console.log("click on button--",test);
        setText(test.toUpperCase())
        props.showAlert("text change into uppercase!","success")
    }

    const clearText = ()=>{
        console.log("e8787e6e87");
        setText("")
        props.showAlert("text cleared!","success")
    }

    const removeSpace = ()=>{
        let arr = test.split(" ");
        let str = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if(arr[i] !==""){

                str+="  "+arr[i]
            }
            
        }
        setText(str)
        props.showAlert("removed extra spaces!","success")

    }

    const uploadHandler = ()=>{
        props.showAlert("porduct upload","success")
    }
    
    return (
        <>

        <div className="container" style={{color: (props.mode === "dark"?"white":"black")}}>

        <div className="mb-3">
        <label htmlFor="myBox" className="form-label" >{props.title}</label>
        <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: (props.mode === "dark"?"#312c2c":"white"),color:props.mode === "dark"?"white":"black"}} onChange={handleOnChange} value={test}></textarea>
        <button type="button" className="btn btn-primary my-3" onClick={upperCase}>UpperCase</button>
       
        <button type="button" className="btn btn-danger mx-2" onClick={clearText}>Clear</button>
        <button type="button" className="btn btn-secondary mx-3" onClick={removeSpace}>Remove spaces</button>
        <button type="button" className="btn btn-success" onClick={uploadHandler}>Upload product</button>
        
    </div>
    </div>

    <div className="container" style={{color: (props.mode === "dark"?"white":"black")}}>
        <h1>Text Summary</h1>
        <p>Words:   {test.split(" ").length-1}</p>
        <p>Characters:   {test.length}</p>
        <p>{test.split(" ").length*0.008} minustes to reads</p>
        <h1>Preview</h1>
        <p>{test === ""?"Please enter some text to display here":test}</p>
    </div>
    </>
       

    )
}

