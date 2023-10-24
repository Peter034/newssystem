import React from 'react'
import style from './Child.module.scss'

function Child() {
  return (
    <div className="Child">
      Child
      <ul>
        <li className={style.item}>11111</li>
        <li className={style.item}>2222</li>
        <li className={style.item}>3333</li>
      </ul>
    </div>
  );

  
}

export default Child;
