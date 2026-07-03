import svgPaths from "./svg-miohf27m4h";
import imgContainer from "./b2c8425364794ec88c37d3951c0b730958289738.png";
import imgImage from "./a0dda637b64977f7755958c86d55484732aa596f.png";

function Container2() {
  return (
    <div className="h-[420px] relative rounded-[14px] shrink-0 w-[317px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgContainer} />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[48px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="opacity-50 relative shrink-0" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[0] relative shrink-0 text-[#f8f8f6] text-[24px] text-center tracking-[2px] uppercase w-[336px] whitespace-pre-wrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          <p className="leading-[24px] mb-0">{`Product Designer `}</p>
          <p className="leading-[24px]">с опытом 4+ лет</p>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[95.04px] relative shrink-0 text-[#f8f8f6] text-[105.6px] text-center tracking-[-2.112px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Зырянов
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[95.04px] relative shrink-0 text-[#f8f8f6] text-[105.6px] text-center tracking-[-2.112px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Елисей
        </p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col h-[191px] items-start relative shrink-0 w-[438px]" data-name="Heading 1">
      <Text />
      <Text1 />
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="relative shrink-0" data-name="Heading 1:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[56px] relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="relative shrink-0" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[25.5px] relative shrink-0 text-[#f8f8f6] text-[15px] text-center w-[440px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Специализируюсь на Fintech, B2C, C2C.
        </p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[50px] min-w-[96px] relative rounded-[33554400px] shrink-0 w-[96px]" data-name="Link">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.25)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-w-[inherit] px-[33px] py-[15px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f8f8f6] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">CV</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[50px] min-w-[96px] relative rounded-[33554400px] shrink-0 w-[96px]" data-name="Link">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.25)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-w-[inherit] px-[33px] py-[15px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f8f8f6] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">TG</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[50px] items-center justify-center left-0 min-w-[96px] px-[33px] py-[15px] rounded-[33554400px] top-0" data-name="Link">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.25)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f8f8f6] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Блог
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[50px] relative shrink-0 w-[109.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Link />
        <Link1 />
        <Container4 />
      </div>
    </div>
  );
}

function Container5() {
  return <div className="bg-[rgba(248,248,246,0.1)] h-px relative shrink-0 w-[769px]" data-name="Container" />;
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-[865px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center max-w-[inherit] px-[48px] py-[32px] relative size-full">
        <ContainerMargin />
        <ParagraphMargin />
        <Heading1Margin />
        <ParagraphMargin1 />
        <Container3 />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[64px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.3)] tracking-[4.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Обо мне
        </p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[112px] relative shrink-0 w-[769px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Medium','Noto_Sans:Regular',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#f8f8f6] text-[0px] tracking-[-0.72px] whitespace-nowrap">
          <p className="font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[39.6px] mb-0 text-[36px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
            Делаю красиво,
          </p>
          <p className="font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[39.6px] text-[36px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
            думая системно
          </p>
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[28px] relative shrink-0 text-[16px] text-[rgba(248,248,246,0.55)] w-[769px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>{`В дизайне с 2020 года. У меня нет вышки, но есть горящие глаза от дизайна и я верю, что лучшие продукты рождаются там, где бизнес-цели встречаются с потребностями людей. `}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[769px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 px-[13px] py-[7px] rounded-[33554400px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.12)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.5)] tracking-[0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Продуктовый дизайн
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[170.75px] px-[13px] py-[7px] rounded-[33554400px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.12)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.5)] tracking-[0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        UX-исследования
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[321.19px] px-[13px] py-[7px] rounded-[33554400px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.12)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.5)] tracking-[0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        UI-дизайн
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[420.63px] px-[13px] py-[7px] rounded-[33554400px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.12)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.5)] tracking-[0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Дизайн-системы
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[565.25px] px-[13px] py-[7px] rounded-[33554400px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.12)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.5)] tracking-[0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Прототипирование
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 px-[13px] py-[7px] rounded-[33554400px] top-[40px]" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.12)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.5)] tracking-[0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Аналитика
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[102.67px] px-[13px] py-[7px] rounded-[33554400px] top-[40px]" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.12)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.5)] tracking-[0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Пользовательское тестирование
      </p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[351.89px] px-[13px] py-[7px] rounded-[33554400px] top-[40px]" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.12)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.5)] tracking-[0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Продуктовая стратегия
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
      <Text8 />
      <Text9 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[328px] items-start left-0 top-0 w-[769px]" data-name="Container">
      <Paragraph />
      <Heading1 />
      <Container8 />
      <ContainerMargin2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.3)] tracking-[4.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Карьера
        </p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.25)] tracking-[1.2px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          01.2026-05.2026 (5 месяцев)
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text10 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[29px] relative shrink-0 w-[737px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[22.5px] relative shrink-0 text-[#f8f8f6] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>{`Продуктовый дизайнер, AI-creator `}</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[22px] relative shrink-0 w-[737px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#3b82f6] text-[13px] whitespace-nowrap">AI start-up chat bot</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[23.1px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.4)] w-[737px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Запускал платформу совместно с фаундером и фулл-стек разработчиком. Создавал цифровых личностей
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[40px] pl-[32px] relative size-full">
        <Container13 />
        <Paragraph3 />
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.25)] tracking-[1.2px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          11.2024-01.2026 (1.3 года)
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text11 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[29px] relative shrink-0 w-[737px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[22.5px] relative shrink-0 text-[#f8f8f6] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Продуктовый дизайнер
        </p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[22px] relative shrink-0 w-[737px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#3b82f6] text-[13px] whitespace-nowrap">Fintech, crypto</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[23.1px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.4)] w-[737px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Отвечал за ключевые продуктовые области: онбординг, платёжный флоу и мобильный опыт
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[40px] pl-[32px] relative size-full">
        <Container15 />
        <Paragraph6 />
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[34px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.25)] tracking-[1.2px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          02.2022-11.2024 (2.10 лет)
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text12 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[29px] relative shrink-0 w-[737px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[22.5px] relative shrink-0 text-[#f8f8f6] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Продуктовый дизайнер
        </p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[22px] relative shrink-0 w-[737px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[19.5px] relative shrink-0 text-[#3b82f6] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Агенство
        </p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-[737px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[23.1px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.4)] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Вёл дизайн-проекты от дискавери до запуска. Учился тестированию, коммуникации с командой и заканзчиком. Проектировал интерфейсы, формулировал гипотезы для тестов.
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[40px] pl-[32px] relative size-full">
        <Container17 />
        <Paragraph9 />
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[34px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(248,248,246,0.25)] tracking-[1.2px] whitespace-nowrap">2020</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text13 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[29px] relative shrink-0 w-[737px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[22.5px] relative shrink-0 text-[#f8f8f6] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Обучение в Disatro и в Бюро Горбунова
        </p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[22px] relative shrink-0 w-[737px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[19.5px] relative shrink-0 text-[#3b82f6] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Ux/Ui дизайн
        </p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[32px] relative shrink-0 w-[737px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[23.1px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.4)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>{`Учился дизайну самостоятельно и на курсах, читал книги, смотрел youtube, пробовал себя во фрилансе `}</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[103px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[40px] pl-[32px] relative size-full">
        <Container19 />
        <Paragraph12 />
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-[769px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Container12 />
        <Container14 />
        <Container16 />
        <Container18 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[407.79px] w-[769px]" data-name="Container">
      <Paragraph2 />
      <Container11 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[1011px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container7 />
        <Container10 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[1091px] max-w-[1280px] relative shrink-0 w-[865px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[48px] py-[80px] relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.3)] tracking-[4.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Мои работы
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[195.453px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[208.406px] opacity-80 relative shrink-0 w-full" data-name="Image (Криптобиржа)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#111] h-[208.406px] relative shrink-0 w-[370.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[37px] relative shrink-0 w-[306.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[25px] relative shrink-0 text-[#f8f8f6] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Криптобиржа
        </p>
      </div>
    </div>
  );
}

function ParagraphMargin2() {
  return (
    <div className="flex-[176.984_0_0] min-h-px relative w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[23.8px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.45)] w-[307px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Полный редизайн торгового опыта мультиактивной криптобиржи. От онбординга до профессиональной торговли — системный пересмотр продукта с фокусом на доверии и ясности.
        </p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.25)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Роль
        </p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(248,248,246,0.6)] whitespace-nowrap">Product designer</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[3px]" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.25)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Период
        </p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(248,248,246,0.6)] whitespace-nowrap">2024-2026</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[151.97px] top-[3px]" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container26 />
        <p className="[word-break:break-word] absolute font-['Suisse_Int'l:Regular',sans-serif] leading-[24px] left-[131.48px] not-italic text-[16px] text-[rgba(248,248,246,0.15)] top-0 whitespace-nowrap">·</p>
        <Container27 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[#f8f8f6] text-[16px] whitespace-nowrap">+68%</p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[19px] relative shrink-0 w-[63.234px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.35)] tracking-[0.55px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Конверсия
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(248,248,246,0.04)] content-stretch flex flex-col items-start left-0 px-[13px] py-[9px] rounded-[10px] top-0 w-[89.234px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[19.2px] relative shrink-0 text-[#f8f8f6] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          2М+
        </p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[19px] relative shrink-0 w-[89.422px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.35)] tracking-[0.55px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Пользователей
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[rgba(248,248,246,0.04)] content-stretch flex flex-col items-start left-[101.23px] px-[13px] py-[9px] rounded-[10px] top-0 w-[115.422px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph18 />
      <Paragraph19 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[#f8f8f6] text-[16px] whitespace-nowrap">40</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[19px] relative shrink-0 w-[35.578px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.35)] tracking-[0.55px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Стран
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[rgba(248,248,246,0.04)] content-stretch flex flex-col items-start left-[228.66px] px-[13px] py-[9px] rounded-[10px] top-0 w-[61.578px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[87.688px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container29 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          →
        </p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Смотреть кейс
        </p>
        <Text19 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(248,248,246,0.15)] tracking-[1.2px] whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text18 />
        <Text20 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[433.672_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Heading2 />
        <ParagraphMargin2 />
        <Container25 />
        <Container28 />
        <Container32 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="flex-[642.078_0_0] min-h-px relative w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="absolute bg-[#1a1a1a] h-[644.078px] left-0 rounded-[14px] top-0 w-[372.5px]" data-name="Article">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Link3 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function ImageErrorLoadingImage() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="Image (Error loading image)">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
        <g id="Image (Error loading image)">
          <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
          <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
          <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex h-[208.406px] items-center justify-center left-0 top-0 w-[370.5px]" data-name="Container">
      <ImageErrorLoadingImage />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#f3f4f6] h-[208.406px] opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#111] h-[208.406px] relative shrink-0 w-[370.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[37px] relative shrink-0 w-[306.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[25px] relative shrink-0 text-[#f8f8f6] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Аналитический дашборд
        </p>
      </div>
    </div>
  );
}

function ParagraphMargin3() {
  return (
    <div className="flex-[142.984_0_0] min-h-px relative w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[23.8px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.45)] w-[307px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Проектировал B2B-платформу для операционных команд, снижающую время принятия решений. Переосмыслил информационную архитектуру и построил компонентную библиотеку с нуля.
        </p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.25)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Роль
        </p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.6)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Продуктовый дизайнер
        </p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[3px]" data-name="Container">
      <Text21 />
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.25)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Период
        </p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(248,248,246,0.6)] whitespace-nowrap">2022–2023</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[40px]" data-name="Container">
      <Text23 />
      <Text24 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[82px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container38 />
        <p className="[word-break:break-word] absolute font-['Suisse_Int'l:Regular',sans-serif] leading-[24px] left-[188.13px] not-italic text-[16px] text-[rgba(248,248,246,0.15)] top-0 whitespace-nowrap">·</p>
        <Container39 />
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[#f8f8f6] text-[16px] whitespace-nowrap">+28</p>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[19px] relative shrink-0 w-[30.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(248,248,246,0.35)] tracking-[0.55px] whitespace-nowrap">NPS</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[rgba(248,248,246,0.04)] content-stretch flex flex-col items-start left-0 px-[13px] py-[9px] rounded-[10px] top-0 w-[56.406px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[19.2px] relative shrink-0 text-[#f8f8f6] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          −40%
        </p>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[19px] relative shrink-0 w-[74.953px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.35)] tracking-[0.55px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Время задач
        </p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[rgba(248,248,246,0.04)] content-stretch flex flex-col items-start left-[68.41px] px-[13px] py-[9px] rounded-[10px] top-0 w-[100.953px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph24 />
      <Paragraph25 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[19.2px] relative shrink-0 text-[#f8f8f6] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          12К
        </p>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[19px] relative shrink-0 w-[27.797px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(248,248,246,0.35)] tracking-[0.55px] whitespace-nowrap">DAU</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[rgba(248,248,246,0.04)] content-stretch flex flex-col items-start left-[181.36px] px-[13px] py-[9px] rounded-[10px] top-0 w-[53.797px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph26 />
      <Paragraph27 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[87.688px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container41 />
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          →
        </p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Смотреть кейс
        </p>
        <Text26 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(248,248,246,0.15)] tracking-[1.2px] whitespace-nowrap">02</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text25 />
        <Text27 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[433.672_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Heading3 />
        <ParagraphMargin3 />
        <Container37 />
        <Container40 />
        <Container44 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="flex-[642.078_0_0] min-h-px relative w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container33 />
        <Container36 />
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="absolute bg-[#1a1a1a] h-[644.078px] left-[396.5px] rounded-[14px] top-0 w-[372.5px]" data-name="Article">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Link4 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function ImageErrorLoadingImage1() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="Image (Error loading image)">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
        <g id="Image (Error loading image)">
          <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
          <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
          <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex h-[208.406px] items-center justify-center left-0 top-0 w-[370.5px]" data-name="Container">
      <ImageErrorLoadingImage1 />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#f3f4f6] h-[208.406px] opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#111] h-[208.406px] relative shrink-0 w-[370.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container46 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[37px] relative shrink-0 w-[306.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[25px] relative shrink-0 text-[#f8f8f6] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Мобильный банк
        </p>
      </div>
    </div>
  );
}

function ParagraphMargin4() {
  return (
    <div className="flex-[244.672_0_0] min-h-px relative w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[23.8px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.45)] w-[307px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Полный UX/UI-редизайн мобильного банка для 500К+ клиентов. Упростил повседневные задачи, улучшил доступность и сократил нагрузку на поддержку.
        </p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.25)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Роль
        </p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.6)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Старший дизайнер
        </p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[3px]" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.25)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Период
        </p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(248,248,246,0.6)] whitespace-nowrap">2021–2022</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[181.42px] top-[3px]" data-name="Container">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container50 />
        <p className="[word-break:break-word] absolute font-['Suisse_Int'l:Regular',sans-serif] leading-[24px] left-[160.94px] not-italic text-[16px] text-[rgba(248,248,246,0.15)] top-0 whitespace-nowrap">·</p>
        <Container51 />
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[19.2px] relative shrink-0 text-[#f8f8f6] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          4.8★
        </p>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[19px] relative shrink-0 w-[56.625px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(248,248,246,0.35)] tracking-[0.55px] whitespace-nowrap">App Store</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-[rgba(248,248,246,0.04)] content-stretch flex flex-col items-start left-0 px-[13px] py-[9px] rounded-[10px] top-0 w-[82.625px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[19.2px] relative shrink-0 text-[#f8f8f6] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          500К+
        </p>
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[19px] relative shrink-0 w-[52.828px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.35)] tracking-[0.55px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Загрузок
        </p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[rgba(248,248,246,0.04)] content-stretch flex flex-col items-start left-[94.63px] px-[13px] py-[9px] rounded-[10px] top-0 w-[78.828px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph30 />
      <Paragraph31 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[19.2px] relative shrink-0 text-[#f8f8f6] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          −35%
        </p>
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[19px] relative shrink-0 w-[67.859px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.35)] tracking-[0.55px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Обращений
        </p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[rgba(248,248,246,0.04)] content-stretch flex flex-col items-start left-[185.45px] px-[13px] py-[9px] rounded-[10px] top-0 w-[93.859px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph32 />
      <Paragraph33 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[87.688px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container53 />
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          →
        </p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Смотреть кейс
        </p>
        <Text33 />
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(248,248,246,0.15)] tracking-[1.2px] whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text32 />
        <Text34 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="flex-[501.359_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Heading4 />
        <ParagraphMargin4 />
        <Container49 />
        <Container52 />
        <Container56 />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="flex-[709.766_0_0] min-h-px relative w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container45 />
        <Container48 />
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="absolute bg-[#1a1a1a] h-[711.766px] left-0 rounded-[14px] top-[668.08px] w-[372.5px]" data-name="Article">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Link5 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function ImageErrorLoadingImage2() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="Image (Error loading image)">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
        <g id="Image (Error loading image)">
          <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
          <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
          <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex h-[208.406px] items-center justify-center left-0 top-0 w-[370.5px]" data-name="Container">
      <ImageErrorLoadingImage2 />
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#f3f4f6] h-[208.406px] opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container59 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#111] h-[208.406px] relative shrink-0 w-[370.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container58 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[37px] relative shrink-0 w-[306.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[25px] relative shrink-0 text-[#f8f8f6] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Дизайн-система
        </p>
      </div>
    </div>
  );
}

function ParagraphMargin5() {
  return (
    <div className="flex-[142.984_0_0] min-h-px relative w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[23.8px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.45)] w-[307px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Создал масштабируемую дизайн-систему, объединившую 3 продукта под одним визуальным языком. Токены, компоненты, документация и Figma-библиотека для 6 разработчиков и 4 дизайнеров.
        </p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.25)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Роль
        </p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.6)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Лид дизайн-системы
        </p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[3px]" data-name="Container">
      <Text35 />
      <Text36 />
    </div>
  );
}

function Text37() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.25)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Период
        </p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(248,248,246,0.6)] whitespace-nowrap">2022–2024</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[40px]" data-name="Container">
      <Text37 />
      <Text38 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[82px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container62 />
        <p className="[word-break:break-word] absolute font-['Suisse_Int'l:Regular',sans-serif] leading-[24px] left-[174.75px] not-italic text-[16px] text-[rgba(248,248,246,0.15)] top-0 whitespace-nowrap">·</p>
        <Container63 />
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[#f8f8f6] text-[16px] whitespace-nowrap">80+</p>
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[19px] relative shrink-0 w-[78.25px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.35)] tracking-[0.55px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Компонентов
        </p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-[rgba(248,248,246,0.04)] content-stretch flex flex-col items-start left-0 px-[13px] py-[9px] rounded-[10px] top-0 w-[104.25px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph34 />
      <Paragraph35 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[#f8f8f6] text-[16px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[19px] relative shrink-0 w-[55.891px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.35)] tracking-[0.55px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Продукта
        </p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-[rgba(248,248,246,0.04)] content-stretch flex flex-col items-start left-[116.25px] px-[13px] py-[9px] rounded-[10px] top-0 w-[81.891px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph36 />
      <Paragraph37 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[#f8f8f6] text-[16px] whitespace-nowrap">×2</p>
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[19px] relative shrink-0 w-[90.563px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(248,248,246,0.35)] tracking-[0.55px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Скорость разр.
        </p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-[rgba(248,248,246,0.04)] content-stretch flex flex-col items-start left-0 px-[13px] py-[9px] rounded-[10px] top-[67.69px] w-[116.563px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph38 />
      <Paragraph39 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[155.375px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container65 />
        <Container66 />
        <Container67 />
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          →
        </p>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Смотреть кейс
        </p>
        <Text40 />
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(248,248,246,0.15)] tracking-[1.2px] whitespace-nowrap">04</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text39 />
        <Text41 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="flex-[501.359_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Heading5 />
        <ParagraphMargin5 />
        <Container61 />
        <Container64 />
        <Container68 />
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="flex-[709.766_0_0] min-h-px relative w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container57 />
        <Container60 />
      </div>
    </div>
  );
}

function Article3() {
  return (
    <div className="absolute bg-[#1a1a1a] h-[711.766px] left-[396.5px] rounded-[14px] top-[668.08px] w-[372.5px]" data-name="Article">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Link6 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.07)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[1379.844px] relative shrink-0 w-full" data-name="Container">
      <Article />
      <Article1 />
      <Article2 />
      <Article3 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[80px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-[865px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[48px] py-[80px] relative size-full">
        <Container20 />
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.3)] tracking-[4.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Обо мне
        </p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[42px] left-0 opacity-40 top-[36.02px] w-[314.438px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[38.016px] left-0 text-[#f8f8f6] text-[35.2px] top-[2px] tracking-[-0.704px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        думает как продакт
      </p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[76.031px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] absolute font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[0] left-0 text-[#f8f8f6] text-[35.2px] top-0 tracking-[-0.704px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        <p className="leading-[38.016px] mb-0">Дизайнер, который</p>
        <p className="leading-[38.016px]">​</p>
      </div>
      <Text42 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Heading6 />
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="relative shrink-0 w-[769px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[28.8px] relative shrink-0 text-[16px] text-[rgba(248,248,246,0.55)] w-[769px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Привет, я Елисей. Занимаюсь продуктовым дизайном более 4 лет — работал с fintech-стартапами, крипто-платформами и B2B SaaS. За это время успел пройти путь от джуна до лида, который выстраивает дизайн-процессы и растит команды.
        </p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="relative shrink-0 w-[769px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[28.8px] relative shrink-0 text-[16px] text-[rgba(248,248,246,0.55)] w-[769px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Мне важно не просто делать красиво — мне важно делать правильно. Это значит: понять пользователя, разобраться в бизнес-контексте, найти решение, которое работает сразу для обоих.
        </p>
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="relative shrink-0 w-[769px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[28.8px] relative shrink-0 text-[16px] text-[rgba(248,248,246,0.55)] w-[769px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Вне работы — изучаю новые паттерны взаимодействия, слежу за тем, как меняются digital-продукты, и периодически пишу об этом в блоге.
        </p>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[30.8px] not-italic relative shrink-0 text-[#f8f8f6] text-[30.8px] whitespace-nowrap">4+</p>
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="max-w-[100px] relative shrink-0 w-[100px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pt-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.8px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.3)] w-[100px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Лет в продуктовом дизайне
        </p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[100px]" data-name="Container">
      <Paragraph44 />
      <Paragraph45 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[30.8px] not-italic relative shrink-0 text-[#f8f8f6] text-[30.8px] whitespace-nowrap">12+</p>
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="max-w-[100px] relative shrink-0 w-[100px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pt-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.8px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.3)] w-[100px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Запущенных продуктов
        </p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col h-[87.188px] items-start left-[140px] top-0 w-[100px]" data-name="Container">
      <Paragraph46 />
      <Paragraph47 />
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[30.8px] relative shrink-0 text-[#f8f8f6] text-[30.8px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          2М+
        </p>
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="max-w-[100px] relative shrink-0 w-[100px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pt-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16.8px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.3)] w-[100px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Пользователей у продуктов
        </p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col h-[87.188px] items-start left-[280px] top-0 w-[100px]" data-name="Container">
      <Paragraph48 />
      <Paragraph49 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[87.188px] relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Container74 />
      <Container75 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[48px] relative size-full">
        <Container72 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col h-[532.797px] items-start left-0 top-[1081.33px] w-[769px]" data-name="Container">
      <Paragraph40 />
      <ContainerMargin4 />
      <Paragraph41 />
      <Paragraph42 />
      <Paragraph43 />
      <ContainerMargin5 />
    </div>
  );
}

function ImageErrorLoadingImage3() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="Image (Error loading image)">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
        <g id="Image (Error loading image)">
          <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
          <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
          <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
        </g>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex h-[1025.328px] items-center justify-center relative shrink-0 w-[769px]" data-name="Container">
      <ImageErrorLoadingImage3 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1025.328px] items-start left-0 overflow-clip rounded-[16px] top-0 w-[769px]" data-name="Container">
      <Container77 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[1614.125px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container71 />
        <Container76 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[48px] relative size-full">
        <Container70 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(248,248,246,0.06)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[160px] pt-[161px] relative size-full">
        <Container69 />
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.3)] tracking-[4.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Контакты
      </p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col h-[143px] items-start pt-[32px] relative shrink-0 w-[769px]" data-name="Heading 2">
      <div className="[word-break:break-word] font-['Inter:Medium','Noto_Sans:Regular',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#f8f8f6] text-[0px] tracking-[-1.056px] whitespace-nowrap">
        <p className="font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[55.44px] mb-0 text-[52.8px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Создадим продукты,
        </p>
        <p className="font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[55.44px] text-[52.8px] text-[rgba(248,248,246,0.5)]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          которые полюбят люди.
        </p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-[769px]" data-name="Container">
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[28px] relative shrink-0 text-[16px] text-[rgba(248,248,246,0.45)] w-[480px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Открыт для full-time позиций, консультаций и интересных сайд-проектов. Если вы строите что-то значимое — давайте поговорим.
      </p>
    </div>
  );
}

function Text43() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#151515] text-[16px] tracking-[0.35px] whitespace-nowrap">✈</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute bg-[#f8f8f6] content-stretch flex gap-[12px] items-center left-0 px-[28px] py-[16px] rounded-[33554400px] top-0" data-name="Link">
      <Text43 />
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#151515] text-[14px] tracking-[0.35px] whitespace-nowrap">Telegram</p>
    </div>
  );
}

function Text44() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f8f8f6] text-[16px] tracking-[0.35px] whitespace-nowrap">@</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[165.56px] px-[29px] py-[17px] rounded-[33554400px] top-0" data-name="Link">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <Text44 />
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Почта
      </p>
    </div>
  );
}

function Text45() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#f8f8f6] text-[16px] tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          ↓
        </p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[310.94px] px-[29px] py-[17px] rounded-[33554400px] top-0" data-name="Link">
      <div aria-hidden className="absolute border border-[rgba(248,248,246,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <Text45 />
      <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#f8f8f6] text-[14px] tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        Скачать резюме
      </p>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[58px] relative shrink-0 w-full" data-name="Container">
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[64px] relative shrink-0 w-full" data-name="Container:margin">
      <Container80 />
    </div>
  );
}

function Container81() {
  return <div className="bg-[rgba(248,248,246,0.1)] h-px relative shrink-0 w-full" data-name="Container" />;
}

function ContainerMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[112px] relative shrink-0 w-full" data-name="Container:margin">
      <Container81 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[501.844px] max-w-[1280px] relative shrink-0 w-[865px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[48px] relative size-full">
        <Paragraph50 />
        <Heading7 />
        <Container79 />
        <ContainerMargin6 />
        <ContainerMargin7 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(248,248,246,0.06)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[160px] pt-[161px] relative size-full">
        <Container78 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(248,248,246,0.25)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Зырянов Елисей
        </p>
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.15)] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Продуктовый дизайнер · 2026
        </p>
      </div>
    </div>
  );
}

function Text46() {
  return <div className="absolute bg-[rgba(248,248,246,0.5)] h-px left-0 top-[19px] w-0" data-name="Text" />;
}

function Link10() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(248,248,246,0.25)] tracking-[1.44px] whitespace-nowrap">TG</p>
        <Text46 />
      </div>
    </div>
  );
}

function Text47() {
  return <div className="absolute bg-[rgba(248,248,246,0.5)] h-px left-0 top-[19px] w-0" data-name="Text" />;
}

function Link11() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.25)] tracking-[1.44px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Почта
        </p>
        <Text47 />
      </div>
    </div>
  );
}

function Text48() {
  return <div className="absolute bg-[rgba(248,248,246,0.5)] h-px left-0 top-[19px] w-0" data-name="Text" />;
}

function Link12() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(248,248,246,0.25)] tracking-[1.44px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Резюме
        </p>
        <Text48 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative size-full">
        <Link10 />
        <Link11 />
        <Link12 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[116px] max-w-[1280px] relative shrink-0 w-[865px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] p-[48px] relative size-full">
        <Paragraph51 />
        <Paragraph52 />
        <Container82 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#151515] min-h-[1303px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-[865px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Text49() {
  return <div className="absolute bg-[#f8f8f6] h-px left-0 top-[27px] w-0" data-name="Text" />;
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button - Наверх">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.5)] text-center tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Наверх
        </p>
        <Text49 />
      </div>
    </div>
  );
}

function Text50() {
  return <div className="absolute bg-[#f8f8f6] h-px left-0 top-[27px] w-0" data-name="Text" />;
}

function Link13() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.5)] tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Обо мне
        </p>
        <Text50 />
      </div>
    </div>
  );
}

function Text51() {
  return <div className="absolute bg-[#f8f8f6] h-px left-0 top-[27px] w-0" data-name="Text" />;
}

function Link14() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.5)] tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Работы
        </p>
        <Text51 />
      </div>
    </div>
  );
}

function Text52() {
  return <div className="absolute bg-[#f8f8f6] h-px left-0 top-[27px] w-0" data-name="Text" />;
}

function Link15() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Suisse_Int'l:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-[rgba(248,248,246,0.5)] tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Контакты
        </p>
        <Text52 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[40px] items-center relative size-full">
        <Link13 />
        <Link14 />
        <Link15 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[64px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[48px] relative size-full">
          <Button />
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[rgba(21,21,21,0.85)] left-0 top-0 w-[865px]" data-name="Navigation">
      <div aria-hidden className="absolute border-[rgba(248,248,246,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative size-full">
        <Container83 />
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Portfolio Page">
      <Body />
      <Navigation />
    </div>
  );
}