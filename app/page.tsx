import Image from 'next/image';

const Homepage = () => {
  return (
    <section className='h-[100vh] flex justify-center items-start'>
      <div className='flex flex-col-reverse items-center gap-8 md:flex-row'>
        <figure>
          <Image
            src='/images/home-hero.svg'
            alt='Illustration of someone writing'
            objectFit='contain'
            width={500}
            height={500}
          />
        </figure>
        <div>
          <h1>
            Write With <br />
            <span>Friends</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
