import React, { useState } from 'react';
import './RunningText.css';

function RunningText() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Săn Sale Mỗi Ngày Giảm tới 22% - Mua 1 tặng 1 - Quà tặng vô cùng hấp dẫn cùng AMOTtech']

  return <div className='text-background'>
    <div className="running-text">{texts[textIndex]}</div>
  </div>
}

export default RunningText;