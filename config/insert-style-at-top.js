// style-loader >= 3 only accepts a module path for the `insert` option, not an
// inline function. Keeps each injected <style> ordered after the previously
// inserted one, so LESS files land above the app's own stylesheets.
module.exports = function insertAtTop(element) {
  const parent = document.querySelector('head');
  // eslint-disable-next-line no-underscore-dangle
  const lastInsertedElement = window._lastElementInsertedByStyleLoader;

  if (!lastInsertedElement) {
    parent.insertBefore(element, parent.firstChild);
  } else if (lastInsertedElement.nextSibling) {
    parent.insertBefore(element, lastInsertedElement.nextSibling);
  } else {
    parent.appendChild(element);
  }

  // eslint-disable-next-line no-underscore-dangle
  window._lastElementInsertedByStyleLoader = element;
};
