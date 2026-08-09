import AttractionTemplate from '../../components/attractions/AttractionTemplate';
import { getAttractionBySlug } from '../../data/attractions';

const attraction = getAttractionBySlug('go-karts')!;

export default function GoKarts() {
  return <AttractionTemplate attraction={attraction} />;
}
