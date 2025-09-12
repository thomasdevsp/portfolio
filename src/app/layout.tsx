import { ApplicationWrapper } from "@/wrapper";
import { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Thomas Sampaio | Site",
  description:
    "",
  icons: {
    icon: "/favicon.svg",
  },
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

const gaID = process.env.NEXT_PUBLIC_GA_ID;


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <body>
        <ApplicationWrapper>
          {children}
        </ApplicationWrapper>
        <GoogleAnalytics gaId={gaID} />
      </body>
    </html>
  );
}


