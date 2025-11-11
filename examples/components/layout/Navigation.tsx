'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { label: 'หน้าแรก', href: '/' },
    { label: 'เกี่ยวกับ', href: '/about' },
    { label: 'สินค้า', href: '/products' },
    { label: 'ฟอร์ม', href: '/form-example' },
  ];

  return (
    <AppBar position="static">
      <Toolbar className="bg-blue-600">
        <Typography variant="h6" className="flex-grow font-bold">
          Next.js + MUI + Tailwind
        </Typography>
        <div className="flex gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Button 
                color="inherit"
                className={pathname === item.href ? 'bg-blue-700' : ''}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
