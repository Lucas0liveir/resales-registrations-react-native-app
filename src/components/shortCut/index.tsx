import React from "react";
import { SvgProps } from "react-native-svg";
import { RectButtonProps } from "react-native-gesture-handler"
import {
    Container,
    Wrapper,
    TitleShortcut
} from "./styles";

interface Props extends RectButtonProps {
    w?: number;
    h?: number;
    title: string;
    Icon: React.FC<SvgProps>;
}

export function ShortCut({ Icon, title, w, h, ...rest }: Props) {
    return (
        <Container
            {...rest}
        >
            <Wrapper>
                <Icon width={w ?? 40} height={h ?? 40} />

            </Wrapper>
            <TitleShortcut>
                {title}
            </TitleShortcut>
        </Container>

    )
}