import AttractionTemplate from '../../components/attractions/AttractionTemplate';
import { getAttractionBySlug } from '../../data/attractions';

const attraction = getAttractionBySlug('spin-zone')!;

export default function SpinZone() {
  return <AttractionTemplate attraction={attraction} />;
}
