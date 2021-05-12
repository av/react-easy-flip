import * as React from 'react';
import { fadeIn, fadeOut } from './keyframes';
export { fadeIn, fadeOut };
export { AnimateInOut };
interface CustomKeyframe {
    [property: string]: string | number;
}
interface AnimationKeyframes {
    from: CustomKeyframe;
    to: CustomKeyframe;
    duration: number;
    easing?: string;
}
interface AnimateInOutProps {
    children: React.ReactNode;
    in?: AnimationKeyframes;
    out?: AnimationKeyframes;
    itemAmount?: number;
    playOnFirstRender?: boolean;
}
declare const AnimateInOut: ({ children, in: inKeyframes, out: outKeyframes, playOnFirstRender, itemAmount }: AnimateInOutProps) => any;
