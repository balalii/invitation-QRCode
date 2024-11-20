'use client';
import { ScrollText, SendHorizontal, Banknote } from 'lucide-react';
import { Button } from '../ui/button';
import { DataTables } from '../DataTable/DataTables';
import { ColumnDef } from '@tanstack/react-table';
import AddInvitation from './AddBank';
import FormatRupiah from '../elements/FormatRupiah';

export default function Donation() {
  const data = [
    {
      name: 'Ucup Bin Selamet',
      bank: 'BRI',
      nominal: 100000,
    },
    {
      name: 'Asep Uhuy Tralala',
      bank: 'Mandiri',
      nominal: 1000000,
    },
    {
      name: 'Ucup Bin Selamet',
      bank: 'BRI',
      nominal: 100000,
    },
    {
      name: 'Asep Uhuy Tralala',
      bank: 'Mandiri',
      nominal: 1000000,
    },
    {
      name: 'Ucup Bin Selamet',
      bank: 'BRI',
      nominal: 100000,
    },
    {
      name: 'Asep Uhuy Tralala',
      bank: 'Mandiri',
      nominal: 1000000,
    },
    {
      name: 'Ucup Bin Selamet',
      bank: 'BRI',
      nominal: 100000,
    },
    {
      name: 'Asep Uhuy Tralala',
      bank: 'Mandiri',
      nominal: 1000000,
    },
    {
      name: 'Ucup Bin Selamet',
      bank: 'BRI',
      nominal: 100000,
    },
    {
      name: 'Asep Uhuy Tralala',
      bank: 'Mandiri',
      nominal: 1000000,
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
      cell: ({ row }) => <div className="capitalize min-w-48">{row.getValue('name')}</div>,
    },
    {
      accessorKey: 'bank',
      header: 'Bank ',
      cell: ({ row }) => <div className="capitalize pr-6">{row.getValue('bank')}</div>,
    },
    {
      accessorKey: 'nominal',
      header: 'Nominal ',
      cell: ({ row }) => <div className="capitalize pr-6">{FormatRupiah(row.getValue('nominal'))}</div>,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-x-5">
        <article className="rounded-lg border border-gray-100 bg-white p-6 shadow ">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Sumbangan</p>

              <p className="text-lg font-semibold text-gray-900">{FormatRupiah(20000000)}</p>
            </div>

            <span className="rounded-full bg-green-100 p-3 text-green-600">
              <Banknote />
            </span>
          </div>
        </article>
      </div>

      <div>
        <div className="w-full">
          <DataTables placeholderSearch1="Cari Nama..." labelTable={`Daftar sumbangan`} idColumnSearch1="name" data={data as any[]} columns={constcolumns} />
        </div>
      </div>
    </>
  );
}
