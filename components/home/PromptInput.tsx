import React from 'react';
import { TextInput, View, Text } from 'react-native';
import tw from '@/utils/tailwind';

interface PromptInputProps {
    value: string;
    onChangeText: (text: string) => void;
    maxLength?: number;
}

export default function PromptInput({
    value,
    onChangeText,
    maxLength = 500
}: PromptInputProps) {
    return (
        <View style={tw`w-full relative`}>
            <TextInput
                style={tw`rounded-[16px] text-[16px]  bg-[#1A1A2E] px-3 pt-4 pb-8 h-[175px] text-[#71717A]`}
                placeholder="A blue lion logo reading 'HEXA' in bold letters"
                value={value}
                onChangeText={onChangeText}
                multiline
                maxLength={maxLength}
                textAlignVertical="top"
                scrollEnabled={true}
            />
            <Text style={tw`absolute bottom-4 left-4 text-[#71717A] text-[12px]`}>
                {value.length}/{maxLength}
            </Text>
        </View>
    );
}
