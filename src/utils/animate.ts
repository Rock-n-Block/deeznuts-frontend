interface IAnimateProps {
  className: string;
  animClassName: string;
}

function addEventListenerToElements(elems: NodeListOf<Element>, data: IAnimateProps) {
  elems.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top - window.innerHeight + rect.height / 4 < 0) {
      el.setAttribute('data-anim', data.animClassName);
    }
  });
}

export const animate = (data: IAnimateProps) => {
  document.addEventListener('DOMContentLoaded', () => {
    const animElements = document.querySelectorAll(data.className);

    addEventListenerToElements(animElements, data);

    window.addEventListener('scroll', () => {
      addEventListenerToElements(animElements, data);
    });
  });
};
