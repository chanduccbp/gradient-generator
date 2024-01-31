import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  FormElement,
  MainHeading,
  Paragraph,
  ButtonsList,
  GenerateButton,
  ColorInputContainer,
  Input,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].directionId,
    color1: '#8ae323',
    color2: '#014f7b',
    bgColorGradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  generateGradient = event => {
    event.preventDefault()
    const {activeDirectionId, color1, color2} = this.state
    const reqGradientDirection = gradientDirectionsList.find(
      eachObj => eachObj.directionId === activeDirectionId,
    )

    this.setState({
      bgColorGradientValue: `to ${reqGradientDirection.value},${color1},${color2}`,
    })
  }

  updateGradientDirection = id => {
    this.setState({activeDirectionId: id})
  }

  render() {
    const {activeDirectionId, color1, color2, bgColorGradientValue} = this.state

    return (
      <GradientGeneratorContainer
        bgColorGradientValue={bgColorGradientValue}
        data-testid="gradientGenerator"
      >
        <FormElement onSubmit={this.generateGradient}>
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <Paragraph>Choose Direction</Paragraph>
          <ButtonsList>
            {gradientDirectionsList.map(eachObj => (
              <GradientDirectionItem
                key={eachObj.directionId}
                buttonDetails={eachObj}
                isActive={eachObj.directionId === activeDirectionId}
                updateGradientDirection={this.updateGradientDirection}
              />
            ))}
          </ButtonsList>
          <Paragraph>Pick the Colors</Paragraph>
          <ColorInputContainer>
            <div>
              <Paragraph>{color1}</Paragraph>
              <Input
                type="color"
                value={color1}
                onChange={this.onChangeColor1}
              />
            </div>
            <div>
              <Paragraph>{color2}</Paragraph>
              <Input
                type="color"
                value={color2}
                onChange={this.onChangeColor2}
              />
            </div>
          </ColorInputContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormElement>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
