'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';

const schema = z.object({
  email: z.string().email('อีเมลไม่ถูกต้อง'),
  password: z.string().min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'),
  name: z.string().min(2, 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร'),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const [submitted, setSubmitted] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">ฟอร์มตัวอย่าง</h2>
      
      {submitted && (
        <Alert severity="success" className="mb-4">
          ส่งข้อมูลสำเร็จ!
        </Alert>
      )}

      <TextField
        {...register('name')}
        label="ชื่อ"
        fullWidth
        error={!!errors.name}
        helperText={errors.name?.message}
        className="mb-4"
        margin="normal"
      />

      <TextField
        {...register('email')}
        label="อีเมล"
        type="email"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
        className="mb-4"
        margin="normal"
      />

      <TextField
        {...register('password')}
        label="รหัสผ่าน"
        type="password"
        fullWidth
        error={!!errors.password}
        helperText={errors.password?.message}
        className="mb-4"
        margin="normal"
      />

      <Button 
        type="submit" 
        variant="contained" 
        fullWidth
        className="mt-4 bg-blue-600 hover:bg-blue-700"
      >
        ส่งข้อมูล
      </Button>
    </form>
  );
}
