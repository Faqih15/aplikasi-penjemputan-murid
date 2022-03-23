import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { HiPlus } from "react-icons/hi";

function App() {
  const todoinputref = useRef();
  const [todo, gantitodo] = useState([]);
  const [edit, gantiedit] = useState("");
  //default isi dari todo adlh array kosong di baris 7
  
  useEffect(() => {
    const url = "http://localhost:3001/todoap";
    axios.get(url).then((respon) => {
      gantitodo(respon.data);
    });
  }, []);

  const fungsidelete = (indexDelete) => {
    const url = "http://localhost:3001/todoap/";
    const newtodo = [...todo];
    const id = newtodo[indexDelete].id;

    axios.delete(url + id).then((respon) => {
      axios.get(url).then((respon) => {
        gantitodo(respon.data);
      });
    });
  };
  const fungsinambah = (parameterTambah) => {
    parameterTambah.preventDefault();
    const label = parameterTambah.target.label.value;
    const url = "http://localhost:3001/todoap/";
    const ambil = {
      label,
      status: "draft",
    };
    axios
      .post(url, ambil)
      .then((respon) => {
        axios
          .get(url)
          .then((respon) => {
            gantitodo(respon.data);
          })
          .catch((y) => {});
      })
      .catch((x) => {});
    parameterTambah.target.label.value = "";
  };
  const fungsiedit = (e, i) => {
    const newTodo = [...todo];
    newTodo[i].label = e.target.value;
    // console.log(e.target.value);
    gantiedit(e.target.value);
  };
  const saveedit = (i) => {
    const newTodo = [...todo];
    const id = newTodo[i].id;
    const url = "http://localhost:3001/todoap/";

    if (edit) {
      const hasil = { label: edit };

      axios.patch(url + id, hasil).then((respon) => {
        axios.get(url).then((respon) => {
          gantitodo(respon.data);
        });
      });
      gantiedit("");
    }
    // console.log(edit);
  };
  const cekdone = (e, indexCekdone) => {
    const newTodo = [...todo];
    // if (e.target.checked) {
    const id = newTodo[indexCekdone].id;
    const url = "http://localhost:3001/todoap/";
    const ambil = {
      status: "done",
    };
    axios.patch(url + id, ambil).then((respon) => {
      axios.get(url).then((respon) => {
        gantitodo(respon.data);
      });
    });
    // }
  };
  const checkdraft = (e, indexCekdraft) => {
    const newTodo = [...todo];
    // if (e.target.checked) {
    const id = newTodo[indexCekdraft].id;
    const url = "http://localhost:3001/todoap/";
    const ambil = {
      status: "draft",
    };
    axios.patch(url + id, ambil).then((respon) => {
      axios.get(url).then((respon) => {
        gantitodo(respon.data);
      });
    });
    // }
  };

  return (
    <div className="outline-none grid grid-cols-2 gap-10 bg-[#01042f] h-full">
      <div className="outline-none p-10 mx-auto w-full">
        <div className="text-xl text-white font-bold">Todo</div>
        <div className="outline-none space-y-5 m-5 w-full">
          {todo?.map((x, i) => {
            return x.status === "draft" ? (
              <div
                key={i}
                className="focus-within:border-[#92ff00] border-red-500 text-white
                 bg-black items-center space-x-5 border-x-2	border-y-4 px-4 py-2 rounded flex flex-nowrap"
              >
                <input
                  className="outline-none bg-black"
                  type="button"
                  value="➡️"
                  onClick={(e) => cekdone(e, i)}
                />

                <input
                  className="outline-none bg-black"
                  type="button"
                  value="❌"
                  onClick={() => fungsidelete(i)}
                />

                <input
                  className="outline-none bg-black"
                  type="button"
                  value="💬"
                  onClick={() => saveedit(i)}
                />

                <input
                  value={x.label}
                  className="whitespace-normal outline-none bg-black w-full"
                  onChange={(e) => fungsiedit(e, i)}
                  onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                      saveedit(i);
                    }
                  }}
                />
              </div>
            ) : null;
          })}
          <form
            onSubmit={fungsinambah}
            className="outline-none bg-white flex items-center space-x-5 border border-black px-4 py-2 rounded"
          >
            <HiPlus />
            <input
              ref={todoinputref}
              name="label"
              type="text"
              className="outline-none w-full outline-0"
              placeholder="Masukan tugas yang akan dikerjakan"
              autoComplete="off"
              required
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>

      
      <div className="outline-none p-10 mx-auto w-full">
        <div className="text-xl text-white font-bold">Done</div>
        <div className="outline-none space-y-5 m-5 w-full">
          {todo.map((todoap, index) => {
            return todoap.status === "done" ? (
              <div
                key={index}
                className="focus-within:border-[#92ff00] border-red-500 text-white bg-black flex items-center space-x-5 border-4 px-4 py-2 rounded"
              >
                {/* <input type="checkbox" onChange={(e) => checkdraft(e, i)} /> */}

                <input
                  className="outline-none bg-black mx-0.5 my-0.5"
                  type="button"
                  value="⬅️"
                  onClick={(e) => checkdraft(e, index)}
                />

                <input
                  className="outline-none bg-black"
                  type="button"
                  value="❌"
                  onClick={() => fungsidelete(index)}
                />

                <input
                  className="outline-none bg-black"
                  type="button"
                  value="💬"
                  onClick={() => saveedit(index)}
                />

                <input
                  value={todoap.label}
                  className="outline-none bg-black  w-full"
                  onChange={(todoap) => fungsiedit(todoap, index)}
                ></input>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
