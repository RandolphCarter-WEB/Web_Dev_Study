import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [postAppData, setPostAppData] = useState([]); //Don't Use This
  const [AppData, setAppData] = useState([]);

  useEffect(() => {
    if(AppData && postAppData) {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(Response => Response.json())
        .then(json => {
          setPostAppData(json);
          setAppData(postAppData);
        })
    }
  }, [AppData, postAppData]);

  return (
    <div>
      <h3>Hello React!</h3>
      <ul>
        {postAppData.map((item,index) => <li key={index}>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default App;