import { RenderCard } from "./components/card";
import { state } from "./state";

const list = document.querySelector('#card-list');

export function render() {
    const list = document.querySelector('#card-list');

    state.vendors.forEach(vendor => {
        list.append(RenderCard(vendor))
    })
}
