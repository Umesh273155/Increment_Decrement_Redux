   
    import './App.css';
    import Count from './Components/Count';

     import {useDispatch} from "react-redux";
   
    function App(){
     const dispatch= useDispatch();
    return (
        <div className="App">
            <h1>Hello</h1>
            <button onClick={(e)=>dispatch({type:"DECREMENT" })}>DECREMENT</button>
     <Count/>
      
        <button onClick={(e)=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
         
         </div>

    )
}

export default App;
