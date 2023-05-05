import { useState, useEffect } from "react"

const App = () => {
const [image, setImage] = useState(null)


   useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random") 
            .then((res) => res.json())
            .then((dog) => setImage(dog.message))
   }, []);

   return (
    <div>
      {image ? (
        <img src={`${image}`} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


export default App;