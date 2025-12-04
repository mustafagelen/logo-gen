import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from '@/utils/tailwind';

interface StyleCardProps {
    title: string;
    icon: React.ReactNode;
    selected: boolean;
    onPress: () => void;
}

export default function StyleCard({ title, icon, selected, onPress }: StyleCardProps) {
    return (
        <TouchableOpacity
            style={tw`items-center mr-3`}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View
                style={tw`w-20 h-20 rounded-2xl items-center justify-center ${selected
                    ? 'bg-red-500 border-2 border-accent-purple'
                    : 'bg-card-bg border-2 border-card-border'
                    }`}
            >
                {icon}
            </View>
            <Text
                style={tw`text-xs mt-2 ${selected ? 'text-text-primary font-semibold' : 'text-text-secondary'
                    }`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
