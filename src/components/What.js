import React from "react";


const name = (props) => {

    // this is jsx code
    // return (
    //     <div>
    //         <div className="dummyClass">
    //             <h1>Hello Vishwas</h1>
    //         </div>
    //     </div>
    // )

    // this is without jsx

    return React.createElement(
        'div',
        {id:"hello",className : "dummyClass"},
    
        React.createElement('h1',null,'Hello' +  props.name  )
        
    )
}
export default name