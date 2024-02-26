import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Betkheloo",
  description: "Betkheloo: Betting ID provider",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Feel Free to Message Us"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
