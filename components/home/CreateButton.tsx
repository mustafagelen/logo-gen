import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from '@/utils/tailwind';

interface CreateButtonProps {
    onPress: () => void;
    disabled?: boolean;
}

export default function CreateButton({ onPress, disabled = false }: CreateButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.8}
            style={tw`w-full`}
        >
            <LinearGradient
                colors={['#5D5FEF', '#B74FED']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={tw`py-4 rounded-full flex-row items-center justify-center gap-2 ${disabled ? 'opacity-50' : ''
                    }`}
            >
                <Text style={tw`text-white text-lg font-semibold`}>Create</Text>
                <Text style={tw`text-xl`}>✨</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}