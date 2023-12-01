import "./loader.css";
function Loader() {
  return (
    <div className="loader-body">
      <img src="loaderlogo.png" />
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading questions</p>
      </div>
    </div>
  );
}

export default Loader;
