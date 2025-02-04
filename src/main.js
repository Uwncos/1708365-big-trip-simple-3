import Filters from './view/filters.js';
import {render} from './framework/render';
import BoardPresenter from './presenter/board-presenter';
import ModelWaypoint from './model/model-waypoint';
import {mockInit, waypoints} from './mock/point';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const container = document.querySelector('.trip-events');

mockInit(5, 10);
const modelWaypoints = new ModelWaypoint(waypoints);
const boardPresenter = new BoardPresenter({boardContainer: container, waypointsModel: modelWaypoints});

render(new Filters(), siteHeaderElement);
boardPresenter.init();
