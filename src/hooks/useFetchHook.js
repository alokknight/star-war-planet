import { useState, useEffect } from 'react'

const UsefetchHook = (urlApi) => {
  const [state, setState] = useState({
    loadingSpinner: true,
    planetList: null
  })
  useEffect(() => {
    setState({
      loadingSpinner: true,
      
    })

    fetch(urlApi)
      .then(response => response.json())
      .then(planetList => {
        setState({
          loadingSpinner: false,
          planetList: planetList.results
        })
      })

  }, [urlApi])


  return state
}

export default UsefetchHook;
