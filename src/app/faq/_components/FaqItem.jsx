import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const FaqItem = () => {
  return (
    <Disclosure>
      <DisclosureButton className="py-7 ps-5 text-h6Heading6M text-gray80">
        What is the mission of our organization?
      </DisclosureButton>
      <DisclosurePanel className="text-midGray bg-bgGray5 p-5  rounded-t-[1.25rem] font-inter text-h9BodyCopy5 leading-[1.225rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Phasellus imperdiet, neque at consequat malesuada, lorem lectus
        ullamcorper nunc, at scelerisque erat risus at nulla. Integer nec urna
        non tortor fermentum commodo. Fusce sagittis, risus et facilisis
        interdum, velit nisi consectetur.
      </DisclosurePanel>
      <div className="h-px bg-gray20"></div>
    </Disclosure>
  );
};

export default FaqItem;
