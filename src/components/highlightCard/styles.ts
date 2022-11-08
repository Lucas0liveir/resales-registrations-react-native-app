import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

type Props = {
    isProfit?: boolean;
    isOverdue?: boolean;
}

export const Container = styled.View<Props>`
    width: 250px;
    margin-left: 5px;
    margin-top: 5px;
    height: 120px;
    padding: 20px;
    elevation: 2;
    border-radius: 10px;
    border-left-width: 1.8px;
    border-top-left-radius: 20px;
    border-left-color: ${({ theme, isOverdue, isProfit }) => isOverdue ? theme.colors.attention : isProfit ? theme.colors.sucess : theme.colors.primary};
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.shape};
 `

export const TitleHighlight = styled.Text<Props>`
    font-size: ${RFValue(16)}px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme, isOverdue, isProfit }) => isOverdue ? theme.colors.attention : isProfit ? theme.colors.sucess : theme.colors.primary};
 `

export const PriceHighlight = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`

export const Period = styled.Text`
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_detail};
`