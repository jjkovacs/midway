import AttractionTemplate from '../../components/attractions/AttractionTemplate';
import { getAttractionBySlug } from '../../data/attractions';

const attraction = getAttractionBySlug('batting-cages')!;

export default function BattingCages() {
  return <AttractionTemplate attraction={attraction} />;
}
