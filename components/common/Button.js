import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const Button = ({ loading, label = "Submit", onClick }) => {
  return (
    <div className="py-2">
      <button
        type="submit"
        className="w-11/12 rounded-lg hover:scale-95 transition-transform h-12 text-xl text-white bg-amber-500 text-center font-semibold"
        onClick={onClick}
        disabled={loading}
      >
        {loading ? <LoadingOutlined /> : label}
      </button>
    </div>
  );
};

export default Button;
