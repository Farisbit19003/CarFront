import axios from "axios";

export const createCar = async (user, carModel, price, phoneNumber, image) => {
  try {
    const { data } = await axios.post(
      `/createCar`,
      user,
      carModel,
      price,
      phoneNumber,
      image
    );
    return data;
  } catch (error) {
    throw error;
  }
};
