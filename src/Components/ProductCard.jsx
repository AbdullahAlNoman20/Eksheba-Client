/* eslint-disable react/prop-types */

const ProductCard = ({product}) => {

  const {name,image_url} = product;

    return (
        <div>
            <section className=" p-5">
        <div className="card bg-base-100 shadow-xl border h-[400px]">
          <figure className="px-10 pt-10">
            <img src={image_url} alt="photo" className="rounded-xl lg:h-60 " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            {/* <h2 className="card-title">{designation}</h2> */}
            {/* <p>{email}</p> */}
            {/* <p>skills: {skills}</p> */}
            {/* <p>Salary: ${salary}</p> */}
            <div className="card-actions">
              {/* <NavLink to={`/developers_details/${developer.id}`}> */}
                <button className="btn btn-outline btn-warning">
                <i className="fa-solid fa-circle-info"></i> View Details
                </button>
              {/* </NavLink> */}
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default ProductCard;