'use client';
import { Button } from '../ui/button';
import { DataTables } from '../DataTable/DataTables';
import { ColumnDef } from '@tanstack/react-table';
import AddBank from './AddBank';
import { formatNumberByThree } from '@/lib/formatNumberByThree';
import DeleteBank from './DeleteBank';
import { Bank } from '@prisma/client';
import { useSession } from 'next-auth/react';

export default function ListBank({ bank }: { bank: Bank[] }) {
  const { data: session } = useSession();
  const userRole = session?.user?.role as string;

  const constcolumns: ColumnDef<Bank>[] = [
    {
      accessorKey: 'no',
      header: 'No',
      cell: ({ row }) => <div className="capitalize">{row.index + 1}</div>,
    },
    {
      accessorKey: 'name',
      header: 'Bank ',
      cell: ({ row }) => <div className="capitalize pr-6">{row.getValue('name')}</div>,
    },
    {
      accessorKey: 'recipient',
      header: 'Nama Penerima ',
      cell: ({ row }) => <div className="capitalize pr-6 min-w-36">{row.getValue('recipient')}</div>,
    },
    {
      accessorKey: 'accountNumber',
      header: 'Nomor Rekening',
      cell: ({ row }) => <div className="capitalize min-w-32">{row.getValue('accountNumber')}</div>,
    },
    {
      accessorKey: 'id',
      header: 'Action',
      cell: ({ row }) => <div className="capitalize min-w-32 text-center">{userRole === 'SUPERADMIN' ? <DeleteBank id={row.getValue('id')} /> : '-'} </div>,
    },
  ];

  return (
    <>
      <div>
        <div className="flex justify-end mb-5">{userRole === 'SUPERADMIN' && <AddBank />}</div>
        <div className="w-full">
          <DataTables placeholderSearch1="Cari bank..." labelTable={`Daftar bank`} idColumnSearch1="name" data={bank as Bank[]} columns={constcolumns} />
        </div>
      </div>
    </>
  );
}
