import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'

function App() {

  return (
    <>
      <Header></Header>
      <div className="flex flex-col min-h-screen">
        <Content></Content>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
