import React from "react";
import { Feather } from "@expo/vector-icons"
import { useTheme } from "styled-components";
import {
    Container
} from "./styles"
import { BorderlessButtonProps } from "react-native-gesture-handler";

interface Props extends BorderlessButtonProps {

}

export function BackButton({ ...rest }: Props) {

    const theme = useTheme()
    
    return (
        <Container
            {...rest}
        >
            <Feather
                name="chevron-left"
                size={25}
                color={theme.colors.text_dark}
            />
        </Container>
    )
}