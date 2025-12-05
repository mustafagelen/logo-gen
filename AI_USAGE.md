# AI Usage in Development

Bu dosya, projenin geliştirilmesinde yapay zekanın nasıl kullanıldığını belgelemektedir.

## AI Destekli Geliştirme Alanları

### 1. Component Geliştirme

AI, aşağıdaki React Native component'lerinin oluşturulmasında yardımcı oldu:

| Component | Açıklama |
|-----------|----------|
| `CreateButton` | Gradient buton component'i |
| `index.tsx` | Gradient arka planın oluşturulması |
| `SurpriseButton` | Rastgele prompt önerisi butonu |
| `JobContext` | JobContext Provider'ı ile useJob hook'unun Context API ile global state yönetimi |
| `output.tsx` | Sonuç ekranı(daha önce kullanılan componentler olduğu için ai ile oluşturuldu) |

### 2. Firebase Entegrasyonu

- Firestore'a job oluşturma (`addDoc`)
- Gerçek zamanlı durum takibi (`onSnapshot`)
- Status güncellemelerini dinleme

### 3. Test Yazımı

AI, Jest test framework'ü ile testlerin yazılmasında yardımcı oldu:

```typescript
describe('Job Context Interface', () => {
  it('should have status property', () => {
    expect(mockContext.status).toBe('idle');
  });
});
```

Test kapsamı:
- Job status type doğrulaması
- Data structure kontrolü
- Status geçişleri (idle → processing → done/failed)
- Error handling

### 4. UI/UX Tasarım Implementasyonu

- Gradient background implementasyonu (`Bg` SVG component)
- Tailwind CSS (twrnc) stil yönetimi
- Responsive layout düzenlemeleri

### 5. Dokümantasyon

- README.md oluşturma ve güncelleme
- TypeScript tip tanımları(belirtilen type alanları için)

## AI Kullanım Yaklaşımı

### Pair Programming Modeli

AI, bir "pair programmer" olarak kullanıldı:
1. Kullanıcı gereksinimleri belirledi
2. AI çözüm önerileri sundu
3. Kod birlikte geliştirildi
4. Hatalar birlikte debug edildi

## AI'ın Katkıda Bulunmadığı Alanlar

- Tasarım kararları (renk paletleri, UI layout)
- İş mantığı gereksinimleri
- Firebase proje yapılandırması
- SVG asset tasarımları

## Özet
- AI her ne kadar tasarım ve süreç hızlandırma konusunda yardımcı olsa da figma tasarımının(pixel perfect) aktarımı ve testleri tekrar edilerek üzerinden geçilmiştir.
