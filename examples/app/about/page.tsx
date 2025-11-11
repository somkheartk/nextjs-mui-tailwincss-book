import Navigation from '@/components/layout/Navigation';
import { Container, Typography, Paper } from '@mui/material';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <Container maxWidth="lg" className="py-8">
        <Paper className="p-8">
          <Typography variant="h3" component="h1" className="font-bold mb-6">
            เกี่ยวกับโปรเจคนี้
          </Typography>
          
          <Typography variant="h5" className="font-bold mb-3 mt-6">
            เป้าหมาย
          </Typography>
          <Typography paragraph className="text-gray-700">
            โปรเจคนี้เป็นตัวอย่างการใช้งาน Next.js, Material-UI และ Tailwind CSS ร่วมกัน
            เพื่อแสดงให้เห็นถึงความสามารถและวิธีการผสมผสานเทคโนโลยีทั้ง 3 อย่างให้ทำงานร่วมกันได้อย่างมีประสิทธิภาพ
          </Typography>

          <Typography variant="h5" className="font-bold mb-3 mt-6">
            เทคโนโลยีที่ใช้
          </Typography>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">Next.js:</span>
              <span className="text-gray-700">Framework สำหรับ React ที่รองรับ SSR และ SSG</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">Material-UI:</span>
              <span className="text-gray-700">Component Library ที่ใช้ Material Design</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">Tailwind CSS:</span>
              <span className="text-gray-700">Utility-first CSS Framework</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">TypeScript:</span>
              <span className="text-gray-700">Superset ของ JavaScript ที่เพิ่ม Type System</span>
            </li>
          </ul>

          <Typography variant="h5" className="font-bold mb-3 mt-6">
            ตัวอย่างที่รวมอยู่
          </Typography>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Components พื้นฐาน (Button, Card)</li>
            <li>Navigation และ Routing</li>
            <li>Form validation ด้วย React Hook Form และ Zod</li>
            <li>API Routes</li>
            <li>Dynamic Routes</li>
            <li>การใช้ MUI Theme</li>
            <li>การผสม Tailwind CSS กับ MUI</li>
          </ul>
        </Paper>
      </Container>
    </>
  );
}
