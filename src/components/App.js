// create your App component here
import React, { useEffect } from "react";

const App = () => {
    const[dogImage,setDogImage]=React.useState(null);
    const[isLoaded,setIsLoaded]=React.useState(false);

useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data)=>{
        setDogImage(data.message);
        setIsLoaded(true);
    })
    },[])

    if (!isLoaded) return <p>Loading...</p>;

  return (<div>
    App
    <img src={dogImage} alt="A Random Dog"/>
  </div>);
};



export default App;
