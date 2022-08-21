enum SCREEN_DIRECTION {
  SHOW = "0",
  LEFT = "-100vw",
  RIGHT = "100vw",
  TOP = "-100vh",
  BOTTOM = "100vh"
}

export const DIRECTION_VARIANT = {
  left: {
    show: { x: SCREEN_DIRECTION.SHOW },
    hide: { x: SCREEN_DIRECTION.LEFT }
  },
  right: {
    show: { x: SCREEN_DIRECTION.SHOW },
    hide: { x: SCREEN_DIRECTION.RIGHT }
  },
  top: {
    show: { y: SCREEN_DIRECTION.SHOW },
    hide: { y: SCREEN_DIRECTION.TOP }
  },
  bottom: {
    show: { y: SCREEN_DIRECTION.SHOW },
    hide: { y: SCREEN_DIRECTION.BOTTOM }
  }
};

export interface variants_type {
  left?: direction;
  right?: direction;
  top?: direction;
  bottom?: direction;
}

export interface direction {
  show: state;
  hide: state;
}

export interface state {
  x: SCREEN_DIRECTION;
}
