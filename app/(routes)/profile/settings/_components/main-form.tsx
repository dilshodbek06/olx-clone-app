"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useProfileStore from "@/store/profile-store";
import { User } from "@prisma/client";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface MainFormProps {
  user: User;
}

const MainForm = ({ user }: MainFormProps) => {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { image } = useProfileStore();

  const handleUpdate = async () => {
    if (email === "" || password === "" || password === "" || image === "") {
      toast.error("Please fill all the fields.");
      return;
    }
    try {
      const obj = {
        name,
        email,
        password,
        profileImage: image,
      };
      setLoading(true);

      await axios.post("/api/user/profile", obj);
      toast.success("Updated success.");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 py-2">
      <div className="mt-1">
        <label htmlFor="name" className="text-white">
          Change name *
        </label>
        <Input
          className="rounded-sm py-2 text-xl text-white mt-1 placeholder:text-lg max-w-[30rem]"
          id="name"
          placeholder="e.g John..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="email" className="text-white">
          Change email *
        </label>
        <Input
          className="rounded-sm py-2 text-xl text-white mt-1 placeholder:text-lg max-w-[30rem]"
          id="email"
          placeholder="e.g john@gmail.com..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="password" className="text-white">
          Change password *
        </label>
        <Input
          className="rounded-sm py-2 text-xl text-white mt-1 placeholder:text-lg max-w-[30rem]"
          id="password"
          placeholder="*******"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleUpdate} className="w-full md:w-auto mt-3">
          {loading && <LoaderCircle className="size-5 mr-2 animate-spin" />}{" "}
          {loading ? "Loading..." : "Update"}
        </Button>
      </div>
    </div>
  );
};

export default MainForm;
