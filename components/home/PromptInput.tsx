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
        <View style={tw`w-full`}>
            <TextInput
                style={tw`bg-card-bg text-text-primary p-4 rounded-2xl min-h-32 text-base`}
                placeholder="A blue lion logo reading 'HEXA' in bold letters"
                placeholderTextColor={tw.color('text-secondary')}
                value={value}
                onChangeText={onChangeText}
                multiline
                maxLength={maxLength}
                textAlignVertical="top"
            />
            <Text style={tw`text-text-secondary text-xs mt-2 text-right`}>
                {value.length}/{maxLength}
            </Text>
        </View>
    );
}
