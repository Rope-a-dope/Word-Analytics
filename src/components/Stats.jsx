import { cn } from "../utils";

export default function Stats({ stats }) {
  return (
    <section className="flex-[1.3] bg-[#f1f6f8] flex flex-wrap lg:[&>*:nth-child(-n+2)]:border-b-[rgba(0,0,0,0.08)] lg:[&>*:nth-child(-n+2)]:border-b lg:[&>*:nth-child(-n+2)]:border-solid lg:[&>*:nth-child(even)]:border-l-[rgba(0,0,0,0.08)] lg:[&>*:nth-child(even)]:border-l lg:[&>*:nth-child(even)]:border-solid">
      {stats.map((element) => (
        <Stat
          key={element.label}
          number={element.number}
          label={element.label}
        />
      ))}
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="flex-[1_150px] px-2.5 py-[15px] lg:px-0 lg:py-0 flex flex-col justify-center items-center">
      <span
        className={cn("text-[#4d5457] font-semibold text-xl lg:text-[35px] mb-2.5", {
          "text-[red]": number < 0,
        })}
      >
        {number}
      </span>
      <h2 className="text-sm uppercase tracking-[2px] font-medium text-[#747a7c]">
        {label}
      </h2>
    </section>
  );
}
