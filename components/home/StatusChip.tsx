import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import tw from '@/utils/tailwind';
import { JobStatus } from '@/types';
import { Fail } from '../icons';


interface StatusChipProps {
    status: JobStatus;
    title: string;
    subtitle: string;
    url?: string;
}

export default function StatusChip({ status, title, subtitle, url }: StatusChipProps) {
    const renderContent = () => {
        switch (status) {
            case 'processing':
                return (
                    <View style={tw`flex-row items-stretch h-[70px] bg-[#232329] rounded-[16px] overflow-hidden`}>
                        <View style={tw`bg-[#1A1A1A] p-4 items-center justify-center`}>
                            <ActivityIndicator style={tw`w-9 h-9`} color="#FFFFFF" />
                        </View>
                        <View style={tw`flex-1 px-3 py-[14.5px] justify-center`}>
                            <Text style={tw`text-[#FAFAFA] text-[16px] font-bold`}>{title}</Text>
                            <Text style={tw`text-[#71717A] text-[13px]`}>{subtitle}</Text>
                        </View>
                    </View>
                );

            case 'done':
                return (
                    <View style={tw`flex-row items-stretch h-[70px] rounded-[16px] overflow-hidden`}>
                        <View style={tw`bg-white w-[80px] items-center justify-center`}>
                            {url && (
                                <Image
                                    source={{ uri: url }}
                                    style={tw`w-12 h-12`}
                                    contentFit="contain"
                                    transition={200}
                                />
                            )}
                        </View>
                        <LinearGradient
                            colors={['#2938DC', '#943DFF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={tw`flex-1 px-3 py-[14.5px] justify-center`}
                        >
                            <Text style={tw`text-[#FAFAFA] text-[16px] font-bold`}>{title}</Text>
                            <Text style={tw`text-[#D4D4D8] text-[13px] font-manrope font-medium`}>{subtitle}</Text>
                        </LinearGradient>
                    </View>
                );

            case 'failed':
                return (
                    <View style={tw`flex-row items-stretch bg-[#f04343] rounded-[16px] overflow-hidden`}>
                        <View style={tw`bg-[#f27c7c] p-[19px] items-center justify-center`}>
                            <Fail width={32} height={32} color="#FAFAFA" />
                        </View>
                        <View style={tw`flex-1 px-5 py-5 justify-center`}>
                            <Text style={tw`text-white text-[16px] font-bold`}>{title}</Text>
                            <Text style={tw`text-[#D4D4D8] text-[13px]`}>{subtitle}</Text>
                        </View>
                    </View>
                );
        }
    };

    return <View style={tw`w-full max-w-md`}>{renderContent()}</View>;
}
