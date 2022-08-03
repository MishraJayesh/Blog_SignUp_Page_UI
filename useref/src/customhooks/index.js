// Custom Hooks :- Custom Hooks Are Used For DOM Manipulation.
// useRef :- useRef Is A Custom Hook Used For DOM Manipulation.
//           It Stores A Mutable Value Which Do Not Cause Any Kind Of Re-render When Updated.
//           useRef Can Be Used To Access A DOM Element Directly.

// In general, we want to let React handle all DOM manipulation.
// But there are some instances where useRef can be used without causing issues.
// In React, we can add a ref attribute to an element to access it directly in the DOM.


import React, {useRef} from 'react';

function Test(){
    const inputRef= useRef(0);      // Initializing useRef
    function handleRef(){           // This function is actually for manipulating the DOM and its elements
        console.log(inputRef,'handleRef');
        inputRef.current.focus();
        console.log(inputRef.current.value);
        inputRef.current.style.color="white";
        inputRef.current.style.borderRadius="10px";
        inputRef.current.style.backgroundColor="darkcyan";
    }
    return(
        <div>
            <input ref={inputRef} type="text" />            {/* Adding ref attribute for Accessing the element directly in DOM */}
            <button onClick={handleRef}>Click Here</button> {/* rendering the mutable component or object inputRef by onClick function */}
        </div>
    )
}

export default Test;