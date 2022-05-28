import React , {useState} from 'react';

const Counter = ()=> {

    const [value, setValue] = useState(0);

    return(
        <div>
            <div> counter 의 값은 {value}</div>
            <button onClick={()=>setValue(value + 1)}> plus </button>
            <button onClick={()=>setValue(value -1)}>minus</button>
        </div>
    )

}

export default Counter;