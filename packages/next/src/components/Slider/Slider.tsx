import React, { CSSProperties, useMemo, useState } from 'react';
import classes from './Slider.module.css';
import { BasicProps } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface SliderProps extends BasicProps {
  steps: number[];
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: (value: number) => void;
}

const Slider = (props: SliderProps) => {
  const { steps, className = '', style, value = 0, onChange, m, p, px, py, c, bg, w, h } = props;

  const [currentValue, setCurrentValue] = useState(value);

  const sliderStyle = useMemo(() => {
    return {
      margin: resolveStyleProp(m),
      padding: resolveStyleProp(p),
      paddingLeft: resolveStyleProp(px),
      paddingRight: resolveStyleProp(px),
      paddingTop: resolveStyleProp(py),
      paddingBottom: resolveStyleProp(py),
      color: resolveStyleProp(c),
      backgroundColor: resolveStyleProp(bg),
      width: resolveStyleProp(w),
      height: resolveStyleProp(h),
      ...style,
    };
  }, [style, m, p, px, py, c, bg, w, h]);

  const handleStepClick = (step: number) => {
    setCurrentValue(step);
    onChange?.(step);
  };

  return (
    <div className={`${classes['rangkaui-slider']} ${className}`} style={sliderStyle}>
      <div className={classes.track}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${classes.step} ${currentValue >= step ? classes.active : ''}`}
            onClick={() => handleStepClick(step)}
          >
            {step}%
          </div>
        ))}
        <div
          className={classes.indicator}
          style={{ left: `${(currentValue / steps[steps.length - 1]) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Slider;
