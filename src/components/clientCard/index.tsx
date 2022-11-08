import React, { useMemo } from "react";
import {
    Container,
    Icon,
    Name,
    FirstLetter
} from "./styles"

interface Props {
    clientName: string
}

export function ClientCard({ clientName }: Props) {
    const randomColor = useMemo(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`, [])

    return (
        <Container>
            <Icon
                backgroundColor={randomColor}
            >
                <FirstLetter>
                    {clientName[0]}
                </FirstLetter>
            </Icon>
            <Name>
                {clientName}
            </Name>
        </Container>
    )
}
