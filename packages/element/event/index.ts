export type DisableElementEventType = 'contextmenu' | 'copy' | 'select' | 'paste';

const prevent: { [key in DisableElementEventType]: (event: Event) => void } = {
  contextmenu: (event) => event.preventDefault(),
  copy: (event) => event.preventDefault(),
  select: (event) => event.preventDefault(),
  paste: (event) => event.preventDefault(),
};

const eventMap = new Map<string, (event: Event) => void>();

function getElementEventsKey(
  element: HTMLElement,
  eventType: DisableElementEventType | 'select_mousedown' | 'select_mousemove',
): string {
  return `${element.id}_${eventType}`;
}

export function disableElementEvents<T extends HTMLElement>(element: T, eventTypes: DisableElementEventType[]): void {
  eventTypes.forEach((eventType) => {
    if (eventType === 'select') {
      const preventSelection = (e: MouseEvent) => e.preventDefault();
      eventMap.set(getElementEventsKey(element, 'select_mousedown'), preventSelection);
      eventMap.set(getElementEventsKey(element, 'select_mousemove'), preventSelection);
      element.addEventListener('mousedown', preventSelection);
      element.addEventListener('mousemove', preventSelection);
    } else {
      eventMap.set(getElementEventsKey(element, eventType), prevent[eventType]);
      element.addEventListener(eventType, prevent[eventType]);
    }
  });
}

export function enableElementEvents<T extends HTMLElement>(element: T, eventTypes: DisableElementEventType[]): void {
  eventTypes.forEach((eventType) => {
    if (eventType === 'select') {
      const mousedownHandler = eventMap.get(getElementEventsKey(element, 'select_mousedown'));
      const mousemoveHandler = eventMap.get(getElementEventsKey(element, 'select_mousemove'));
      if (mousedownHandler) {
        element.removeEventListener('mousedown', mousedownHandler);
        eventMap.delete(getElementEventsKey(element, 'select_mousedown'));
      }
      if (mousemoveHandler) {
        element.removeEventListener('mousemove', mousemoveHandler);
        eventMap.delete(getElementEventsKey(element, 'select_mousemove'));
      }
    } else {
      const handler = eventMap.get(getElementEventsKey(element, eventType));
      if (handler) {
        element.removeEventListener(eventType, handler);
        eventMap.delete(getElementEventsKey(element, eventType));
      }
    }
  });
}
