# What I learned

### Controlled Components

Controlled components in React are those in which form data is handled by the component’s state.

### Controlled vs. uncontrolled components: Key differences

- Controlled components are predictable because the state of the form elements is handled by the component
- Uncontrolled components are not predictable because, during the lifecycle of a component, the form elements can lose their reference and may be changed/affected by other sources
- Controlled components enable you to effectively employ form validation to your forms. It doesn’t matter what changes the form elements. Their values are safe in our local states, so that’s where we perform our validation
- With controlled components, you are very much in control of your form elements’ values. You can dictate how they go and what can and cannot be inserted

### Event handlers

```
OnFormSubmit = event => {
    ...
}

<form OnSubmit={this.OnFormSubmit}></form>
```

With an event handler, we pass in a callback function to a very specifically named prop. Then whenever that element emits that event, our callback function will be called.

One huge issue that we ran into around these callback functions was the value of this inside them. We can use the arrow function syntax that's going to automatically bind this function and make sure that it always has the appropriate value of this inside of it.

### Communicate from a child up to a parent

So in order to communicate from a child to a parent, we pass a callback (prop) from the parent to the child, and then the child will call that callback identical system to what we are doing with these event handlers

### Using key

Any time we make a list, we always have to define, maybe not have to, but highly, highly recommended to define a key on the root element that we are rendering into that list.

```
return <ImageCard key={image.id} image={image} />;
```

And so if we're working with data that has an ID property, we're almost always going to use the ID of each record as the key property.

### Ref system

Any time that we want to reach into the DOM and interact with some individual element, we're going to create a ref inside the constructor and then we will wire it up to an individual element by passing it as a rough property. Then later on we can access that ref and get a handle on the actual DOM node.

```

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }


  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
  };

  render() {
    return (
      <div>
        <img ref={this.imageRef}/>
      </div>
    );
  }
}
```
