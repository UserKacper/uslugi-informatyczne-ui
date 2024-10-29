import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitch, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <footer>
      <div className="w-full h-[70px] md:h-[60px] bg-[#AD93FF] shadow-xl">
        <div className="flex h-full pl-12 md:justify-between justify-center gap-y-3 max-md:flex-col">
          <span className="self-center">
            <p className="text-white font-semibold text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit:</p>
          </span>
          <span className="self-center pr-12 flex gap-5">
            <FontAwesomeIcon icon={faFacebook} className='text-white' />
            <FontAwesomeIcon icon={faInstagram} className='text-white' />
            <FontAwesomeIcon icon={faXTwitter} className='text-white' />
            <FontAwesomeIcon icon={faTiktok} className='text-white' />
            <FontAwesomeIcon icon={faYoutube} className='text-white' />
            <FontAwesomeIcon icon={faLinkedin} className='text-white' />
            <FontAwesomeIcon icon={faTwitch} className='text-white' />
          </span>
        </div>
      </div>
      <div className="w-full bg-[#434455]">
        <div className='flex w-full text-white font-semibold md:justify-between max-lg:flex-col'>


          <section className='w-full lg:p-12 text-center'>
            <h1>Company</h1>
            <div className='font-light my-2 w-full pl-3 lg:text-start'>Lorem, ipsum dolor sit amet coinsectetur adipisicing elit.
              <br />Animi deleniti provident repellendus explicabo.</div>
          </section>


          <section className='w-full lg:p-12 text-center'>
            <h1>Company</h1>
            <div className='pl-3 my-2 font-thin max-lg:gap-2'>
              <p className=''>Lorem ipsum</p>
              <p className=''>Lorem ipsum</p>
              <p className=''>Lorem ipsum</p>
              <p className=''>Lorem ipsum</p>
            </div>
          </section>


          <section className='w-full lg:p-12 text-center'>
            <h1>Linki</h1>
            <div className='flex flex-col pl-3 my-2 font-thin max-lg:gap-2 w-full'>
              <a href="/">lorem ipsum</a>
              <a href="/">lorem ipsum</a>
              <a href="/">lorem ipsum</a>
              <a href="/">lorem ipsum</a>
            </div>
          </section>


          <section className='w-full lg:p-12 text-center'>
            <h1>Linki</h1>
            <div className='flex flex-col pl-3 my-2 font-thin max-lg:gap-2'>
              <a href="/">lorem ipsum</a>
              <a href="/">lorem ipsum</a>
              <a href="/">lorem ipsum</a>
              <a href="/">lorem ipsum</a>
            </div>
          </section>


        </div>
      </div>
      <div className="w-full h-[50px] bg-[#2d2e3d]">
      </div>
    </footer >
  );
};

export default Footer;