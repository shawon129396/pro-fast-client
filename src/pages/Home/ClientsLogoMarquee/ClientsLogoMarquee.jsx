import React from 'react';
import Marquee from 'react-fast-marquee';
import logo1 from '../../../assets/brands/amazon.png'
import logo2 from '../../../assets/brands/amazon_vector.png'
import logo3 from '../../../assets/brands/casio.png'
import logo4 from '../../../assets/brands/moonstar.png'
import logo5 from '../../../assets/brands/randstad.png'
import logo6 from '../../../assets/brands/start-people 1.png'
import logo7 from '../../../assets/brands/start.png'

const ClientsLogoMarquee = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
    return (
        <div>
            <section className="py-16 bg-base-100">
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-primary">Clients</span>
        </h2>
        <p className="text-base-content/70 mt-2 max-w-2xl mx-auto">
          Trusted by leading businesses across Bangladesh.
        </p>
      </div>

      <Marquee
        speed={40}
        gradient={false}
        pauseOnHover={true}
        className="py-4"
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-10 flex items-center">
            <img
              src={logo}
              alt="client logo"
              className="
                opacity-70 hover:opacity-100 transition 
                object-contain
                h-12 sm:h-16 md:h-20 lg:h-24   /* ⭐ fully responsive sizes */
              "
            />
          </div>
        ))}
      </Marquee>
    </section>
        </div>
    );
};

export default ClientsLogoMarquee;