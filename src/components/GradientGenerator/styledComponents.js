// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(${props => props.bgColorGradientValue});
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
  width: 70%;
  font-family: 'roboto';
`
export const MainHeading = styled.h1`
  color: #ffffff;
  text-align: center;
`
export const Paragraph = styled.p`
  color: #ffffff;
`

export const ButtonsList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ColorInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
`
export const Input = styled.input`
  height: 35px;
  background-color: transparent;
  border-style: none;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border-radius: 5px;
  border-style: none;
  height: 35px;
  padding: 5px;
`
