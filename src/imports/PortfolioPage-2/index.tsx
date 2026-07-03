function Link() {
  return (
    <div className="h-[53px] min-w-[96px] relative rounded-[33554400px] shrink-0 w-[96px]" data-name="Link">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.25)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-w-[inherit] px-[34px] py-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">CV</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[53px] min-w-[96px] relative rounded-[33554400px] shrink-0 w-[96px]" data-name="Link">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.25)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-w-[inherit] px-[34px] py-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">TG</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[53px] items-center justify-center left-0 min-w-[96px] px-[34px] py-[16px] rounded-[33554400px] top-0" data-name="Link">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.25)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">Блог</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[53px] relative shrink-0 w-[111.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] h-[85px] items-center pb-[32px] relative shrink-0 w-[327.938px]" data-name="Container">
      <Link />
      <Link1 />
      <Container1 />
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full" data-name="Portfolio Page">
      <Container />
    </div>
  );
}