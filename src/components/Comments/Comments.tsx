'use client';
import { Button } from '../ui/button';
import { DataTables } from '../DataTable/DataTables';
import { ColumnDef } from '@tanstack/react-table';

export const DATA_COMMENTS = [
  {
    name: 'Ucup bin slamet',
    text: 'Ih ganteng bgt si ucup yak',
  },
  {
    name: 'Asep bin slamet',
    text: 'Ienggak gantengan gw',
  },
  {
    name: 'Ucup bin slamet',
    text: 'Ih ganteng bgt si ucup yak',
  },
  {
    name: 'Asep bin slamet',
    text: 'Ienggak gantengan gw',
  },
  {
    name: 'Ucup bin slamet',
    text: 'Ih ganteng bgt si ucup yak',
  },
  {
    name: 'Asep bin slamet',
    text: 'Ienggak gantengan gw',
  },
  {
    name: 'Ucup bin slamet',
    text: 'Ih ganteng bgt si ucup yak',
  },
  {
    name: 'Asep bin slamet',
    text: 'Ienggak gantengan gw',
  },
];

export default function Comments() {
  const constcolumns: ColumnDef<any>[] = [
    {
      accessorKey: 'no',
      header: 'No',
      cell: ({ row }) => <div className="capitalize">{row.index + 1}</div>,
    },
    {
      accessorKey: 'name',
      header: 'Nama',
      cell: ({ row }) => <div className="capitalize min-w-32">{row.getValue('name')}</div>,
    },
    {
      accessorKey: 'text',
      header: 'Ucapan',
      cell: ({ row }) => <div className="capitalize min-w-80">{row.getValue('text')}</div>,
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
        <div className="w-full">
          <DataTables placeholderSearch1="Cari nama..." labelTable={`Daftar ucapan`} idColumnSearch1="name" data={DATA_COMMENTS as any[]} columns={constcolumns} />
        </div>
      </div>
    </>
  );
}
