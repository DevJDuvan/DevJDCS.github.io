'use strict';
import { createRoot } from 'react-dom/client';
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}




const container = document.getElementById('#like_button_container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<LikeButton/>);