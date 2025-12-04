import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from '@/utils/tailwind';
import PromptInput from '@/components/home/PromptInput';
import SurpriseButton from '@/components/home/SurpriseButton';
import LogoStyleSelector from '@/components/home/LogoStyleSelector';
import CreateButton from '@/components/home/CreateButton';

const surprisePrompts = [
    "Sugar Rush Bakery için eğlenceli ve tuhaf bir fırın logosu, cupcake ve serpiştirme ögeleri ile",
];

export default function HomeScreen() {
    const [prompt, setPrompt] = useState('');
    const [selectedStyle, setSelectedStyle] = useState('no-style');

    const handleSurprise = () => {
        const randomPrompt = surprisePrompts[Math.floor(Math.random() * surprisePrompts.length)];
        setPrompt(randomPrompt);
    };

    const handleCreate = () => {
        console.log('Creating logo with:', { prompt, style: selectedStyle });
    };

    return (
        <LinearGradient
            colors={['#0A0A0F', '#1A1A2E', '#0A0A0F']}
            style={tw`flex-1 relative`}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={tw`flex-1`}
            >
                <ScrollView
                    style={tw`flex-1`}
                    contentContainerStyle={tw`px-6 py-8`}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={tw`items-center py-5`}>
                        <Text style={tw`text-[#FAFAFA] text-[17px] font-extrabold`}>AI Logo</Text>
                    </View>
                    <View style={tw`mb-6`}>
                        <View style={tw`flex-row items-center justify-between mb-3`}>
                            <Text style={tw`text-[#FAFAFA] text-[20px] font-extrabold`}>
                                Enter Your Prompt
                            </Text>
                            <SurpriseButton onPress={handleSurprise} />
                        </View>
                        <PromptInput value={prompt} onChangeText={setPrompt} />
                    </View>
                    <View style={tw`mb-8`}>
                        <LogoStyleSelector
                            selectedStyle={selectedStyle}
                            onStyleSelect={setSelectedStyle}
                        />
                    </View>
                    <View style={tw`h-20`} />
                </ScrollView>
            </KeyboardAvoidingView>

            <TouchableOpacity style={tw`absolute bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-dark-bg z-10`}>
                <CreateButton onPress={handleCreate} disabled={!prompt.trim()} />
            </TouchableOpacity>
        </LinearGradient>
    );
}