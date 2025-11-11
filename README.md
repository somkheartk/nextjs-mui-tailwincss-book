# คู่มือการใช้ Next.js + MUI + Tailwind CSS

## 📚 เกี่ยวกับคู่มือนี้

คู่มือฉบับสมบูรณ์สำหรับการเรียนรู้การพัฒนาเว็บแอปพลิเคชันด้วย Next.js, Material-UI (MUI), และ Tailwind CSS ตั้งแต่พื้นฐานจนถึงระดับสูง พร้อมตัวอย่างการสร้างระบบจริง เช่น POS, E-commerce, และ Admin Panel

---

## 📋 สารบัญ

### [ส่วนที่ 1: พื้นฐานและการตั้งค่า](#part1)
1. [แนะนำ Next.js, MUI และ Tailwind CSS](#chapter1)
2. [ติดตั้งและตั้งค่าโปรเจค](#chapter2)
3. [โครงสร้างโฟลเดอร์และไฟล์](#chapter3)
4. [การใช้งานพื้นฐาน](#chapter4)

### [ส่วนที่ 2: พื้นฐานการพัฒนา](#part2)
5. [Components และ Props](#chapter5)
6. [Routing และ Navigation](#chapter6)
7. [Styling ด้วย MUI และ Tailwind](#chapter7)
8. [Responsive Design](#chapter8)

### [ส่วนที่ 3: ระดับกลาง](#part3)
9. [State Management (useState, useContext)](#chapter9)
10. [การจัดการ Forms และ Validation](#chapter10)
11. [API Routes และ Server-Side](#chapter11)
12. [การเชื่อมต่อกับ API ภายนอก](#chapter12)

### [ส่วนที่ 4: ระดับสูง](#part4)
13. [Authentication และ Authorization](#chapter13)
14. [State Management ขั้นสูง (Redux, Zustand)](#chapter14)
15. [Optimization และ Performance](#chapter15)
16. [SEO และ Meta Tags](#chapter16)
17. [Deployment และ Production](#chapter17)

### [ส่วนที่ 5: โปรเจคจริง](#part5)
18. [สร้างระบบ POS (Point of Sale)](#chapter18)
19. [สร้างระบบ E-commerce](#chapter19)
20. [สร้าง Admin Panel](#chapter20)

### [ภาคผนวก](#appendix)
- [แหล่งเรียนรู้เพิ่มเติม](#resources)
- [Best Practices](#best-practices)
- [FAQ](#faq)

---

## <a name="part1"></a>📖 ส่วนที่ 1: พื้นฐานและการตั้งค่า

### <a name="chapter1"></a>1. แนะนำ Next.js, MUI และ Tailwind CSS

#### Next.js คือ?
Next.js เป็น React Framework ที่ช่วยให้การพัฒนาเว็บแอปพลิเคชันง่ายและรวดเร็วขึ้น พร้อมฟีเจอร์:
- 🚀 Server-Side Rendering (SSR)
- 📄 Static Site Generation (SSG)
- 🔄 API Routes
- 🎨 Built-in CSS Support
- ⚡ Fast Refresh

**ลิงค์อ้างอิง:**
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)

#### Material-UI (MUI) คือ?
MUI เป็น React Component Library ที่ใช้ Material Design:
- 🎯 Ready-to-use Components
- 🎨 Customizable Theme
- 📱 Responsive by Default
- ♿ Accessibility Support

**ลิงค์อ้างอิง:**
- [MUI Documentation](https://mui.com/material-ui/getting-started/)
- [MUI Components](https://mui.com/material-ui/all-components/)

#### Tailwind CSS คือ?
Tailwind CSS เป็น Utility-First CSS Framework:
- ⚡ Fast Development
- 🎨 Highly Customizable
- 📦 Small Bundle Size
- 🔧 No CSS Files Needed

**ลิงค์อ้างอิง:**
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Components](https://tailwindui.com/components)

#### ทำไมต้องใช้ทั้ง 3 อย่างร่วมกัน?
- **Next.js:** Framework หลักสำหรับสร้าง App
- **MUI:** Components สำเร็จรูปที่สวยงาม
- **Tailwind:** Styling ที่ยืดหยุ่นและรวดเร็ว

---

### <a name="chapter2"></a>2. ติดตั้งและตั้งค่าโปรเจค

#### ความต้องการของระบบ
```bash
Node.js >= 18.17.0
npm หรือ yarn หรือ pnpm
```

#### สร้างโปรเจค Next.js
```bash
npx create-next-app@latest my-project
cd my-project
```

เลือก options:
```
✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint? Yes
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like to use `src/` directory? Yes
✔ Would you like to use App Router? Yes
✔ Would you like to customize the default import alias? No
```

#### ติดตั้ง MUI
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

#### ติดตั้ง Dependencies เพิ่มเติม
```bash
npm install axios
npm install date-fns
npm install react-hook-form
npm install zod
```

#### ไฟล์ Configuration

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1976d2',
        secondary: '#dc004e',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // ปิด Tailwind reset เพื่อไม่ให้ขัดกับ MUI
  },
}
```

**ลิงค์อ้างอิง:**
- [Create Next.js App](https://nextjs.org/docs/getting-started/installation)
- [MUI Installation](https://mui.com/material-ui/getting-started/installation/)
- [Tailwind with Next.js](https://tailwindcss.com/docs/guides/nextjs)

---

### <a name="chapter3"></a>3. โครงสร้างโฟลเดอร์และไฟล์

```
my-project/
├── public/              # ไฟล์ Static (รูปภาพ, fonts)
├── src/
│   ├── app/            # App Router (Next.js 13+)
│   │   ├── layout.tsx  # Root Layout
│   │   ├── page.tsx    # Home Page
│   │   └── api/        # API Routes
│   ├── components/     # React Components
│   │   ├── common/     # Components ทั่วไป
│   │   ├── layout/     # Layout Components
│   │   └── features/   # Feature-specific Components
│   ├── lib/            # Utilities และ Helpers
│   ├── hooks/          # Custom React Hooks
│   ├── types/          # TypeScript Types
│   └── styles/         # Global Styles
├── .env.local          # Environment Variables
├── next.config.js      # Next.js Configuration
├── tailwind.config.js  # Tailwind Configuration
└── tsconfig.json       # TypeScript Configuration
```

#### ไฟล์สำคัญ

**src/app/layout.tsx:**
```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My App',
  description: 'Created with Next.js, MUI, and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

**ลิงค์อ้างอิง:**
- [Next.js Project Structure](https://nextjs.org/docs/getting-started/project-structure)
- [App Router](https://nextjs.org/docs/app)

---

### <a name="chapter4"></a>4. การใช้งานพื้นฐาน

#### สร้าง Component แรก

**src/components/common/Button.tsx:**
```typescript
import { Button as MuiButton } from '@mui/material'

interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'contained' | 'outlined' | 'text'
}

export default function Button({ label, onClick, variant = 'contained' }: ButtonProps) {
  return (
    <MuiButton 
      variant={variant}
      onClick={onClick}
      className="px-6 py-2"
    >
      {label}
    </MuiButton>
  )
}
```

#### ใช้ Component ใน Page

**src/app/page.tsx:**
```typescript
import Button from '@/components/common/Button'

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">ยินดีต้อนรับ</h1>
      <Button 
        label="คลิกที่นี่" 
        onClick={() => alert('Hello!')}
      />
    </div>
  )
}
```

---

## <a name="part2"></a>📖 ส่วนที่ 2: พื้นฐานการพัฒนา

### <a name="chapter5"></a>5. Components และ Props

#### Component Types

**1. Presentational Components:**
```typescript
interface CardProps {
  title: string
  description: string
  image?: string
}

export function Card({ title, description, image }: CardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
```

**2. Container Components:**
```typescript
'use client'
import { useState } from 'react'
import { Card } from './Card'

export function CardList() {
  const [cards] = useState([
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
  ])

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  )
}
```

**ลิงค์อ้างอิง:**
- [React Components](https://react.dev/learn/your-first-component)
- [TypeScript with React](https://react-typescript-cheatsheet.netlify.app/)

---

### <a name="chapter6"></a>6. Routing และ Navigation

#### App Router (Next.js 13+)

**โครงสร้าง Routes:**
```
app/
├── page.tsx                 # /
├── about/
│   └── page.tsx            # /about
├── products/
│   ├── page.tsx            # /products
│   └── [id]/
│       └── page.tsx        # /products/[id]
└── dashboard/
    ├── layout.tsx          # Dashboard Layout
    └── page.tsx            # /dashboard
```

**Dynamic Routes:**
```typescript
// app/products/[id]/page.tsx
export default function ProductPage({ params }: { params: { id: string } }) {
  return <div>Product ID: {params.id}</div>
}
```

**Navigation:**
```typescript
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navigation() {
  const router = useRouter()

  return (
    <nav className="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <button onClick={() => router.push('/products')}>
        Products
      </button>
    </nav>
  )
}
```

**ลิงค์อ้างอิง:**
- [Next.js Routing](https://nextjs.org/docs/app/building-your-application/routing)
- [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

---

### <a name="chapter7"></a>7. Styling ด้วย MUI และ Tailwind

#### MUI Theming

**src/theme/theme.ts:**
```typescript
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
})
```

**src/app/layout.tsx:**
```typescript
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '@/theme/theme'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### ใช้ MUI + Tailwind ร่วมกัน
```typescript
import { Button, TextField } from '@mui/material'

export default function Form() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">ฟอร์มตัวอย่าง</h2>
      <TextField 
        label="ชื่อ" 
        fullWidth 
        className="mb-4"
      />
      <Button 
        variant="contained" 
        fullWidth
        className="mt-4"
      >
        ส่งข้อมูล
      </Button>
    </div>
  )
}
```

**ลิงค์อ้างอิง:**
- [MUI Theming](https://mui.com/material-ui/customization/theming/)
- [Tailwind Utilities](https://tailwindcss.com/docs/utility-first)

---

### <a name="chapter8"></a>8. Responsive Design

#### Tailwind Breakpoints
```typescript
export default function ResponsiveGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {/* Content */}
    </div>
  )
}
```

#### MUI Responsive
```typescript
import { Grid, useMediaQuery, useTheme } from '@mui/material'

export default function ResponsiveLayout() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        {/* Content */}
      </Grid>
    </Grid>
  )
}
```

**ลิงค์อ้างอิง:**
- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [MUI Breakpoints](https://mui.com/material-ui/customization/breakpoints/)

---

## <a name="part3"></a>📖 ส่วนที่ 3: ระดับกลาง

### <a name="chapter9"></a>9. State Management (useState, useContext)

#### useState
```typescript
'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4">
      <p className="text-xl">Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        เพิ่ม
      </button>
    </div>
  )
}
```

#### useContext
```typescript
// context/CartContext.tsx
'use client'
import { createContext, useContext, useState } from 'react'

interface CartContextType {
  items: any[]
  addItem: (item: any) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState([])

  const addItem = (item: any) => {
    setItems([...items, item])
  }

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
```

**ลิงค์อ้างอิง:**
- [React Hooks](https://react.dev/reference/react)
- [Context API](https://react.dev/learn/passing-data-deeply-with-context)

---

### <a name="chapter10"></a>10. การจัดการ Forms และ Validation

#### React Hook Form + Zod
```typescript
'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { TextField, Button } from '@mui/material'

const schema = z.object({
  email: z.string().email('อีเมลไม่ถูกต้อง'),
  password: z.string().min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'),
})

type FormData = z.infer<typeof schema>

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6">
      <TextField
        {...register('email')}
        label="อีเมล"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
        className="mb-4"
      />
      <TextField
        {...register('password')}
        label="รหัสผ่าน"
        type="password"
        fullWidth
        error={!!errors.password}
        helperText={errors.password?.message}
        className="mb-4"
      />
      <Button type="submit" variant="contained" fullWidth>
        เข้าสู่ระบบ
      </Button>
    </form>
  )
}
```

**ลิงค์อ้างอิง:**
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

---

### <a name="chapter11"></a>11. API Routes และ Server-Side

#### API Route
```typescript
// app/api/products/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ]
  
  return NextResponse.json(products)
}

export async function POST(request: Request) {
  const body = await request.json()
  // บันทึกข้อมูล
  return NextResponse.json({ success: true, data: body })
}
```

#### Server Components
```typescript
// app/products/page.tsx
async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store'
  })
  return res.json()
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">สินค้า</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="border p-4 rounded">
            <h3 className="font-bold">{product.name}</h3>
            <p>ราคา: {product.price} บาท</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

**ลิงค์อ้างอิง:**
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

---

### <a name="chapter12"></a>12. การเชื่อมต่อกับ API ภายนอก

#### Axios Setup
```typescript
// lib/api.ts
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor สำหรับ Token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
```

#### การใช้งาน
```typescript
'use client'
import { useState, useEffect } from 'react'
import api from '@/lib/api'

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users')
      setUsers(response.data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>กำลังโหลด...</div>

  return (
    <div className="p-8">
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
```

#### Environment Variables
```
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your-secret-key
```

**ลิงค์อ้างอิง:**
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

---

## <a name="part4"></a>📖 ส่วนที่ 4: ระดับสูง

### <a name="chapter13"></a>13. Authentication และ Authorization

#### NextAuth.js Setup
```bash
npm install next-auth
```

**app/api/auth/[...nextauth]/route.ts:**
```typescript
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // ตรวจสอบข้อมูลกับ API
        const user = { id: '1', name: 'User', email: credentials?.email }
        return user
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
})

export { handler as GET, handler as POST }
```

#### Protected Routes
```typescript
// middleware.ts
import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/login',
  },
})

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*']
}
```

**ลิงค์อ้างอิง:**
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Authentication Patterns](https://nextjs.org/docs/app/building-your-application/authentication)

---

### <a name="chapter14"></a>14. State Management ขั้นสูง (Redux, Zustand)

#### Zustand (แนะนำ - เรียบง่ายกว่า Redux)
```bash
npm install zustand
```

```typescript
// store/useStore.ts
import { create } from 'zustand'

interface StoreState {
  user: any | null
  cart: any[]
  setUser: (user: any) => void
  addToCart: (item: any) => void
  removeFromCart: (id: string) => void
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  cart: [],
  setUser: (user) => set({ user }),
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id)
  })),
}))
```

**การใช้งาน:**
```typescript
'use client'
import { useStore } from '@/store/useStore'

export default function Cart() {
  const cart = useStore((state) => state.cart)
  const removeFromCart = useStore((state) => state.removeFromCart)

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => removeFromCart(item.id)}>ลบ</button>
        </div>
      ))}
    </div>
  )
}
```

**ลิงค์อ้างอิง:**
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

---

### <a name="chapter15"></a>15. Optimization และ Performance

#### Image Optimization
```typescript
import Image from 'next/image'

export default function ProductImage() {
  return (
    <Image
      src="/product.jpg"
      alt="Product"
      width={500}
      height={500}
      priority
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/jpeg..."
    />
  )
}
```

#### Code Splitting
```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false
})
```

#### Caching
```typescript
// Static Generation
export const revalidate = 3600 // revalidate ทุก 1 ชั่วโมง

// Dynamic with Cache
const res = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 }
})
```

**ลิงค์อ้างอิง:**
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Performance Best Practices](https://nextjs.org/docs/app/building-your-application/optimizing)

---

### <a name="chapter16"></a>16. SEO และ Meta Tags

#### Metadata API
```typescript
// app/products/[id]/page.tsx
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProduct(params.id)
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  }
}
```

#### JSON-LD Schema
```typescript
export default function ProductPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Product Name',
    image: 'https://example.com/image.jpg',
    description: 'Product Description',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Content */}
    </>
  )
}
```

**ลิงค์อ้างอิง:**
- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google SEO Guide](https://developers.google.com/search/docs)

---

### <a name="chapter17"></a>17. Deployment และ Production

#### Vercel (แนะนำ)
```bash
npm install -g vercel
vercel login
vercel
```

#### Docker
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Environment Setup
```bash
# Production
NEXT_PUBLIC_API_URL=https://api.production.com
NODE_ENV=production

# Staging
NEXT_PUBLIC_API_URL=https://api.staging.com
NODE_ENV=production
```

**ลิงค์อ้างอิง:**
- [Vercel Deployment](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)

---

## <a name="part5"></a>📖 ส่วนที่ 5: โปรเจคจริง

### <a name="chapter18"></a>18. สร้างระบบ POS (Point of Sale)

#### ฟีเจอร์หลัก
- 🛒 ระบบขายสินค้า
- 📦 จัดการสต็อกสินค้า
- 💰 คำนวณยอดขาย
- 🧾 พิมพ์ใบเสร็จ
- 📊 รายงานยอดขาย

#### โครงสร้างโปรเจค
```
pos-system/
├── app/
│   ├── pos/
│   │   ├── page.tsx           # หน้าขายสินค้า
│   │   └── receipt/[id]/      # หน้าใบเสร็จ
│   ├── products/              # จัดการสินค้า
│   ├── inventory/             # จัดการสต็อก
│   └── reports/               # รายงาน
├── components/
│   ├── pos/
│   │   ├── ProductGrid.tsx    # แสดงรายการสินค้า
│   │   ├── Cart.tsx           # ตะกร้าสินค้า
│   │   └── PaymentModal.tsx   # หน้าต่างชำระเงิน
└── lib/
    └── pos/
        ├── calculations.ts    # คำนวณราคา ภาษี ส่วนลด
        └── receipt.ts         # สร้างใบเสร็จ
```

#### ตัวอย่าง Component หลัก

**ProductGrid.tsx:**
```typescript
'use client'
import { Grid, Card, CardContent, CardMedia } from '@mui/material'

interface Product {
  id: string
  name: string
  price: number
  image: string
  stock: number
}

export function ProductGrid({ products, onSelect }: { products: Product[], onSelect: (p: Product) => void }) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={6} sm={4} md={3} key={product.id}>
          <Card 
            onClick={() => onSelect(product)}
            className="cursor-pointer hover:shadow-lg transition"
          >
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-lg text-blue-600">{product.price} ฿</p>
              <p className="text-sm text-gray-500">คงเหลือ: {product.stock}</p>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
```

**Cart.tsx:**
```typescript
'use client'
import { List, ListItem, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export function Cart({ items, onRemove, onCheckout }: any) {
  const total = items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">ตะกร้าสินค้า</h2>
      <List>
        {items.map((item: any) => (
          <ListItem key={item.id} className="border-b">
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">
                {item.quantity} x {item.price} ฿
              </p>
            </div>
            <p className="font-bold mr-4">{item.quantity * item.price} ฿</p>
            <IconButton onClick={() => onRemove(item.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between text-xl font-bold">
          <span>รวมทั้งหมด:</span>
          <span>{total} ฿</span>
        </div>
        <button
          onClick={onCheckout}
          className="w-full mt-4 bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600"
        >
          ชำระเงิน
        </button>
      </div>
    </div>
  )
}
```

**ลิงค์ตัวอย่างเพิ่มเติม:**
- [POS UI Examples](https://dribbble.com/tags/pos-system)
- [Receipt Printer Libraries](https://github.com/song940/node-escpos)

---

### <a name="chapter19"></a>19. สร้างระบบ E-commerce

#### ฟีเจอร์หลัก
- 🛍️ แสดงสินค้า
- 🔍 ค้นหาและกรองสินค้า
- 🛒 ตะกร้าสินค้า
- 💳 ชำระเงินออนไลน์
- 📦 ติดตามสถานะการส่ง
- ⭐ รีวิวสินค้า
- 👤 บัญชีผู้ใช้

#### โครงสร้างโปรเจค
```
ecommerce/
├── app/
│   ├── (shop)/
│   │   ├── page.tsx              # หน้าแรก
│   │   ├── products/             # รายการสินค้า
│   │   ├── categories/           # หมวดหมู่
│   │   └── cart/                 # ตะกร้า
│   ├── checkout/                 # ชำระเงิน
│   ├── account/
│   │   ├── orders/               # ประวัติการสั่งซื้อ
│   │   └── profile/              # โปรไฟล์
│   └── admin/                    # ส่วนแอดมิน
├── components/
│   ├── products/
│   │   ├── ProductCard.tsx
│   │   ├── ProductList.tsx
│   │   └── ProductFilter.tsx
│   ├── cart/
│   │   └── CartDrawer.tsx
│   └── checkout/
│       └── CheckoutForm.tsx
└── lib/
    ├── payment/
    │   └── stripe.ts             # Stripe Payment
    └── shipping/
        └── tracking.ts
```

#### Product Card Component
```typescript
import { Card, CardMedia, CardContent, Button, Rating } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    rating: number
    reviews: number
  }
  onAddToCart: (id: string) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        className="object-cover"
      />
      <CardContent className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <Rating value={product.rating} readOnly size="small" />
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>
        <div className="mt-auto">
          <p className="text-2xl font-bold text-blue-600 mb-3">
            {product.price.toLocaleString()} ฿
          </p>
          <Button
            variant="contained"
            fullWidth
            startIcon={<AddShoppingCartIcon />}
            onClick={() => onAddToCart(product.id)}
          >
            เพิ่มลงตะกร้า
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
```

#### Checkout Process
```typescript
'use client'
import { useState } from 'react'
import { Stepper, Step, StepLabel } from '@mui/material'

const steps = ['ข้อมูลการจัดส่ง', 'การชำระเงิน', 'ยืนยันคำสั่งซื้อ']

export function CheckoutStepper() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <div className="mt-8">
        {activeStep === 0 && <ShippingForm />}
        {activeStep === 1 && <PaymentForm />}
        {activeStep === 2 && <OrderConfirmation />}
      </div>
    </div>
  )
}
```

**ลิงค์อ้างอิง:**
- [Stripe Payment Integration](https://stripe.com/docs/payments/checkout)
- [E-commerce Best Practices](https://www.shopify.com/blog/ecommerce-design)

---

### <a name="chapter20"></a>20. สร้าง Admin Panel

#### ฟีเจอร์หลัก
- 📊 Dashboard และ Analytics
- 👥 จัดการผู้ใช้
- 📦 จัดการสินค้า
- 🛍️ จัดการคำสั่งซื้อ
- 💰 รายงานยอดขาย
- ⚙️ การตั้งค่าระบบ

#### Dashboard Layout
```typescript
// app/admin/layout.tsx
import { Box, Drawer, AppBar, Toolbar, List, ListItem } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="flex h-screen">
      <Drawer
        variant="permanent"
        className="w-64"
      >
        <Toolbar />
        <List>
          <ListItem button>
            <DashboardIcon className="mr-3" />
            Dashboard
          </ListItem>
          <ListItem button>
            <PeopleIcon className="mr-3" />
            ผู้ใช้
          </ListItem>
          <ListItem button>
            <ShoppingCartIcon className="mr-3" />
            คำสั่งซื้อ
          </ListItem>
        </List>
      </Drawer>

      <Box className="flex-1 flex flex-col">
        <AppBar position="static">
          <Toolbar>
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </Toolbar>
        </AppBar>
        <Box className="flex-1 overflow-auto p-6 bg-gray-100">
          {children}
        </Box>
      </Box>
    </Box>
  )
}
```

#### Analytics Dashboard
```typescript
'use client'
import { Grid, Paper } from '@mui/material'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

export default function Dashboard() {
  const stats = [
    { title: 'ยอดขายวันนี้', value: '45,231 ฿', change: '+12%' },
    { title: 'คำสั่งซื้อ', value: '156', change: '+8%' },
    { title: 'ผู้ใช้ใหม่', value: '42', change: '+23%' },
    { title: 'อัตราการแปลง', value: '3.2%', change: '+5%' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Paper className="p-4">
              <p className="text-gray-600 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
              <p className="text-green-600 text-sm mt-1">{stat.change}</p>
            </Paper>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Paper className="p-4">
            <h2 className="text-xl font-bold mb-4">ยอดขาย 7 วันล่าสุด</h2>
            <LineChart width={800} height={300} data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#1976d2" />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
```

#### Data Table with CRUD
```typescript
'use client'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'ชื่อ', width: 200 },
  { field: 'email', headerName: 'อีเมล', width: 250 },
  { field: 'role', headerName: 'บทบาท', width: 130 },
  {
    field: 'actions',
    headerName: 'จัดการ',
    width: 150,
    renderCell: (params) => (
      <>
        <IconButton onClick={() => handleEdit(params.row.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
]

export function UsersTable({ users }: { users: any[] }) {
  return (
    <div className="h-[600px] w-full">
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  )
}
```

**ลิงค์อ้างอิง:**
- [MUI X Data Grid](https://mui.com/x/react-data-grid/)
- [Recharts Documentation](https://recharts.org/)
- [Admin Dashboard Examples](https://mui.com/store/collections/admin-dashboards/)

---

## <a name="appendix"></a>📚 ภาคผนวก

### <a name="resources"></a>แหล่งเรียนรู้เพิ่มเติม

#### เอกสารอย่างเป็นทางการ
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [MUI Documentation](https://mui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

#### วิดีโอและคอร์สออนไลน์
- [Next.js Tutorial - YouTube](https://www.youtube.com/c/vercel)
- [React Course - freeCodeCamp](https://www.freecodecamp.org/learn)
- [Tailwind CSS Crash Course](https://www.youtube.com/watch?v=UBOj6rqRUME)

#### เครื่องมือและไลบรารีที่แนะนำ
- [React Hook Form](https://react-hook-form.com/) - จัดการ Forms
- [Zod](https://zod.dev/) - Validation
- [Axios](https://axios-http.com/) - HTTP Client
- [date-fns](https://date-fns.org/) - จัดการวันที่
- [React Query](https://tanstack.com/query/latest) - Data Fetching
- [Zustand](https://zustand-demo.pmnd.rs/) - State Management

#### ตัวอย่างโค้ดและ Templates
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)
- [MUI Templates](https://mui.com/material-ui/getting-started/templates/)
- [Tailwind UI Components](https://tailwindui.com/components)

#### ชุมชนและฟอรัม
- [Next.js Discord](https://discord.gg/nextjs)
- [React Community](https://react.dev/community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)
- [Dev.to](https://dev.to/t/nextjs)

---

### <a name="best-practices"></a>Best Practices

#### 1. โครงสร้างโค้ด
- ✅ แยก Components ตาม Features
- ✅ ใช้ TypeScript เพื่อ Type Safety
- ✅ สร้าง Custom Hooks สำหรับ Logic ที่ใช้ซ้ำ
- ✅ แยก Business Logic ออกจาก UI Components

#### 2. Performance
- ✅ ใช้ Next.js Image Component
- ✅ ใช้ Dynamic Import สำหรับ Components ขนาดใหญ่
- ✅ Implement Proper Caching Strategy
- ✅ Optimize Bundle Size

#### 3. Security
- ✅ Validate Input ทั้งฝั่ง Client และ Server
- ✅ ใช้ Environment Variables สำหรับข้อมูลลับ
- ✅ Implement Authentication และ Authorization
- ✅ Sanitize User Input

#### 4. Code Quality
- ✅ ใช้ ESLint และ Prettier
- ✅ เขียน Unit Tests
- ✅ Code Review
- ✅ Documentation

#### 5. UX/UI
- ✅ Mobile-First Design
- ✅ Loading States และ Error Handling
- ✅ Accessible Components (A11y)
- ✅ Consistent Design System

---

### <a name="faq"></a>FAQ

#### Q: ควรใช้ MUI หรือ Tailwind?
**A:** ใช้ทั้งคู่ร่วมกัน! MUI ให้ Components สำเร็จรูป ส่วน Tailwind ช่วยในการ Customize และ Utility Styles

#### Q: Next.js 13+ ต่างจาก Next.js 12 อย่างไร?
**A:** Next.js 13+ ใช้ App Router แทน Pages Router, รองรับ Server Components, และมี Performance ดีขึ้น

#### Q: จะ Deploy ที่ไหนดี?
**A:** แนะนำ Vercel (ผู้สร้าง Next.js) สำหรับการ Deploy ที่ง่ายที่สุด หรือใช้ Docker + Cloud Provider

#### Q: จะจัดการ State อย่างไร?
**A:** 
- State เล็กๆ: `useState`
- State ที่ต้องแชร์: `useContext` หรือ Zustand
- State ซับซ้อน: Redux Toolkit

#### Q: ต้องรู้ TypeScript ไหม?
**A:** แนะนำให้รู้ เพราะช่วยลด Bug และทำให้โค้ดอ่านง่ายขึ้น แต่สามารถใช้ JavaScript ธรรมดาได้

#### Q: จะเรียนรู้เพิ่มได้จากไหน?
**A:** ดูจากลิงค์ใน[แหล่งเรียนรู้เพิ่มเติม](#resources)

---

## 🎯 สรุป

คู่มือนี้ครอบคลุมทุกสิ่งที่จำเป็นในการเริ่มต้นและพัฒนาเว็บแอปพลิเคชันด้วย Next.js, MUI, และ Tailwind CSS ตั้งแต่:

1. ✅ **พื้นฐาน** - การติดตั้ง, โครงสร้างโปรเจค, Components
2. ✅ **ระดับกลาง** - Forms, API, State Management
3. ✅ **ระดับสูง** - Authentication, Optimization, SEO
4. ✅ **โปรเจคจริง** - POS, E-commerce, Admin Panel

### เริ่มต้นได้เลยวันนี้!

```bash
npx create-next-app@latest my-awesome-app
cd my-awesome-app
npm install @mui/material @emotion/react @emotion/styled
npm run dev
```

---

## 📞 ติดต่อและสนับสนุน

- **GitHub:** [somkheartk/nextjs-mui-tailwincss-book](https://github.com/somkheartk/nextjs-mui-tailwincss-book)
- **Issues:** หากพบปัญหาหรือมีคำถาม กรุณาเปิด Issue บน GitHub

---

## 📝 License

MIT License - ใช้งานและแชร์ได้อย่างอิสระ

---

**Happy Coding! 🚀**

*เอกสารนี้จัดทำขึ้นเพื่อเป็นแนวทางในการเรียนรู้และพัฒนาเว็บแอปพลิเคชันด้วย Next.js, MUI และ Tailwind CSS*