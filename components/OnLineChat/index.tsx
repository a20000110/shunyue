import React, { useEffect, useRef, useState } from "react";
import { Text } from "@/components/CatalystUi/text";
import { Input } from "@/components/CatalystUi/input";

const Robot = ({ content }: {
  content: string
}) => {
  return <div className="s-flex py-2 px-4 !items-start">
    <i className="ri-robot-2-line ri-xl"></i>
    <Text className="py-1 px-2 rounded-[5px] !text-black ml-2 bg-white shadow">{content}</Text>
  </div>;
};

const Me = ({ content }: {
  content: string
}) => {
  return <div className="e-flex py-2 px-4 !items-start">
    <Text className="py-1 px-2 rounded-[5px] !text-white mr-2 bg-orange-500 shadow">{content}</Text>
    <i className="ri-user-smile-line ri-xl"></i>
  </div>;
};

const Chat = (({
                 open,
                 setOpen
               }: {
  open: boolean,
  setOpen: (open: boolean) => void
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const [meMsg, setMeMsg] = useState<string[]>([]);
  const handleSend = () => {
    const msg = inputRef.current?.value;
    if (msg) {
      setMeMsg(() => {
        return [...meMsg, msg];
      });
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight });
  }, [meMsg]);

  return <div className={`${open ? "flex" : "hidden"}`}>
    <div className="md:w-[400px] shadow md:h-[500px] bg-white border rounded-[10px] overflow-hidden">
      <div className="h-[50px] bg-orange-500 b-flex px-4 text-white font-bold">
        <span>Chat</span>
        <i className="ri-close-fill cursor-pointer ri-lg" onClick={() => setOpen(false)}></i>
      </div>
      <style>
        {
          `
.online-chat::-webkit-scrollbar {
    width: 5px;
}

.online-chat::-webkit-scrollbar-track {
    background: transparent !important;
}

.online-chat::-webkit-scrollbar-thumb {
    background: #bbbbbb;
    border-radius: 10px;
}
          `
        }
      </style>
      <div className="h-[390px] overflow-y-auto overflow-x-hidden online-chat" ref={chatRef}>
        <Robot content={"Welcome"} />
        {
          meMsg.map((item, index) => {
            return <Me content={item} key={index} />;
          })
        }
      </div>
      <div className="border-t b-flex">
        <Input className="!h-[60px] !text-[18px] !text-black" placeholder="Input" ref={inputRef} onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }} />
        <i className="cursor-pointer ri-send-plane-2-fill ri-xl mr-2 text-orange-500" onClick={handleSend}></i>
      </div>
    </div>
  </div>;
});

export default React.memo(function OnLineChat() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="fixed z-[2] bottom-5 right-2">
      <div onClick={() => setOpen(!open)}
           className={`h-[50px] cursor-pointer ${open ? "hidden" : "c-flex animate-bounce hover:animate-none"}  w-[50px] text-white bg-orange-500 rounded-[10px]`}>
        <i className="ri-message-3-line ri-2x"></i>
      </div>
    </div>
    <div className="fixed z-[1] bottom-0 md:bottom-5 md:right-5">
      <Chat open={open} setOpen={setOpen} />
    </div>
  </>;
});
