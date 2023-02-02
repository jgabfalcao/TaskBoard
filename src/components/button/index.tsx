import React from "react";
import { text } from "stream/consumers";
import style from './Button.module.scss'

interface Props {
  btnText: string;
}

function Button ({btnText}: Props) {
    return (
      <button className={style.button}>
        {btnText}
      </button>
    )
  }

export default Button;
