import React, { useState } from "react";
import { Feather } from '@expo/vector-icons'
import { TextInputProps, TouchableOpacity } from "react-native";
import {
    Container,
    OwnInput,
    Wrapper,
    Label
} from "./styles";
import { useTheme } from "styled-components";

interface Props extends TextInputProps {
    isPasswordInput?: boolean;
    iconName: React.ComponentProps<typeof Feather>['name'];
    labelText: string;
}

export function Input({ labelText, value, iconName, isPasswordInput = false, ...rest }: Props) {
    const theme = useTheme()
    const [isPasswordVisible, setIsVisiblePassword] = useState(true)
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    function handleInputFocus() {
        setIsFocused(true)
    }

    function handleInputBlur() {
        setIsFocused(false)
        setIsFilled(!!value)
    }

    function handlePasswordVisibilityChange() {
        setIsVisiblePassword(prevState => !prevState)
    }

    return (
        <Container>
            <Label
                isFilled={isFilled}
                isFocused={isFocused}
            >
                {labelText}
            </Label>
            <Wrapper>
                <Feather
                    style={{
                        paddingRight: 5
                    }}
                    name={iconName}
                    color={(isFocused || isFilled) ? theme.colors.primary : theme.colors.text_dark}
                    size={25}
                />
                <OwnInput
                    isFilled={isFilled}
                    isFocused={isFocused}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    secureTextEntry={isPasswordInput && isPasswordVisible}
                    {...rest} />

                {isPasswordInput && (
                    <TouchableOpacity
                        style={{
                            right: 5,
                            position: 'absolute'
                        }}
                        onPress={handlePasswordVisibilityChange}
                    >

                        <Feather
                            name={isPasswordVisible ? 'eye' : 'eye-off'}
                            size={24}
                            color={theme.colors.text_dark}
                        />

                    </TouchableOpacity>
                )

                }
            </Wrapper>

        </Container>
    )
}