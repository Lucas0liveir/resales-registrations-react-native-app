import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, StatusBar } from "react-native";
import { RectButton } from "react-native-gesture-handler"
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    margin-top: ${StatusBar.currentHeight ?? 42}px;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Content = styled.View`
    padding: 10px;
`

export const ListClients = styled(FlatList)``

export const Header = styled.View`
    flex-direction: row;
    padding: 20px 5px;
    width: 100%;
    elevation: 2;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.shape};
`
export const HeaderTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text_dark};
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
export const Form = styled.View`
    flex: 1;
`

export const Spacer = styled.View``