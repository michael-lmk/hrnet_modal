# Available Scripts

In the project directory, you can run:

# Install

```
npm i hrnet-modal-micka-dev
```

# Props

| Props name | Props Description                  | type         |
| ---------- | ---------------------------------- | ------------ |
| Children   | Content inside component           | JSX Elements |
| isVisible  | Props for display modal type: bool | Bool         |
| style      | Props for styling content modal    | js style     |

# Example

```js
import React, { useState } from "react";
import Modal from "hrnet-modal-micka-dev";

export const modal = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Modal style={{ borderRadius: 20 }} isVisible={isVisible}>
        <p className="modal-msg">
          Lorem Ipsum is simply dummy text of the printing{" "}
        </p>
      </Modal>
      <button onClick={setIsVisible(() => !isVisible)} />
    </div>
  );
};

export default modal;
```
