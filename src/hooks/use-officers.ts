import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function useOfficers() {
  const [officers, setOfficers] = useState([]);
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data: officersData, error: officersError } = await supabase
        .from("officers")
        .select("*");

      const { data: termsData, error: termsError } = await supabase
        .from("officer_terms")
        .select("*");

      if (officersError) console.error(officersError);
      if (termsError) console.error(termsError);

      setOfficers(officersData ?? []);
      setTerms(termsData ?? []);

      setLoading(false);
    };

    fetchData();
  }, []);

  return { officers, terms, loading };
}