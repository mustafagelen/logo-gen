import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from '@/utils/tailwind';

interface SurpriseButtonProps {
    onPress: () => void;
}

export default function SurpriseButton({ onPress }: SurpriseButtonProps) {
    return (
        <TouchableOpacity
            style={tw`flex-row items-center gap-2 py-2`}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={tw`text-[14px]`}>🎲</Text>
            <Text style={tw`text-[#FAFAFA] font-normal text-[13px]`}>Surprise me</Text>
        </TouchableOpacity>
    );
}
