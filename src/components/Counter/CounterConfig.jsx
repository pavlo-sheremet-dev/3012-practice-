const CounterConfig = ({ update, min, max, step }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>
        <input type="number" name="min" value={min} onChange={update} />
        <span>MIN</span>
      </label>
      <label>
        <input type="number" name="max" value={max} onChange={update} />
        <span>MAX</span>
      </label>
      <label>
        <input type="number" name="step" value={step} onChange={update} />
        <span>STEP</span>
      </label>
    </div>
  );
};

export default CounterConfig;
