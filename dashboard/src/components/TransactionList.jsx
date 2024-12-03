export default function TransactionList({transactionAmount, transactionDate}) {
  return (
        <div className="fiat-trans-container">
            <div className="amount-date-container">
                <h3>{transactionAmount}</h3>
                <p>{transactionDate}</p>
            </div>            
            <div className="see-details-container">
                <p>See details</p>
            </div>
        </div>
    )
}
