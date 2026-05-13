export type Event = {
  id: string;
  title: string;
  description?: string | null;

  type: 'Social' | 'Workshop' | 'Career' | 'Panel';

  status: 'upcoming' | 'ongoing' | 'past';

  start_date: string | null;
  end_date: string | null;

  location: string | null;

  flyer_url?: string | null;
  rsvp_url?: string | null;

  featured?: boolean | null;

  start_time: string | null;
  end_time: string | null;
};