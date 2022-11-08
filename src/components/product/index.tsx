import React from "react";
import PerfumeSVG from '../../assets/perfume.svg'
import {
    Container,
    Wrapper,
    Photo,
    ProductInfoWrapper,
    ProductName,
    CategoryName,
    ProductBrand,
    PhotoContainer,
    InfoWrapper,
    Spacer,
    Label
} from './styles'

export function Product() {
    return (
        <Container>
            <Wrapper>
                <PhotoContainer>
                    <PerfumeSVG width={40} height={40} />
                    {/* <Photo
                        source={{ uri: "https://github.com/Lucas0liveir.png" }}
                    /> */}
                </PhotoContainer>
                <ProductInfoWrapper>
                    <InfoWrapper>
                        <Label>
                            Nome
                        </Label>
                        <ProductName>
                            Perfume Malbec
                        </ProductName>
                    </InfoWrapper>
                    <InfoWrapper>
                        <Label>
                            Categoria
                        </Label>
                        <CategoryName>
                            Cosméticos
                        </CategoryName>
                    </InfoWrapper>
                    <Spacer />
                    {/* <InfoWrapper>
                        <Label>
                            Marca
                        </Label>
                        <ProductBrand>
                            Malbec
                        </ProductBrand>
                    </InfoWrapper> */}

                </ProductInfoWrapper>
            </Wrapper>
        </Container>
    )
}