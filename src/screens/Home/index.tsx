import React from "react";
import { CommonActions } from '@react-navigation/native';
import { HighlightCard } from "../../components/highlightCard";
import { Ionicons } from "@expo/vector-icons"
import HandshaketransactionSvg from '../../assets/handshake-transaction.svg';
import HandshakereceiveSvg from '../../assets/hand-recieve-money.svg';
import StockSvg from '../../assets/stock.svg';
import ClientsSvg from '../../assets/clients.svg';
import { ShortCut } from "../../components/shortCut";
import {
    Container,
    Header,
    PhotoWrapper,
    Photo,
    Title,
    Content,
    HeaderContentWrapper,
    Resales,
    Wrapper,
    SearchContainer,
    ShortcutContainer,
} from './styles'
import { Searchbar } from "react-native-paper";
import { User } from "../../mobX/models/User";
import { RectButton } from "react-native-gesture-handler";
import { observer } from "mobx-react";
import { CommandInvoker, useCommand } from "../../mobX/command";
import { LoginCommand } from "../../mobX/command/LoginCommand";
import { LogoutCommand } from "../../mobX/command/LogoutCommand";


export const Home = observer(({ navigation }) => {
    const logoutCommand = useCommand(() => new LogoutCommand())


    return (
        <Container>
            <Header>
                <HeaderContentWrapper>
                    <PhotoWrapper>
                        <Photo
                            source={{ uri: "http://github.com/lucas0liveir.png" }}
                        />
                    </PhotoWrapper>
                    <Title>
                        Olá, {User.name ?? "Fulano"}
                    </Title>

                    <RectButton
                        onPress={() => {
                            logoutCommand.execute()
                        }}
                    >
                        <Ionicons
                            name="exit-outline"
                            size={25}
                        />
                    </RectButton>
                </HeaderContentWrapper>
            </Header>
            <Content>
                <HighlightCard
                    isProfit
                    title="Lucro"
                    amount="R$ 5.000,00"
                    period="nos últimos 30 dias"
                />
                <HighlightCard
                    title="A receber"
                    amount="R$ 12.000,00"
                    period="nos próximos 30 dias"
                />
                <HighlightCard
                    isOverdue
                    title="Em atraso"
                    amount="R$ 2.000,00"
                    period="nos últimos 15 dias"
                />
            </Content>
            <Wrapper>

                <Resales>
                    <SearchContainer >
                        <Searchbar
                            placeholder="O que está procurando?"
                            value=""
                            onChangeText={() => { }}
                        />
                    </SearchContainer>
                    <ShortcutContainer>
                        <ShortCut
                            Icon={HandshaketransactionSvg}
                            title={'Registrar\nRevenda'}
                        />
                        <ShortCut
                            Icon={HandshakereceiveSvg}
                            title={'Minha\nReceita'}
                        />
                        <ShortCut
                            onPress={() => navigation.navigate("Clients")}
                            w={47}
                            h={47}
                            Icon={ClientsSvg}
                            title={'Meus\nClientes'}
                        />
                        <ShortCut
                            onPress={() => navigation.navigate("Products")}
                            Icon={StockSvg}
                            title={'Meus\nProdutos'}
                        />
                    </ShortcutContainer>
                    {/* <TimeLineEmpty>
                        <SimpleLineIcons
                            color={theme.colors.text_detail}
                            name="clock"
                            size={60}
                        />
                        <TitleInfo>
                            Acompanhe aqui os principais eventos de suas revendas.
                        </TitleInfo>
                    </TimeLineEmpty> */}
                </Resales>
            </Wrapper>

        </Container>
    )
})