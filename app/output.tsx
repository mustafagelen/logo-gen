import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import tw from '@/utils/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useJob } from '@/hooks/JobContext'; // Context'i import ettik

export default function OutputScreen() {
    const { url, prompt } = useLocalSearchParams();
    const router = useRouter();
    const { resetJob } = useJob(); // Sıfırlama fonksiyonunu aldık

    // Geri/Kapat tuşuna basıldığında state'i sıfırla
    const handleClose = () => {
        resetJob(); // Ana ekranı yeni işe hazırla
        router.back(); // Ana ekrana dön
    };

    // Prompt'un yanındaki Copy butonunun simülasyonu
    const handleCopy = () => {
        // Normalde burada Expo Clipboard API kullanılırdı
        Alert.alert("Copied!", "Prompt text copied to clipboard.");
    };

    // Prompt'un içinden stil etiketini ayrıştırıyoruz (Örn: "...Style: Monogram")
    const extractStyle = (p: string) => {
        const match = p.match(/Style:\s*(\w+)/);
        return match ? match[1] : null;
    };

    const styleTag = extractStyle(prompt as string || '');
    const cleanPrompt = (prompt as string || '').replace(/,\s*Style:\s*\w+/g, '').trim();

    return (
        <View style={tw`flex-1 bg-[#0A0A0F]`}>
            {/* Header Ayarı: Transparan ve Çözüm başlık */}
            <Stack.Screen options={{ headerShown: false }} />

            {/* --- HEADER --- */}
            <View style={tw`flex-row justify-between items-center px-6 pt-12 pb-4`}>
                <Text style={tw`text-white text-xl font-bold`}>Your Design</Text>
                <TouchableOpacity onPress={handleClose} style={tw`p-2`}>
                    <Ionicons name="close" size={28} color="white" />
                </TouchableOpacity>
            </View>

            {/* --- RESİM VE PROMPT BİLGİSİ --- */}
            <View style={tw`flex-1 px-6`}>

                {/* 1. RESİM KARTI (BEYAZ, TASARIMDAN) */}
                <View style={tw`w-full aspect-square bg-white rounded-2xl overflow-hidden mb-6 shadow-xl`}>
                    <Image
                        source={{ uri: url as string }}
                        style={tw`flex-1`}
                        contentFit="contain" // Logoyu beyaz karta sığdırmak için 'contain'
                        transition={500}
                    />
                </View>

                {/* 2. PROMPT DETAY KARTI */}
                <View style={tw`bg-[#1C1C23] p-5 rounded-2xl border border-[#2C2C35]`}>
                    <View style={tw`flex-row justify-between items-center mb-3`}>
                        <Text style={tw`text-gray-400 text-sm font-semibold`}>Prompt</Text>
                        <TouchableOpacity onPress={handleCopy} style={tw`flex-row items-center`}>
                            <Ionicons name="copy-outline" size={16} color="#94A3B8" />
                            <Text style={tw`text-[#94A3B8] text-xs ml-1`}>Copy</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={tw`text-white text-base mb-3`} numberOfLines={4}>
                        {cleanPrompt}
                    </Text>

                    {/* Stil Etiketi */}
                    {styleTag && (
                        <View style={tw`bg-[#374151] self-start px-3 py-1 rounded-full`}>
                            <Text style={tw`text-[#D1D5DB] text-xs font-medium`}>{styleTag}</Text>
                        </View>
                    )}
                </View>
            </View>

            {/* Alt taraftaki boşluk (Tasarımda olduğu gibi) */}
            <View style={tw`pb-8`} />
        </View>
    );
}