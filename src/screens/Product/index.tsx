import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { BackButton } from "../../components/backButton";
import { Product } from "../../components/product";
import {
    Container,
    ListProducts,
    Header,
    Content,
    AddButton,
    Spacer,
    Title
} from "./styles";
import { useTheme } from "styled-components";
import { Searchbar } from "react-native-paper";

export function Products() {
    const theme = useTheme()
    const [query, setQuery] = useState('')

    return (
        <Container>
            <Header>
                <BackButton />
                <Title>
                    Produtos
                </Title>
                <Spacer />
            </Header>
            <Content>
                <Searchbar
                    placeholder="Pesquisar produto"
                    value={query}
                    onChangeText={setQuery}
                />
                <ListProducts
                    data={Array(10).fill(0)}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({ item }) => <Product />}
                />
                <AddButton>
                    <MaterialIcons
                        name="add"
                        size={45}
                        color={theme.colors.shape}
                    />
                </AddButton>
            </Content>
        </Container>
    )
}