// import "./comp1.scss" // 全局 不推荐
// scss 模块化引入
import styles from "./comp1.module.scss"
//function Comp(){
const Comp = () => {
    return(
        <div className={styles.box}>
            <p>这是comp1 里面的</p>
        </div>

    )
}
export default Comp
