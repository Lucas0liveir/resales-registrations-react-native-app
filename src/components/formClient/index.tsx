import React, { useMemo, useState, useCallback } from "react";
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { EvilIcons } from "@expo/vector-icons"
import { Input } from "../forms/Input";
import {
    Container,
    Form,
    Wrapper,
    Header,
    Title,
    ButtonSave,
    TitleButton
} from "./styles";
import { useTheme } from "styled-components";

interface Props {
    bottomSheetRef: React.MutableRefObject<BottomSheetModal>;
}

export function FormClient({ bottomSheetRef }: Props) {
    const snapPoints = useMemo(() => ['40%', '40%'], [])

    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            setName('')
            setPhoneNumber('')
        }
    }, [])

    return (
        <Container>
            <BottomSheetModal
                keyboardBehavior="interactive"
                enablePanDownToClose
                index={1}
                onChange={handleSheetChanges}
                snapPoints={snapPoints}
                ref={bottomSheetRef}
            >
                <Header>
                    <Title>
                        Cadastrar cliente
                    </Title>
                    <ButtonSave>
                        <TitleButton>
                            Salvar
                        </TitleButton>
                    </ButtonSave>
                </Header>
                <Form>
                    <Wrapper>
                        <Input
                            labelText="Nome"
                            iconName="user"
                            value={name}
                            defaultValue={name}
                            onChangeText={setName}
                        />
                        <Input
                            labelText="Celular"
                            iconName="phone"
                            value={phoneNumber}
                            defaultValue={phoneNumber}
                            onChangeText={setPhoneNumber}
                        />
                    </Wrapper>
                </Form>
            </BottomSheetModal>
        </Container>
    )
}