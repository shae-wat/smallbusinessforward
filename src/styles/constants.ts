export const gutterSizePx = 16;
export const columnSizePx = 80;

export const rhythmSizePx = 24;

export const gutter = (numGutters: number) => {
  return gutterSizePx * numGutters;
};

export const column = (numColumns: number) => {
  return columnSizePx * numColumns;
};

export const rhythm = (numRhythms: number) => {
  return rhythmSizePx * numRhythms;
};

export const CONTENT_MAX_WIDTH = column(14) + gutter(13);
export const HEADER_HEIGHT = 10;
