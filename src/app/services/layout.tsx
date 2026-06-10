import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Japan Student Visa Documentation Support | YMS',
  description: 'Expert Japan student visa and COE documentation support from YMS Education. We guide you through the 9-step journey, from consultation to your arrival in Japan.',
  keywords: ['Japan Student Visa Documentation Support', 'COE documentation Nepal', 'Japan student visa Nepal', 'student visa', 'YMS Education'],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
