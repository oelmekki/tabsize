let tabsize = 2;

document.body.style.tabSize = tabsize;

// for github
function changeTabSizes() {
  Array.prototype.forEach.call( document.querySelectorAll( '[data-tab-size]' ), function( element ){
    element.style.tabSize = tabsize;
  });
}
changeTabSizes();

// for pjax
let treeObserver = new MutationObserver( changeTabSizes );
treeObserver.observe( document.body, { subtree: true, childList: true });
