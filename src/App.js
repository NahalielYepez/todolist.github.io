import { useState } from "react";
import "./styles.css";

export default function App() {
  const [EditBool, setEditBool] = useState(false);
  const [tList, setTlist] = useState([]);
  const [ele, setEle] = useState("");
  const [editItem, setEditItem] = useState();
  const AddList = () => {
    let arr = [...tList];
    arr.push({
      id: Date.now(),
      value: ele,
      check: false
    });
    setTlist(arr);
    setEle("");
  };

  const EditBools = (item) => {
    setEditBool(true);
    setEle(item.value);
    setEditItem(item);
  };

  const EditList = () => {
    if (ele === "") {
      return console.log("Error");
    }
    let arr = [...tList];
    arr.filter((i) => i.id === editItem.id)[0].value = ele;
    setTlist(arr);
    setEditBool(false);
    setEle("");
  };

  const checkClick = (item) => {
    let arr = [...tList];
    arr.filter((i) => i.id === item.id)[0].check = !item.check;
    setTlist(arr);
  };

  const DeleteList = () => {
    let arr = [...tList];
    const vals = arr.filter((i) => i.check === false);
    setTlist(vals);
  };

  return (
    <div className="card">
    <div className="App">
      <h1>To Do List</h1>
      <input type="text" value={ele} onChange={(e) => setEle(e.target.value)} />
      {!EditBool ? (
        <>
          <button onClick={AddList}>Agregar</button>
          <button onClick={DeleteList}>Eliminar</button>
        </>
      ) : (
        <button onClick={EditList}>Guardar</button>
      )}

      <div className="itemList1">
        {tList.map((item) => {
          return (
            <div className="itemList2" key={item.id}>
              <input
                type="checkbox"
                checked={item.check}
                onClick={() => {
                  checkClick(item);
                }}
              />
              <p className="buttonEdit">{item.value}</p>
              <button
                onClick={() => {
                  EditBools(item);
                }}
              >
                Editar
              </button>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}



