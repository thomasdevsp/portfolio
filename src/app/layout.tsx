import { ApplicationWrapper } from "@/wrapper";
import Layout from "@/components/@layout";
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Thomas Sampaio | Site",
  description:
    "",
  // icons: {
  //   icon: "/favicon.svg",
  // },
  openGraph: {
    type: "website",
    url: "",
    title: "Thomas Sampaio | Site",
    description:
      "",
    images: [
      {
        url: "",
        width: 1200,
        height: 628,
        alt: "Thomas Sampaio | Site",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <ApplicationWrapper>
        {children}
      </ApplicationWrapper>
      <GoogleTagManager gtmId={""} />
    </html>
  );
}


