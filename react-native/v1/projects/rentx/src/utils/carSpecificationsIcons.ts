import { SvgProps } from 'react-native-svg';

import SpeedSvg from '@assets/svg/speed.svg';
import UpSvg from '@assets/svg/up.svg';
import SteeringWheelSvg from '@assets/svg/steering-wheel.svg';
import GasolineSvg from '@assets/svg/gasoline.svg';
import PeopleSvg from '@assets/svg/people.svg';
import GearshiftSvg from '@assets/svg/gearshift.svg';
import EnergySvg from '@assets/svg/energy.svg';
import HybridSvg from '@assets/svg/hybrid.svg';

export const carSpecificationsIcons: { [key: string]: React.FC<SvgProps> } = {
  speed: SpeedSvg,
  acceleration: UpSvg,
  electric: EnergySvg,
  turning_diameter: SteeringWheelSvg,
  electric_motor: EnergySvg,
  gasoline_motor: GasolineSvg,
  hybrid_motor: HybridSvg,
  exchange: GearshiftSvg,
  seats: PeopleSvg,
};