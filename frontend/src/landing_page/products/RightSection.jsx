function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row  ">
          <div className="col-6 p-5">
            <h1 className="mt-5">{productName}</h1>
            <p>{productDescription}</p>
            <div>
              <a href={learnMore}>learn more</a>
            </div>
          </div>
          <div className="col-6 ">
            <img src={imageURL}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
