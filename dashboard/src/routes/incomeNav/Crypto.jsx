import { useLoaderData } from 'react-router-dom'
import AiFinanceExpert from '../../components/AiFinanceExpert'
import FilterBtn from '../../components/FilterBtn'
import HeadingGroup from '../../components/HeadingGroup'
import TransactionList from '../../components/TransactionList'
import DownloadReportBtn from '../../components/DownloadReportBtn'

export default function Crypto() {

  const transList = useLoaderData()

  return (
    <div className='body-container'>
      <FilterBtn />
      <HeadingGroup headerText={'Total Crypto Income'} amount={'0.0045862'} unitCurrency = {'BTC'}/>
      
      {transList.map((item) => (
        <TransactionList transactionAmount={item.amount} transactionDate ={item.date}/>
        
      ))}
      <DownloadReportBtn downloadBtnTitle={'Download Report'}/>
      
      <AiFinanceExpert />
    </div>
  )
}
