import { createContext, useContext, useState, useEffect } from 'react';

const RegionContext = createContext({
  region: '',
  handleSetRegion: (e: React.ChangeEvent<HTMLSelectElement>) => {},
});

const RegionProvider = ({ children }: { children: React.ReactNode }) => {
  const [region, setRegion] = useState('');

  const handleSetRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
    window.localStorage.setItem('region', e.target.value);
  };

  useEffect(() => {
    const region = window.localStorage.getItem('region');
    if (region) setRegion(region);
  }, []);

  return <RegionContext.Provider value={{ region, handleSetRegion }}>{children}</RegionContext.Provider>;
};

export default RegionProvider;

export const useRegion = () => useContext(RegionContext);
