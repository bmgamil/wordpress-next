import dynamic from 'next/dynamic';
import type Lucide from 'lucide-react';
import { LucideProps } from 'lucide-react';

export type IconName = keyof typeof Lucide.icons;

type Props = LucideProps & {
  name: IconName;
};

const Icon = (props: Props) => {
  const { name, strokeWidth = 1.2 } = props;

  const LucideIcon = dynamic(() =>
    import('lucide-react').then((mode) => mode[name])
  );

  return <LucideIcon strokeWidth={strokeWidth} {...props} />;
};

export default Icon;
