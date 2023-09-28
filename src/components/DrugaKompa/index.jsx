import withCount from "../../withCount"
import styles from "./DrugaKompa.module.css"

const DrugaKompa = ({count, increment}) => {
  return (
    <>
        <div>{count}</div>
        {/* <button className={(count < 5) ? styles.btn : styles.red} onClick={increment}>Increment</button> */}
        <button className={styles[count < 5 ? "btn" : "red"]} onClick={increment}>Increment</button>
    </>
  )
}

export default withCount(DrugaKompa)