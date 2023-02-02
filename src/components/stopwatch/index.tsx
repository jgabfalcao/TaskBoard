import Button from "../button";
import  Watch  from "./watch";
import style from "./StopWatch.module.scss"

function StopWatch(){
  return(
    <div className={style.stopWatch}>
      <p className={style.title}>Escola um card e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Watch />
      </div>
      <Button
      btnText="Começar"
      />
    </div>


)
}

export default StopWatch;