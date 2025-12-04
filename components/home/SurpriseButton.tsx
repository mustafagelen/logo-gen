import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from '@/utils/tailwind';

interface SurpriseButtonProps {
    onPress: () => void;
}

export default function SurpriseButton({ onPress }: SurpriseButtonProps) {
    return (
        <TouchableOpacity
            style={tw`flex-row items-center gap-2 bg-card-bg px-4 py-3 rounded-xl`}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={tw`text-xl`}>🎲</Text>
            <Text style={tw`text-text-primary font-medium`}>Surprise me</Text>
        </TouchableOpacity>
    );
}
