import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import Image, { StaticImageData } from 'next/image';
import ProgressBadge from './ProgressBadge';
import { FaCircleArrowRight } from 'react-icons/fa6';

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

const DrawerPreview = ({
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
    <Drawer>
      <DrawerTrigger>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {status === 'working' ? <ProgressBadge label='In Progress' /> : null}
          {isRecent(released) && status !== 'working' ? (
            <ProgressBadge label='New' />
          ) : null}
          <Image src={imgUrl} alt={name} className='shadow-lg' />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{name}</DrawerTitle>
          <DrawerDescription>
            <div className='text-sm text-zinc-700 my-2'>{description}</div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <div className='flex flex-row my-2 justify-center'>
            {icons.map((icon, index) => (
              <Image key={index} src={icon} alt='Icon' width={40} height={40} />
            ))}
          </div>
          <Link href={url} target='_Blank' className='flex justify-center mt-6'>
            <Button>
              リンク <FaCircleArrowRight className='ml-2' />
            </Button>
          </Link>
          <DrawerClose>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerPreview;
