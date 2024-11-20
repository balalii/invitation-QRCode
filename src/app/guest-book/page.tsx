'use client';
import { DataTables } from '@/components/DataTable/DataTables';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { SendHorizontal, UserRound } from 'lucide-react';

export default function Page() {
  const data = [
    {
      name: 'Ucup Bin Selamet',
      status: 'hadir',
    },
    {
      name: 'Bambang pamungkas sekeluarga',
      status: '-',
    },
    {
      name: 'Ucup Bin Selamet',
      status: 'hadir',
    },
    {
      name: 'Bambang pamungkas sekeluarga',
      status: '-',
    },
    {
      name: 'Ucup Bin Selamet',
      status: 'hadir',
    },
    {
      name: 'Bambang pamungkas sekeluarga',
      status: '-',
    },
    {
      name: 'Ucup Bin Selamet',
      status: 'hadir',
    },
    {
      name: 'Bambang pamungkas sekeluarga',
      status: '-',
    },
    {
      name: 'Ucup Bin Selamet',
      status: 'hadir',
    },
    {
      name: 'Bambang pamungkas sekeluarga',
      status: '-',
    },
    {
      name: 'Ucup Bin Selamet',
      status: 'hadir',
    },
    {
      name: 'Bambang pamungkas sekeluarga',
      status: '-',
    },
  ];
  const constcolumns: ColumnDef<any>[] = [
    {
      accessorKey: 'no',
      header: 'No',
      cell: ({ row }) => <div className="capitalize">{row.index + 1}</div>,
    },
    {
      accessorKey: 'name',
      header: 'Nama',
      cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
    },
    {
      accessorKey: 'status',
      header: 'Keterangan ',
      cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
    },
    {
      accessorKey: 'status',
      header: 'Action',
      cell: ({ row }) => (
        <Button variant="destructive" className="text-xs">
          Hapus
        </Button>
      ),
    },
  ];

  return (
    <div className="px-5 mx-auto mt-10 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold text-2xl capitalize">Buku tamu undangan</h1>
        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque quis ratione labore cum illum libero.</p>
      </div>

      <div className="grid grid-cols-2 gap-x-5">
        <article className="rounded-lg border border-gray-100 bg-white p-6 shadow ">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Undangan</p>

              <p className="text-lg font-semibold text-gray-900">{434}</p>
            </div>

            <span className="rounded-full bg-gray-100 p-3 text-gray-600">
              <UserRound />
            </span>
          </div>
        </article>

        <article className="rounded-lg border border-gray-100 bg-white p-6 shadow ">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Hadir</p>

              <p className="text-lg font-semibold text-gray-900">{455}</p>
            </div>

            <span className="rounded-full bg-green-100 p-3 text-green-600">
              <UserRound />
            </span>
          </div>
        </article>
      </div>

      <div>
        <div className="flex justify-end mb-5">
          <Button className="bg-green-600">
            Kirim undangan <SendHorizontal />
          </Button>
        </div>
        <div className="w-full">
          <DataTables placeholderSearch1="Cari Nama Produk..." labelTable={`Daftar tamu undangan`} idColumnSearch1="name" data={data as any[]} columns={constcolumns} />
        </div>
      </div>
    </div>
  );
}
