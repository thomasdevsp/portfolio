import { LogoProps } from ".";

export default function LogoWeb(props: LogoProps) {
  return (
    <img
      src={"/logo.svg"}
      alt="Logo Reverse Tree"
      {...props}
    />
  );
};

