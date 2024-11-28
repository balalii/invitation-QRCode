'use client';

import Comments from '@/components/Comments/Comments';
import ButtonForm from '@/components/Form/ButtonForm';
import InputForm from '@/components/Form/InputForm';

export default function Page() {
  return (
    <div className="px-5 mx-auto mt-10 space-y-6 w-full">
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold text-2xl capitalize">Pengaturan Undangan</h1>
        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque quis ratione labore cum illum libero.</p>
      </div>

      <form>
        <div className="text-left !mt-2  grid grid-cols-12 gap-4 ">
          {/* <input type="text" name="token" hidden readOnly defaultValue={tokenUser} value={tokenUser} /> */}
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'text'} id="name" label="Nama mempelai (Pria)" value="Halim Al Anshori" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'text'} id="name" label="Nama Ibu mempelai (Pria)" value="Sulastri" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'text'} id="name" label="Nama Bapak mempelai (Pria)" value="Buchtiar" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'text'} id="name" label="Alamat mempelai (Pria)" value="Sungai Bahar, Muaro Jambi, Jambi" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'text'} id="name" label="Nama mempelai (Wanita)" value="Nisa Rahma Widia" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'text'} id="name" label="Nama Ibu mempelai (Wanita)" value="Ngatijah" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'text'} id="name" label="Nama Bapak mempelai (Wanita)" value="Sutejo" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'text'} id="name" label="Alamat mempelai (Wanita)" value=" Kalibeber, Mojotengah, Wonosobo" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'date'} id="name" label="Tanggal (Akad)" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'time'} id="name" label="Tanggal (Akad)" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm
              errors={undefined}
              type={'text'}
              id="name"
              label="Alamat (Akad)"
              value="GOR Drs. H. Poedjihardjo
"
            />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'text'} id="name" label="Link Google Map (Akad)" value="https://maps.app.goo.gl/KiL4vkLurtsoWqBy6" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'date'} id="name" label="Tanggal (Resepsi)" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'time'} id="name" label="Tanggal (Resepsi)" />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm
              errors={undefined}
              type={'text'}
              id="name"
              label="Alamat (Resepsi)"
              value="GOR Drs. H. Poedjihardjo
"
            />
          </div>
          <div className="col-span-full xl:col-span-12">
            <InputForm errors={undefined} type={'text'} id="name" label="Link Google Map (Resepsi)" value="https://maps.app.goo.gl/KiL4vkLurtsoWqBy6" />
          </div>
          {/* <div className="col-span-full xl:col-span-6">
                  <InputForm errors={undefined} id="nominal" label="Nominal " value={'hallo'} />
                </div> */}
        </div>
        <div className="flex flex-row items-center !space-y-0 justify-end space-x-4 pt-8">
          <ButtonForm type="submit" className={`m-0 w-full lg:w-fit lg:!px-5 bg-[var(--primary-color)]`} label={'Simpan'} />
        </div>
      </form>
    </div>
  );
}
