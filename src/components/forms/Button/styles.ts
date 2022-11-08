import { RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native"

interface Props {
    color?: string;
}

export const Container = styled(RectButton) <Props>`
    width: 100%;
    padding: 20px;
    align-items: center;
    justify-content: center;
    background-color:  ${({ color, theme }) => color ? color : theme.colors.primary};
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(15)}px;
    color:  ${({ theme }) => theme.colors.shape};
`
