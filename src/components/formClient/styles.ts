import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.KeyboardAvoidingView.attrs({
    behavior: "position"
})`
    flex: 1;
`

export const Form = styled.View`
    flex: 1;
    justify-content: space-between;
    padding: 0 20px;
`
export const Wrapper = styled.View``

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`
export const ButtonSave = styled(RectButton)`
    width: 85px;
    align-items: center;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.sucess};
    padding: 10px 0;
    
`

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    
`

export const TitleButton = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.shape}
`