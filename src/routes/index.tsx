import { NavigationContainer } from "@react-navigation/native";
import { observer } from "mobx-react";
import { BottomRoutes } from "./BottomRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { User } from "../mobX/models/User";
import { navigationRef } from "./NavigateWithMobX";
import { RootStackScreen } from "./RootStack.routes";

export const Routes = observer(() => {

    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <RootStackScreen />
        </NavigationContainer>

    )
})