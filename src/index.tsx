import { render } from "react-dom";
import ReactCMSComp from "react-cms-components/index";

import { staticComponentMap } from "./config/staticComponent";
import { dynamicImportComponentMap } from "./config/loader";


interface Component {
  dynamic: boolean,
  name: string,
  props: { [key: string]: any},
  element: HTMLElement
}

// Returns an array of objects, parsed by ReactCMSComp, from all DOM nodes with `data-component`
const componentArray = ReactCMSComp.return({
  componentList: document.querySelectorAll("[data-component]"),
});

//Loop the componentArray to render to the page
if (componentArray.length > 0) {
  componentArray.forEach((component: Component) => {
    if (component.dynamic === true) {
      dynamicImportComponentMap[component.name]()
            .then((Comp: any) => {
              render(<Comp {...component.props} />, component.element);
            })
    } else {
      const Comp = staticComponentMap[component.name];
      render(<Comp {...component.props} />, component.element);
    }
  });
}
