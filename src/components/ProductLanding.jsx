import React, { useRef, useEffect } from "react";

export const ProductLanding = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleCapture = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const product = productRef.current.value;

    alert(
      `Lead Captured:

Name: ${name}
Email: ${email}
Product: ${product}`,
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-slate-200 p-6 rounded-lg">
      <h1 className="text-xl font-bold mb-4">Product Interest</h1>

      <div className="flex flex-col gap-4">
        <input
          ref={nameRef}
          type="text"
          placeholder="Full Name"
          className="p-2 rounded"
        />

        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="p-2 rounded"
        />

        <select ref={productRef} className="p-2 rounded">
          <option>Standard</option>
          <option>Pro</option>
          <option>Ultra</option>
        </select>

        <button
          onClick={handleCapture}
          className="bg-blue-600 text-white p-2 rounded"
        >
          Submit Interest
        </button>
      </div>
    </div>
  );
};
