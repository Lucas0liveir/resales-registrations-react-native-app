import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { Clients } from "../screens/Clients";

const { Navigator, Screen } = createStackNavigator()

export function StackClients() {

    return (
        <Navigator
            initialRouteName="My-Clients"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="My-Clients"
                component={Clients}
            />
        </Navigator>
    )
}