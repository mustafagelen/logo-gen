import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from '@/utils/tailwind';
import PromptInput from '@/components/home/PromptInput';
import SurpriseButton from '@/components/home/SurpriseButton';
import LogoStyleSelector from '@/components/home/LogoStyleSelector';
import CreateButton from '@/components/home/CreateButton';

const surprisePrompts = [
    "A majestic phoenix rising from flames in vibrant orange and gold",
    "A minimalist mountain peak with a compass integrated into the design",
    "A playful robot mascot holding a lightbulb",
    "An elegant swan forming the letter 'S' in flowing curves",
    "A geometric wolf head made of triangular shapes",
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
            style={tw`flex-1`}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={tw`flex-1`}
            >
                <ScrollView
                    style={tw`flex-1`}
                    contentContainerStyle={tw`px-6 py-8`}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={tw`items-center mb-8 mt-4`}>
                        <Text style={tw`text-text-primary text-2xl font-bold`}>AI Logo</Text>
                    </View>
                    <View style={tw`mb-6`}>
                        <View style={tw`flex-row items-center justify-between mb-3`}>
                            <Text style={tw`text-text-primary text-lg font-semibold`}>
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
                    <View style={tw`flex-1 min-h-20`} />
                </ScrollView>
                <View style={tw`px-6 pb-8 pt-4 bg-dark-bg`}>
                    <CreateButton onPress={handleCreate} disabled={!prompt.trim()} />
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}
