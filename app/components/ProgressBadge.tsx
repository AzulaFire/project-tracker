import { Badge } from '@/components/ui/badge';
import { BsStars } from 'react-icons/bs';
import { RiProgress7Line } from 'react-icons/ri';

interface Props {
  label: string;
}

const ProgressBadge = ({ label }: Props) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
      }}
    >
      {label === 'In Progress' && (
        <Badge className='bg-cyan-500 drop-shadow shadow'>
          <RiProgress7Line className='mr-1' />
          {label}
        </Badge>
      )}
      {label === 'New' && (
        <Badge className='bg-lime-500 drop-shadow shadow'>
          <BsStars className='mr-1' />
          {label}
        </Badge>
      )}
    </div>
  );
};

export default ProgressBadge;
