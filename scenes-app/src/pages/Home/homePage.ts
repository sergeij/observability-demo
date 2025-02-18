import { SceneAppPage } from '@grafana/scenes';
import { homeScene } from './homeScene';
import { prefixRoute } from '../../utils/utils.routing';
import { ROUTES } from '../../constants';

export const homePage = new SceneAppPage({
  title: 'Global',
  url: prefixRoute(ROUTES.Home),
  subTitle: 'Global overview',
  getScene: () => homeScene(),
});
