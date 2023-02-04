export interface cssData {
  stats: Stats;
  css: Css;
}

export interface Stats {
  size: number;
  gzipSize: number;
  humanizedSize: string;
  humanizedGzipSize: string;
  rules: Rules;
  selectors: Selectors;
  declarations: Declarations;
  mediaQueries: MediaQueries;
}

export interface Rules {
  total: number;
  size: Size;
  selectorByRuleSizes: SelectorByRuleSize[];
}

export interface Size {
  graph: number[];
  max: number;
  average: number;
}

export interface SelectorByRuleSize {
  selector: string;
  declarations: number;
}

export interface Selectors {
  total: number;
  type: number;
  class: number;
  id: number;
  pseudoClass: number;
  pseudoElement: number;
  values: string[];
  specificity: Specificity;
  repeated: string[];
}

export interface Specificity {
  max: number;
  average: number;
  graph: number[];
}

export interface Declarations {
  total: number;
  unique: number;
  uniqueToTotalRatio: number;
  properties: Properties;
  resets: Resets;
}

export interface Properties {
  margin: string[];
  padding: string[];
  border: string[];
  background: string[];
  "font-size": string[];
  "font-family": string[];
  color: string[];
  "text-decoration": string[];
  "min-width": string[];
  height: string[];
  font: string[];
  "z-index": string[];
  opacity: string[];
  cursor: string[];
  "font-weight": string[];
  outline: string[];
  position: string[];
  "text-align": string[];
  "text-transform": string[];
  "white-space": string[];
  "-webkit-user-select": string[];
  "background-color": string[];
  content: string[];
  left: string[];
  top: string[];
  width: string[];
  "-webkit-box-shadow": string[];
  "box-shadow": string[];
  display: string[];
  "line-height": string[];
  "-webkit-border-radius": string[];
  "border-radius": string[];
  filter: string[];
  "border-color": string[];
  visibility: string[];
  "vertical-align": string[];
  bottom: string[];
  right: string[];
  "-webkit-box-sizing": string[];
  "box-sizing": string[];
  "border-bottom-color": string[];
  "border-style": string[];
  "border-width": string[];
  "-webkit-animation": string[];
  animation: string[];
  overflow: string[];
  "margin-top": string[];
  "padding-left": string[];
  float: string[];
  fill: string[];
  "background-position": string[];
  "letter-spacing": string[];
  "margin-bottom": string[];
  "text-overflow": string[];
  "-webkit-flex": string[];
  flex: string[];
  "-webkit-transition": string[];
  transition: string[];
  "-webkit-box-pack": string[];
  "-webkit-justify-content": string[];
  "justify-content": string[];
  "-webkit-box-align": string[];
  "-webkit-align-items": string[];
  "align-items": string[];
  "padding-right": string[];
  "margin-left": string[];
  "max-width": string[];
  "text-rendering": string[];
  "-webkit-font-smoothing": string[];
  "outline-offset": string[];
  "margin-right": string[];
  "max-height": string[];
  "padding-bottom": string[];
  "padding-top": string[];
  "-webkit-background-size": string[];
  "background-size": string[];
  "-webkit-transform": string[];
  transform: string[];
  "-webkit-transform-origin": string[];
  "transform-origin": string[];
  "border-top": string[];
  "border-left": string[];
  "border-right": string[];
  "border-top-color": string[];
  "flex-direction": string[];
  "flex-shrink": string[];
  "min-height": string[];
  "flex-grow": string[];
  "object-fit": string[];
  "object-position": string[];
  "border-bottom-left-radius": string[];
  "border-bottom-right-radius": string[];
  "word-wrap": string[];
  "-webkit-tap-highlight-color": string[];
  "flex-wrap": string[];
  "list-style-type": string[];
  "align-self": string[];
  "word-break": string[];
  align: string[];
  "user-select": string[];
  "font-style": string[];
  "tap-highlight-color": string[];
  "border-bottom": string[];
  order: string[];
  "pointer-events": string[];
  "background-image": string[];
  "background-repeat": string[];
}

export interface Resets {
  margin: number;
  padding: number;
  "margin-top": number;
  "padding-left": number;
  "margin-bottom": number;
  "padding-right": number;
  "margin-left": number;
  "padding-bottom": number;
  "padding-top": number;
}

export interface MediaQueries {
  total: number;
  unique: number;
  values: string[];
  contents: Content[];
}

export interface Content {
  value: string;
  rules: Rules;
  selectors: Selectors;
  declarations: Declarations;
}

export interface Css {
  links: string[];
  styles: string[];
  css: string;
  pageTitle: string;
  html: string;
}
