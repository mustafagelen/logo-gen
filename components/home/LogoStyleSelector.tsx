import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import tw from '@/utils/tailwind';
import StyleCard from './StyleCard';
import NoStyle from '@/components/icons/NoStyle';


const logoStyles = [
    { id: 'no-style', title: 'No Style', icon: NoStyle },
 
];

interface LogoStyleSelectorProps {
    selectedStyle: string;
    onStyleSelect: (styleId: string) => void;
}

export default function LogoStyleSelector({
    selectedStyle,
    onStyleSelect
}: LogoStyleSelectorProps) {
    return (
        <View style={tw`w-full`}>
            <Text style={tw`text-text-primary text-lg font-semibold mb-4`}>
                Logo Styles
            </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={tw`px-1`}
            >
                {logoStyles.map((style) => {
                    const IconComponent = style.icon;
                    return (
                        <StyleCard
                            key={style.id}
                            title={style.title}
                            icon={<IconComponent width={40} height={40} />}
                            selected={selectedStyle === style.id}
                            onPress={() => onStyleSelect(style.id)}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}
