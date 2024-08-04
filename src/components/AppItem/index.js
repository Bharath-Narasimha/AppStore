// Write your code here
import './index.css'

const AppItem = props => {
  const {eachapp} = props
  const {imageUrl, appName} = eachapp
  return (
    <li className="list-1">
      <img src={imageUrl} className="image-1" alt={appName} />
      <p className="span-element">{appName}</p>
    </li>
  )
}
export default AppItem
