import Navigation from '@/components/layout/Navigation';
import LoginForm from '@/components/common/LoginForm';
import { Container, Typography } from '@mui/material';

export default function FormExamplePage() {
  return (
    <>
      <Navigation />
      <Container maxWidth="lg" className="py-8">
        <Typography variant="h3" component="h1" className="font-bold mb-6 text-center">
          ตัวอย่างการใช้ Form
        </Typography>
        <Typography paragraph className="text-center text-gray-600 mb-8">
          Form นี้ใช้ React Hook Form และ Zod สำหรับ validation
        </Typography>
        <LoginForm />
      </Container>
    </>
  );
}
