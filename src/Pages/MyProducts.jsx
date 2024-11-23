
const MyProducts = () => {
    return (
        <div>
            <section className=" p-5">
        <div className="card bg-base-100 shadow-xl border h-[400px]">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co.com/n1swRQW/Eksheba-Products.webp" alt="photo" className="rounded-xl h-32 " />
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
                <i className="fa-solid fa-circle-info"></i> Update
                </button>
                <button className="btn btn-outline btn-warning">
                <i className="fa-regular fa-circle-xmark"></i> Delete
                </button>
              {/* </NavLink> */}
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default MyProducts;