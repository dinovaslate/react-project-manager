const App1 = (props) => {
  return (
    <>
      <div className="ui input">
        <label htmlFor="name" className="label">
          Enter name:
        </label>
        <input type="text" className="ui input" id="name" />
        <button className="ui button">Submit</button>
      </div>
    </>
  );
};
export default App1;
