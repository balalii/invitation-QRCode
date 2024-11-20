'use client';
import { ScrollText, SendHorizontal, UsersRound } from 'lucide-react';
import { Button } from '../ui/button';
import { DataTables } from '../DataTable/DataTables';
import { ColumnDef } from '@tanstack/react-table';
import AddInvitation from './AddInvitation';

export default function GuestBook() {
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
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <Button variant="destructive" className="text-xs">
          Hapus
        </Button>
      ),
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-x-5">
        <article className="rounded-lg border border-gray-100 bg-white p-6 shadow ">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Undangan</p>

              <p className="text-lg font-semibold text-gray-900">{434}</p>
            </div>

            <span className="rounded-full bg-gray-100 p-3 text-gray-600">
              <ScrollText />
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
              <UsersRound />
            </span>
          </div>
        </article>
      </div>

      <div>
        <div className="flex justify-end mb-5">
          <AddInvitation />
        </div>
        <div className="w-full">
          <DataTables placeholderSearch1="Cari Nama Produk..." labelTable={`Daftar tamu undangan`} idColumnSearch1="name" data={data as any[]} columns={constcolumns} />
        </div>
      </div>
    </>
  );
}
