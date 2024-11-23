import { useForm } from "react-hook-form";
import UseAuth from "../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";


const AddProducts = () => {
    const {user} = UseAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        
        const name = data.name
        const image_url = data.image_url
        const product_id = data.product_id
        const category = data.category
        const description = data.description
        const price = parseFloat(data.price)
        const stock_quantity = parseFloat(data.stock_quantity)
        const rating = parseFloat(data.rating)
        const reviews = parseFloat(data.reviews)
        const product = {name,image_url,product_id,category,description,price,reviews,rating,stock_quantity}

        const token = localStorage.getItem("access-token")

        axios.post("http://localhost:5000/addProducts", product,{
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res)=>{
            if(res.data.insertedId){
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Product Added Successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            console.log(res);
        });
      };



    return (
        <div>
            <div className="">
            <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6"
          >
            <div className="space-y-1">
              <label htmlFor="Title" className="block text-sm">
              Product Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Children's Storybook - Bangla Fairy Tales"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500 font-bold ">Required Field</p>
              )}
            </div>
            <div className="space-y-1">
              <label htmlFor="image_url" className="block text-sm">
              Product Photo
              </label>
              <input
                type="text"
                name="image_url"
                placeholder="image_url"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("image_url", { required: true })}
              />
              {errors.image_url && (
                <p className="text-red-500 font-bold ">Required Field</p>
              )}
            </div>
            
            <div className="space-y-1">
              <label htmlFor="id" className="block text-sm">
                Product ID
              </label>
              <input
                type="text"
                name="id"
                placeholder="P005"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("product_id", { required: true })}
              />
              {errors.product_id && (
                <p className="text-red-500 font-bold ">Required Field</p>
              )}
            </div>
            <div className="space-y-1">
              <label htmlFor="id" className="block text-sm">
              Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Books"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("category", { required: true })}
              />
              {errors.category && (
                <p className="text-red-500 font-bold ">Required Field</p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="description" className="block text-sm">
                Description
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <p className="text-red-500 font-bold ">Required Field</p>
              )}
            </div>

            <div className="flex gap-5 justify-between">

            <div className="space-y-1">
              <label htmlFor="Price" className="block text-sm">
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-red-500 font-bold ">Price is Required</p>
              )}
            </div>
            <div className="space-y-1">
              <label htmlFor="stock_quantity" className="block text-sm">
              stock_quantity
              </label>
              <input
                type="number"
                name="stock_quantity"
                placeholder="stock_quantity"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("stock_quantity", { required: true })}
              />
              {errors.stock_quantity && (
                <p className="text-red-500 font-bold ">stock_quantity is Required</p>
              )}
            </div>
            <div className="space-y-1">
              <label htmlFor="rating" className="block text-sm">
              Rating
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("rating", { required: true })}
              />
              {errors.rating && (
                <p className="text-red-500 font-bold ">rating is Required</p>
              )}
            </div><div className="space-y-1">
              <label htmlFor="Price" className="block text-sm">
              Reviews
              </label>
              <input
                type="number"
                name="Reviews "
                placeholder="reviews"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("reviews", { required: false })}
              />
              {errors.reviews && (
                <p className="text-red-500 font-bold ">Price is not Required</p>
              )}
            </div>
            </div>



            
            
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
            >
             <i className="fa fa-plus-circle" aria-hidden="true"></i> Add Product 
            </button>
          </form>
            </div>
        </div>
    );
};

export default AddProducts;