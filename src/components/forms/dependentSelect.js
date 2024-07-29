import React from 'react';

const DependentSelect = ({
  dataProvinsi,
  dataKabupaten,
  dataKecamatan,
  dataDesa,
  setProvinsiId,
  setKabupatenId,
  setKecamatanId,
  paramsProvinsiId,
}) => {

  return (
    <div className='flex flex-col gap-5 mt-5'>
      <div>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='Provinsi'>
          Provinsi
        </label>
        <select
          onChange={(e) => {
            // save state in params
            window.history.pushState(null, '', `?provinsi_id=${e.target.value}`);
            setProvinsiId(e.target.value)
          }}
          className='border-2 cursor-pointer border-gray-300 px-5 w-full h-10 rounded-lg'>
          {dataProvinsi?.map((provinsi, index) => (
            <option key={index} value={provinsi.id}
              {...(paramsProvinsiId == provinsi.id ? { selected: true } : {})}
            >
              {provinsi.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='Kabupaten'>
          Kabupaten
        </label>
        <select
          onChange={(e) => setKabupatenId(e.target.value)}
          className='border-2 border-gray-300 px-5 w-full h-10 rounded-lg'>
          {dataKabupaten?.map((kabupaten, index) => (
            <option key={index} value={kabupaten.id}>
              {kabupaten.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='Kecamatan'>
          Kecamatan
        </label>
        <select
          onChange={(e) => setKecamatanId(e.target.value)}
          className='border-2 border-gray-300 px-5 w-full h-10 rounded-lg'>
          {dataKecamatan?.map((kecamatan, index) => (
            <option key={index} value={kecamatan.id}>
              {kecamatan.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='Desa'>
          Desa
        </label>
        <select className='border-2 border-gray-300 px-5 w-full h-10 rounded-lg'>
          {dataDesa?.map((desa, index) => (
            <option key={index} value={desa.id}>
              {desa.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DependentSelect;