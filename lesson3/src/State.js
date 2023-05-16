import { useState } from "react";

export const State = () => {
  const [name, setName] = useState("John");
  const [age, setAge] = useState();
  const [show, setShow] = useState(false);

  const list = [
    { name: 'Hoso', age: 17 },
    { name: 'Artur', age: 30 },
    { name: 'Artyom', age: 28 }
  ];

  console.log(name, "name");
  console.log(age, "age");

  const handleClick = () => {
    setName("Vaxtang");
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };

  const changeShow = () => {
    setShow(true)
  };

  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>

      <button onClick={handleClick}>Change Name</button>
      <input type="text" onChange={(Event) => changeAge(Event)} />
      <button onClick={changeShow}>
        {show === false ?
          "Show"
          :
          "Is shown"
        }
      </button>

      {show === true ?
        <div style={{ border: '1px solid black', width: '50px', height: '50px' }}></div>
        :
        <h2>false</h2>
      }

      {
        list.map((i, j) => {
          return (
            <div key={j}>
              <h3>{i.name}{i.age}</h3>
            </div>
          );
        })
      }

    </div>
  );
};
