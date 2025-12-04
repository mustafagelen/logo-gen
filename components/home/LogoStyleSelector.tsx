import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import tw from '@/utils/tailwind';
import StyleCard from './StyleCard';
import NoStyle from '@/components/icons/NoStyle';


const logoStyles = [
    { id: 'no1', title: 'No Style', icon: NoStyle },
    { id: 'no2', title: 'No Style', icon: NoStyle },
    { id: 'no3', title: 'No Style', icon: NoStyle },
    { id: 'no4', title: 'No Style', icon: NoStyle },
    { id: 'no5', title: 'No Style', icon: NoStyle },
    { id: 'no6', title: 'No Style', icon: NoStyle },

];

interface LogoStyleSelectorProps {
    selectedStyle: string;
    onStyleSelect: (styleId: string) => void;
    isSelected?: boolean;
}

export default function LogoStyleSelector({
    selectedStyle,
    onStyleSelect,
    isSelected
}: LogoStyleSelectorProps) {
    return (
        <View style={tw`w-full`}>
            <Text style={tw`text-[#FAFAFA] text-[20px] font-extrabold mb-3`}>
                Logo Styles
            </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={tw`px-1 gap-[6px]`}
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
