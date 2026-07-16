import { useState, useEffect } from "react";

interface CountryInfo {
  country: string;
  cities: string[];
}

export function useLocationData() {
  const [countriesData, setCountriesData] = useState<CountryInfo[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      const url = "https://countriesnow.space/api/v0.1/countries";
      try {
        const response = await fetch(url);
        const result = await response.json();
        let { data } = result;

        data = data.sort((a: CountryInfo, b: CountryInfo) => {
          const nameA = a.country.toUpperCase();
          const nameB = b.country.toUpperCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });

        setCountriesData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching locations:", error);
        setLoading(false);
      }
    };
    fetchLocation();
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);
    if (countryName) {
      const matched = countriesData.find((c) => c.country === countryName);
      if (matched && matched.cities) {
        setCities([...matched.cities].sort());
      } else {
        setCities([]);
      }
    } else {
      setCities([]);
    }
  };

  return {
    countriesData,
    cities,
    selectedCountry,
    loading,
    handleCountryChange,
  };
}
