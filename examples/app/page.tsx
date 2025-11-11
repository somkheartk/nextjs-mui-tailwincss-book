'use client';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Navigation from '@/components/layout/Navigation';
import { Typography, Container } from '@mui/material';

export default function Home() {
  const cards = [
    {
      title: 'Next.js',
      description: 'React Framework ที่ช่วยให้การพัฒนาเว็บแอปพลิเคชันง่ายและรวดเร็วขึ้น',
    },
    {
      title: 'Material-UI',
      description: 'React Component Library ที่ใช้ Material Design พร้อม Components สำเร็จรูป',
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-First CSS Framework ที่ยืดหยุ่นและรวดเร็วในการพัฒนา',
    },
  ];

  return (
    <>
      <Navigation />
      <Container maxWidth="lg" className="py-8">
        <div className="text-center mb-8">
          <Typography variant="h3" component="h1" className="font-bold mb-4">
            ยินดีต้อนรับสู่ Next.js + MUI + Tailwind CSS
          </Typography>
          <Typography variant="h6" className="text-gray-600 mb-6">
            ตัวอย่างการใช้งานร่วมกันของ 3 เทคโนโลยี
          </Typography>
          <div className="flex gap-4 justify-center">
            <Button 
              label="เริ่มต้นใช้งาน" 
              onClick={() => alert('คลิกปุ่มสำเร็จ!')}
            />
            <Button 
              label="เรียนรู้เพิ่มเติม" 
              variant="outlined"
              onClick={() => window.open('https://github.com/somkheartk/nextjs-mui-tailwincss-book', '_blank')}
            />
          </div>
        </div>

        <Typography variant="h4" className="font-bold mb-6 text-center">
          เทคโนโลยีที่ใช้
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {cards.map((card, index) => (
            <div key={index}>
              <Card {...card} />
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <Typography variant="h5" className="font-bold mb-4">
            คุณสมบัติหลัก
          </Typography>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Server-Side Rendering และ Static Site Generation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Components สำเร็จรูปจาก Material-UI</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Utility Classes จาก Tailwind CSS</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>TypeScript สำหรับ Type Safety</span>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}

