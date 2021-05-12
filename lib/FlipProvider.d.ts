import * as React from 'react';
export declare type Rect = DOMRect | ClientRect;
export declare type CachedStyles = Map<string, {
    styles: {
        bgColor: string;
    };
    rect: Rect;
}>;
export declare type Animations = Map<string, Animation>;
export declare type ChildKeyCache = Map<string, React.ReactElement>;
interface FlipContext {
    forceRender: () => void;
    pauseAll: () => void;
    resumeAll: () => void;
    cachedAnimations: Animations;
    cachedStyles: CachedStyles;
    childKeyCache: ChildKeyCache;
}
export declare const FlipContext: React.Context<FlipContext>;
export declare const FlipProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export {};
