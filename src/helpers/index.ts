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
    showLeft: { x: SCREEN_DIRECTION.LEFT }
  },
  right: {
    show: { x: SCREEN_DIRECTION.SHOW },
    showRight: { x: SCREEN_DIRECTION.RIGHT }
  },
  Top: {
    show: { x: SCREEN_DIRECTION.SHOW },
    showTop: { x: SCREEN_DIRECTION.TOP }
  },
  Bottom: {
    show: { x: SCREEN_DIRECTION.SHOW },
    showBottom: { x: SCREEN_DIRECTION.BOTTOM }
  }
};
