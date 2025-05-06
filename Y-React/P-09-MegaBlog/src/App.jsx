
import './App.css'

function App() {
  //import env variable in vite
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1>A Blog with Appwrite</h1>
    </>
  )
}

export default App
