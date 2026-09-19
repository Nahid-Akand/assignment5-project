# DevStack

DevStack is a simple web app where we can explore different development technologies and make our own technology stack. We can see the details of different technologies and add the ones we like to our stack.

## Technologies I Used

* React
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI
* React Toastify
* JSON

## Features

### 1. Explore Technologies

We can explore different technologies like React, TypeScript, Node.js, MongoDB, Docker, Git and more. We can also see the category, description, rating and difficulty of each technology.

### 2. Build Your Own Stack

We can add technologies to our own stack and remove them if we don't need them. There is also a remove all option to clear the stack.

### 3. Responsive Design

The website is responsive and works on desktop, tablet and mobile screen.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is like HTML inside JavaScript. It makes it easier to write the UI for React components.

### 2. What is the difference between props and state?

Props are used to send data from a parent to a child component. State is used to store data in a component and it can change when the user do something.

### 3. What does the useState hook do, and where did you use it in this project?

useState is used to store and update data in a component. I used it for managing the technologies that the user added to their stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to run something after the component loads or when some data changes. I used it to load the technology data from the JSON file when the app starts.

### 5. Why does every item in a .map() list need a unique key prop?

The key helps React identify each item in the list. It helps React know which item was changed, added or removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.

I used it in the Your Stack section. When there is no technology in the stack, it shows "Your stack is empty". When there are technologies, it shows the selected technologies instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent can send data to the child using props. If the child needs to send something back, the parent can pass a function as a prop and the child can call that function.
