import React, {useState} from "react";

function Increment() {
    const [count,setCount] = useState(0);


    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}
export default Increment;

