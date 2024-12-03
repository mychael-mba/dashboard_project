import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import Income from './routes/Income'
import Expenses from './routes/Expenses'
import Sms from './routes/Sms'
import Investments from './routes/Investments'
import Settings from './routes/Settings'
import IncomeLayout from './layouts/IncomeLayout'
import Fiat, { loader } from './routes/incomeNav/Fiat'
import Crypto from './routes/incomeNav/Crypto'
import Total from './routes/incomeNav/Total'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>

      <Route path='income' element={<IncomeLayout/>}>
        <Route path='fiat' element={<Fiat/>} loader={loader}/>
        <Route path='crypto' element={<Crypto/>} loader={loader}/>
        <Route path='total' element={<Total/>} loader={loader}/>
      </Route>


      <Route path='expenses' element={<Expenses/>}/>

      <Route path='sms' element={<Sms/>}/>

      <Route path='investments' element={<Investments/>}/>

      <Route path='settings' element={<Settings/>}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
