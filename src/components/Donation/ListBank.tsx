'use client';
import { ScrollText, SendHorizontal, Banknote } from 'lucide-react';
import { Button } from '../ui/button';
import { DataTables } from '../DataTable/DataTables';
import { ColumnDef } from '@tanstack/react-table';
import FormatRupiah from '../elements/FormatRupiah';
import AddBank from './AddBank';

export const DATA_BANK = [
  {
    no: '504-434-434-323',
    bank: 'BRI',
  },
  {
    no: '543-534-534-878',
    bank: 'Mandiri',
  },
  {
    no: '543-455-534-878',
    bank: 'BCA',
  },
];

export default function ListBank() {
  const constcolumns: ColumnDef<any>[] = [
    {
      accessorKey: 'no',
      header: 'No',
      cell: ({ row }) => <div className="capitalize">{row.index + 1}</div>,
    },
    {
      accessorKey: 'bank',
      header: 'Bank ',
      cell: ({ row }) => <div className="capitalize pr-6">{row.getValue('bank')}</div>,
    },
    {
      accessorKey: 'no',
      header: 'Nomor Rekening',
      cell: ({ row }) => <div className="capitalize min-w-32">{row.getValue('no')}</div>,
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
      <div>
        <div className="flex justify-end mb-5">
          <AddBank />
        </div>
        <div className="w-full">
          <DataTables placeholderSearch1="Cari bank..." labelTable={`Daftar bank`} idColumnSearch1="bank" data={DATA_BANK as any[]} columns={constcolumns} />
        </div>
      </div>
    </>
  );
}
