import { FlipProvider, FlipContext } from './FlipProvider';
export { FlipProvider, FlipContext };
export declare type FlipID = string;
export interface AnimationOptions {
    duration?: number;
    easing?: (x: number) => number;
    delay?: number;
    animateColor?: boolean;
}
export interface FlipHtmlElement extends Element {
    dataset: {
        flipId: FlipID;
    };
}
export declare const useFlip: (rootId: string, options?: AnimationOptions, deps?: any) => {
    pause: () => void;
    resume: () => void;
};
