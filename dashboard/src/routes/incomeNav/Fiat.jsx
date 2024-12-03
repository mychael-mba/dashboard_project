import { useLoaderData } from 'react-router-dom'
import AiFinanceExpert from '../../components/AiFinanceExpert'
import FilterBtn from '../../components/FilterBtn'
import HeadingGroup from '../../components/HeadingGroup'
import TransactionList from '../../components/TransactionList'
import DownloadReportBtn from '../../components/DownloadReportBtn'


const Fiat = () => {
  const transList = useLoaderData()


  return (
    <div className='body-container'>
      <FilterBtn />
      <HeadingGroup headerText={'Total Fiat Income'} amount={'147,000'} unitCurrency={'CAD'}/>
      
      {transList.map((item) => (
        <TransactionList transactionAmount={item.amount} transactionDate ={item.date}/>
        
      ))}
      <DownloadReportBtn downloadBtnTitle={'Download Report'}/>
      
      <AiFinanceExpert />
    </div>
  )
}

export default Fiat

export const loader = async() => {
  const data = await fetch('http://localhost:3001/transactions')
  return data.json()
}
