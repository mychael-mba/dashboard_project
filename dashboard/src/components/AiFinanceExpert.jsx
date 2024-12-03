import SubmitIcon from '../assets/submit.svg'

export default function AiFinanceExpert() {
  return (
    <div className="ai-input-container">
        <form action="">
            <input type="text" name="ai-expert" id="" placeholder='Ask our AI finance expert'/>
            <button type="submit">
                <img src={SubmitIcon} alt="submit-icon"/>
            </button>
        </form>
    </div>
  )
}
