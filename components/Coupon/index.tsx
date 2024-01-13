import clsx from "clsx";
import { useState } from "react";
import { Button } from "@/components/CatalystUi/button";
import { Dialog, DialogActions, DialogBody } from "@/components/CatalystUi/dialog";
import { Input } from "@/components/CatalystUi/input";

export default function Coupon({
                                 className = ""
                               }: {
  className?: string
}) {
  const [open, setOpen] = useState(false);
  return <>
    <div className={clsx(className, `h-[50px] c-flex w-[164px] bg-orange-500 fixed z-[1] right-0 top-1/2 filter-[drop-shadow(rgba(0, 0, 0, 0.15) 0px 0px 30px)]
  rotate-[90deg] transform-origin: right top; rounded-b-[5px] cursor-pointer duration-300 ${open ? "translate-x-[110px]" : "translate-x-[55px]"}`)}
         onClick={() => {
           setOpen(!open);
         }}>
      <span className="text-white font-bold">GET 10% OFF</span>
    </div>
    <Dialog open={open} onClose={setOpen} className={`
    !bg-[url('https://d3k81ch9hvuctc.cloudfront.net/company/VWCWDG/images/d0072398-70b2-4c6d-a60b-487a2606ef2e.png')]
    !rounded-[5px] !bg-cover
    `}>
      <DialogBody>
        <div className="c-flex flex-col text-white pt-16">
          <span className="text-[54px] max-md:text-[50px]">New Year Sale!</span>
          <span className="text-[42px]">10% Off Sitewide</span>
          <span className="text-[26px]">Limited Time Offer</span>
          <span className="text-[16px] py-6">Signup for both Email and SMS to receive discount code</span>
          <Input className="h-[50px] !text-[18px] !bg-white !text-black" placeholder="Enter your email address"></Input>
        </div>
      </DialogBody>
      <DialogActions>
        <Button className="cursor-pointer" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button className="!bg-orange-500 cursor-pointer" onClick={() => setOpen(false)}>Next Step</Button>
      </DialogActions>
    </Dialog>
  </>;
}
