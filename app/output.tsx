import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import tw from '@/utils/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useJob } from '@/hooks/JobContext';
import Toast from 'react-native-toast-message';
import { Copy } from '@/components/icons';
import { Cancel } from '@/components/icons';


export default function OutputScreen() {
    const { url, prompt } = useLocalSearchParams();
    const router = useRouter();
    const { resetJob } = useJob();

    const handleClose = () => {
        resetJob();
        router.back();
    };

    const handleCopy = () => {
        Toast.show({
            type: 'success',
            text1: 'Prompt copied to clipboard!',
            position: 'bottom',
            visibilityTime: 2000,
            bottomOffset: 100,
        });
    };

    const extractStyle = (p: string) => {
        const match = p.match(/Style:\s*(\w+)/);
        return match ? match[1] : null;
    };

    const styleTag = extractStyle(prompt as string || '');
    const cleanPrompt = (prompt as string || '').replace(/,\s*Style:\s*\w+/g, '').trim();

    return (
        <View style={tw`flex-1 bg-[#0A0A0F]`}>
            <View style={tw`flex-row justify-between items-center px-6 pt-12 pb-4`}>
                <Text style={tw`text-white text-[22px] font-extrabold`}>Your Design</Text>
                <TouchableOpacity onPress={handleClose} style={tw`p-2`}>
                    <Cancel width={20} height={20} color="white" />
                </TouchableOpacity>
            </View>

            <View style={tw`flex-1 px-6`}>
                <View style={tw`w-full rounded-[16px] aspect-square bg-white overflow-hidden mb-6`}>
                    <Image
                        source={{ uri: url as string }}
                        style={tw`flex-1`}
                        contentFit="contain"
                        transition={500}
                    />
                </View>

                <View style={tw`bg-[#1C1C23] p-3 rounded-[12px] min-h-[134px] border border-[#2C2C35]`}>
                    <View style={tw`flex-row justify-between items-center mb-3`}>
                        <Text style={tw`text-[#FAFAFA] text-[15px] font-bold`}>Prompt</Text>
                        <TouchableOpacity onPress={handleCopy} style={tw`flex-row items-center`}>
                            <Copy width={16} height={16} color="#A1A1AA" />
                            <Text style={tw`text-[#A1A1AA] font-extrasmall text-[11px] ml-1`}>Copy</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={tw`text-[#FAFAFA] text-[16px] font-normal mb-3`} numberOfLines={4}>
                        {cleanPrompt}
                    </Text>

                    {styleTag && (
                        <View style={tw`bg-[#374151] self-start py-1 px-2 rounded-full`}>
                            <Text style={tw`text-[#D1D5DB] text-xs font-medium`}>{styleTag}</Text>
                        </View>
                    )}
                </View>
            </View>
            <View style={tw`pb-8`} />
        </View>
    );
}