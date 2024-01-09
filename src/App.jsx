import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Calculator</div>
        <input type="text" className={styles.result} />
        <div className={styles['first-row']}>
          <input type="button" name="" value="&radic;" className={styles.global} />
          <input type="button" name="" value="(" className={styles.global} />
          <input type="button" name="" value=")" className={styles.global} />
          <input type="button" name="" value="%" className={styles.global} />
        </div>
        <div className={styles['second-row']}>
          <input type="button" name="" value="7" className={styles.global} />
          <input type="button" name="" value="8" className={styles.global} />
          <input type="button" name="" value="9" className={styles.global} />
          <input type="button" name="" value="/" className={styles.global} />
        </div>
        <div className={styles['third-row']}>
          <input type="button" name="" value="4" className={styles.global} />
          <input type="button" name="" value="5" className={styles.global} />
          <input type="button" name="" value="6" className={styles.global} />
          <input type="button" name="" value="X" className={styles.global} />
        </div>
        <div className={styles['fourth-row']}>
          <input type="button" name="" value="1" className={styles.global} />
          <input type="button" name="" value="2" className={styles.global} />
          <input type="button" name="" value="3" className={styles.global} />
          <input type="button" name="" value="-" className={styles.global} />
        </div>
        <div className={styles.conflict}>
          <div className={styles.left}>
            <input type="button" name="" value="0" className={styles.big} />
            <input type="button" name="" value="." className={styles.small} />
            <input type="button" name="" value="Del" className={`${styles.red} ${styles.small} ${styles['white-text']} ${styles['top-margin']}`} />
            <input type="button" name="" value="=" className={`${styles.green} ${styles.big} ${styles['white-text']} ${styles['top-margin']}`} />
          </div>
          <div className={styles.right}>
            <input type="button" name="" value="+" className={`${styles.global} ${styles.grey} ${styles.plus}`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
