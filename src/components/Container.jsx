import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");
  const stats = [
    { label: "Characters", number: text.length },
    {
      label: "Words",
      number: text.split(/\s/).filter((word) => word !== "").length,
    },
    {
      label: "Instagram",
      number: INSTAGRAM_MAX_CHARACTERS - text.length,
    },
    {
      label: "Facebook",
      number: FACEBOOK_MAX_CHARACTERS - text.length,
    },
  ];

  return (
    <main className="w-[85vw] lg:w-[1050px] h-[520px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row overflow-hidden relative mt-[55px] rounded-[10px]">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
