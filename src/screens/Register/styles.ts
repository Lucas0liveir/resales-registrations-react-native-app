import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 0 24px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.shape};
`

export const Header = styled.View`
    width: 100%;

`

export const Wrapper = styled.View`
    width: 100%;
    padding-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ContainerDots = styled.View`
    width: 10%;
    flex-direction: row;
    justify-content: space-between;
`
export const InfoStep = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_dark};
    font-family: ${({ theme }) => theme.fonts.regular};
`
export const Description = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text_dark};
    line-height: ${RFValue(25)}px;
`

export const Content = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
`