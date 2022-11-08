import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled(RectButton)`
    width: 100%;
    background-color: ${({theme}) => theme.colors.background};
    elevation: 2;
    padding: 20px;
`

export const Wrapper = styled.View`
    flex-direction: row;
    width: 70%;
    align-items: center;
    align-self: center;
    justify-content: space-around;
`

export const Divisor = styled.View`
    width: 1px;
    height: 90%;
    background-color: ${({ theme }) => theme.colors.grey_light};
`
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(15)}px;
    color:  ${({ theme }) => theme.colors.text_dark};
`