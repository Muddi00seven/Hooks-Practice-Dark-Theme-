import React ,{ useState } from 'react'
import Child from './child'
import '../App.css'

const Parent = () => {
    let p = document.getElementById('p');
    const [isLit, setLit] = useState(true);
    let [age, setAge] = useState(24);
    // let [decrease , decreaseAge] = useState(age)
  
    const lightUpdate = () => {
        console.log('button click');
        setLit(!isLit);  
  
    
    }
  
    const ageIncrease = () => {
      console.log('button click');
      setAge(++age);
  }
  
  
  const ageDecrease = () => {
   setAge(--age)
  }
  
    return (
        <div className={`room ${isLit? 'dark' : 'white'}`}>
  
              <p> this is shit {isLit? "light" : "dark"}</p> 
                <br/>
                <p id='p'>age : {age}</p>
                {/* <p>age : {decrease}</p> */}
  
                <button onClick={() => {setLit(!isLit);  }}>For Light</button>
                <button onClick={ageIncrease}>For Age</button>
                <button onClick={ageDecrease}>For Decrease</button>
  
        </div>  
    );
    
}

export default Parent
