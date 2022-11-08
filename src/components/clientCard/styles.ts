import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

interface Props {
    backgroundColor: string
}
export const Container = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    padding: 15px;
    margin: 10px 0;
    elevation: 2;
`

export const Icon = styled.View<Props>`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
`

export const Name = styled.Text`
    padding-left: 12px;
    font-size: ${RFValue(14)}px;
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`

export const FirstLetter = styled.Text`
    font-size: ${RFValue(15)}px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.regular};
`
