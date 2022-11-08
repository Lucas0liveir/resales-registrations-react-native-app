import { FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`

export const ListProducts = styled(FlatList)``

export const Header = styled.View`
    width: 100%;
    padding: 20px 5px;
    background-color: ${({ theme }) => theme.colors.shape};;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Spacer = styled.View``

export const Content = styled.View`
    flex: 1;
    padding: 10px;
`

export const AddButton = styled(RectButton)`
    position: absolute;
    bottom: 50px;
    right: 40px;
    width: 65px;
    height: 65px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`