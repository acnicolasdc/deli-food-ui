'use client';
import { cn } from "@/lib/utils"
import { FunctionComponent, PropsWithChildren } from "react";
import { WritableAtom } from "jotai";
import { Provider } from 'jotai/react'
import type { Viewport } from "next";
import { useHydrateAtoms } from 'jotai/react/utils';
import { Inter as FontSans } from "next/font/google";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { queryClientAtom } from 'jotai-tanstack-query';
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const queryClient = new QueryClient()

type AnyWritableAtom = WritableAtom<unknown, any[], unknown>;
export type InitialAtomValues = Array<readonly [AnyWritableAtom, unknown]>;

interface InitialProps extends PropsWithChildren {
  initialValues: InitialAtomValues;
}

const HydrateAtoms: FunctionComponent<InitialProps> = ({ children, initialValues }) => {
  useHydrateAtoms(initialValues);
  return children;
};


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap'
})

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <div className="w-full min-h-screen bg-background">
          <QueryClientProvider client={queryClient}>
            <Provider>
              <HydrateAtoms initialValues={[[queryClientAtom, queryClient]]}>
                {children}
              </HydrateAtoms>
            </Provider>
          </QueryClientProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
