import { createRoot } from 'react-dom/client'
import './index.css'

// import { Test } from './components/Bluuweb/Test01sx'
// import { AppContainer } from './components/Bluuweb/App02-Container'
// import { AppTypography } from './components/Bluuweb/App03a-Typography'
// import { AppTypography } from './components/Bluuweb/App03b-Typography'
// import { AppIcon } from './components/Bluuweb/App03c-Icons'
// import { AppBox } from './components/Bluuweb/App04d-Box'
// import { AppTheme } from './components/Bluuweb/App05d-Theming'
// import { PrueLayout } from './components/Tests/PrueLayout'
// import { MyContext } from './contexts-examp/App-Context';
import { AppChildren } from './contexts-examp/AppChildren'
import BirthdateForm  from './components/Tests/BirthdateForm'






createRoot(document.getElementById('root')!).render(
  // <Test />
  // <AppContainer />
  // <AppTypography />
  // <AppIcon />
  // <AppBox />
  // <AppTheme />
  // <PrueLayout />
  // <MyContext />
  // <AppChildren />
  <BirthdateForm />


)



