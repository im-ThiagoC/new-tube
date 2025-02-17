"use client";

import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    console.log("I am rendering on the client");
  }, []);

  return <div>Hello Feed</div>;
};

export default Page;
