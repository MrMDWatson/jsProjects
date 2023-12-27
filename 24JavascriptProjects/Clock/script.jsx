function Clock() {
  const [time, setTime] = React.useState(new Date);
  function runClock() {
    setTime(new Date);
  }

  React.useEffect(() => {
    setTimeout(runClock, 1000);
  }, [time]);
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const period = h < 12 ? "AM" : "PM"; 

  
  
  return (
    <div className="Clock">
      <div>{h > 12 ? h - 12 : h}:{m < 10 ? "0" + m : m}:{s < 10 ? "0" + s : s} {period}</div>
    </div>
  );
}

ReactDOM.render(<Clock />, document.getElementById("root"));