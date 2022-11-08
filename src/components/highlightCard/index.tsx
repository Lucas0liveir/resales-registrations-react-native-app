import React from "react";
import {
    Container,
    TitleHighlight,
    PriceHighlight,
    Period
} from "./styles"

interface Props {
    title: string;
    amount: string;
    period: string;
    isOverdue?: boolean;
    isProfit?: boolean;
}

export function HighlightCard({ title, amount, period, isOverdue = false, isProfit = false }: Props) {

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
            <PriceHighlight>
                {amount}
            </PriceHighlight>
            <Period>
                {period}
            </Period>
        </Container>
    )
}