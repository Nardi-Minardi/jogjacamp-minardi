import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import DependentSelect from "../forms/dependentSelect";
import { useSearchParams } from 'react-router-dom';

const Sidebar = ({ dataProvinsi }) => {
  const [searchParams] = useSearchParams();
  const provinsi_id = searchParams.get('provinsi_id');
  const [provinsiId, setProvinsiId] = useState(null);
  const [kabupatenId, setKabupatenId] = useState(null);
  const [kecamatanId, setKecamatanId] = useState(null);

  useEffect(() => {
    if (dataProvinsi) {
      setProvinsiId(dataProvinsi[0]?.id);
    }
    if (provinsi_id) {
      setProvinsiId(provinsi_id);
    }
  }, [dataProvinsi, provinsi_id]);

  const getDataKabupaten = async () => {
    const res = await axios.get(
      `http://apikab.jcamp.pt/public/api/v1/reference/regencies_of/${provinsiId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    return res;
  };

  const { data: dataKabupaten } = useQuery(
    ["kabupaten", provinsiId],
    getDataKabupaten,
    {
      enabled: !!dataProvinsi && !!provinsiId,
    }
  );

  useEffect(() => {
    if (dataKabupaten) {
      setKabupatenId(dataKabupaten.data[0]?.id);
    }
  }, [dataKabupaten]);

  const getDataKecamatan = async () => {
    const res = await axios.get(
      `http://apikab.jcamp.pt/public/api/v1/reference/districts_of/${kabupatenId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    return res;
  };

  const { data: dataKecamatan } = useQuery(
    ["kecamatan", kabupatenId],
    getDataKecamatan,
    {
      enabled: !!dataKabupaten && !!kabupatenId,
    }
  );

  useEffect(() => {
    if (dataKecamatan) {
      setKecamatanId(dataKecamatan.data[0]?.id);
    }
  }
    , [dataKecamatan]);

  const getDataDesa = async () => {
    const res = await axios.get(
      `http://apikab.jcamp.pt/public/api/v1/reference/villages_of/${kecamatanId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    return res;
  };

  const { data: dataDesa } = useQuery(["desa", kecamatanId], getDataDesa, {
    enabled: !!dataKecamatan && !!kecamatanId,
  });


  return (
    <div className='w-full lg:w-1/2 xl:w-1/2 bg-gray-100 p-5'>
      <h5 className='text-xl font-bold'>Filter</h5>
      <DependentSelect
        dataProvinsi={dataProvinsi}
        dataKabupaten={dataKabupaten?.data}
        dataKecamatan={dataKecamatan?.data}
        dataDesa={dataDesa?.data}
        setProvinsiId={setProvinsiId}
        setKabupatenId={setKabupatenId}
        setKecamatanId={setKecamatanId}
        paramsProvinsiId={provinsi_id}
      />
    </div>
  );
};

export default Sidebar;
