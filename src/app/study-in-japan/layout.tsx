import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study in Japan from Nepal | YMS Education',
  description: 'Unlock world-class education and immerse yourself in Japanese culture. Get comprehensive guidance on studying in Japan from Nepal with YMS Education.',
  keywords: ['Study in Japan from Nepal', 'Japan education consultancy Nepal', 'Japan student visa Nepal', 'study in japan', 'YMS Education'],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
