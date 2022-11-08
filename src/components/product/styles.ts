import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    padding: 15px 0;
    margin: 10px 0;
    background-color: ${({ theme }) => theme.colors.shape};
    width: 100%;
`

export const Wrapper = styled.View`
    flex-direction: row;
   
`

export const PhotoContainer = styled.View`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    justify-content: center;
    align-items: center;
`

export const Photo = styled.Image`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
`
export const Label = styled.Text``

export const InfoWrapper = styled.View``

export const Spacer = styled.View``

export const ProductInfoWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
`

export const ProductName = styled.Text``

export const CategoryName = styled.Text``

export const ProductBrand = styled.Text``
