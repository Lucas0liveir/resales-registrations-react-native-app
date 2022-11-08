import styled, { css } from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize'

interface Props {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.secondary};
    margin-top: 45px;
    height: 25px;
    width: 100%;
`

export const OwnInput = styled.TextInput<Props>`
    width: 90%;
    height: 100%;
    border-bottom-width: 0.5px;
    border-bottom-color: ${({ theme, isFocused, isFilled }) => (isFocused || isFilled) ? theme.colors.primary : theme.colors.text_dark};
`

export const Label = styled.Text<Props>`
    position: absolute;
    margin-left: 33px;
    bottom: ${({ isFocused, isFilled }) => (isFocused || isFilled) ? 32 : 5}px;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`

export const Wrapper = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`