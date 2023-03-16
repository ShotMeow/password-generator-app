import React, { FC } from "react";
import { getTrackBackground, Range as ReactRange } from "react-range";
import colors from "tailwindcss/colors";

interface Props {
  min: number;
  max: number;
  onChangeRange: (values: number[]) => void;
  values: number[];
}

export const Range: FC<Props> = ({ min, max, onChangeRange, values }) => {
  return (
    <ReactRange
      min={min}
      max={max}
      onChange={onChangeRange}
      values={values}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{ ...props.style }}
        >
          <div
            className="w-full h-1.5 bg-green-300 rounded-sm"
            ref={props.ref}
            style={{
              background: getTrackBackground({
                values,
                colors: [colors.green["300"], colors.zinc["900"]],
                min: min,
                max: max,
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          className={`w-6 h-6 rounded-full focus:outline-none focus:bg-zinc-800  focus:border-2 border-green-300 ${
            isDragged ? "bg-zinc-800 border-2" : "bg-white"
          }`}
        />
      )}
    />
  );
};
