// flow
export default function mapDisplayNames(ParentComponent) {
  const Component = ParentComponent;
  const keys = Object.keys(Component);
  if (!keys.length) return;
  keys.filter(key => Component[key] instanceof Function).forEach((key) => {
    const parentName = Component.displayName || Component.name;
    const namePrefix = Component[key].name.slice(0, 2);
    const parsedName = namePrefix === 'WT' ? Component[key].name.slice(2) : Component[key].name;
    Component[key].displayName = `${parentName}.${parsedName}`;
    mapDisplayNames(Component[key]);
  });
}
