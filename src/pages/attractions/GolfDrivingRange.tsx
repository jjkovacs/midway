import AttractionTemplate from '../../components/attractions/AttractionTemplate';
import { getAttractionBySlug } from '../../data/attractions';

const attraction = getAttractionBySlug('golf-driving-range')!;

export default function GolfDrivingRange() {
  return <AttractionTemplate attraction={attraction} />;
}
