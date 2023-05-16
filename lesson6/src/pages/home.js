import { useEffect, useState } from "react";
import { Head } from "./todoHead";
import { Main } from "./todoMain";

const taskList = [
  { id: 1, name: "Create React App" },
  { id: 2, name: "Create Folders" },
  { id: 3, name: "Create Tasks" },
];

export const Home = () => {
  const [list, setList] = useState();

  useEffect(() => {
    setTimeout(() => {
      setList(taskList);
    }, 3000);
  }, []);

  return (
    <div>
      {list ? 
        <div>
          <Head setList={setList} list={list}/>
          <Main list={list}/>
        </div>
       : 
        <div>
          <h1>Loading...</h1>
        </div>
      }
    </div>
  );
};
