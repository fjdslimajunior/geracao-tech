// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Banners from './components/Banners'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <Extructure />
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

//


// export default App
const Extructure = () => {
    return (
      <>
      <div>
        <h1>Título</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloremque, veritatis debitis sequi, eius aut voluptatem dignissimos dolore recusandae sed omnis dolor ex asperiores consectetur, eaque earum commodi numquam facilis?</p>
      <Header />
      <Banners />
      </div>
      </>
    )
  }

export default Extructure