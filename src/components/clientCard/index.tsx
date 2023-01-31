import React, { useMemo } from "react";
import {
    Container,
    Icon,
    Name,
    FirstLetter
} from "./styles"

interface Props {
    item: string;
    style: any
}

export function ClientCard({ item, style }: Props) {
    const randomColor = useMemo(() => {
        let color = Math.floor(Math.random() * 16777215).toString(16);
        while (color === "ffffff" || color === "e0ec0") {
            color = Math.floor(Math.random() * 16777215).toString(16);
        }
        console.log(color);
        
        return `#${color}`;
    }, []);

    return (
        <Container
            style={style}
        >
            <Icon
                backgroundColor={randomColor}
            >
                <FirstLetter>
                    {item[0]}
                </FirstLetter>
            </Icon>
            <Name>
                {item}
            </Name>
        </Container>
    )
}
