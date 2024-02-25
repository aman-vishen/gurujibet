import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import Image from "next/image";
import Trophy from "public/apna.png";
import Gift from "public/tiger.png";
import sky from "public/sky_header_logo.png";
import ice from "public/icebook.png";
import saf from "public/safron.png";
import Link from "next/link"
import copy from "public/copy.svg";



import { cn } from "utils"
import { Button, buttonVariants } from "./button"
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "./card"

const TestModals = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  function copyText(entryText){
  navigator.clipboard.writeText(entryText);
  }

  return (

      


    <div className="flex justify-center items-center mt-40 ">
      {/* <div className="container m-auto p-4"> */}
  <div className="flex justify-center mx-5 bg-apna">
    <div className="flex flerowx- md:flex-col md:max-w-xl rounded-lg  shadow-lg m-2">
      <Image src={Trophy} width={200} height={200} objectFit="contain" alt=""/>
      <div className="px-6 py-10 flex flex-col justify-start ">
        <h5 className="text-gray-900 text-xl font-medium mb-2">Apna Exchange</h5>
        {/* <h5 className="text-gray-500 text-md font-extralight mb-2">Artist</h5>  */}
        
        
        {/* <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Demo ID <AiFillFire className="text-xl" />
        </button> */}
        <Credenza>
            <CredenzaTrigger asChild>
              <Button className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button">Demo ID<AiFillFire className="text-xl" /></Button>
            </CredenzaTrigger>
            <CredenzaContent>
              <CredenzaHeader>
                <CredenzaTitle>Apna ExChange</CredenzaTitle>
                <CredenzaDescription>
                  Demo Id For Apna Exchange
                </CredenzaDescription>
              </CredenzaHeader>
              <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                <p>
                  {/* This component is built using shadcn/ui&apos;s dialog and
                  drawer component, which is built on top of Vaul. */}
                  <span className="font-semibold">UserName:</span> Betkheloo{" "}
                  <button onClick={() => copyText("Betkheloo")}><Image
                  width={20}
                  height={20}
                src={copy}
                alt="Bet Kheloo"
                
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              /></button>
               
                </p>
                <p>
                  {/* This component is built using shadcn/ui&apos;s dialog and
                  drawer component, which is built on top of Vaul. */}
                  
                  <span className="font-semibold">PassWord:</span> Betkheloo{"  "}
                  <button onClick={() => copyText("Betkheloo")}><Image
                  width={20}
                  height={20}
                src={copy}
                alt="Bet Kheloo"
                
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              /></button>
                </p>
                {/* <p>
                  It shows a{" "}
                  <Link
                    href="https://ui.shadcn.com/docs/components/dialog"
                    target="_blank"
                    className="underline"
                  >
                    dialog modal
                  </Link>{" "}
                  for desktop view and a{" "}
                  <Link
                    href="https://vaul.emilkowal.ski/"
                    target="_blank"
                    className="underline"
                  >
                    bottom drawer
                  </Link>{" "}
                  for mobile view.
                </p>
                <p>
                  The documentation for installation and usage can be found on
                  the{" "}
                  <Link
                    href=""
                    target="_blank"
                    className="underline"
                  >
                    GitHub repository
                  </Link>
                  .
                </p> */}
              </CredenzaBody>
              <CredenzaFooter>
                <Link
                  href="https://www.apna.exchange"
                  target="_blank"
                  className={cn(buttonVariants({ variant: "default" }))}
                >
                  Visit
                </Link>
                <CredenzaClose asChild>
                  <Button variant="outline">Close</Button>
                </CredenzaClose>
              </CredenzaFooter>
            </CredenzaContent>
          </Credenza>
      </div>
    </div>
  </div>

  <div className="flex justify-center mx-5 bg-tiger ">
    <div className="flex flex-row md:flex-col md:max-w-xl rounded-lg  shadow-lg m-2">
      <Image src={Gift} width={200} height={200} objectFit="contain" alt=""/>
      <div className="px-6 py-10 flex flex-col justify-start">
        <h5 className="text-white text-xl font-medium mb-2">Tiger Exchange</h5>
        {/* <h5 className="text-gray-500 text-md font-extralight mb-2">Artist</h5>  */}
        
        
        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Demo ID <AiFillFire className="text-xl" />
        </button>
      </div>
    </div>
  </div>


  <div className="flex justify-center mx-5  bg-sky">
    <div className="flex flex-row md:flex-col md:max-w-xl rounded-lg shadow-lg m-2">
      <Image src={sky} width={200} height={200} objectFit="contain" alt=""/>
      <div className="px-6 py-10 flex flex-col justify-start">
        <h5 className="text-gray-900 text-xl font-medium mb-2">Sky Exchange</h5>
        {/* <h5 className="text-gray-500 text-md font-extralight mb-2">Artist</h5>  */}
        
        
        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Demo ID <AiFillFire className="text-xl" />
        </button>
      </div>
    </div>
  </div>



  <div className="flex justify-center mx-5 bg-saf">
    <div className="flex flex-row md:flex-col md:max-w-xl rounded-lg  shadow-lg m-2">
      <Image src={saf} width={200} height={200} objectFit="contain" alt=""/>
      <div className="px-6 py-10 flex flex-col justify-start">
        <h5 className="text-gray-900 text-xl font-medium mb-2">Saffron Exchange</h5>
        {/* <h5 className="text-gray-500 text-md font-extralight mb-2">Artist</h5>  */}
        
        
        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Demo ID <AiFillFire className="text-xl" />
        </button>
      </div>
    </div>
  </div>



  <div className="flex justify-center mx-5 bg-ice">
    <div className="flex flex-row md:flex-col md:max-w-xl rounded-lg  shadow-lg m-2">
      <Image src={ice} width={200} height={200} objectFit="contain" alt=""/>
      <div className="px-6 py-10 flex flex-col justify-start">
        <h5 className="text-white text-xl font-medium mb-2">IceBook 777</h5>
        {/* <h5 className="text-gray-500 text-md font-extralight mb-2">Artist</h5>  */}
        
        
        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Demo ID <AiFillFire className="text-xl" />
        </button>
      </div>
    </div>
  </div>




{/* </div> */}



      {/* <div className="flex gap-5 ">
        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open First Modal <AiFillFire className="text-xl" />
        </button>
        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
          font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowSecondModal(true)}
        >
          Open Second Modal <AiFillFire className="text-xl" />
        </button>

        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
          font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowSecondModal(true)}
        >
          Open Second Modal <AiFillFire className="text-xl" />
        </button>


        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
          font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowSecondModal(true)}
        >
          Open Second Modal <AiFillFire className="text-xl" />
        </button>

        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
          font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowSecondModal(true)}
        >
          Open Second Modal <AiFillFire className="text-xl" />
        </button>


        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
          font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowSecondModal(true)}
        >
          Open Second Modal <AiFillFire className="text-xl" />
        </button>

        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
          font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowSecondModal(true)}
        >
          Open Second Modal <AiFillFire className="text-xl" />
        </button>
      </div> */}
      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <Image src={Trophy} width={100} height={100} objectFit="contain" alt=""/>
          <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
            May your life be filled with success and achievements.
            Congratulations!
          </h2>
          <button
            className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      ) : null}

      {/* second modal */}
      {showSecondModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-xl h-auto p-2">
          <Image src={Gift} width={100} height={100} objectFit="contain" alt=""/>
          <h2 className="text-base mt-2 text-gray-400 font-semibold text-center mx-4">
            Hurry! Your USD 50,00 Gift Voucher is about to expire! Shop now the
            latest Summer-Trends.
          </h2>
          <div className="flex gap-5">
            <button
              className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
              onClick={() => setShowSecondModal(false)}
            >
              Claim Now
            </button>
            <button
              className=" w-auto px-12 my-5 border border-red-100 h-10 hover:bg-red-700 hover:text-white   rounded-md text-red-600  hover:shadow-lg font-semibold"
              onClick={() => setShowSecondModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TestModals;