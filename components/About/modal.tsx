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

      


    <div className="flex flex-wrap justify-center items-center md:flex-row  mt-40 ">
      {/* <div className="container m-auto p-4"> */}
  <div className="flex justify-center  mx-5 bg-apna rounded-lg lg:w-1/5">
    <div className="flex flex-col md:flex-col md:max-w-xl items-center  shadow-lg m-2">
      <Image className="m-4" src={Trophy} width={200} height={200} objectFit="contain" alt=""/>
      <div className="px-6 py-10 flex flex-col justify-start ">
        <h5 className="text-gray-900 text-xl font-medium mb-4">Apna Exchange</h5>
        {/* <h5 className="text-gray-500 text-md font-extralight mb-2">Artist</h5>  */}
        
        
        {/* <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Demo ID <AiFillFire className="text-xl" />
        </button> */}
        <Credenza >
            <CredenzaTrigger asChild>
              <Button className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button">Demo ID<AiFillFire className="text-xl" /></Button>
            </CredenzaTrigger>
            <CredenzaContent>
              <CredenzaHeader>
                <CredenzaTitle>Apna Exchange</CredenzaTitle>
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
                  <span className="font-semibold">PassWord:</span> Betkheloo{"  "}
                  <button onClick={() => copyText("Betkheloo")}><Image
                  width={20}
                  height={20}
                src={copy}
                alt="Bet Kheloo"
                
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              /></button>
                </p>
                
              </CredenzaBody>
              <CredenzaFooter>
                <Link
                
                  href="https://www.apna.exchange"
                  target="_blank"
                  className={cn(buttonVariants({ variant: "default" })) }
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

  <div className="flex justify-center mx-5 bg-tiger rounded-lg lg:w-1/5 mt-6">
    <div className="flex flex-col md:flex-col md:max-w-xl items-center   shadow-lg m-2">
      <Image className="m-4" src={Gift} width={205} height={200} objectFit="contain" alt=""/>
      <div className="px-6 py-10 flex flex-col justify-start">
        <h5 className="text-white text-xl font-medium mb-5">Tiger Exchange</h5>
        {/* <h5 className="text-gray-500 text-md font-extralight mb-2">Artist</h5>  */}
        
{/*         
        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Demo ID <AiFillFire className="text-xl" />
        </button> */}
        <Credenza >
            <CredenzaTrigger asChild>
              <Button className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button">Demo ID<AiFillFire className="text-xl" /></Button>
            </CredenzaTrigger>
            <CredenzaContent>
              <CredenzaHeader>
                <CredenzaTitle>Tiger ExChange</CredenzaTitle>
                <CredenzaDescription>
                  Demo Id For Tiger Exchange
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
                  <span className="font-semibold">PassWord:</span> Betkheloo{"  "}
                  <button onClick={() => copyText("Betkheloo")}><Image
                  width={20}
                  height={20}
                src={copy}
                alt="Bet Kheloo"
                
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              /></button>
                </p>
                
              </CredenzaBody>
              <CredenzaFooter>
                <Link
                  href="https://mytiger247.com/login"
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


  <div className="flex justify-center mx-5 rounded-lg bg-sky lg:w-1/5 mt-6">
    <div className="flex flex-col md:flex-col md:max-w-xl items-center shadow-lg m-2">
      <Image className="m-4" src={sky} width={200} height={200} objectFit="contain" alt=""/>
      <div className="px-6 py-10 flex flex-col justify-start">
        <h5 className="text-gray-900 text-xl font-medium mb-4">Sky Exchange</h5>
        {/* <h5 className="text-gray-500 text-md font-extralight mb-2">Artist</h5>  */}
        
        
        {/* <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Demo ID <AiFillFire className="text-xl" />
        </button> */}
         <Credenza >
            <CredenzaTrigger asChild>
              <Button className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button">Demo ID<AiFillFire className="text-xl" /></Button>
            </CredenzaTrigger>
            <CredenzaContent>
              <CredenzaHeader>
                <CredenzaTitle>Sky ExChange</CredenzaTitle>
                <CredenzaDescription>
                  Demo Id For Sky Exchange
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
                  <span className="font-semibold">PassWord:</span> Betkheloo{"  "}
                  <button onClick={() => copyText("Betkheloo")}><Image
                  width={20}
                  height={20}
                src={copy}
                alt="Bet Kheloo"
                
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              /></button>
                </p>
                
              </CredenzaBody>
              <CredenzaFooter>
                <Link
                  href="https://www.skyexch.art/"
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



  <div className="flex justify-center mx-5 bg-saf  rounded-lg lg:w-1/5 mt-6">
    <div className="flex flex-col md:flex-col md:max-w-xl items-center shadow-lg m-2">
      <Image className="m-4" src={saf} width={200} height={200} objectFit="contain" alt=""/>
      <div className="px-6 py-8 flex flex-col justify-start">
        <h5 className="text-gray-900 text-xl font-medium mb-4">Saffron Exchange</h5>
        {/* <h5 className="text-gray-500 text-md font-extralight mb-2">Artist</h5>  */}
        
{/*         
        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Demo ID <AiFillFire className="text-xl" />
        </button> */}
        <Credenza >
            <CredenzaTrigger asChild>
              <Button className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button">Demo ID<AiFillFire className="text-xl" /></Button>
            </CredenzaTrigger>
            <CredenzaContent>
              <CredenzaHeader>
                <CredenzaTitle>Saffron ExChange</CredenzaTitle>
                <CredenzaDescription>
                  Demo Id For Saffron Exchange
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
                  <span className="font-semibold">PassWord:</span> Betkheloo{"  "}
                  <button onClick={() => copyText("Betkheloo")}><Image
                  width={20}
                  height={20}
                src={copy}
                alt="Bet Kheloo"
                
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              /></button>
                </p>
                
              </CredenzaBody>
              <CredenzaFooter>
                <Link
                  href="https://www.skyexch.art/"
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



  <div className="flex justify-center mx-5 bg-ice rounded-lg lg:w-1/5 mt-6">
    <div className="flex flex-col md:flex-col md:max-w-xl items-center shadow-lg m-2">
      <Image className="m-4" src={ice} width={200} height={200} objectFit="contain" alt=""/>
      <div className="px-6 py-10 flex flex-col justify-start">
        <h5 className="text-white text-xl font-medium mb-4">Ice-Book 777</h5>
        {/* <h5 className="text-gray-500 text-md font-extralight mb-2">Artist</h5>  */}
        
        
        {/* <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Demo ID <AiFillFire className="text-xl" />
        </button> */}
        <Credenza >
            <CredenzaTrigger asChild>
              <Button className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button">Demo ID<AiFillFire className="text-xl" /></Button>
            </CredenzaTrigger>
            <CredenzaContent>
              <CredenzaHeader>
                <CredenzaTitle>IceBook 777</CredenzaTitle>
                <CredenzaDescription>
                  Demo Id For IceBook 777
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
                  <span className="font-semibold">PassWord:</span> Betkheloo{"  "}
                  <button onClick={() => copyText("Betkheloo")}><Image
                  width={20}
                  height={20}
                src={copy}
                alt="Bet Kheloo"
                
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              /></button>
                </p>
                
              </CredenzaBody>
              <CredenzaFooter>
                <Link
                  href="https://www.skyexch.art/"
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