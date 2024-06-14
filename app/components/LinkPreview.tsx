import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { FaCircleArrowRight } from 'react-icons/fa6';

interface Props {
  id: number;
  name: string;
  imgUrl: StaticImageData;
  description: string;
  url: string;
  icons: StaticImageData[];
}

const LinkPreview = ({ name, imgUrl, description, url, icons }: Props) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Image
          src={imgUrl}
          alt={name}
          width={230}
          height={170}
          className='shadow-lg cursor-pointer w-[230px] h-[170px]'
        />
      </HoverCardTrigger>
      <HoverCardContent className='max-w-[230px] h-auto'>
        <p>{name}</p>
        <p className='text-sm text-zinc-700'>{description}</p>
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
