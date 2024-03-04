import React from 'react'

function PageNumber({ num, setNumber }) {
  const handleNum = () => {
    setNumber(num)
  }


  return <span onClick={handleNum} className='text-dark m-2'>{num} </span>
}

export default PageNumber