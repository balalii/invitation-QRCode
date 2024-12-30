'use client';
import { Button } from '../ui/button';
import { DataTables } from '../DataTable/DataTables';
import { ColumnDef } from '@tanstack/react-table';
import DeleteComment from './DeleteComment';
import { Invitation, InvitationGreeting } from '@prisma/client';
import { useSession } from 'next-auth/react';

interface ICommentList extends InvitationGreeting {
  invitation?: Invitation;
}

export default function Comments({ data }: { data: ICommentList[] }) {
  const { data: session } = useSession();
  const userRole = session?.user?.role as string;

  const transformedData = data.map((item) => ({
    ...item,
    invitation: item.invitation?.name || 'Unknown',
  }));

  const constcolumns: ColumnDef<InvitationGreeting>[] = [
    {
      accessorKey: 'no',
      header: 'No',
      cell: ({ row }) => <div className="capitalize">{row.index + 1}</div>,
    },
    {
      accessorKey: 'invitation',
      header: 'Nama pengirim ',
      cell: ({ row }) => {
        return <div className="capitalize min-w-48">{row.getValue('invitation')}</div>;
      },
    },
    {
      accessorKey: 'greeting',
      header: 'Ucapan',
      cell: ({ row }) => <div className="capitalize min-w-80">{row.getValue('greeting')}</div>,
    },
    {
      accessorKey: 'id',
      header: 'Action',
      cell: ({ row }) => <div className="capitalize min-w-32 text-center">{userRole === 'SUPERADMIN' ? <DeleteComment id={row.getValue('id')} /> : '-'} </div>,
    },
  ];

  return (
    <>
      <div>
        <div className="w-full">
          <DataTables placeholderSearch1="Cari nama..." labelTable={`Daftar ucapan`} idColumnSearch1="invitation" data={transformedData as InvitationGreeting[]} columns={constcolumns} />
        </div>
      </div>
    </>
  );
}
