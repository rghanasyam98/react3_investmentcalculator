import { useState } from "react";
import styles from './inputform.module.css'


const InputForm=(props)=>{

const initialState={
    "current-savings":1000,
    "yearly-contribution":500,
    "expected-return":700,
    "duration":50

}

const [inputData,setinputData]=useState(initialState)



  const submitHandler=(event)=>{
    event.preventDefault();
    console.log("submit");
    console.log(inputData);
    props.getInputDatainApp(inputData);

  }

  const resetHandler=(event)=>{
    console.log("reset");
    setinputData(initialState);
  }

  const inputHandler=(type,value)=>{
    // console.log(type,value)
    setinputData((prevState)=>{
        return {...prevState,
                [type]:value,
        }
    });

  }

    return(
        <form  onSubmit={submitHandler} className={styles.form}>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={inputData["current-savings"]} onChange={(event)=>(inputHandler("current-savings",event.target.value))} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={inputData["yearly-contribution"]} onChange={(event)=>(inputHandler("yearly-contribution",event.target.value))} />
          </p>
        </div>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return"  value={inputData["expected-return"]} onChange={(event)=>(inputHandler("expected-return",event.target.value))} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration"  value={inputData["duration"]} onChange={(event)=>(inputHandler("duration",event.target.value))} />
          </p>
        </div>
        <p className={styles.actions}>
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}

export default InputForm;