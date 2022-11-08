import React, { useState } from "react";
import { Image } from "react-native";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/forms/Button";
import { Input } from "../../components/forms/Input";
import { PaginationDots } from "../../components/paginationDots";
import {
    Container,
    Header,
    ContainerDots,
    InfoStep,
    Wrapper,
    Description,
    Content
} from "./styles";

export function Register() {
    const theme = useTheme()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <Container>
            <Header>
                <Wrapper>
                    <BackButton />
                    <InfoStep>
                        Crie sua conta
                    </InfoStep>
                    <ContainerDots>

                    </ContainerDots>
                </Wrapper>

            </Header>


            <Content>
                <Description>
                    Faça seu cadastro de forma rápida e fácil
                </Description>
                <Input
                    iconName="user"
                    labelText="Nome"
                    value={name}
                />
                <Input
                    iconName="mail"
                    labelText="E-mail"
                    value={email}
                />
                <Input
                    isPasswordInput
                    iconName="lock"
                    labelText="Senha"
                />
                <Input
                    isPasswordInput
                    iconName="lock"
                    labelText="Confirme sua senha"
                />

            </Content>
            <Button
                color={theme.colors.sucess}
                title="Finalizar"
            />

        </Container>
    )
}