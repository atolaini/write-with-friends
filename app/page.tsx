import 'server-only';

import Image from 'next/image';
import FormSection from '@/components/forms/homePageOptions/FormSection';
import { Form } from 'react-hook-form';

const Homepage = () => {
  return (
    <section className='h-[100vh] flex justify-center items-start'>
      <div className='flex flex-col-reverse items-center gap-8 md:flex-row'>
        <figure className='flex-1'>
          <Image
            src='/images/home-hero.svg'
            alt='Illustration of someone writing'
            objectFit='contain'
            width={500}
            height={500}
          />
        </figure>
        <div className='flex-1'>
          <h1>
            Write With <br />
            <span>Friends</span>
          </h1>
          <div>
            <FormSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
