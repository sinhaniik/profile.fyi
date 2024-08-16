import Card from './components/Card'
import './App.css'
import CartIcon from './components/CartIcon';

function App() {

  return (
    <div className="container mx-auto px-4 py-8">

      {/* Header */}
      <div className="flex justify-between items-center sticky top-0 bg-white z-10 " >
        <div></div>
        <h1 className="text-3xl font-bold mb-6 text-center">{"SNEAKERS"}</h1>
        <CartIcon onClick={() => console.log("clicked")} className="cursor-pointer" />
      </div>

      {/* Cards */}
      <Card />
    </div >
  );
}

export default App
