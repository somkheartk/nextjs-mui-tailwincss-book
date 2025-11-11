import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image?: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      {image && (
        <div className="relative w-full h-48 mb-4">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover rounded-md" 
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
