export type Positions = { [x: string]: ClientRect | DOMRect }
export type Position = ClientRect | DOMRect
export type UFG = (args: FlipGroupArgs) => void
export type USF = (args: SimpleFlipArgs) => void

export type FlipTestElement = Pick<
  FlipElement,
  'reportPosition' | 'dataset'
> & {
  style: {
    transform: string
    transition: string
  }
  getBoundingClientRect: () => {
    top: number
    left: number
    width: number
    height: number
  }
}

export interface FlipElement extends HTMLElement {
  reportPosition?: (arg: Positions) => void
}

export interface FlipOptions {
  duration?: number
  easing?: string
  delay?: number
  transformOrigin?: string
}

export interface FlipGroupArgs {
  flipId: string
  deps: any
  onTransitionEnd?: () => void
  opts?: FlipOptions
  __TEST__?: boolean
  __TEST_REF__?: React.MutableRefObject<TestRef>
}

export interface SimpleFlipArgs {
  flipId: string
  flag: boolean
  onTransitionEnd?: () => void
  isShared?: boolean
  opts?: FlipOptions
  __TEST__?: boolean
}

export interface TestRef {
  addEventListener?: (name: string, _: any) => void
  removeEventListener?: (name: string, _: any) => void
  children?: FlipTestElement[]
  getChildPosition?: (key: string, pos: any) => void
  onTransitionEnd?: (positions: Positions) => void
  log?: (msg: string) => void
}
