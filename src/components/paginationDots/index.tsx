import React from "react";
import { Container } from "./styles";

interface Props {
    isActive: boolean
}

export function PaginationDots({ isActive = false }: Props) {

    return (
        <Container isActive={isActive}/>

    )
}