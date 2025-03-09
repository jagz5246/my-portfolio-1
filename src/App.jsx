import './App.css';
import { ThemeProvider } from './context/ThemeProvider';
import Portfolio from './pages/Portfolio';



function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}

export default App;
