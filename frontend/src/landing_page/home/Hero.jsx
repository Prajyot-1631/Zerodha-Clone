function Hero() {
  return (
    <>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <div className="col">
            <img
              src="media/images/homeHero.png"
              alt="Hero Image"
              className="mb-5"
            ></img>
            <h1 className="mt-5">Invest in everything</h1>
            <p>
              Online platform to invest in stocks, derivatives, mutualfunds, and
              more
            </p>
            <button className="p-3 btn btn-primary fs-5 mb-5">
              Signup now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
