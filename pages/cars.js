import { login } from "@/Api/loginfunction";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserContext } from "../context";
import CarForm from "@/components/form/CarForm";
const Cars = () => {
  const [model, setModel] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      router.push("/login");
    }
  }, []);
  return (
    <div className="border flex items-center justify-center flex-col h-screen ">
      <div>
        <h1 className="text-lg md:text-5xl font-serif py-3 text-amber-600">
          Enter Your Cars Details
        </h1>
      </div>

      <div>
        <div className="border flex gap-3 border-dashed rounded-md shadow-2xl border-amber-500 px-10 py-2 ">
          <CarForm
            setImage={setImage}
            loading={loading}
            carModel={model}
            setModel={setModel}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            price={price}
            setPrice={setPrice}
            image={image}
          />
        </div>
      </div>
    </div>
  );
};
export default Cars;
