import React from "react"
import style from "./Watch.module.scss"


function Watch(){
 return(
  <>
    <span className={style.watchNumber}>0</span>
    <span className={style.watchNumber}>0</span>
    <span className={style.divisionWatch}>:</span>
    <span className={style.watchNumber}>0</span>
    <span className={style.watchNumber}>0</span>
    </>
 )

}

export default Watch;