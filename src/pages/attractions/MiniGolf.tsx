import AttractionTemplate from '../../components/attractions/AttractionTemplate';
import { getAttractionBySlug } from '../../data/attractions';

const attraction = getAttractionBySlug('mini-golf')!;

export default function MiniGolf() {
  return <AttractionTemplate attraction={attraction} />;
}
