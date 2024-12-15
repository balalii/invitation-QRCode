
import { getInvitationGreeting } from '@/actions/invitationGreeting.action';
import Comments from '@/components/Comments/Comments';
import { InvitationGreeting } from '@prisma/client';

export default async function Page() {
    // Fetch data
    const { invitationGreeting, errorInvitationGreeting } = await getInvitationGreeting();
  
    if (errorInvitationGreeting) {
      return (
        <div className="px-5 mx-auto mt-10 space-y-6 w-full">
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold text-2xl capitalize">Error</h1>
            <p className="text-sm text-gray-500">Failed to fetch Bank data.</p>
          </div>
        </div>
      );
    }
  return (
    <div className="px-5 mx-auto mt-10 space-y-6 w-full">
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold text-2xl capitalize">Ucapan Tamu Undangan</h1>
        <p className="text-sm text-gray-500">Disini anda dapat melihat dan menghapus ucapan dari tamu undangan.</p>
      </div>
      <Comments data={invitationGreeting as InvitationGreeting[]} />
    </div>
  );
}
