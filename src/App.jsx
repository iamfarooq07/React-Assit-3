import { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  function handleClick(e) {
    setResult(result.concat(e.target.value));
  }

  function Equal() {
    const newResult = eval(result);
    setResult(newResult.toString());
    setHistory([...history, result + " = " + newResult]);
  }
  function clear() {
    setResult("");
  }

  function clearOne() {
    console.log(result);
    setResult(result.slice(0, -1));
  }

  function point() {
    if (result === "") {
      setResult("0.");
    } else if (result.slice(-1) === ".") {
      return;
    } else {
      setResult(result + ".");
    }
  }

  function clickOperator(e) {
    let lastChar = result.slice(-1);
    if (["+", "-", "*", "/", "%"].includes(lastChar)) {
      setResult(result.slice(0, -1) + e);
    } else {
      setResult(result + e);
    }
  }

  function History() {
    setShowHistory(!showHistory);
  }

  return (
    <div className="w-screen h-screen bg-gray-700 flex justify-center items-center">
      <div className="w-[90%] sm:w-[60%] md:w-[25%] bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 p-4">
        <div className="flex justify-between text-gray-500 mb-2 ml-2">
          <i
            onClick={History}
            className="fa-solid fa-clock-rotate-left text-xl cursor-pointer hover:text-gray-300"
          ></i>
        </div>

        <input
          className="w-full rounded-xl p-4 bg-gray-900 text-end text-3xl font-semibold text-white outline-none shadow-inner mb-3"
          value={result}
          readOnly
          placeholder="0"
        />
        {/* ------ */}

        {showHistory && (
          <div className="bg-gray-100 rounded-xl p-3 max-h-40 mb-3 overflow-y-auto">
            <div className="flex justify-between mb-2">
              <button
                onClick={() => setHistory([])}
                className="text-xs text-red-500 hover:text-red-700"
              >
                Clear All
              </button>
            </div>
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

        <div className="grid grid-cols-4 gap-3">
          <Buttons
            text="AC"
            value="AC"
            onClick={clear}
            className="bg-red-500 hover:bg-red-600"
          />
          <Buttons
            text="C"
            value="C"
            onClick={clearOne}
            className="bg-orange-500 hover:bg-orange-600"
          />
          <Buttons
            text="%"
            value="%"
            onClick={() => clickOperator("%")}
            className="bg-orange-500 hover:bg-orange-600"
          />
          <Buttons
            text="/"
            value="/"
            onClick={() => clickOperator("/")}
            className="bg-orange-500 hover:bg-orange-600"
          />

          <Buttons
            text="7"
            value="7"
            onClick={handleClick}
            className="bg-gray-700 hover:bg-gray-600"
          />
          <Buttons
            text="8"
            value="8"
            onClick={handleClick}
            className="bg-gray-700 hover:bg-gray-600"
          />
          <Buttons
            text="9"
            value="9"
            onClick={handleClick}
            className="bg-gray-700 hover:bg-gray-600"
          />
          <Buttons
            text="*"
            value="*"
            onClick={() => clickOperator("*")}
            className="bg-orange-500 hover:bg-orange-600"
          />

          <Buttons
            text="4"
            value="4"
            onClick={handleClick}
            className="bg-gray-700 hover:bg-gray-600"
          />
          <Buttons
            text="5"
            value="5"
            onClick={handleClick}
            className="bg-gray-700 hover:bg-gray-600"
          />
          <Buttons
            text="6"
            value="6"
            onClick={handleClick}
            className="bg-gray-700 hover:bg-gray-600"
          />
          <Buttons
            text="-"
            value="-"
            onClick={() => clickOperator("-")}
            className="bg-orange-500 hover:bg-orange-600"
          />

          <Buttons
            text="1"
            value="1"
            onClick={handleClick}
            className="bg-gray-700 hover:bg-gray-600"
          />
          <Buttons
            text="2"
            value="2"
            onClick={handleClick}
            className="bg-gray-700 hover:bg-gray-600"
          />
          <Buttons
            text="3"
            value="3"
            onClick={handleClick}
            className="bg-gray-700 hover:bg-gray-600"
          />
          <Buttons
            text="+"
            value="+"
            onClick={() => clickOperator("+")}
            className="bg-orange-500 hover:bg-orange-600"
          />

          <Buttons
            text="00"
            value="00"
            onClick={handleClick}
            className="bg-gray-700 hover:bg-gray-600"
          />
          <Buttons
            text="0"
            value="0"
            onClick={handleClick}
            className="bg-gray-700 hover:bg-gray-600"
          />
          <Buttons
            text="."
            value="."
            onClick={point}
            className="bg-gray-700 hover:bg-gray-600"
          />
          <Buttons
            text="="
            value="="
            onClick={Equal}
            className="bg-green-500 hover:bg-green-600"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
