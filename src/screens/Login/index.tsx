import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { clearPersistedStore } from 'mobx-persist-store'
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { api } from "../../services/api";
import { useTheme } from "styled-components";
import GoogleSvg from "../../assets/google.svg"
import { ButtonLoginSocial } from "../../components/buttonLoginSocial";
import { Button } from "../../components/forms/Button";
import { Input } from "../../components/forms/Input";
import { CommandInvoker, useCommand } from "../../mobX/command";
import { LoginCommand } from "../../mobX/command/LoginCommand";
import {
    Container,
    Form,
    Title,
    ForgotPasswordWrapper,
    GotoForgotPassword,
    GotoRegisterAccount,
    TitleCreateAccount,
    TitleOnDivisor,
    ButtonsWrapper,
    DivisorContainer,
    Divisor,
} from './styles'

export const Login = observer(() => {
    const loginCommand = useCommand(() => new LoginCommand())
    const navigation = useNavigation()
    const theme = useTheme()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    function goToRegisterScreen() {
        navigation.navigate('Register' as never)
    }

    return (

        <Container>

            <Image
                style={{
                    width: RFValue(180),
                    height: RFValue(180)
                }}
                source={require('../../assets/icon.png')}
                resizeMode="contain"
            />
            <Form>
                <Input
                    iconName="mail"
                    value={email}
                    onChangeText={setEmail}
                    labelText="E-mail"
                    keyboardType="email-address"
                />

                <Input
                    isPasswordInput
                    iconName="lock"
                    labelText="Senha"
                    value={password}
                    onChangeText={setPassword}
                />

                <ForgotPasswordWrapper>
                    <GotoForgotPassword>
                        <Title>Esqueci minha senha</Title>
                    </GotoForgotPassword>
                    <GotoRegisterAccount
                        onPress={goToRegisterScreen}
                    >
                        <TitleCreateAccount>Criar uma conta</TitleCreateAccount>
                    </GotoRegisterAccount>
                </ForgotPasswordWrapper>

                <ButtonsWrapper>
                    <Button
                        loading={loginCommand.pending}
                        enabled={loginCommand.canExecute({
                            email,
                            password
                        })}
                        onPress={() => {
                            CommandInvoker(loginCommand, {
                                email,
                                password
                            })
                        }}
                        color={theme.colors.primary}
                        title="Entrar"
                    />
                    <DivisorContainer>
                        <Divisor />
                        <TitleOnDivisor>
                            OU
                        </TitleOnDivisor>
                        <Divisor />
                    </DivisorContainer>
                    <ButtonLoginSocial
                        Icon={GoogleSvg}
                        title={"Entrar com o Google"}
                    />
                </ButtonsWrapper>
            </Form>




        </Container>

    )
})