import React from "react";
import { SvgProps } from "react-native-svg";
import {
    Container,
    Wrapper,
    Divisor,
    Title
} from "./styles";

interface Props {
    Icon: React.FC<SvgProps>;
    title: string;
}

export function ButtonLoginSocial({ Icon, title }: Props) {

    return (
        <Container>
            <Wrapper>
                <Icon width={32} height={32}/>
                <Divisor/>
                <Title>{title}</Title>
            </Wrapper>
        </Container>
    )
}