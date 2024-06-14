'use client';
import { logo } from '@/app/assets/images';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { hamburger } from '../assets/Icons';
import Profile from './Profile';
import Technologies from './Technologies';

const Header = () => {
  return (
    <div className='mb-8 bg-black text-white  flex justify-between items-center px-4 py-4'>
      <div className='flex flex-row items-center'>
        <Image src={logo} alt='Logo' width={50} height={50} />
        <div>
          <span className='font-bold'>A</span>zulaFire Designs
        </div>
      </div>

      <div className='lg:hidden'>
        <Sheet>
          <SheetTrigger>
            <Image src={hamburger} alt='Menu' width={25} height={25} />
          </SheetTrigger>
          <SheetContent side={'left'} className='bg-slate-400'>
            <SheetHeader>
              <SheetDescription>
                <Profile otherClasses='bg-slate-400' />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
export default Header;
