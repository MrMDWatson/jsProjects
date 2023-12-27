function StopWatch() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  const interval = React.useRef();
  const seconds = Math.floor(time/100);
  const tens = time % 100;

  function timer() {
    setTime(prev => prev + 10);
  }

  function start() {
    interval.current = setInterval(timer, 100);
    setTimerOn(true);
  }

  function stop() {
    clearInterval(interval.current);
    setTimerOn(false);
  }

  function reset() {
    setTime(0);
  }

  return (
    <div id="Stopwatch">
      <h1>Stop Watch</h1>
      <div className="watch-screen">
        <p>{seconds <= 9 ? "0" + seconds : seconds}:{tens <= 9 ? "0" + tens : tens}</p>
      </div>
      <button onClick={() => {!timerOn ? start() : stop()}}>{!timerOn ? "Start" : "Stop"}</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

ReactDOM.render(<StopWatch />, document.getElementById("root"));