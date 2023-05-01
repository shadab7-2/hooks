export default function useReffrence(){
    const fileInputRef = useRef(null)
  function handleOnClick(){
    fileInputRef.current.click();
  }

    return(
        <div className="App">
      <input type='file' ref={fileInputRef}></input><br></br>
      <button onClick={handleOnClick}>pick the file</button>
    </div>

    );
}