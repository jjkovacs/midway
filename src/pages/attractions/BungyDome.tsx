import AttractionTemplate from '../../components/attractions/AttractionTemplate';
import { getAttractionBySlug } from '../../data/attractions';

const attraction = getAttractionBySlug('bungy-dome')!;

export default function BungyDome() {
  return <AttractionTemplate attraction={attraction} />;
}
