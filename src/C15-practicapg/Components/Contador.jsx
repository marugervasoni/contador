import React, { useState } from 'react'
import { useEffect } from 'react'

const Contador = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        count === 0 ? null : console.log("Sumaste 1 al contador")
    }, [count])

  return (
    <>
        <h2>Contador = {count}</h2>
        <button onClick={() => setCount(count+1)}>Sumar 1</button>
    </>
  )
}

export default Contador