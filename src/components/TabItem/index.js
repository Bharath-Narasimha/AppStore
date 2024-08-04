// Write your code here
import './index.css'

const TabItem = props => {
  const {eachList, selecttab, isActive} = props
  const {displayText, tabId} = eachList
  const selectedtab = () => {
    selecttab(tabId)
  }
  const activeTabBtn = isActive ? 'active-tab' : ''
  return (
    <li className="list">
      <button
        className={`button ${activeTabBtn}`}
        type="button"
        onClick={selectedtab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
