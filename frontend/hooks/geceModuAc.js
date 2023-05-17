import { useState } from "react";

const useGeceModu = (baslangicDegeri) => {
  const [geceModu, setGeceModu] = useState(baslangicDegeri);

  return [geceModu, setGeceModu];
};

export default useGeceModu;
