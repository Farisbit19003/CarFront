import axios from "axios";
import { toast } from "react-toastify";

export const login = async (email, password, setloading, router) => {
  try {
    await axios.post("/login", { email, password }).then((data) => {
      console.log(data);
      if (data.data.success == false) {
        setloading(false);
        toast.error(data.data.error);
      } else {
        setloading(false);
        const auth = {
          user: data.data.user,
        };
        window.localStorage.setItem("auth", JSON.stringify(auth));
        router.push("/cars");
      }
    });
  } catch (err) {
    console.log("catch", err);
    toast.error(err);
    setloading(false);
  }
};
