import { createCar } from "@/Api/carsfunction";
import React from "react";
import Button from "../common/Button";
import FileInput from "../common/fileInput";

const CarForm = ({
  loading,
  carModel,
  setModel,
  phoneNumber,
  setPhoneNumber,
  price,
  setPrice,
  image,
  setImage,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Auth = JSON.parse(localStorage.getItem("auth"));
    const user = Auth._id;
    try {
      await createCar({
        user,
        carModel,
        price,
        phoneNumber,
        image,
      }).then((res) => {
        console.log(res);
      });

      // Handle a successful response
      // Reset the form values
      setModel("");
      setPrice("");
      setPhoneNumber("");
      setImage([]);
      console.log(data); // Handle the response data if needed
    } catch (err) {
      console.error(err); // Handle errors if needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full flex-col justify-center gap-2 sm:w-[25.5rem]  p-1">
        <label className="sm:text-lg whitespace-nowrap sm:font-medium text-amber-600">
          Car Model
        </label>
        <input
          type="text"
          value={carModel}
          onChange={(e) => setModel(e.target.value)}
          minLength="3"
          required
          className="p-2 w-full focus:outline-none focus:ring-2 border border-amber-400 ring-amber-500 rounded "
        />
      </div>
      <div className="flex w-full flex-col justify-center items-start gap-2  p-1">
        <label className="sm:text-lg whitespace-nowrap sm:font-medium text-amber-600">
          Price
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="p-2 w-full focus:outline-none focus:ring-2 border border-amber-400 ring-amber-500 rounded "
        />
      </div>
      <div className="flex w-full flex-col justify-center items-start gap-2  p-1">
        <label className="sm:text-lg sm:font-medium whitespace-nowrap text-amber-600">
          Phone Number
        </label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          minLength="11"
          maxLength="11"
          required
          className="p-2 w-full focus:outline-none focus:ring-2 border border-amber-400 ring-amber-500 rounded "
        />
      </div>

      <div className="flex w-full flex-col justify-center items-start gap-2  p-1">
        <label className="sm:text-lg sm:font-medium text-amber-600">
          Upload Pictures
        </label>
        <FileInput image={image} setImage={setImage} />
      </div>
      <div className="text-center">
        <Button loading={loading} label="Submit" />
      </div>
    </form>
  );
};

export default CarForm;
