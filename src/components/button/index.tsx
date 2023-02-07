import React from "react";
import { text } from "stream/consumers";
import style from './Button.module.scss'

interface Props {
  btnText: string;
  btnType: "button" | "submit" | "reset" | undefined
}

function Button ({btnText, btnType}: Props){
    return (
      <button type={btnType} className={style.button}>
        {btnText}
      </button>
    )
  }

export default Button;
