import styled from "styled-components/native";

type Props = {
    isActive: boolean
}

export const Container = styled.View<Props>`
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.grey_light};
`
