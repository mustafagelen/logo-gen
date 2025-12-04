import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from '@/utils/tailwind';
import Stars from '@/components/icons/Stars';

interface CreateButtonProps {
    onPress: () => void;
}

export default function CreateButton({ onPress }: CreateButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={tw`w-full`}
        >
            <LinearGradient
                colors={['#2938DC', '#943DFF']}
                locations={[0.25, 1.0]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={tw`py-4 rounded-full h-14 flex-row items-center justify-center gap-2`}
            >
                <Text style={tw`text-white font-roboto text-[17px] font-extrabold`}>Create</Text>
                <Stars width={20} height={20} />
            </LinearGradient>
        </TouchableOpacity>
    );
}