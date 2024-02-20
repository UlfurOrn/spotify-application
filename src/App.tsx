import React, {useState} from 'react';
import MyButton from "./components/Button";

function App() {
    const [count, setCount] = useState<number>(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <div>Count: {count}</div>
            <MyButton onClick={handleClick}/>
            <MyButton onClick={handleClick}/>
        </div>
    );
}

export default App;
