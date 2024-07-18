import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { FaCircleArrowRight } from 'react-icons/fa6';
import ProgressBadge from './ProgressBadge';
import { url } from 'inspector';
import { icons } from 'lucide-react';
import { Project } from 'next/dist/build/swc';
import style from 'styled-jsx/style';

interface Props {
  id: number;
  name: string;
  imgUrl: StaticImageData;
  description: string;
  url: string;
  icons: StaticImageData[];
  released: string;
  status: string;
}

const LinkPreview = ({
  name,
  imgUrl,
  description,
  url,
  icons,
  released,
  status,
}: Props) => {
  // Function to check if the date is within the last 30 days
  const isRecent = (dateString: string): boolean => {
    const now = new Date();
    const date = new Date(dateString);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(now.getDate() - 30);

    return date >= thirtyDaysAgo;
  };

  return (
    <HoverCard>
      <HoverCardTrigger>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {status === 'working' ? <ProgressBadge label='In Progress' /> : null}
          {isRecent(released) && status !== 'working' ? (
            <ProgressBadge label='New' />
          ) : null}
          <Image
            src={imgUrl}
            alt={name}
            width={230}
            height={170}
            style={{
              width: '100%',
              height: 'auto',
            }}
            className='shadow-lg w-[230px] h-[170px]'
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className='max-w-[230px] h-auto'>
        <div>{name}</div>
        <div className='text-sm text-zinc-700'>{description}</div>
        <div className='flex flex-row my-2'>
          {icons.map((icon, index) => (
            <Image key={index} src={icon} alt='Icon' width={40} height={40} />
          ))}
        </div>
        <Link href={url} target='_Blank' className='flex justify-center mt-6'>
          <Button>
            リンク <FaCircleArrowRight className='ml-2' />
          </Button>
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
};

export default LinkPreview;
