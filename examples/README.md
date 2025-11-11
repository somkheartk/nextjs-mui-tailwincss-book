# ตัวอย่างการใช้งาน Next.js + MUI + Tailwind CSS

โปรเจคนี้เป็นตัวอย่างการใช้งาน Next.js, Material-UI (MUI) และ Tailwind CSS ร่วมกัน

## 🚀 เริ่มต้นใช้งาน

### ติดตั้ง Dependencies

```bash
npm install
```

### รันโปรเจค

```bash
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

## 📁 โครงสร้างโปรเจค

```
examples/
├── app/                      # App Router (Next.js 13+)
│   ├── layout.tsx           # Root Layout
│   ├── page.tsx             # หน้าแรก
│   ├── about/               # หน้าเกี่ยวกับ
│   ├── products/            # หน้ารายการสินค้า
│   ├── form-example/        # ตัวอย่าง Form
│   └── api/                 # API Routes
│       └── products/        # API สินค้า
├── components/              # React Components
│   ├── common/              # Components ทั่วไป
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── LoginForm.tsx
│   └── layout/              # Layout Components
│       └── Navigation.tsx
├── theme/                   # MUI Theme Configuration
│   ├── theme.ts
│   └── MuiThemeProvider.tsx
└── lib/                     # Utilities และ Helpers
```

## 🎯 ตัวอย่างที่รวมอยู่

### 1. Components
- **Button**: ปุ่ม MUI พร้อม Tailwind styling
- **Card**: การ์ดแสดงข้อมูล
- **LoginForm**: ฟอร์มพร้อม validation (React Hook Form + Zod)

### 2. Pages
- **หน้าแรก** (`/`): แสดงภาพรวมและตัวอย่าง components
- **เกี่ยวกับ** (`/about`): ข้อมูลเกี่ยวกับโปรเจค
- **สินค้า** (`/products`): แสดงรายการสินค้าจาก API
- **ฟอร์ม** (`/form-example`): ตัวอย่างการใช้ form validation

### 3. API Routes
- **GET /api/products**: ดึงรายการสินค้าทั้งหมด
- **POST /api/products**: สร้างสินค้าใหม่

## 🛠️ เทคโนโลยีที่ใช้

- **Next.js 15**: React Framework พร้อม App Router
- **React 19**: JavaScript Library สำหรับ UI
- **TypeScript**: Type-safe JavaScript
- **Material-UI (MUI)**: React Component Library
- **Tailwind CSS**: Utility-first CSS Framework
- **React Hook Form**: จัดการ Forms
- **Zod**: Schema validation
- **Axios**: HTTP Client

## 📚 การใช้งาน MUI + Tailwind ร่วมกัน

โปรเจคนี้แสดงวิธีการผสมผสาน MUI และ Tailwind CSS:

```tsx
// ใช้ MUI Component พร้อม Tailwind classes
<Button 
  variant="contained"
  className="px-6 py-2"
>
  Click Me
</Button>
```

## 🎨 Theme Configuration

MUI Theme ถูก configure ใน `theme/theme.ts`:

```typescript
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});
```

## 📝 การ Build โปรเจค

```bash
npm run build
```

## 🔍 การตรวจสอบ Code

```bash
npm run lint
```

## 📖 เอกสารเพิ่มเติม

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)

## 📄 License

MIT License
