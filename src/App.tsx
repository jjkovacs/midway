import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

import GoKarts from './pages/attractions/GoKarts';
import SpinZone from './pages/attractions/SpinZone';
import BungyDome from './pages/attractions/BungyDome';
import RockClimbing from './pages/attractions/RockClimbing';
import MiniGolf from './pages/attractions/MiniGolf';
import GolfDrivingRange from './pages/attractions/GolfDrivingRange';
import BattingCages from './pages/attractions/BattingCages';

import Pricing from './pages/park-info/Pricing';
import HoursAndDirections from './pages/park-info/HoursAndDirections';
import RidePolicies from './pages/park-info/RidePolicies';
import Faqs from './pages/park-info/Faqs';
import SummerJobs from './pages/park-info/SummerJobs';

import FunCards from './pages/FunCards';

import Birthdays from './pages/parties/Birthdays';
import PrivateEvents from './pages/parties/PrivateEvents';
import FieldTrips from './pages/parties/FieldTrips';
import GroupEvents from './pages/parties/GroupEvents';

import FoodAndDrinks from './pages/FoodAndDrinks';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="attractions/go-karts" element={<GoKarts />} />
        <Route path="attractions/spin-zone" element={<SpinZone />} />
        <Route path="attractions/bungy-dome" element={<BungyDome />} />
        <Route path="attractions/rock-climbing" element={<RockClimbing />} />
        <Route path="attractions/mini-golf" element={<MiniGolf />} />
        <Route path="attractions/golf-driving-range" element={<GolfDrivingRange />} />
        <Route path="attractions/batting-cages" element={<BattingCages />} />

        <Route path="park-info/pricing" element={<Pricing />} />
        <Route path="park-info/hours-and-directions" element={<HoursAndDirections />} />
        <Route path="park-info/ride-policies" element={<RidePolicies />} />
        <Route path="park-info/faqs" element={<Faqs />} />
        <Route path="park-info/summer-jobs" element={<SummerJobs />} />

        <Route path="fun-cards" element={<FunCards />} />

        <Route path="parties/birthdays" element={<Birthdays />} />
        <Route path="parties/private-events" element={<PrivateEvents />} />
        <Route path="parties/field-trips" element={<FieldTrips />} />
        <Route path="parties/group-events" element={<GroupEvents />} />

        <Route path="food-and-drinks" element={<FoodAndDrinks />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<TermsConditions />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
