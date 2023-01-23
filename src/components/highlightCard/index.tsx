import React from "react";
import { Animated, Easing, StyleSheet, TextInput } from "react-native";
import { useTheme } from "styled-components"
import {
    Container,
    TitleHighlight,
    Period
} from "./styles";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface Props {
    title: string;
    amount: number;
    period: string;
    isOverdue?: boolean;
    isProfit?: boolean;
    delay: number;
}

export function HighlightCard({ title, amount, period, isOverdue = false, isProfit = false, delay }: Props) {
    const theme = useTheme()
    const animated = React.useRef(new Animated.Value(0)).current
    const inputRef = React.useRef<TextInput>()

    const animation = (toValue: number) => {
        return Animated.timing(animated, {
            delay,
            toValue,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.out(Easing.linear)
        }).start()
    };

    React.useEffect(() => {
        animation(amount);
        animated.addListener((v) => {
            if (inputRef?.current) {
                inputRef.current.setNativeProps({
                    text: `${Math.round(v.value).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}`,
                });
            }
        })

        return () => {
            animated.removeAllListeners();
        }
    }, [amount])

    return (
        <Container
            isProfit={isProfit}
            isOverdue={isOverdue}
        >
            <TitleHighlight
                isProfit={isProfit}
                isOverdue={isOverdue}>
                {title}
            </TitleHighlight>
            <AnimatedTextInput
                ref={inputRef}
                underlineColorAndroid="transparent"
                editable={false}
                defaultValue="0"
                style={{
                    fontSize: 16,
                    letterSpacing: 1,
                    color: theme.colors.text_dark,
                    fontFamily: theme.fonts.regular,
                    textAlign: "center"
                }}
            />
            <Period>
                {period}
            </Period>
        </Container>
    )
}