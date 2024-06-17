'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  InstapaperShareButton,
  InstapaperIcon,
  LineShareButton,
  LineIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'next-share';
import profileImage from '@/app/assets/images/john.png';
import { FaCode, FaRegImages, FaCameraRetro } from 'react-icons/fa';

interface Props {
  otherClasses: string;
}

const currentYear = new Date().getFullYear();
const myPage = 'https://projects.azulafire.com/';

const Profile = ({ otherClasses }: Props) => {
  return (
    <>
      <Card className={`border-none shadow-none rounded-none ${otherClasses}`}>
        <CardHeader className='flex items-center'>
          <CardTitle>
            <Avatar className='w-[120px] h-[120px] border-2 border-zinc-500'>
              <AvatarImage src={profileImage.src} />
              <AvatarFallback>AZ</AvatarFallback>
            </Avatar>
          </CardTitle>
          <CardDescription className='text-zinc-900'>
            <span className='text-2xl flex flex-row justify-center font-bold mb-2'>
              ジョン・ホーン
            </span>
            <span className='text-lg flex flex-row items-center'>
              <FaCode className='mr-4 w-5 h-5' />
              フルスタックデベロッパー
            </span>
            <span className='text-lg flex flex-row items-center'>
              <FaRegImages className='mr-4 w-5 h-5' />
              デザイナー
            </span>
            <span className='text-lg flex flex-row items-center'>
              <FaCameraRetro className='mr-4 w-5 h-5' />
              カメラマン
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          年齢: {currentYear - 1978} <br />
          国籍は: アメリカ人 <br />
          言語: 英語、日本語
        </CardContent>
        <CardFooter className='flex flex-row justify-center mx-auto gap-4'>
          <LinkedinShareButton url={myPage}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <TwitterShareButton url={myPage}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LineShareButton url={myPage}>
            <LineIcon size={32} round />
          </LineShareButton>
          <InstapaperShareButton url={myPage}>
            <InstapaperIcon size={32} round />
          </InstapaperShareButton>
          <FacebookShareButton url={myPage}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </CardFooter>
      </Card>
    </>
  );
};
export default Profile;
