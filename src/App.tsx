import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <img width={250} height={200} src={"./images/time.png"} alt="image" />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <a target='_blank' href="https://majangstories.blogspot.com/p/sitemap.html">
          Our Blog v5 Edit Page
        </a>
      </div>

      <img width={250} height={200} src={"./images/time.png"} alt="image" />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
