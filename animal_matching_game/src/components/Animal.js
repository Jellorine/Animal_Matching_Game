import { useState } from "react";

export default function Animal(props) {
    const index = Math.floor(Math.random() * 10) + 1;
    
    const [name, setName] = useState(props.animal[index].name);

    
  
  return (
    <>
      <div className="left-div">
        <h3>Result</h3>
        
      </div>
      <div className="middle">
        <h3>Animal Name</h3>
        <div className="animal-name">{name}</div>
        
      </div>
      <div className="right-div">
        <div className="selectAni">
          <h3>Select an Animal</h3>
          
        </div>

        <div className="animal-grid">
            {props.animal.map((ani) => (
                <img
                    className="img"
                    src={require("../assets/fig/" + ani.img)}
                    alt="animal"
                    
                    
                />
            ))}
        </div>
      </div>
    </>
  );
}
