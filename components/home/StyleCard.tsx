import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from '@/utils/tailwind';

interface StyleCardProps {
    title: string;
    icon: React.ReactNode | string;
    selected: boolean;
    onPress: () => void;
}

export default function StyleCard({ title, icon, selected, onPress }: StyleCardProps) {
    return (
        <View style={tw`items-center`}>
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.8}
                style={tw.style(
                    `w-[90px] h-[90px] rounded-[16px] bg-[#272b57] items-center justify-center overflow-hidden`,
                    selected && 'border-2 border-white'
                )}
            >
                {icon}
            </TouchableOpacity>
            <Text
                style={tw.style(
                    `font-roboto text-[13px] mt-[6px]`,
                    selected ? 'text-white font-bold' : 'text-[#71717A]'
                )}
            >
                {title}
            </Text>
        </View>
    );
}
