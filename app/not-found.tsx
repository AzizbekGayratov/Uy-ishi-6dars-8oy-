"use client";
import React, { useEffect, useState } from "react";
// useRouter
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  const [count, setCount] = useState(10);
  useEffect(() => {
    setTimeout(() => setCount(count - 1), 1000);
  }, [count]);

  if (count === 0) {
    router.push("/", { scroll: false });
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">404 - Topilmadi</h1>
      <p
        className={`mt-[20px] py-[10px] px-[24px] rounded-xl text-[30px] font-semibold text-[#f2f2f2] ${
          count <= 3 ? "bg-error" : "bg-warning"
        }`}
      >
        {count} soniyada ortga qaytiladi
      </p>
    </main>
  );
};

export default NotFound;
