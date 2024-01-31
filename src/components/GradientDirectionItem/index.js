// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {buttonDetails, isActive, updateGradientDirection} = props
  const {directionId, displayText} = buttonDetails
  const onClickDirection = () => {
    updateGradientDirection(directionId)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickDirection}
        active={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
