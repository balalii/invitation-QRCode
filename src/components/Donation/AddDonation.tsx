'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Banknote, Landmark } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import InputForm from '../Form/InputForm';
import ButtonForm from '../Form/ButtonForm';
import Link from 'next/link';

export default function AddDonation() {
  // const dataAuth = useUser();
  // const tokenUser = dataAuth.data?.token;

  //    const searchParams = useSearchParams();
  //     const sortData = searchParams.get('filterData') && searchParams.get('filterData') ? (searchParams.get('filterData') as string) : '';

  //     const formattedDateRange = useFormattedDateRange();
  //     const formattedDate = formattedDateRange;
  //     // react query
  //     const queryClient = useQueryClient();

  //     const [errorMessage, formAction] = useFormState(addDebt, undefined);

  //     // nominal
  //     const { nominal: nominal1, handleNominal: handleNominal1 } = useInputRupiah();

  //     // Function to handle change in nominal inputs
  //     const handleChange = (value: string) => {
  //       handleNominal1(value);
  //     };

  //     const [dialogOpen, setDialogOpen] = useState(false);

  //     useEffect(() => {
  //       // jika berhasil berikan notif
  //       if (errorMessage && 'status' in errorMessage && errorMessage.status === 200) {
  //         toast({
  //           title: 'Status Pembayaran',
  //           description: 'Pembayaran berhasil ditambahkan!.',
  //         });
  //         // Reset nominal and valuePayment to default values
  //         handleChange('');
  //         // Close the dialog
  //         setDialogOpen(false);
  //       }
  //       if (errorMessage && 'status' in errorMessage && errorMessage.status !== 200) {
  //         toast({
  //           title: 'Status Pembayaran',
  //           description: 'Pembayaran gagal ditambahkan.',
  //           variant: 'destructive',
  //         });
  //         // redirect('/ecommerce/products');
  //       }

  //       queryClient.invalidateQueries({ queryKey: ['purchaseOrder', formattedDate, sortData] });
  //     }, [errorMessage, queryClient, toast]);

  const dataBank = [
    {
      label: 'BRI',
      value: 'bri',
    },
    {
      label: 'Mandiri',
      value: 'mandiri',
    },
  ];
  return (
    // <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
    <Dialog>
      <DialogTrigger asChild>
        <Button className="uppercase mt-4 rounded-full bg-[var(--primary-color)] text-lg font-bold text-white px-8 !py-3 shadow">Kirim Hadiah</Button>
      </DialogTrigger>
      <DialogContent className="py-12 lg:py-8 max-h-screen overflow-y-auto">
        <form>
          <DialogHeader>
            <DialogTitle className="text-center lg:text-left ">Kirim Hadiah</DialogTitle>
            <DialogDescription className=" space-y-2  ">
              <p className="pb-2 max-w-sm">Silahkan inputkan data yang sesuai di bawah ini untuk menambahkan data.</p>
              <div className="text-left !mt-2  grid grid-cols-12 gap-4 ">
                {/* <input type="text" name="token" hidden readOnly defaultValue={tokenUser} value={tokenUser} /> */}
                <div className="col-span-full xl:col-span-12">
                  <InputForm
                    errors={undefined}
                    placeholder="Pilih Bank"
                    id="role"
                    label="Bank"
                    className="cursor-pointer"
                    options={
                      dataBank &&
                      dataBank?.map((data) => ({
                        label: data.label,
                        value: data.value,
                      }))
                    }
                  />
                </div>

                <div className="col-span-full xl:col-span-12">
                  <InputForm errors={undefined} type={'text'} id="no" label="Nominal Transfer" />
                </div>
                {/* <div className="col-span-full xl:col-span-6">
                  <InputForm errors={undefined} id="nominal" label="Nominal " value={'hallo'} />
                </div> */}
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-row items-center !space-y-0 justify-end space-x-4 pt-8">
            <Link href="/success-payment">
              <ButtonForm type="submit" className={`m-0 w-full lg:w-fit lg:!px-5 bg-[var(--primary-color)]`} label={'Kirim Hadiah'} />
            </Link>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
