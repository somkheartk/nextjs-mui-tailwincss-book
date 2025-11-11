import { NextResponse } from 'next/server';

// Mock data
const products = [
  {
    id: 1,
    name: 'MacBook Pro 14"',
    price: 65990,
    description: 'Notebook สำหรับมืออาชีพ ประสิทธิภาพสูง',
  },
  {
    id: 2,
    name: 'iPad Air',
    price: 24900,
    description: 'แท็บเล็ตขนาด 10.9 นิ้ว เหมาะสำหรับทำงานและความบันเทิง',
  },
  {
    id: 3,
    name: 'iPhone 15 Pro',
    price: 41900,
    description: 'สมาร์ทโฟนระดับ Pro พร้อมชิป A17 Pro',
  },
  {
    id: 4,
    name: 'AirPods Pro',
    price: 9990,
    description: 'หูฟังไร้สาย พร้อมระบบตัดเสียงรบกวน',
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    price: 14900,
    description: 'นาฬิกาอัจฉริยะ ติดตามสุขภาพและฟิตเนส',
  },
  {
    id: 6,
    name: 'Magic Keyboard',
    price: 4590,
    description: 'คีย์บอร์ดไร้สาย ออกแบบเพื่อ Mac',
  },
];

export async function GET() {
  // จำลองการดึงข้อมูลจากฐานข้อมูล
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  // จำลองการบันทึกข้อมูล
  const newProduct = {
    id: products.length + 1,
    ...body,
  };
  
  return NextResponse.json({ 
    success: true, 
    message: 'Product created successfully',
    data: newProduct 
  });
}
