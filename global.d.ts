declare module '*.module.css';
declare module '*.module.scss';

declare namespace JSX {
  interface IntrinsicElements {
    'swiper-container': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      spaceBetween: number;
      slidesPerView: 'auto' | number;
      init: 'false';
      class: string;
    };
    'swiper-slide': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      class: string;
    };
  }
}
