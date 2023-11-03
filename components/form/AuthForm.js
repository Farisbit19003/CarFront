import React from "react";
import Button from "../common/Button";

export const AuthForm = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full flex-col justify-center items-start gap-2  p-1">
        <label className="sm:text-lg sm:font-medium text-amber-600">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="p-2 w-full focus:outline-none focus:ring-2 border border-amber-400 ring-amber-500 rounded "
          placeholder="Please Enter your Email"
        />
      </div>

      <div className="flex w-full flex-col justify-center items-start gap-2  p-1">
        <label className="sm:text-lg sm:font-medium text-amber-600">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="p-2 w-full focus:outline-none focus:ring-2 border border-amber-400 ring-amber-500 rounded "
          placeholder="Please Enter your Password"
        />
      </div>
      <Button loading={loading} label="Submit" />
    </form>
  );
};
