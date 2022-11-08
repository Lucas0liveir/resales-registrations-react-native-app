import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { Products } from "../screens/Product";

const { Navigator, Screen } = createStackNavigator()

export function StackProducts() {

    return (
        <Navigator
            initialRouteName="My-Products"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="My-Products"
                component={Products}
            />
        </Navigator>
    )
}