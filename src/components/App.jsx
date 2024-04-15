import React, {useState} from "react";

function App() {
  const currTime = new Date().toLocaleTimeString();
  const interval = 1000
  const [time, setTime] = useState(currTime)

  var updateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime) 
  }
  setInterval(updateTime, interval);

  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button onClick={getTime} >Get Time</button> */}
    </div>
  );
}

export default App;
