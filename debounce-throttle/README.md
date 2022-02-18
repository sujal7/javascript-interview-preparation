# Question and Answers

## Debounce and Throttle

### - Normal Count: It is executed every time the event is triggered.

### - Throttle Count: It is executed only after the specified time interval has passed since the last execution.

### - Debounce Count: It is executed only after the specified time interval has passed since the last execution, and resets the timer if the event is triggered again in between time interval.

## Use Cases

### - Throttling is useful when the user performs continuous actions such as scrolling or resizing.

### - Debouncing is useul when we want to implement search like functionality or autocomplete feature while typing, specially when the search is making API calls on the server.
