import React, { useState } from 'react'
import './index.scss'

const Orderbtn = () => {
    const [open, setOpen] = useState(false);


  return (
   <>
   <div className='orderbtn'>
    <button onClick={()=>setOpen(!open)} className='switch-btn'>
        <span className={open ? 'switch shift' : 'switch'}></span>
    </button>
   </div>
   </>
  )
}

export default Orderbtn
