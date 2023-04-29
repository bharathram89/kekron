import { Routes, Route } from 'react-router-dom';
import Profile from './components/profile';
import Gear from './components/gear';
import Weapons from './components/weapons';
import Tacticals from './components/tacticals';
import Home from './components/home';
import WeaponDetail from './components/weapons/components/weaponDetail';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/gear" element={<Gear />} />
      <Route path="/weapons" element={<Weapons />} />
      <Route path="/tacticals" element={<Tacticals />} />
      <Route path="/home" element={<Home />} />
      <Route path="/weapon/:id" element={<WeaponDetail />} />
      {/* WeaponDetail */}
    </Routes>
  );
}