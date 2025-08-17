import { useBreakpoint } from "@/hooks/useBreakpoints";
import { ImgHTMLAttributes } from "react";
import LogoMobile from "./mobile";
import LogoWeb from "./web";

export type LogoProps = {
  white?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

export default function Logo(props: LogoProps) {
  const isMobile = useBreakpoint("md");

  return isMobile ? (
    <LogoMobile {...props} />
  ) : (
    <LogoWeb height={50} {...props} />
  );
}
