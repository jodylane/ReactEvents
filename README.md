Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly.

When using React you should generally not need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

clickHandler functions lose there scope unless you bind keyword this to the clickHandler.
