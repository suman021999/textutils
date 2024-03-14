import React,{useState} from 'react'




export default function TextFrom(props) {
  const handleUpClick=()=>{
    // console.log("uppercase was clicked " + text)
    let newText=text.toUpperCase();
    setTex(newText)
  }

  const handleLOClick=()=>{
    // console.log("LowerCase was clicked " + text)
    let newText=text.toLowerCase();
    setTex(newText)
  }

  const handleclearClick=()=>{
    let newText=''
    setTex(newText)
  }

  const handleOnChange=(event)=>{
    // console.log("on chenged")
    setTex(event.target.value)
  }
  const handlecopy = ()=>{
    let text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  

  const[text,setTex]=useState('Enter text here');
  // text=("new text"); wrong way
  // setTex=("new text");
  
  return (
          
         <>
            <div className="container" style={{color:props.mode==='dark' ? 'white':'#2b4366'}}>
               <h1 style={{color:props.mode==='dark' ? 'white':'#2b4366'}}>{props.heading} </h1>
                <div className="mb-3">
                 <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="12"
                  style={{backgroundColor:props.mode==='dark' ? '#48648c4f':'white',color:props.mode==='dark' ? 'white':'black'}}></textarea>    
                </div>
                <button className="btn me-3 my-1 btn-primary" onClick={handleUpClick}>convert uppercase</button>
                <button className="btn me-2 my-1 btn-primary" onClick={handleLOClick}>convert Lowerpercase</button>
                <button className="btn me-3 my-1 btn-primary" onClick={handleclearClick}>clear</button>
                <button className="btn me-3 my-1 btn-primary" onClick={handlecopy}>copy</button>
                

               </div>

               <div className="container my-3" style={{color:props.mode==='dark' ? 'white':'#2b4366'}} >
                   <h1>your text summary</h1>
                   <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} chracters</p>
                   <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} mins read</p>
                   <h3>preview</h3>
                   <p>{text.length>0?text:"priview something"}</p>
                   
               </div>
        </>
       
  ) 
}

