import Link from 'next/link';

export default function Page() {
  return (
    <div className="grid h-screen place-content-center bg-white px-10">
      <div className="">
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Cara pembayaran</p>

        <p className="mt-4 mb-3 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quam odit unde quasi nesciunt libero ex.</p>

        <ol className="list-decimal list-inside mb-3">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>{' '}
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ol>

        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quam odit unde quasi nesciunt libero ex.</p>

        <Link href="/invitation" className="mt-6 inline-block rounded-full bg-[var(--primary-color)] px-10 py-3 text-sm  text-white font-semibold">
          Kembali
        </Link>
      </div>
    </div>
  );
}
