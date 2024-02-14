import image from "../assets/003.jpg";

const WhyChooseUs2 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row my-10">
        <div className="mt-6 text-white bg-white w-1/2 sm:w-full xs:w-full">
          <div className="grid w-full h-full place-items-center rounded-lg p-6">
            <img
              className="object-cover object-center w-full h-full"
              src={image}
              alt="nature image"
            />
          </div>
        </div>
        <div className="mt-6 text-white bg-cyan-400 w-1/2 sm:w-full xs:w-full  flex items-center justify-center">
          <div className="p-6 w-full text-center justify-center place-items-center my-auto">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
              WHY CHOOSE US
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              We the Go Holidays are the Leading Domestic and International tour
              operator and organizers. We book your Train Tickets, Flight
              Tickets(Domestic & International), Bus Tickets, NON-AC and Ac
              SLEEPER & Semi-Sleeper, Volvo Multi Axle and Travel Cabs enabling
              your journey easier and comfortable.
            </p>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              We are Managed by a set of professionals, supported by perfectly
              maintained fleet, quality drivers, well- mannered staff, best
              office infrastructure, round the clock support and that extra urge
              to ensure a hassle-free holiday to make our guests feel
              comfortable and at home while holidaying.
            </p>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              We are specialized in tour packages that include Historical,
              Archaeological & Pilgrim, Preserved Forest & Wildlife, Spectacular
              Mountains & Beautiful Sceneries, Sun, Sand & Sea, Landscapes filed
              with Flaura, Fauna & birds, Adventurous, Ayurveda, Angling, Golf
              etc., as the list goes on. Specialists in tailor-made holidays to
              India, Go Holidays has grown to become one of the leading and most
              respected tour operators in India and abroad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs2;
