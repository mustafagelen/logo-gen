import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from '@/utils/tailwind';

type StatusType = 'loading' | 'success' | 'error';

interface StatusChipProps {
    status: StatusType;
    title: string;
    subtitle: string;
}

export default function StatusChip({ status, title, subtitle }: StatusChipProps) {
    const renderContent = () => {
        switch (status) {
            case 'loading':
                return (
                    <View style={tw`flex-row items-center gap-3 bg-[#1A1A1A] px-5 py-4 rounded-2xl`}>
                        <ActivityIndicator size="small" color="#FFFFFF" />
                        <View style={tw`flex-1`}>
                            <Text style={tw`text-white text-[15px] font-semibold`}>{title}</Text>
                            <Text style={tw`text-[#A1A1AA] text-[13px] mt-0.5`}>{subtitle}</Text>
                        </View>
                    </View>
                );

            case 'success':
                return (
                    <LinearGradient
                        colors={['#4F46E5', '#7C3AED']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={tw`flex-row items-center gap-3 px-5 py-4 rounded-2xl`}
                    >
                        <View style={tw`w-6 h-6 bg-white rounded-full items-center justify-center`}>
                            <Text style={tw`text-[#4F46E5] text-[16px] font-bold`}>✓</Text>
                        </View>
                        <View style={tw`flex-1`}>
                            <Text style={tw`text-white text-[15px] font-semibold`}>{title}</Text>
                            <Text style={tw`text-white/80 text-[13px] mt-0.5`}>{subtitle}</Text>
                        </View>
                    </LinearGradient>
                );

            case 'error':
                return (
                    <LinearGradient
                        colors={['#EF4444', '#F97316']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={tw`flex-row items-center gap-3 px-5 py-4 rounded-2xl`}
                    >
                        <View style={tw`w-6 h-6 bg-white rounded-full items-center justify-center`}>
                            <Text style={tw`text-[#EF4444] text-[16px] font-bold`}>!</Text>
                        </View>
                        <View style={tw`flex-1`}>
                            <Text style={tw`text-white text-[15px] font-semibold`}>{title}</Text>
                            <Text style={tw`text-white/80 text-[13px] mt-0.5`}>{subtitle}</Text>
                        </View>
                    </LinearGradient>
                );
        }
    };

    return <View style={tw`w-full max-w-md`}>{renderContent()}</View>;
}
