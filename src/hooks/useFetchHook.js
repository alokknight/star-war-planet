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
      .catch(error => console.error('Error:', error));

  }, [urlApi])


  return state
}

export default UsefetchHook;

// import { useState, useEffect } from 'react';

// const UsefetchHook = (urlApi) => {
//   const [state, setState] = useState({
//     loadingSpinner: true,
//     planetList: null,
//     error: null,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setState({
//           loadingSpinner: true,
//           error: null,
//         });

//         const response = await fetch(urlApi);

//         if (!response.ok) {
//           throw new Error(`Request failed with status: ${response.status}`);
//         }

//         const planetList = await response.json();

//         setState({
//           loadingSpinner: false,
//           planetList: planetList.results,
//           error: null,
//         });
//       } catch (error) {
//         setState({
//           loadingSpinner: false,
//           planetList: null,
//           error: `Error fetching data: ${error.message}`,
//         });
//       }
//     };

//     fetchData();
//   }, [urlApi]);

//   return state;
// };

// export default UsefetchHook;
