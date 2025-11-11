'use client';
import { useState, useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import { Container, Typography, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <Container className="py-8 text-center">
          <CircularProgress />
        </Container>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <Container maxWidth="lg" className="py-8">
        <Typography variant="h3" component="h1" className="font-bold mb-6">
          รายการสินค้า
        </Typography>
        <Typography paragraph className="text-gray-600 mb-6">
          ตัวอย่างการดึงข้อมูลจาก API Route และแสดงผลด้วย MUI Cards
        </Typography>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="h-full hover:shadow-xl transition-shadow">
              <CardMedia
                component="div"
                className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"
              />
              <CardContent>
                <Typography variant="h6" className="font-bold mb-2">
                  {product.name}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-3">
                  {product.description}
                </Typography>
                <Typography variant="h6" className="text-blue-600 font-bold">
                  {product.price.toLocaleString('th-TH')} ฿
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
