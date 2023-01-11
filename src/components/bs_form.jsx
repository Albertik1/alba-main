import React, { useState } from "react";

function DynamicForm() {
  const [title, setTitle] = useState("");
  const [option1, setOption1] = useState([]);
  const [option2, setOption2] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleOption1Change = (event, index) => {
    const updatedOptions = [...option1];
    updatedOptions[index] = event.target.value;
    setOption1(updatedOptions);
  };

  const handleOption2Change = (event, index) => {
    const updatedOptions = [...option2];
    updatedOptions[index] = event.target.value;
    setOption2(updatedOptions);
  };

  const handleAddOption1 = () => {
    setOption1([...option1, ""]);
  };
  const handleAddOption2 = () => {
    setOption2([...option2, ""]);
  };

  return (
    <form>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <div>
        <label>Option 1</label>
        {option1.map((input, index) => (
          <div key={index}>
            <input
              type="text"
              value={input}
              onChange={(event) => handleOption1Change(event, index)}
            />
            <button type="button" onClick={handleAddOption1}>
              Add Option 1
            </button>
          </div>
        ))}
      </div>
      <div>
        <label>Option 2</label>
        {option2.map((input, index) => (
          <div key={index}>
            <input
              type="text"
              value={input}
              onChange={(event) => handleOption2Change(event, index)}
            />
            <button type="button" onClick={handleAddOption2}>
              Add Option 2
            </button>
          </div>
        ))}
      </div>
    </form>
  );
}

export default DynamicForm;
