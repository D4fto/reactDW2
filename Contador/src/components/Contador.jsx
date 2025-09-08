import styles from "./Contador.module.css";

import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [step, setStep] = useState(1);

  function incrementar() {
    setContador((contador) => contador + step);
  }
  function decrementar() {
    setContador((contador) => contador - step);
  }
  function reset() {
    setContador(0);
  }

  return (
    <div className={styles.container}>
      <h1>Contador</h1>
      <div className={styles.contadorDisplay}>{contador}</div>
      <div className={styles.botaoContainer}>
        <button className={styles.botao} onClick={decrementar}>
          -
        </button>
        <button className={styles.botao} onClick={incrementar}>
          +
        </button>
      </div>
      <button className={styles.botao} onClick={reset}>
        Reset
      </button>
      <input type="number" name="step" id="step" value={step} onChange={e => setStep(parseInt(e.target.value))}/>
    </div>
  );
}
