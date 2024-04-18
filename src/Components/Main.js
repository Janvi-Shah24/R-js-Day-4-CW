import data from "./data.json";
import Card from './Card';
import './Style/main.css';

function Main() {
  return <>
   <div className="card-container">
    {
        
        data.map((ele)=> {
            return (<Card {...ele}/>)
        })
    }
   </div>
  </>;
}

export default Main;