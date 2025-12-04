import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import tw from '@/utils/tailwind';
import StyleCard from './StyleCard';
import NoStyle from '@/components/icons/NoStyle';

const pngIcons: Record<string, any> = {
    monogram: require('@/assets/icons/png/monogram.png'),
    abstract: require('@/assets/icons/png/abstract.png'),
    mascot: require('@/assets/icons/png/mascot.png'),
};

const logoStyles = [
    { id: 'none', title: 'No Style' },
    { id: 'monogram', title: 'Monogram' },
    { id: 'abstract', title: 'Abstract' },
    { id: 'mascot', title: 'Mascot' },
];

interface LogoStyleSelectorProps {
    selectedStyle: string;
    onStyleSelect: (styleId: string) => void;
}

export default function LogoStyleSelector({
    selectedStyle,
    onStyleSelect,
}: LogoStyleSelectorProps) {
    const renderIcon = (styleId: string) => {
        if (styleId === 'none') {
            return <NoStyle width={40} height={40} />;
        }
        return (
            <Image
                source={pngIcons[styleId]}
                style={{ width: 90, height: 90 }}
                resizeMode="cover"
            />
        );
    };

    return (
        <View style={tw`w-full`}>
            <Text style={tw`text-[#FAFAFA] text-[20px] font-extrabold mb-3 leading-[25px]`}>
                Logo Styles
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={tw`gap-4 py-2`}
            >
                {logoStyles.map((style) => (
                    <StyleCard
                        key={style.id}
                        title={style.title}
                        icon={renderIcon(style.id)}
                        selected={selectedStyle === style.id}
                        onPress={() => onStyleSelect(style.id)}
                    />
                ))}
            </ScrollView>
        </View>
    );
}