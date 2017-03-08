import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import InfoChemicalScreen from './components/info_chemical_screen';
import InfoFuelOxygenScreen from './components/info_fuel_oxygen_screen';
import InfoForrestScreen from './components/info_forrest_screen';
import AlarmScreen from './components/alarm_screen';
import WhoScreen from './components/who_screen';
import MenAndWomenScreen from './components/men_and_women_screen';
import TriangleScreen from './components/triangle_screen';
import BreakTriangleScreen from './components/break_triangle_screen';
import LadderScreen from './components/ladder_screen';
import ChooseScreen from './components/choose_screen';
import NeedScreen from './components/need_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

skoash.start(
    <skoash.Game
        config={config}
        screens={[
            iOSScreen,
            TitleScreen,
            InfoChemicalScreen,
            InfoFuelOxygenScreen,
            InfoForrestScreen,
            AlarmScreen,
            WhoScreen,
            MenAndWomenScreen,
            TriangleScreen,
            BreakTriangleScreen,
            LadderScreen,
            ChooseScreen,
            NeedScreen,
            FlipScreen,
        ]}
        menus={{
            quit: QuitScreen,
        }}
        loader={<Loader />}
        assets={[
            <skoash.Audio ref="bkg-1" type="background" src={`${CMWN.MEDIA.EFFECT}s-bkg-1.mp3`} loop />,
            <skoash.Audio ref="button" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-bu-1.mp3`} />,
            <skoash.Audio ref="screen-complete" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-bu-2.mp3`} />,
            <div className="background BKG-2" />,
            <div className="background BKG-3" />,
        ]}
    />
);
