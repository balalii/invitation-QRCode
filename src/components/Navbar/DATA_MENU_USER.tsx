import { Banknote, BookUser, MessageSquareText, ScrollText, Settings } from 'lucide-react';

type TDATA_MENU_USER = {
  title: string;
  path: string;
  svg?: React.ReactElement;
};

export const DATA_MENU_USER: TDATA_MENU_USER[] = [
  {
    title: 'Undangan',
    path: '/invitation',
    svg: <ScrollText />,
  },
  {
    title: 'Buku Tamu',
    path: '/guest-book',
    svg: <BookUser />,
  },
  {
    title: 'Donasi',
    path: '/donation',
    svg: <Banknote />,
  },
  {
    title: 'Komentar',
    path: '/comment',
    svg: <MessageSquareText />,
  },
  {
    title: 'Pengaturan',
    path: '/settings',
    svg: <Settings />,
  },
];
