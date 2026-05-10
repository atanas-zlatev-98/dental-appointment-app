import Link from 'next/link';
import './page.style.css'
import toothImage from '../../public/images/bg/tooth.png';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="top-bg-image flex flex-col h-screen w-full justify-center items-center gap-4 ">

      <div className="max-w-[1440px] w-full flex items-center justify-center md:justify-start med-device">
        <div className='flex flex-col gap-2 w-4xl justify-center items-center md:items-start text-center md:text-start'>
          <p className='text-start ps-1 text-blue-950'>Your Family&apos;s Dental Care</p>
          <h1 className="font-size-h1 font-bold text-blue-950">Exceptional <span className='text-blue-400'>Dental</span> Care</h1>
          <div className='flex mt-5'>
            <Link href='/' className='bg-blue-400 rounded p-2 hover:bg-blue-900'>Book Appointment</Link>
          </div>
        </div>

        <div className='w-xl hidden md:flex ml-1'>
          <Image src={toothImage} alt="Tooth" />
        </div>

      </div>

    </div>
  );
}
