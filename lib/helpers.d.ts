import { FlipID, FlipHtmlElement } from './useFlip';
export interface FlipKeyframeEffectOptions extends KeyframeEffectOptions {
    staggerStep?: number;
    stagger?: number;
}
export declare function debounce<F extends (...args: any[]) => any>(cb: F, wait: number): (...args: Parameters<F>) => void;
export declare const isRunning: (animation: Animation) => boolean;
export declare const isPaused: (animation: Animation) => boolean;
export declare const not: (bool: boolean) => boolean;
export declare const emptyMap: (map: Map<any, any>) => boolean;
export declare const getRect: (element: Element) => DOMRect;
export declare const getFlipId: (el: Element & FlipHtmlElement) => string;
export declare const getComputedBgColor: (element: Element) => string;
export declare const getElementByFlipId: (flipId: FlipID) => FlipHtmlElement;
export declare const getElementsByRootId: (rootId: string) => NodeListOf<Element>;
export declare const getTranslateX: (cachedRect: DOMRect, nextRect: DOMRect) => number;
export declare const getTranslateY: (cachedRect: DOMRect, nextRect: DOMRect) => number;
export declare const getScaleX: (cachedRect: DOMRect | ClientRect, nextRect: DOMRect | ClientRect) => number;
export declare const getScaleY: (cachedRect: DOMRect | ClientRect, nextRect: DOMRect | ClientRect) => number;
export declare const createAnimation: (element: FlipHtmlElement, keyframes: Keyframe[], options: FlipKeyframeEffectOptions) => Animation;
