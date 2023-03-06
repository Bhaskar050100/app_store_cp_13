// Write your code here

import './index.css'

const TabItem = props => {
  const {eachTab, updateTabId, isActive} = props
  const {tabId, displayText} = eachTab

  const getAppsLists = () => {
    updateTabId(tabId)
  }

  const coloredTab = isActive ? 'colored-para' : null

  return (
    <li>
      <button
        className={`${coloredTab} btn`}
        type="button"
        onClick={getAppsLists}
      >
        <p className="para">{displayText}</p>
      </button>

      <hr className="hr-line" />
    </li>
  )
}
export default TabItem
