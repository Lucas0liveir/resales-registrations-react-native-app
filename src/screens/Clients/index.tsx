import React, { useState, useRef, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../components/backButton";
import { MaterialIcons } from "@expo/vector-icons";
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import {
    Container,
    Header,
    HeaderTitle,
    Content,
    ListClients,
    Spacer,
    AddButton,
    Form
} from "./styles"
import { Searchbar } from "react-native-paper";
import { ClientCard } from "../../components/clientCard";
import { useTheme } from "styled-components";
import { FormClient } from "../../components/formClient";

export function Clients() {
    const clients = ["Gabriel", "Gustavo", "Jamile", "Lucas", "Pedro", "Gabriel", "Gustavo", "Jamile", "Lucas", "Pedro"]
    const theme = useTheme()
    const navigation = useNavigation<any>()
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);


    return (
        <Container>
            <Header>
                <BackButton onPress={() => navigation.goBack()} />
                <HeaderTitle>
                    Meus Clientes
                </HeaderTitle>
                <Spacer />
            </Header>
            <Content>
                <Searchbar
                    placeholder="Pesquisar clientes"
                    value={searchQuery}
                />

                <ListClients
                    data={clients}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({ item }) => <ClientCard clientName={item} />}
                />
            </Content>

            <AddButton
                onPress={handlePresentModalPress}
            >
                <MaterialIcons
                    name="add"
                    size={45}
                    color={theme.colors.shape}
                />
            </AddButton>
            <FormClient
                bottomSheetRef={bottomSheetRef}
            />

        </Container>
    )
}