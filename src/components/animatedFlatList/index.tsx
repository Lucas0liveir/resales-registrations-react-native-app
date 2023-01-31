import React from "react";
import { Animated } from "react-native";

interface Props {
    data: any[]
    ItemComponent: Animated.AnimatedComponent<typeof React.Component<any, any>>;
    horizontal?: boolean
}

const ITEM_SIZE = 40 + 20 * 3

export function AnimatedFlatList({ data, ItemComponent, horizontal = false }: Props) {

    const scrollY = React.useRef(new Animated.Value(0)).current

    return (
        <Animated.FlatList
            horizontal={horizontal}
            data={data}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item, index }) => {
                const inputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 2)
                ]

                const opacityInputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 3)
                ]

                const scale = scrollY.interpolate({
                    inputRange,
                    outputRange: [1, 1, 1, 0]
                })

                const opacity = scrollY.interpolate({
                    inputRange: opacityInputRange,
                    outputRange: [1, 1, 1, 0]
                })

                return (
                    <ItemComponent
                        style={{
                            opacity,
                            transform: [{ scale }]
                        }}
                        item={item}
                    />
                )
            }}
        />
    )
}
