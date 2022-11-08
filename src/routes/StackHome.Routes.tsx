import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "../screens/Home";
import { StackClients } from "./StackClients.Routes";
import { StackProducts } from "./StackProducts.Routes";

const { Navigator, Screen } = createStackNavigator()

export function StackHome() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="HomeScreen"
                component={Home}
            />
            <Screen
                name="Clients"
                component={StackClients}
            />
            <Screen
                name="Products"
                component={StackProducts}
            />
        </Navigator>
    )
}