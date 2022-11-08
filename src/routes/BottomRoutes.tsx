import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign, Foundation, Feather, Ionicons } from '@expo/vector-icons'
import { Home } from '../screens/Home';
import { useTheme } from 'styled-components';
import { StackHome } from './StackHome.Routes';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

function BottomRoutes() {
    const theme = useTheme()
    return (
        <Navigator
            shifting={false}
            activeColor={theme.colors.primary}
            barStyle={{
                justifyContent: "center",
                height: 72,
                elevation: 10,
                borderTopWidth: 0.19,
                borderTopColor: 'grey',
                backgroundColor: theme.colors.secondary
            }}
            backBehavior='initialRoute'
            initialRouteName='Home'
        >
            <Screen
                options={{
                    tabBarIcon: ({ color }) => <Foundation color={color} size={24} name="graph-trend" />,
                }}
                name="Revendas"
                component={Home} />
            <Screen
                options={{
                    tabBarIcon: ({ color }) => <Ionicons color={color} size={24} name="create-outline" />,
                }}
                name="Cadastro"
                component={Home} />
            <Screen
                options={{
                    tabBarIcon: ({ color }) => <AntDesign color={color} size={24} name="home" />,
                }}
                name="Home"
                component={StackHome} />
            <Screen
                options={{
                    tabBarIcon: ({ color }) => <Ionicons color={color} size={24} name="notifications-outline" />,
                }}
                name="Notificações"
                component={Home} />
            <Screen
                options={{
                    tabBarIcon: ({ color }) => <Feather color={color} size={24} name="menu" />,
                }}
                name="Menu"
                component={Home} />
        </Navigator>
    );
}

export { BottomRoutes };