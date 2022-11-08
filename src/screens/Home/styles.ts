import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const SearchContainer = styled.View`
    padding: 15px;
`

export const Header = styled.View`
    width: 100%;
    height: 120px;
    elevation: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.shape};
`

export const PhotoWrapper = styled.View`
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    border-width: .8px;
    border-color: ${({ theme }) => theme.colors.primary};
`

export const Spacer = styled.View`
    flex-grow: 0.7;
`

export const Content = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingHorizontal: 20
    }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(12)}px;
`
export const HeaderContentWrapper = styled.View`
    width: 100%;
    padding: 10px 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`
export const Photo = styled.Image`
    width: 47px;
    height: 47px;
    border-radius: 25px;
  
`

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`

export const Resales = styled.View`
    flex: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${({ theme }) => theme.colors.shape};
    
`

export const ListResales = styled.FlatList`
    background-color: ${({ theme }) => theme.colors.shape};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const ShortcutContainer = styled.View`
    width: 100%;
    padding-top: 15px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const Wrapper = styled.View`
    flex: 1;
    margin-top: ${RFPercentage(15)}px;
`

export const TimeLineEmpty = styled.View`
    width: 100%;
    justify-content: space-around;
    align-items: center;
`

export const TitleInfo = styled.Text`
    font-size: ${RFValue(12)}px;
    padding: 20px 0;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text_detail};
`