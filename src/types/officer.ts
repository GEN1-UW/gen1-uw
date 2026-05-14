type Officer = {
  id: number;
  name: string;
  image: string;
  pronouns: string;
  major: string;
  fav_class: string;
  fav_lang: string;
  ask_about: string;
  fun_fact: string;
  linkedin: string;
  email: string;
};

type OfficerTerm = {
  officer_id: number;
  role: string;
  year_range: string;
  year: string;
  display_order: number;
};