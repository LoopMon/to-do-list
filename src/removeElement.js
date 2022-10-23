export function removeElement(element) {
    const parent = element.parentElement
    parent.removeChild(element)
}