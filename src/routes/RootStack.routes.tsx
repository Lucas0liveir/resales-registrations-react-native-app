import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";
import { User } from "../mobX/models/User";
import { AuthRoutes } from "./AuthRoutes";
import { BottomRoutes } from "./BottomRoutes";

const RootStack = createStackNavigator();

const RootStackScreen = observer(() => (
    <RootStack.Navigator screenOptions={{
        headerShown: false
    }}>
        {User.authenticationToken ? (
            <RootStack.Screen
                name="App"
                component={BottomRoutes}
                options={{
                    animationEnabled: false
                }}
            />
        ) : (
            <RootStack.Screen
                name="Auth"
                component={AuthRoutes}
                options={{
                    animationEnabled: false
                }}
            />
        )}
    </RootStack.Navigator>
))

export { RootStackScreen }