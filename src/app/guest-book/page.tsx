'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GuestBook from '@/components/GuestBook/GuestBook';

export default function Page() {
  return (
    <div className="px-5 mx-auto mt-10 space-y-6 w-full">
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold text-2xl capitalize">Buku tamu undangan</h1>
        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque quis ratione labore cum illum libero.</p>
      </div>
      <Tabs defaultValue="guest-book" className="w-full space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="guest-book">Buku Tamu</TabsTrigger>
          <TabsTrigger value="Scane QR">Scane QR</TabsTrigger>
        </TabsList>
        <TabsContent value="guest-book" className="space-y-6">
          <GuestBook />
        </TabsContent>
        <TabsContent value="Scane QR">f</TabsContent>
      </Tabs>
    </div>
  );
}
