import  { useState } from 'react'

function useInput(initialVal) {
  const [val, setVal] = useState(initialVal)
    const reset = () => {
        setVal(initialVal)
    }
    const bind = {
        val, onChange: e => {e.target.val}
    }

    return [val, bind, reset]
  
}

export default useInput

// in input file
// const [fName, bindFname, resetFname] = useInput('')
// const [lName, bindLname, resetLname] = useInput('')
// delete useState() fname and lname
// <input type = 'text' ...bindFname/>
// in submitHandler() { resetFname(); resetLname();}
