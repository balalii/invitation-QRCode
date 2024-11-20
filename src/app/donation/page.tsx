'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import QRCode from 'react-qr-code';
import Donation from '@/components/Donation/Donation';
import ListBank from '@/components/Donation/ListBank';

export default function Page() {
  return (
    <div className="px-5 mx-auto mt-10 space-y-6 w-full">
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold text-2xl capitalize">Sumbangan Tamu Undangan</h1>
        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque quis ratione labore cum illum libero.</p>
      </div>
      <Tabs defaultValue="donation" className="w-full space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="donation">Sumbangan</TabsTrigger>
          <TabsTrigger value="bank">List Bank</TabsTrigger>
        </TabsList>
        <TabsContent value="donation" className="space-y-6">
          <Donation />
        </TabsContent>
        <TabsContent value="bank">
          <ListBank />
        </TabsContent>
      </Tabs>
    </div>
  );
}
