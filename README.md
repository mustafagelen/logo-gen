# AI Logo Generator

Kullanıcılar metin prompt'ları ile profesyonel logolar oluşturabilirsiniz.

## Proje Hakkında

Bu uygulama, yapay zeka kullanarak kullanıcıların yazdığı metin açıklamalarından (prompt) logo tasarımları oluşturur(şidmilik mock data ile). React Native (Expo) ile geliştirilmiş mobil uygulama, Firebase backend ile entegre çalışır.

### Özellikler

- **AI Logo Oluşturma**: Metin prompt'u ile logo üretimi
- **Logo Stilleri**: Monogram, Abstract, Mascot veya stil belirtmeden oluşturma
- **Gerçek Zamanlı Durum Takibi**: İş durumunu canlı takip (processing, done, failed)
- **Şık UI/UX**: Modern gradient tasarım, animasyonlar ve premium görünüm
- **Surprise Me**: Rastgele yaratıcı prompt önerileri

## Kurulum

### Gereksinimler

- Node.js (v18+)
- npm veya yarn
- Expo CLI
- Firebase projesi

### Adımlar

1. **Repo'yu klonlayın:**
   ```bash
   git clone https://github.com/mustafagelen/logo-gen.git
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Firebase yapılandırması:**
   
   `firebaseConfig.ts` dosyası oluşturun ve Firebase bilgilerinizi ekleyin:
   ```typescript
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   ```

4. **Uygulamayı başlatın:**
   ```bash
   npx expo start -c
   ```

## Proje Yapısı

```
mobile/
├── app/                    # Sayfa ve route'lar (Expo Router)
│   ├── _layout.tsx         # Ana layout, font yükleme, provider'lar
│   ├── index.tsx           # Ana ekran (logo oluşturma)
│   └── output.tsx          # Sonuç ekranı (oluşturulan logo)
├── components/
│   ├── home/               # Ana ekran component'leri
│   │   ├── CreateButton.tsx
│   │   ├── LogoStyleSelector.tsx
│   │   ├── PromptInput.tsx
│   │   ├── StatusChip.tsx
│   │   ├── StyleCard.tsx
│   │   └── SurpriseButton.tsx
│   └── icons/              # SVG icon component'leri
├── hooks/
│   ├── JobContext.tsx      # Job state yönetimi (Context API)
│   └── useJobGeneration.ts # Firebase job işlemleri hook'u
├── types/
│   └── index.ts            # TypeScript tip tanımları
├── utils/
│   └── tailwind.ts         # Tailwind (twrnc) yapılandırması
└── __tests__/              # Jest testleri
    └── hooks/
        └── JobContext.test.ts
```

## Testler

Proje, **Jest** test framework'ü kullanmaktadır. Testler, JobContext ve iş akışı mantığını doğrular.

### Test Komutları

```bash
npm test

npm run test:watch

npm run test:coverage
```

### Test Kapsamı

`__tests__/hooks/JobContext.test.ts` dosyasında şu testler bulunur:

| Test Suite | Açıklama |
|------------|----------|
| **Job Status Types** | Status değerlerinin (idle, processing, done, failed) doğruluğu |
| **Job Data Structure** | Job nesnesinin gerekli alanları (id, prompt, logoStyle, status) |
| **Job Context Interface** | Context'in sağladığı değerler ve fonksiyonlar |
| **startJob Function** | İş başlatma fonksiyonunun parametre kontrolü |
| **resetJob Function** | State sıfırlama mantığı |
| **Status Transitions** | idle → processing → done/failed geçişleri |
| **Error Handling** | Hata durumlarının yönetimi |

### Örnek Test Çıktısı

```
PASS  __tests__/hooks/JobContext.test.ts
  Job Status Types
    ✓ should have valid status values
    ✓ idle should be the initial status
  Job Data Structure
    ✓ should have required fields
    ✓ should have correct field types
    ✓ resultUrl should be optional
  ...

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Time:        0.509 s
```

## Geliştirme

### Yeni Icon Ekleme

SVG dosyasını `assets/icons/` klasörüne ekleyin ve şu komutu çalıştırın:

```bash
npm run gen-icons
```

Bu komut, SVG'leri React Native component'lerine dönüştürür.

### Kullanılan Teknolojiler

- **React Native** + **Expo** (SDK 54)
- **Expo Router** - Dosya tabanlı routing
- **Firebase Firestore** - Veritabanı
- **twrnc** - Tailwind CSS for React Native
- **Jest** - Test framework
- **TypeScript** - Tip güvenliği