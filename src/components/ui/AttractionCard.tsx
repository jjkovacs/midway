import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Attraction } from '../../data/attractions';
import { attractionThumb } from '../../assets/images/images';

export default function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <Link
      to={`/attractions/${attraction.slug}`}
      className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <img
        src={attractionThumb(attraction.slug)}
        alt={attraction.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midway-navy via-midway-navy/40 to-transparent" />
      <div className="relative z-10 p-5">
        <p className="font-heading text-sm font-bold uppercase tracking-wide text-midway-gold">{attraction.price}</p>
        <h3 className="font-display text-2xl text-white">{attraction.shortName}</h3>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-white/80 transition-all group-hover:gap-2 group-hover:text-white">
          Learn more <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
