
function SecWelcomeContent({ img }) {
  return (
    <div className="welcome-content">
      <div className="promo-section"></div>
      <h1 className="lg:!mt-0 md:!mt-0 !mt-10 !text-zinc-100">Unlock the potential of your BTC with Archmage' HODL+.</h1>
      <h4 className="text-white lg:text-2xl md:text-xl text-lg mt-2">
        Are you a committed HODLer? Earn up to 13% passive APY on your BTC.
      </h4>
      <p className="lg:!text-lg md:!text-lg !text-sm !mt-5">
        Are you ready to maximize your gains? "+" members can leverage
        interest-free strategies for potential gains over 100%.
      </p>
      <div className="dream-btn-group">
        <a href="#" className="text-white mr-4 lg:!px-4 lg:!py-3 md:!px-4 md:!py-3 !px-4 !py-2 !bg-[#c4043c] !border-[#c4043c] lg:rounded-md md:rounded-md rounded-sm">
          Learn More
        </a>
        <a href="#" className="text-white lg:!px-4 lg:!py-3 md:!px-4 md:!py-3 !px-3 !py-2 !bg-[#c4043c] !border-[#c4043c] lg:rounded-md md:rounded-md rounded-sm">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default SecWelcomeContent;
