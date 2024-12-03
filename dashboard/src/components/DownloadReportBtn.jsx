import Docs from '../assets/docs.svg'

export default function DownloadReportBtn({downloadBtnTitle}) {
  return (
    <div className="download-report-container">
        <div className="download-text-btn-container">
            <button>{downloadBtnTitle}</button>
            <img src={Docs} alt="doc-download-icon" />
        </div>
    </div>
  )
}
