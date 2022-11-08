import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler"


export const Wrapper = styled.View`
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    elevation: 2;
    background-color: ${({ theme }) => theme.colors.shape};
`

export const Container = styled(RectButton)`
    width: 90px;
    height: 90px;
    align-items: center;
    justify-content: center;
    elevation: 2;
    background-color: ${({ theme }) => theme.colors.shape};
`

export const TitleShortcut = styled.Text`
    font-size: ${RFValue(12)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text_dark}
`