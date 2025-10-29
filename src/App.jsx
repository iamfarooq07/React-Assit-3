import React, { useState } from "react";

function App() {
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  function clickHandle(e) {
    if (isEvaluated) {
      setResult(e.target.value);
      setIsEvaluated(false);
    } else {
      setResult(result.concat(e.target.value));
    }
  }

  function equal() {
    try {
      const newResult = eval(result);
      setResult(newResult.toString());
      setHistory([...history, result + " = " + newResult]);
      setIsEvaluated(true);
    } catch {
      setResult("Error");
      setIsEvaluated(true);
    }
  }

  function clear() {
    setResult("");
    setIsEvaluated(false);
  }

  function Histroy() {
    setShowHistory(!showHistory);
  }

  return (
    <div className="w-screen h-screen bg-[#1C1C1C] flex justify-center items-center">
      <div className="bg-[#000000] rounded-3xl p-5 shadow-2xl w-[340px]">
        <div className="flex justify-between text-gray-500 mb-2 ml-2">
          <i
            onClick={Histroy}
            className="fa-solid fa-clock-rotate-left text-xl cursor-pointer hover:text-gray-300"
          ></i>
        </div>

        <input
          value={result}
          type="text"
          placeholder="0"
          readOnly
          className="w-full bg-[#1C1C1C] mt-4 text-right text-4xl text-white font-light p-4 rounded-xl outline-none mb-6"
        />

        {/* ------ */}

        {showHistory && (
          <div className="mt-4 bg-gray-100 rounded-xl p-3 max-h-40 overflow-y-auto">
            {history.length === 0 ? (
              <p className="text-gray-400 text-sm">No history yet</p>
            ) : (
              history.map((item, i) => (
                <p key={i} className="text-gray-600 text-sm border-b py-3">
                  {item}
                </p>
              ))
            )}
          </div>
        )}

        {/* ------ */}

        <div className="mt-6 grid grid-cols-4 gap-3">
          <button
            value={"AC"}
            onClick={clear}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            AC
          </button>
          <button
            value={"C"}
            onClick={clear}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition "
          >
            C
          </button>
          <button
            value={"%"}
            onClick={clickHandle}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            %
          </button>
          <button
            value={"/"}
            onClick={clickHandle}
            className="bg-orange-500 text-lg py-3 rounded-xl  font-bold text-white hover:bg-orange-400 transition"
          >
            /
          </button>
          <button
            value={"7"}
            onClick={clickHandle}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            7
          </button>
          <button
            value={"8"}
            onClick={clickHandle}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            8
          </button>
          <button
            value={"9"}
            onClick={clickHandle}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            9
          </button>
          <button
            value={"*"}
            onClick={clickHandle}
            className="bg-orange-500 py-3 rounded-xl text-lg font-bold text-white hover:bg-orange-400 transition"
          >
            *
          </button>
          <button
            value={"4"}
            onClick={clickHandle}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            4
          </button>
          <button
            value={"5"}
            onClick={clickHandle}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            5
          </button>
          <button
            value={"6"}
            onClick={clickHandle}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            6
          </button>
          <button
            value={"-"}
            onClick={clickHandle}
            className="bg-orange-500 py-3 rounded-xl text-lg font-bold text-white hover:bg-orange-400 transition"
          >
            -
          </button>
          <button
            value={"1"}
            onClick={clickHandle}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            1
          </button>
          <button
            value={"2"}
            onClick={clickHandle}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            2
          </button>
          <button
            value={"3"}
            onClick={clickHandle}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            3
          </button>
          <button
            value={"+"}
            onClick={clickHandle}
            className="bg-orange-500 py-3 rounded-xl text-lg font-bold text-white hover:bg-orange-400 transition"
          >
            +
          </button>
          <button
            value={"0"}
            onClick={clickHandle}
            className="col-span-2 bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            0
          </button>
          <button
            value={"."}
            onClick={clickHandle}
            className="bg-gray-100 text-lg py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            .
          </button>
          <button
            value={"="}
            onClick={equal}
            className="bg-orange-500 py-3 rounded-xl text-lg font-bold text-white hover:bg-orange-400 transition"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
