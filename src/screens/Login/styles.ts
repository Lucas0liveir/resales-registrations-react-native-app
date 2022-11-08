import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 0 15px;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary};
    align-items: center;

`

export const DivisorContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Divisor = styled.View`

    width: ${RFPercentage(20)}px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey_light};
`

export const ButtonsWrapper = styled.View`
    width: 100%;
    height: ${RFPercentage(35)}px;
    justify-content: space-around;
  
`

export const Form = styled.View`
    width: 100%;
   
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    text-decoration-line: underline;
    color:  ${({ theme }) => theme.colors.text_dark};
`

export const TitleOnDivisor = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    padding: 0 15px;
    color:  ${({ theme }) => theme.colors.text_dark};
`

export const ForgotPasswordWrapper = styled.View`
    width: 100%;
    margin: 20px 0;
    justify-content: center;
    align-items: center;
    `

export const GotoForgotPassword = styled.TouchableOpacity``

export const ButtonWrapper = styled.View`
  width: 100%;

  justify-content: flex-end;
`

export const GotoRegisterAccount = styled.TouchableOpacity`
    margin-top: 10px;
`

export const TitleCreateAccount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(13)}px;
    color:  ${({ theme }) => theme.colors.primary};
`
