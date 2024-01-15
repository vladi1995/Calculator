import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onChangeValue = (num) => {
    if (result !== '') {
      setResult('');
      if (num.match(/[1-9]/g)) {
        setValue('');
      } else {
        setValue(result);
      }
    } 
    setValue(oldValue => oldValue + num);
  };

  const evaluate = () => {
    try {
      setResult(eval(value));
    } catch (error) {
      setResult(error);
    }
  };

  const onHandleDelete = () => {
    setValue('');
    setResult('');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Calculator</div>
        <input type="text" className={styles.result} value={value} />
        <input type="text" className={styles.result} value={result} />
        <div className={styles['second-row']}>
          <input type="button" name="" value="7" onClick={() => onChangeValue('7')} className={styles.global} />
          <input type="button" name="" value="8" onClick={() => onChangeValue('8')} className={styles.global} />
          <input type="button" name="" value="9" onClick={() => onChangeValue('9')} className={styles.global} />
          <input type="button" name="" value="/" onClick={() => onChangeValue('/')} className={styles.global} />
        </div>
        <div className={styles['third-row']}>
          <input type="button" name="" value="4" onClick={() => onChangeValue('4')} className={styles.global} />
          <input type="button" name="" value="5" onClick={() => onChangeValue('5')} className={styles.global} />
          <input type="button" name="" value="6" onClick={() => onChangeValue('6')} className={styles.global} />
          <input type="button" name="" value="X" onClick={() => onChangeValue('*')} className={styles.global} />
        </div>
        <div className={styles['fourth-row']}>
          <input type="button" name="" value="1" onClick={() => onChangeValue('1')} className={styles.global} />
          <input type="button" name="" value="2" onClick={() => onChangeValue('2')} className={styles.global} />
          <input type="button" name="" value="3" onClick={() => onChangeValue('3')} className={styles.global} />
          <input type="button" name="" value="-" onClick={() => onChangeValue('-')} className={styles.global} />
        </div>
        <div className={styles.conflict}>
          <div className={styles.left}>
            <input type="button" name="" value="0" onClick={() => onChangeValue('0')} className={styles.big} />
            <input type="button" name="" value="." onClick={() => onChangeValue('.')} className={styles.small} />
            <input type="button" name="" value="Del" onClick={onHandleDelete} className={`${styles.red} ${styles.small} ${styles['white-text']} ${styles['top-margin']}`} />
            <input type="button" name="" value="=" onClick={evaluate} className={`${styles.green} ${styles.big} ${styles['white-text']} ${styles['top-margin']}`} />
          </div>
          <div className={styles.right}>
            <input type="button" name="" value="+" onClick={() => onChangeValue('+')} className={`${styles.global} ${styles.grey} ${styles.plus}`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
