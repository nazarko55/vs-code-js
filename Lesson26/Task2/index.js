const favorites = ['id-6', 'id-7'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [{
    id: 'id-6',
    name: 'food',
    nodes: [{
      id: 'id-7',
      name: "chps'",
      nodes: []
    },],
  },],
}


const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  }
};