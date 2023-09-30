import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeButton from './components/ThemeButton';
import Card from './components/Card';

function App() {

  const [mode, setThememod] = useState("light");

  const lightTheme = ()=>{
    setThememod("light");
  }

  const darkTheme = ()=>{
    setThememod("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light");
    document.querySelector('html').classList.add(mode);
  },[mode])

  return (
    <ThemeProvider value={{mode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-900">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
