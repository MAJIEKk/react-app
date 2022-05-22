/**@jsxImportSource @emotion/react*/
import {css} from "@emotion/react";
import notes from "./notes.json"

import './App.css';

function ShowNote(data){
  return(
    <div className="noteMain">
          <div className="noteNum">Заметка {data.data.id}</div>
          <div className="noteTime">{data.data.date}</div>
          <div className="noteDesc">{data.data.description}</div>
    </div>
  )
}
function App() {
  const note = notes.map((item)=> <ShowNote key={item.id} data={item}/>)
  
  return (
  <div css={css`
    display:flex;
    flex-direction:column;
    align-items: center;
    `}>

    <h2>Заметки</h2>
    
  <div css={css`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;
  `}>{note}</div>
  </div>
  );
}

export default App;
