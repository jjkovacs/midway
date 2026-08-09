import AttractionTemplate from '../../components/attractions/AttractionTemplate';
import { getAttractionBySlug } from '../../data/attractions';

const attraction = getAttractionBySlug('rock-climbing')!;

export default function RockClimbing() {
  return <AttractionTemplate attraction={attraction} />;
}
