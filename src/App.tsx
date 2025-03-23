import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="flex space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Vite + React</h1>
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        <Button 
          onClick={() => setCount((count) => count + 1)}
          variant="default"
          size="lg"
          className="w-full mb-4"
        >
          Count is {count}
        </Button>
        
        <div className="flex gap-2 mt-4">
          <Button variant="outline" size="sm">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive" size="sm">Delete</Button>
        </div>
        
        <p className="text-gray-600 text-center mt-4">
          Edit <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-500">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App