/** @jsx h */
import { h } from "preact";

export default function Spinner() {
  return (
    <div>
      <iframe
        src="https://codesandbox.io/embed/spinning-wheel-game-forked-le92ng?fontsize=14&theme=dark&view=preview"
        style="width:100%; height:100vh; border:0; border-radius: 4px; overflow:hidden;"
        title="spinning-wheel-game (forked)"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      >
      </iframe>
    </div>
  );
}
