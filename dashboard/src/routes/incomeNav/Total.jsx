import { useLoaderData } from 'react-router-dom'
import AiFinanceExpert from '../../components/AiFinanceExpert'
import FilterBtn from '../../components/FilterBtn'
import HeadingGroup from '../../components/HeadingGroup'
import TransactionList from '../../components/TransactionList'
import DownloadReportBtn from '../../components/DownloadReportBtn'

const Total = () => {

  const transList = useLoaderData()

  return (
    <div className='body-container'>
      <FilterBtn />
      <HeadingGroup headerText={'Total Income'} amount={'220,000'} unitCurrency={'CAD'}/>
      
      {transList.map((item) => (
        <TransactionList transactionAmount={item.amount} transactionDate ={item.date}/>
      ))}
      <DownloadReportBtn downloadBtnTitle={'Download Report'}/>
      
      <AiFinanceExpert />
    </div>
  )
}

export default Total