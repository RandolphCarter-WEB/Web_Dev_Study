import style from "./Compo01.module.css";

function Compo01() {
    return (
        <div className={style.ComponentDiv}>
            <h1>Hello Component01</h1>
            <h1 className={style.color}>CSS MODULE01</h1>
        </div>
    )
}

export default Compo01;