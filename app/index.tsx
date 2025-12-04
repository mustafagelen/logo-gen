import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import tw from '@/utils/tailwind';
import PromptInput from '@/components/home/PromptInput';
import SurpriseButton from '@/components/home/SurpriseButton';
import LogoStyleSelector from '@/components/home/LogoStyleSelector';
import CreateButton from '@/components/home/CreateButton';
import StatusChip from '@/components/home/StatusChip';
import { useJob } from '@/hooks/JobContext';
import Toast from 'react-native-toast-message';
import { BlurView } from 'expo-blur';



const surprisePrompts = [
    "Sugar Rush Bakery için eğlenceli ve tuhaf bir fırın logosu, cupcake ve serpiştirme ögeleri ile",
];

export default function HomeScreen() {
    const { status, jobData, startJob, error, resetJob } = useJob();
    const router = useRouter();
    const [prompt, setPrompt] = useState('');
    const [selectedStyle, setSelectedStyle] = useState('none');

    const handleSurprise = () => {
        const randomPrompt = surprisePrompts[Math.floor(Math.random() * surprisePrompts.length)];
        setPrompt(randomPrompt);
    };

    const handleCreate = () => {
        const isProcessing = status === 'processing';
        const isPromptEmpty = !prompt.trim();

        if (isProcessing) {
            Toast.show({
                type: 'error',
                text1: 'Already in progress. Please wait.',
                position: 'bottom',
                visibilityTime: 3500,
                bottomOffset: 100,
            });
            return;
        }

        if (isPromptEmpty) {
            Toast.show({
                type: 'error',
                text1: 'Please enter a creative prompt.',
                position: 'bottom',
                visibilityTime: 3500,
                bottomOffset: 100,
            });
            return;
        }

        const fullPrompt = prompt + (selectedStyle !== 'none' ? `, Style: ${selectedStyle}` : '');
        startJob(fullPrompt, selectedStyle);
    };

    const handleViewResult = () => {
        if (status === 'done' && jobData?.resultUrl) {
            router.push({
                pathname: '/output',
                params: {
                    url: jobData.resultUrl,
                    prompt: jobData.prompt
                }
            });

        }
    };

    const getChipTexts = () => {
        switch (status) {
            case 'processing':
                return {
                    title: 'Creating Your Design...',
                    subtitle: 'Ready in a minute'
                };
            case 'done':
                return {
                    title: 'Your Design is Ready!',
                    subtitle: 'Tap to see it.'
                };
            case 'failed':
                return {
                    title: 'Oops, something went wrong!',
                    subtitle: 'Click to try again.'
                };
            default:
                return { title: '', subtitle: '' };
        }
    };
    const chipTexts = getChipTexts();

    return (
        <LinearGradient
            colors={['#0b0b0d', '#1A1A2E', '#0A0A0F']}
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
                    <View style={tw`items-center py-[19px]`}>
                        <Text style={tw`text-[#FAFAFA] text-[17px] font-extrabold`}>AI Logo</Text>
                    </View>

                    {status !== 'idle' && (
                        <TouchableOpacity
                            onPress={handleViewResult}
                            disabled={status !== 'done'}
                            style={tw`items-center`}
                        >
                            <StatusChip
                                status={status}
                                title={chipTexts.title}
                                subtitle={chipTexts.subtitle}
                                url={jobData?.resultUrl}
                            />
                        </TouchableOpacity>
                    )}
                    <View style={tw`mb-6`}>
                        <View style={tw`flex-row items-center justify-between mb-3 pt-3`}>
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

            <View style={tw`absolute bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-transparent z-10`}>
                <CreateButton
                    onPress={handleCreate}
                />
            </View>
        </LinearGradient>
    );
}