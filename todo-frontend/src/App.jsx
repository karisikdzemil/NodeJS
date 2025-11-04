import Header from "./components/header"
import Outlet from "./outlet"

function App() {
  return (
    <>
        <Header />
          <main>
              <Outlet />
          </main>
    </>
  )
}

export default App
