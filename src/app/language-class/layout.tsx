import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Japanese Language Classes in Nepal | YMS',
  description: 'Master Japanese with native-level instructors. We offer N5 to N3 classes, JLPT/NAT preparation, and JFT Basic class in Nepal. Enroll in YMS language classes today.',
  keywords: ['Japanese Language Classes in Nepal', 'Japanese language class Nepal', 'JLPT class Kathmandu', 'JFT Basic class Nepal', 'JLPT', 'NAT', 'YMS Education'],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
