function Hero() {
  return (
    <>
      <section className="container-fluid " id="supportHero">
        <div className="p-4 " id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="">Track Tickets</a>
        </div>
        <div className="row p-3">
          <div className="col-6 p-3 ">
            <h1 className="fs-5">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              className="mb-2"
              placeholder="Eg: how do i activate F&O, why is my order gettting rejected..."
            ></input>
            <br />
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <br />
            <a href="">Kite user manual</a>
          </div>
          <div className="col-6 p-3">
            <h1 className="fs-5">Featured</h1>
            <ol>
              <li>
                <a href="">
                  Trading holiday on account of Maha Shivaratri on February 26,
                  2025
                </a>
              </li>
              <li>
                <a href="">Offer for sale (OFS) - February 2025</a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
