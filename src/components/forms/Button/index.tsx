import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import {
    Container,
    Title,
} from './styles';


interface Props extends RectButtonProps {
    title: string;
    color: string;
    loading: boolean;
}

export function Button({ title, color, loading, ...rest }: Props) {

    return (
        <Container
            color={color}
            {...rest}
        >
            <Title>
                { loading ? <ActivityIndicator size={"small"} color="#fff"/> : title}
            </Title>
        </Container>
    )
}